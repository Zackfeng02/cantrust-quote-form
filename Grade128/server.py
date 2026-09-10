"""MapleQuest local server: static files, SQLite learner records, and parent sessions."""

from __future__ import annotations

import argparse
from contextlib import contextmanager
import hashlib
import hmac
import json
import mimetypes
import re
import secrets
import socket
import sqlite3
import threading
import time
import uuid
from datetime import datetime, timezone
from http import HTTPStatus
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DEFAULT_DB = ROOT / ".data" / "maplequest.sqlite3"
PBKDF2_ITERATIONS = 240_000
STUDENT_COOKIE = "mq_student"
PARENT_COOKIE = "mq_parent"
STATIC_FILES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/parent.html": "parent.html",
    "/conversation.html": "conversation.html",
    "/styles.css": "styles.css",
    "/conversation.css": "conversation.css",
    "/tokens.css": "tokens.css",
    "/assessment.js": "assessment.js",
    "/curriculum.js": "curriculum.js",
    "/app.js": "app.js",
    "/parent.js": "parent.js",
    "/conversation.js": "conversation.js",
}
LOGIN_WINDOW_SECONDS = 600
LOGIN_LIMIT = 5
VALID_MODES = {"today", "diagnostic", "progress", "subject", "practice"}
VALID_SUBJECTS = {"math", "language", "science", "social"}
VALID_INTERACTIONS = {"multiple-choice", "numeric-input", "multi-select", "ordering"}
VALID_COGNITIVE_DEMANDS = {"remember", "understand", "apply", "analyze", "evaluate", "create"}
DAY_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")
_login_attempts: dict[tuple[str, str], list[float]] = {}
_login_lock = threading.Lock()


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


@contextmanager
def connect(db_path: Path):
    connection = sqlite3.connect(db_path)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    try:
        yield connection
        connection.commit()
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def init_db(db_path: Path) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    with connect(db_path) as db:
        db.executescript(
            """
            CREATE TABLE IF NOT EXISTS learners (
                id TEXT PRIMARY KEY,
                family_code TEXT NOT NULL UNIQUE,
                name TEXT NOT NULL,
                grade INTEGER NOT NULL,
                province TEXT NOT NULL,
                created TEXT NOT NULL,
                pin_salt TEXT NOT NULL,
                pin_hash TEXT NOT NULL,
                state_json TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS auth_sessions (
                token_hash TEXT PRIMARY KEY,
                learner_id TEXT NOT NULL REFERENCES learners(id) ON DELETE CASCADE,
                role TEXT NOT NULL CHECK(role IN ('student', 'parent')),
                expires_at INTEGER NOT NULL
            );
            CREATE INDEX IF NOT EXISTS auth_sessions_expiry ON auth_sessions(expires_at);
            """
        )


def hash_pin(pin: str, salt: bytes | None = None) -> tuple[str, str]:
    salt = salt or secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", pin.encode("utf-8"), salt, PBKDF2_ITERATIONS)
    return salt.hex(), digest.hex()


def verify_pin(pin: str, salt_hex: str, digest_hex: str) -> bool:
    _, candidate = hash_pin(pin, bytes.fromhex(salt_hex))
    return hmac.compare_digest(candidate, digest_hex)


def validate_profile(payload: dict) -> tuple[str, int, str, str]:
    name = str(payload.get("name", "")).strip()
    grade = payload.get("grade")
    province = str(payload.get("province", "ON"))
    pin = str(payload.get("pin", ""))
    if not name or len(name) > 24 or any(ord(character) < 32 for character in name):
        raise ValueError("First name must contain 1 to 24 characters.")
    if not isinstance(grade, int) or grade < 1 or grade > 8:
        raise ValueError("Grade must be between 1 and 8.")
    if province != "ON":
        raise ValueError("Ontario is the only assessment bank available in this release.")
    if len(pin) != 4 or not pin.isdigit():
        raise ValueError("Parent PIN must contain exactly 4 digits.")
    return name, grade, province, pin


def required_string(record: dict, field: str, maximum: int) -> str:
    value = record.get(field)
    if not isinstance(value, str) or not value or len(value) > maximum:
        raise ValueError(f"Invalid {field} in saved progress.")
    return value


