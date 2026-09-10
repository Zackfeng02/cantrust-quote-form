import unittest
import uuid
from pathlib import Path
from unittest.mock import patch

import server


class ServerStorageTests(unittest.TestCase):
    def setUp(self):
        self.db_path = Path(__file__).parent / f".maplequest-test-{uuid.uuid4().hex}.sqlite3"
        server.init_db(self.db_path)

    def tearDown(self):
        for suffix in ("", "-wal", "-shm"):
            candidate = Path(f"{self.db_path}{suffix}")
            if candidate.exists():
                candidate.unlink()

    def test_pin_is_hashed_and_state_excludes_pin(self):
        state, token = server.create_learner(self.db_path, {
            "name": "Maya",
            "grade": 2,
            "province": "ON",
            "pin": "2468",
        })
        self.assertNotIn("pin", state["profile"])
        self.assertEqual(server.session_learner(self.db_path, token, "student"), state["profile"]["learnerId"])
        with server.connect(self.db_path) as db:
            row = db.execute("SELECT pin_salt, pin_hash FROM learners").fetchone()
        self.assertNotEqual(row["pin_hash"], "2468")
        self.assertTrue(server.verify_pin("2468", row["pin_salt"], row["pin_hash"]))
        self.assertFalse(server.verify_pin("0000", row["pin_salt"], row["pin_hash"]))

    def test_legacy_import_removes_plaintext_pin(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Maya",
            "grade": 2,
            "province": "ON",
            "pin": "2468",
            "legacyState": {
                "profile": {"name": "Maya", "pin": "2468", "created": "2026-08-09T00:00:00Z"},
                "attempts": [{
                    "date": "2026-08-09T12:00:00Z",
                    "day": "2026-08-09",
                    "questionId": "ON-G2-math-N1-0",
                    "grade": 2,
                    "subject": "math",
                    "outcomeId": "N1",
                    "correct": True,
                    "mode": "diagnostic",
                    "completed": True,
                }],
                "sessions": [],
            },
        })
        self.assertNotIn("pin", state["profile"])
        self.assertEqual(len(state["attempts"]), 1)
        self.assertTrue(state["attempts"][0]["correct"])

    def test_saved_profile_is_server_owned(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Maya", "grade": 2, "province": "ON", "pin": "2468"
        })
        incoming = {**state, "profile": {"name": "Attacker"}, "attempts": [], "sessions": []}
        saved = server.save_state(self.db_path, state["profile"]["learnerId"], incoming)
        self.assertEqual(saved["profile"]["name"], "Maya")

    def test_unmapped_provinces_cannot_receive_ontario_assessments(self):
        with self.assertRaisesRegex(ValueError, "Ontario is the only assessment bank"):
            server.create_learner(self.db_path, {
                "name": "Ari", "grade": 2, "province": "BC", "pin": "1357"
            })

    def test_ontario_is_implicit_for_new_learners(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Ari", "grade": 2, "pin": "1357"
        })
        self.assertEqual(state["profile"]["province"], "ON")

    def test_saved_state_rejects_untrusted_session_fields(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Maya", "grade": 2, "province": "ON", "pin": "2468"
        })
        state["sessions"] = [{
            "id": "test-session",
            "date": "2026-08-09T12:00:00Z",
            "day": "2026-08-09",
            "mode": "practice",
            "grade": 2,
            "score": '<img src=x onerror="alert(1)">',
            "correct": 1,
            "total": 1,
            "completed": True,
            "subjects": ["math"],
        }]
        with self.assertRaisesRegex(ValueError, "Invalid test score"):
            server.save_state(self.db_path, state["profile"]["learnerId"], state)

    def test_progress_check_records_are_accepted(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Maya", "grade": 2, "province": "ON", "pin": "2468"
        })
        state["attempts"] = [{
            "date": "2026-08-09T12:00:00Z",
            "day": "2026-08-09",
            "questionId": "ON-G2-math-N1-0",
            "familyId": "MQ-ON-G2-MATH-N1-anchor-1",
            "expectationIds": ["MQ-ON-G2-MATH-N1"],
            "grade": 2,
            "subject": "math",
            "outcomeId": "N1",
            "interactionType": "multiple-choice",
            "difficulty": 2,
            "cognitiveDemand": "apply",
            "contentVersion": "2026.08-on1",
            "correct": True,
            "mode": "progress",
            "completed": True,
            "sessionId": "progress-session",
        }]
        state["sessions"] = [{
            "id": "progress-session",
            "date": "2026-08-09T12:00:00Z",
            "day": "2026-08-09",
            "mode": "progress",
            "grade": 2,
            "score": 20,
            "correct": 1,
            "total": 5,
            "completed": True,
            "subjects": ["math", "language", "science", "social"],
        }]

        saved = server.save_state(self.db_path, state["profile"]["learnerId"], state)

        self.assertEqual(saved["attempts"][0]["mode"], "progress")
        self.assertEqual(saved["attempts"][0]["familyId"], "MQ-ON-G2-MATH-N1-anchor-1")
        self.assertEqual(saved["attempts"][0]["expectationIds"], ["MQ-ON-G2-MATH-N1"])
        self.assertEqual(saved["attempts"][0]["difficulty"], 2)
        self.assertEqual(saved["sessions"][0]["mode"], "progress")

    def test_study_only_attempts_keep_their_evidence_flag(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Maya", "grade": 2, "province": "ON", "pin": "2468"
        })
        state["attempts"] = [{
            "date": "2026-08-09T12:00:00Z",
            "day": "2026-08-09",
            "questionId": "ON-G2-science-L1-0-v-5",
            "grade": 2,
            "subject": "science",
            "outcomeId": "L1",
            "correct": True,
            "mode": "practice",
            "completed": True,
            "assessmentEligible": False,
        }]

        saved = server.save_state(self.db_path, state["profile"]["learnerId"], state)

        self.assertFalse(saved["attempts"][0]["assessmentEligible"])

    def test_legacy_import_discards_malformed_records(self):
        state, _ = server.create_learner(self.db_path, {
            "name": "Maya",
            "grade": 2,
            "province": "ON",
            "pin": "2468",
            "legacyState": {
                "profile": {"created": "2026-08-09T00:00:00Z"},
                "attempts": [{"correct": True, "subject": '<img src=x onerror="alert(1)">'}],
                "sessions": [{"score": '<img src=x onerror="alert(1)">'}],
            },
        })
        self.assertEqual(state["attempts"], [])
        self.assertEqual(state["sessions"], [])

    def test_lan_mode_binds_all_ipv4_interfaces(self):
        self.assertEqual(server.resolve_host(None, False), "127.0.0.1")
        self.assertEqual(server.resolve_host(None, True), "0.0.0.0")
        self.assertEqual(server.resolve_host("192.168.1.20", False), "192.168.1.20")

    @patch("server.lan_ipv4_addresses", return_value=["192.168.1.20", "10.0.0.5"])
    def test_lan_urls_include_loopback_and_detected_addresses(self, _addresses):
        self.assertEqual(server.access_urls("0.0.0.0", 8000), [
            "http://127.0.0.1:8000/",
            "http://192.168.1.20:8000/",
            "http://10.0.0.5:8000/",
        ])


if __name__ == "__main__":
    unittest.main()
