# MapleQuest

MapleQuest is a dependency-light Grade 1–8 learning prototype for Canadian families. It provides:

- a first-use diagnostic check-in;
- a deterministic 10-question “Test for Today”;
- a rotating 5-question progress check that updates parent analytics;
- a three-step daily study path based on the learner's weakest evidence;
- Grade 1–8 study and revision paths for Mathematics, Language, Science & Technology, and Social Studies;
- server-backed progress history;
- a family-code and PIN-gated parent analytics page showing sampled expectations versus current evidence.

## Run locally

From this folder:

```powershell
python server.py
```

Then open `http://localhost:8000/`.

### Use on your local network

To let phones, tablets, or other computers on the same trusted network open MapleQuest:

```powershell
npm run start:lan
```

The server prints the available addresses. Open one of the non-`127.0.0.1` URLs, such as `http://192.168.1.20:8000/`, on the other device. If Windows asks, allow Python through the firewall only on private networks. You can also bind a specific adapter address with `python server.py --host 192.168.1.20`.

LAN mode exposes MapleQuest to other devices on that network. Use it only on a trusted home or school network; it is not an internet deployment mode.

No third-party package install or build step is required. Learner records are stored in SQLite under `.data/maplequest.sqlite3`. On first launch, an older `maplequest.v1` browser record is migrated to SQLite and the plaintext browser copy is removed.

Run the regression suites with:

```powershell
npm test
npm run test:server
npm run check
```

## Curriculum scope

MapleQuest targets Ontario only. Learner profiles are assigned to Ontario automatically, and every learning outcome and assessment uses the Ontario Grade 1–8 curriculum map.

The app contains concise, original interpretations of 12 mapped expectation groups in each grade. It is not the complete Ontario program, is not an official assessment, and should not replace teacher judgement.

Every grade contains 1,800 question prompts: 1,200 parameterized Mathematics problems plus 200 Language, 200 Science, and 200 Social Studies/History and Geography practice questions. That is 14,400 globally unique prompts across Grades 1–8. The generated Mathematics bank uses short, age-appropriate situations so learners must decide whether to add, subtract, multiply, divide, compare, measure, or model before calculating. From Grade 3 onward, some mathematics checks ask learners to type the calculated number instead of recognizing it among choices; the first check-in remains multiple-choice.

The 4,800 non-math prompts expand 288 curated knowledge checks into direct, supported-clue, and misconception-check formats; they are practice variations, not 4,800 separate curriculum concepts. Supported-clue versions are study-only. Tests track 48 task families per non-math subject/grade by separating direct checks from the three specific distractor misconceptions around each anchor. A correction prompt asks the learner to evaluate a suggested choice without revealing whether it is wrong. Each non-math subject remains distributed 67/67/66 across its three sampled outcomes.

Mathematics uses difficulty weights from 1 (warm-up) to 5 (stretch); non-math direct and misconception checks use weights 1 to 4. A learner starts at weight 1, and later sessions start from demonstrated performance in that subject/outcome. Correct and incorrect answers adjust only the next question for the same outcome, rather than changing an unrelated subject. Selection prioritizes the least-used task family before distance from the target difficulty, preventing one easy wrapper from repeating indefinitely. Subject tests remain a child-sized 12 questions.

Mastery evidence is deduplicated by task family. “Consistent” requires at least three distinct families, at least two days, and at least 75% accuracy; repeating one reworded item cannot create mastery. Automated 30-day simulations require at least 120 distinct families on both all-correct and all-incorrect paths. Run the content gate with:

```powershell
npm run audit:content
```

Primary sources:

- [Ontario — Mathematics curriculum for Grades 1–8](https://www.ontario.ca/page/math-curriculum-grades-1-8)
- [Ontario — Language, Grades 1–8](https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-language)
- [Ontario — Science and Technology, Grades 1–8](https://www.dcp.edu.gov.on.ca/en/curriculum/science-technology)
- [Ontario — Social Studies, Grades 1–6; History and Geography, Grades 7–8](https://www.dcp.edu.gov.on.ca/resources/en/subjects/sshg-cws)

## Security and privacy boundary

The local server hashes parent PINs with PBKDF2, stores records in SQLite, rate-limits parent login attempts, and uses HttpOnly same-site session cookies. Parents sign in with the family access code shown on the learner’s mission card plus the PIN chosen during setup.

This is appropriate for local or carefully managed self-hosting. A public production release still needs HTTPS, deployment-specific secrets and backups, a consent and deletion workflow, guardian identity verification, audit logging, and a formal review against Ontario and Canadian children’s privacy requirements.

## Run with Docker (Windows)

Start Docker Desktop, then double-click `docker-start.bat`. Open http://localhost:8000/.
Use `docker-stop.bat` to stop intentionally. Manage this application with Docker,
which is now excluded from service-monitor (both the script and rebuilt executable).

```powershell
docker compose up -d --build --wait
docker compose ps
docker compose logs --tail 100 -f
docker compose stop
```

The default port mapping preserves the previous trusted-LAN mode on port 8000.
For localhost-only access, set `GRADE128_BIND_IP=127.0.0.1` in a local `.env`
file before recreating the container. Do not configure router port forwarding.
The application listens on all interfaces inside the container.

The existing `.data/maplequest.sqlite3` remains on the host, mounted at `/data`.
Rebuilding/removing the container does not remove this directory. Back it up separately.
Do not run the native Python server and container against this database simultaneously.
The image contains only server code and frontend assets, not learner data or backups.

The container restarts after process exit and Docker engine restart unless manually
stopped. Enable Docker Desktop's start-at-sign-in setting for login-time recovery.
A healthcheck reports HTTP health; it does not itself restart an unhealthy process.
Computer sleep/shutdown still interrupts availability.

After source changes, rerun `docker-start.bat` to rebuild. To roll back to native
Python, first run `docker compose down`, then `python server.py --lan`;
both use the same host database. Do not restore an old backup unless intentionally
discarding newer changes. Pre-migration snapshots are under `.data/backups/`.