def valid_timestamp(record: dict) -> str:
    value = required_string(record, "date", 40)
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError as error:
        raise ValueError("Invalid date in saved progress.") from error
    if parsed.tzinfo is None:
        raise ValueError("Invalid date in saved progress.")
    return value


def valid_day(record: dict) -> str:
    value = required_string(record, "day", 10)
    if not DAY_PATTERN.fullmatch(value):
        raise ValueError("Invalid day in saved progress.")
    try:
        datetime.strptime(value, "%Y-%m-%d")
    except ValueError as error:
        raise ValueError("Invalid day in saved progress.") from error
    return value


def normalize_attempt(record: object) -> dict:
    if not isinstance(record, dict):
        raise ValueError("Invalid attempt in saved progress.")
    grade = record.get("grade")
    correct = record.get("correct")
    completed = record.get("completed", True)
    assessment_eligible = record.get("assessmentEligible", True)
    mode = record.get("mode")
    subject = record.get("subject")
    if type(grade) is not int or grade < 1 or grade > 8:
        raise ValueError("Invalid grade in saved progress.")
    if type(correct) is not bool or type(completed) is not bool or type(assessment_eligible) is not bool:
        raise ValueError("Invalid answer result in saved progress.")
    if mode not in VALID_MODES or subject not in VALID_SUBJECTS:
        raise ValueError("Invalid assessment category in saved progress.")
    attempt = {
        "date": valid_timestamp(record),
        "day": valid_day(record),
        "questionId": required_string(record, "questionId", 120),
        "grade": grade,
        "subject": subject,
        "outcomeId": required_string(record, "outcomeId", 80),
        "correct": correct,
        "mode": mode,
        "assessmentEligible": assessment_eligible,
        "completed": completed,
    }
    if "sessionId" in record:
        attempt["sessionId"] = required_string(record, "sessionId", 80)
    if "familyId" in record:
        attempt["familyId"] = required_string(record, "familyId", 120)
    if "expectationIds" in record:
        expectation_ids = record["expectationIds"]
        if not isinstance(expectation_ids, list) or not expectation_ids or len(expectation_ids) > 8:
            raise ValueError("Invalid expectation mapping in saved progress.")
        if any(not isinstance(value, str) or not value or len(value) > 120 for value in expectation_ids):
            raise ValueError("Invalid expectation mapping in saved progress.")
        attempt["expectationIds"] = list(dict.fromkeys(expectation_ids))
    if "interactionType" in record:
        if record["interactionType"] not in VALID_INTERACTIONS:
            raise ValueError("Invalid interaction type in saved progress.")
        attempt["interactionType"] = record["interactionType"]
    if "difficulty" in record:
        if type(record["difficulty"]) is not int or record["difficulty"] < 1 or record["difficulty"] > 5:
            raise ValueError("Invalid difficulty in saved progress.")
        attempt["difficulty"] = record["difficulty"]
    if "cognitiveDemand" in record:
        if record["cognitiveDemand"] not in VALID_COGNITIVE_DEMANDS:
            raise ValueError("Invalid cognitive demand in saved progress.")
        attempt["cognitiveDemand"] = record["cognitiveDemand"]
    if "contentVersion" in record:
        attempt["contentVersion"] = required_string(record, "contentVersion", 40)
    return attempt


def normalize_session(record: object) -> dict:
    if not isinstance(record, dict):
        raise ValueError("Invalid session in saved progress.")
    grade = record.get("grade")
    score = record.get("score")
    correct = record.get("correct")
    total = record.get("total")
    completed = record.get("completed")
    subjects = record.get("subjects")
    if type(grade) is not int or grade < 1 or grade > 8:
        raise ValueError("Invalid grade in saved progress.")
    if type(correct) is not int or type(total) is not int or total < 1 or total > 100 or correct < 0 or correct > total:
        raise ValueError("Invalid test totals in saved progress.")
    if type(score) is not int or score != round(correct / total * 100):
        raise ValueError("Invalid test score in saved progress.")
    if type(completed) is not bool or record.get("mode") not in VALID_MODES:
        raise ValueError("Invalid test status in saved progress.")
    if not isinstance(subjects, list) or len(subjects) > len(VALID_SUBJECTS) or any(subject not in VALID_SUBJECTS for subject in subjects):
        raise ValueError("Invalid test subjects in saved progress.")
    return {
        "id": required_string(record, "id", 80),
        "date": valid_timestamp(record),
        "day": valid_day(record),
        "mode": record["mode"],
        "grade": grade,
        "score": score,
        "correct": correct,
        "total": total,
        "completed": completed,
        "subjects": list(dict.fromkeys(subjects)),
    }


def normalize_records(records: object, normalizer, limit: int, *, strict: bool) -> list[dict]:
    if not isinstance(records, list):
        if strict:
            raise ValueError("Saved progress must use arrays.")
        return []
    normalized = []
    for record in records[-limit:]:
        try:
            normalized.append(normalizer(record))
        except ValueError:
            if strict:
                raise
    return normalized


def family_code(db: sqlite3.Connection) -> str:
    alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    for _ in range(20):
        code = "".join(secrets.choice(alphabet) for _ in range(8))
        if not db.execute("SELECT 1 FROM learners WHERE family_code = ?", (code,)).fetchone():
            return code
    raise RuntimeError("Could not allocate a family code.")


def create_learner(db_path: Path, payload: dict) -> tuple[dict, str]:
    name, grade, province, pin = validate_profile(payload)
    legacy = payload.get("legacyState") if isinstance(payload.get("legacyState"), dict) else {}
    created = str(legacy.get("profile", {}).get("created") or utc_now())
    learner_id = uuid.uuid4().hex
    salt, digest = hash_pin(pin)
    with connect(db_path) as db:
        code = family_code(db)
        profile = {
            "name": name,
            "grade": grade,
            "province": province,
            "learnerId": learner_id,
            "familyCode": code,
            "created": created,
        }
        state = {
            "profile": profile,
            "attempts": normalize_records(legacy.get("attempts"), normalize_attempt, 5000, strict=False),
            "sessions": normalize_records(legacy.get("sessions"), normalize_session, 1000, strict=False),
            "version": 2,
        }
        db.execute(
            "INSERT INTO learners VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (learner_id, code, name, grade, province, created, salt, digest, json.dumps(state)),
        )
        token = create_session(db, learner_id, "student", 60 * 60 * 24 * 30)
    return state, token


def token_digest(token: str) -> str:
    return hashlib.sha256(token.encode("ascii")).hexdigest()


def create_session(db: sqlite3.Connection, learner_id: str, role: str, ttl_seconds: int) -> str:
    token = secrets.token_urlsafe(32)
    db.execute(
        "INSERT INTO auth_sessions VALUES (?, ?, ?, ?)",
        (token_digest(token), learner_id, role, int(time.time()) + ttl_seconds),
    )
    return token


def session_learner(db_path: Path, token: str | None, role: str) -> str | None:
    if not token:
        return None
    now = int(time.time())
    with connect(db_path) as db:
        db.execute("DELETE FROM auth_sessions WHERE expires_at <= ?", (now,))
        row = db.execute(
            "SELECT learner_id FROM auth_sessions WHERE token_hash = ? AND role = ? AND expires_at > ?",
            (token_digest(token), role, now),
        ).fetchone()
    return str(row["learner_id"]) if row else None


def load_state(db_path: Path, learner_id: str) -> dict | None:
    with connect(db_path) as db:
        row = db.execute("SELECT state_json FROM learners WHERE id = ?", (learner_id,)).fetchone()
    return json.loads(row["state_json"]) if row else None


def save_state(db_path: Path, learner_id: str, incoming: dict) -> dict:
    attempts = normalize_records(incoming.get("attempts"), normalize_attempt, 5000, strict=True)
    sessions = normalize_records(incoming.get("sessions"), normalize_session, 1000, strict=True)
    with connect(db_path) as db:
        row = db.execute(
            "SELECT id, family_code, name, grade, province, created FROM learners WHERE id = ?",
            (learner_id,),
        ).fetchone()
        if not row:
            raise ValueError("Learner record was not found.")
        profile = {
            "learnerId": row["id"],
            "familyCode": row["family_code"],
            "name": row["name"],
            "grade": row["grade"],
            "province": row["province"],
            "created": row["created"],
        }
        state = {
            "profile": profile,
            "attempts": attempts,
            "sessions": sessions,
            "version": 2,
        }
        db.execute("UPDATE learners SET state_json = ? WHERE id = ?", (json.dumps(state), learner_id))
    return state


def login_allowed(ip: str, code: str) -> bool:
    now = time.time()
    key = (ip, code)
    with _login_lock:
        recent = [stamp for stamp in _login_attempts.get(key, []) if now - stamp < LOGIN_WINDOW_SECONDS]
        if len(recent) >= LOGIN_LIMIT:
            _login_attempts[key] = recent
            return False
        recent.append(now)
        _login_attempts[key] = recent
        return True


def clear_login_attempts(ip: str, code: str) -> None:
    with _login_lock:
        _login_attempts.pop((ip, code), None)


def resolve_host(host: str | None, lan: bool) -> str:
    if host:
        return host
    return "0.0.0.0" if lan else "127.0.0.1"


def lan_ipv4_addresses() -> list[str]:
    try:
        addresses = {
            item[4][0]
            for item in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET, socket.SOCK_STREAM)
        }
    except OSError:
        return []
    return sorted(
        address for address in addresses
        if not address.startswith("127.") and not address.startswith("169.254.")
    )


def access_urls(host: str, port: int) -> list[str]:
    if host == "0.0.0.0":
        return [f"http://127.0.0.1:{port}/", *(f"http://{address}:{port}/" for address in lan_ipv4_addresses())]
    return [f"http://{host}:{port}/"]


class MapleQuestHandler(BaseHTTPRequestHandler):
    server_version = "MapleQuest/2"

    @property
    def db_path(self) -> Path:
        return self.server.db_path  # type: ignore[attr-defined]

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; "
            "img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
        )
        super().end_headers()

    def do_GET(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/health":
            self.json_response({"ok": True})
            return
        if path == "/api/state":
            self.authenticated_state("student")
            return
        if path == "/api/parent/state":
            self.authenticated_state("parent")
            return
        self.static_response(path)

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        if not self.same_origin():
            self.error_response(HTTPStatus.FORBIDDEN, "Origin is not allowed.")
            return
        try:
            payload = self.read_json()
            if path == "/api/learners":
                state, token = create_learner(self.db_path, payload)
                self.json_response({"state": state}, HTTPStatus.CREATED, self.cookie_header(STUDENT_COOKIE, token, 2_592_000))
                return
            if path == "/api/parent/login":
                self.parent_login(payload)
                return
            if path == "/api/student/login":
                self.student_login(payload)
                return
            if path == "/api/parent/logout":
                self.logout(PARENT_COOKIE)
                return
        except (ValueError, json.JSONDecodeError) as error:
            self.error_response(HTTPStatus.BAD_REQUEST, str(error))
            return
        self.error_response(HTTPStatus.NOT_FOUND, "Endpoint not found.")

    def do_PUT(self) -> None:
        if urlparse(self.path).path != "/api/state":
            self.error_response(HTTPStatus.NOT_FOUND, "Endpoint not found.")
            return
        if not self.same_origin():
            self.error_response(HTTPStatus.FORBIDDEN, "Origin is not allowed.")
            return
        learner_id = self.current_learner("student")
        if not learner_id:
            self.error_response(HTTPStatus.UNAUTHORIZED, "Student session required.")
            return
        try:
            state = save_state(self.db_path, learner_id, self.read_json())
            self.json_response({"state": state})
        except (ValueError, json.JSONDecodeError) as error:
            self.error_response(HTTPStatus.BAD_REQUEST, str(error))

    def same_origin(self) -> bool:
        origin = self.headers.get("Origin")
        if not origin:
            return True
        parsed = urlparse(origin)
        return parsed.scheme in {"http", "https"} and parsed.netloc == self.headers.get("Host")

    def cookies(self) -> SimpleCookie:
        cookie = SimpleCookie()
        cookie.load(self.headers.get("Cookie", ""))
        return cookie

    def current_learner(self, role: str) -> str | None:
        name = STUDENT_COOKIE if role == "student" else PARENT_COOKIE
        morsel = self.cookies().get(name)
        return session_learner(self.db_path, morsel.value if morsel else None, role)

    def authenticated_state(self, role: str) -> None:
        learner_id = self.current_learner(role)
        if not learner_id:
            self.error_response(HTTPStatus.UNAUTHORIZED, f"{role.title()} session required.")
            return
        state = load_state(self.db_path, learner_id)
        if not state:
            self.error_response(HTTPStatus.NOT_FOUND, "Learner record was not found.")
            return
        self.json_response({"state": state})

    def parent_login(self, payload: dict) -> None:
        self.credential_login(payload, "parent", PARENT_COOKIE, 3600)

    def student_login(self, payload: dict) -> None:
        self.credential_login(payload, "student", STUDENT_COOKIE, 60 * 60 * 24 * 30)

    def credential_login(self, payload: dict, role: str, cookie_name: str, ttl_seconds: int) -> None:
        code = str(payload.get("familyCode", "")).replace("-", "").replace(" ", "").upper()
        pin = str(payload.get("pin", ""))
        ip = self.client_address[0]
        if not login_allowed(ip, code):
            self.error_response(HTTPStatus.TOO_MANY_REQUESTS, "Too many attempts. Try again in 10 minutes.")
            return
        with connect(self.db_path) as db:
            row = db.execute(
                "SELECT id, pin_salt, pin_hash, state_json FROM learners WHERE family_code = ?",
                (code,),
            ).fetchone()
            if not row or not verify_pin(pin, row["pin_salt"], row["pin_hash"]):
                self.error_response(HTTPStatus.UNAUTHORIZED, "Family code or PIN did not match.")
                return
            clear_login_attempts(ip, code)
            token = create_session(db, row["id"], role, ttl_seconds)
            state = json.loads(row["state_json"])
        self.json_response({"state": state}, headers=self.cookie_header(cookie_name, token, ttl_seconds))

    def logout(self, cookie_name: str) -> None:
        morsel = self.cookies().get(cookie_name)
        if morsel:
            with connect(self.db_path) as db:
                db.execute("DELETE FROM auth_sessions WHERE token_hash = ?", (token_digest(morsel.value),))
        self.json_response({"ok": True}, headers=f"{cookie_name}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0")

    def cookie_header(self, name: str, value: str, max_age: int) -> str:
        return f"{name}={value}; HttpOnly; SameSite=Strict; Path=/; Max-Age={max_age}"

    def read_json(self) -> dict:
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError as error:
            raise ValueError("Invalid content length.") from error
        if length <= 0 or length > 1_000_000:
            raise ValueError("Request body is empty or too large.")
        data = json.loads(self.rfile.read(length).decode("utf-8"))
        if not isinstance(data, dict):
            raise ValueError("JSON body must be an object.")
        return data

    def json_response(self, payload: dict, status: int = HTTPStatus.OK, headers: str | None = None) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        if headers:
            self.send_header("Set-Cookie", headers)
        self.end_headers()
        self.wfile.write(body)

    def error_response(self, status: int, message: str) -> None:
        self.json_response({"error": message}, status)

    def static_response(self, path: str) -> None:
        filename = STATIC_FILES.get(path)
        if not filename:
            self.error_response(HTTPStatus.NOT_FOUND, "File not found.")
            return
        file_path = ROOT / filename
        body = file_path.read_bytes()
        content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", f"{content_type}; charset=utf-8" if content_type.startswith("text/") else content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format_string: str, *args) -> None:
        print(f"{self.address_string()} - {format_string % args}")


class MapleQuestServer(ThreadingHTTPServer):
    def __init__(self, address: tuple[str, int], db_path: Path):
        self.db_path = db_path
        super().__init__(address, MapleQuestHandler)


def main() -> None:
    parser = argparse.ArgumentParser(description="Run MapleQuest locally.")
    network = parser.add_mutually_exclusive_group()
    network.add_argument("--host", help="Bind to a specific IPv4 address (default: 127.0.0.1).")
    network.add_argument("--lan", action="store_true", help="Bind to all IPv4 interfaces for trusted LAN access.")
    parser.add_argument("--port", default=8000, type=int)
    parser.add_argument("--database", default=str(DEFAULT_DB))
    args = parser.parse_args()
    host = resolve_host(args.host, args.lan)
    db_path = Path(args.database).resolve()
    init_db(db_path)
    server = MapleQuestServer((host, args.port), db_path)
    if host == "0.0.0.0":
        print("LAN mode enabled. Use only on a trusted local network.")
    print("MapleQuest available at:")
    urls = access_urls(host, args.port)
    for url in urls:
        print(f"  {url}")
    if host == "0.0.0.0" and len(urls) == 1:
        print("  LAN address not detected; use this computer's IPv4 address with the selected port.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
