const test = require("node:test");
const assert = require("node:assert/strict");

global.window = {};
require("../curriculum.js");
const assessment = require("../assessment.js");

const legacyOutcomeCodes = {
  1: { math: ["N1", "N2", "S1"], language: ["R1", "R2", "W1"], science: ["L1", "M1", "E1"], social: ["A1", "B1", "C1"] },
  2: { math: ["N1", "N2", "D1"], language: ["R1", "R2", "W1"], science: ["L1", "M1", "E1"], social: ["A1", "B1", "C1"] },
  3: { math: ["N1", "N2", "F1"], language: ["R1", "R2", "W1"], science: ["L1", "F1", "E1"], social: ["A1", "B1", "C1"] },
  4: { math: ["N1", "N2", "P1"], language: ["R1", "R2", "W1"], science: ["L1", "M1", "E1"], social: ["A1", "B1", "C1"] },
  5: { math: ["N1", "N2", "D1"], language: ["R1", "R2", "W1"], science: ["L1", "M1", "E1"], social: ["A1", "B1", "C1"] },
  6: { math: ["N1", "N2", "A1"], language: ["R1", "R2", "W1"], science: ["L1", "F1", "E1"], social: ["A1", "B1", "C1"] },
  7: { math: ["N1", "A1", "D1"], language: ["R1", "R2", "W1"], science: ["L1", "M1", "F1"], social: ["H1", "G1", "G2"] },
  8: { math: ["N1", "A1", "D1"], language: ["R1", "R2", "W1"], science: ["L1", "F1", "E1"], social: ["H1", "G1", "G2"] }
};

test("curriculum has eight grades and four subjects per grade", () => {
  const data = window.MapleQuestData;
  assert.deepEqual(data.jurisdiction, {
    code: "ON",
    name: "Ontario",
    frameworkNote: "Representative outcomes are mapped to current Ontario Grade 1–8 curriculum documents."
  });
  assert.equal(data.provinceNames, undefined);
  assert.equal(data.frameworkNote, undefined);
  assert.equal(Object.keys(data.curriculum).length, 8);
  for (let grade = 1; grade <= 8; grade += 1) {
    assert.deepEqual(Object.keys(data.curriculum[grade]), ["math", "language", "science", "social"]);
  }
});

test("the daily-use bank has 14,400 unique, well-formed questions", () => {
  const data = window.MapleQuestData;
  const questions = Array.from({ length: 8 }, (_, index) => data.allQuestions(index + 1)).flat();
  assert.equal(questions.length, 14_400);
  assert.equal(new Set(questions.map(question => question.id)).size, 14_400);
  assert.equal(new Set(questions.map(question => question.prompt)).size, 14_400);
  for (const question of questions) {
    assert.equal(question.choices.length, 4, question.id);
    assert.ok(Number.isInteger(question.answer), question.id);
    assert.ok(question.answer >= 0 && question.answer < question.choices.length, question.id);
    assert.equal(new Set(question.choices).size, 4, `${question.id} has duplicate choices`);
    assert.ok(question.prompt.length <= 220, `${question.id} has an overly long prompt`);
    assert.ok(question.choices.every(choice => choice.length <= 90), `${question.id} has an overly long choice`);
    assert.ok(question.explanation.length > 0, `${question.id} needs an explanation`);
    assert.ok(Number.isInteger(question.weight) && question.weight >= 1 && question.weight <= 5, `${question.id} needs a 1-5 difficulty weight`);
    assert.doesNotMatch(question.explanation, /\b(first|second|third|fourth) (choice|closing|answer|option)\b/i, `${question.id} has a position-dependent explanation`);
    assert.doesNotMatch(question.prompt, /Check [A-Z][a-z]+'s work/, `${question.id} refers to work it does not show`);
  }
});

test("Ontario outcomes and questions expose auditable content metadata", () => {
  const data = window.MapleQuestData;
  assert.equal(data.contentVersion, "2026.08-on1");
  for (let grade = 1; grade <= 8; grade += 1) {
    for (const [subject, outcomes] of Object.entries(data.curriculum[grade])) {
      for (const outcome of outcomes) {
        assert.deepEqual(outcome.expectationIds, [`MQ-ON-G${grade}-${subject.toUpperCase()}-${outcome.code}`]);
        assert.ok(outcome.strandIds.length > 0, `${grade} ${subject} ${outcome.code} needs an Ontario strand`);
        assert.match(outcome.source, /^Ontario /);
        assert.equal(outcome.mappingType, "MapleQuest interpretation");
      }
    }

    for (const question of data.allQuestions(grade)) {
      const outcome = data.curriculum[grade][question.subject].find(item => item.code === question.outcomeId);
      assert.ok(question.familyId, `${question.id} needs a familyId`);
      assert.deepEqual(question.expectationIds, outcome.expectationIds, `${question.id} has the wrong expectation mapping`);
      assert.ok(["multiple-choice", "numeric-input"].includes(question.interactionType), question.id);
      if (question.interactionType === "numeric-input") assert.ok(question.expectedAnswer, `${question.id} needs a typed answer key`);
      assert.ok(["remember", "understand", "apply", "evaluate"].includes(question.cognitiveDemand), question.id);
      assert.ok(["none", "prompted", "guided"].includes(question.supportLevel), question.id);
      assert.ok(Array.isArray(question.misconceptionCodes), question.id);
      assert.equal(question.difficulty, question.weight, question.id);
      assert.ok(question.difficultySource, question.id);
      assert.ok(question.sourceKind, question.id);
      assert.equal(question.contentVersion, data.contentVersion, question.id);
    }
  }
});

test("practice variants distinguish direct tasks from specific misconception checks", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    for (const subject of ["language", "science", "social"]) {
      for (const outcome of data.curriculum[grade][subject]) {
        const questions = data.allQuestions(grade).filter(question => question.subject === subject && question.outcomeId === outcome.code);
        assert.equal(new Set(questions.map(question => question.familyId)).size, 16, `Grade ${grade} ${subject} ${outcome.code}`);
        assert.doesNotMatch(
          questions.filter(question => question.assessmentEligible !== false).map(question => question.prompt).join(" "),
          /not correct|correct the answer/i,
          `Grade ${grade} ${subject} ${outcome.code} gives away error-analysis answers`
        );
      }
    }
  }
});

test("every grade has enough tracked task families for daily rotation", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    const assessable = data.allQuestions(grade).filter(question => question.assessmentEligible !== false);
    assert.ok(new Set(assessable.filter(question => question.subject === "math").map(question => question.familyId)).size >= 18, `Grade ${grade} math family depth`);
    for (const subject of ["language", "science", "social"]) {
      assert.equal(new Set(assessable.filter(question => question.subject === subject).map(question => question.familyId)).size, 48, `Grade ${grade} ${subject} family depth`);
    }
    const typed = assessable.filter(question => question.interactionType === "numeric-input");
    if (grade <= 2) assert.equal(typed.length, 0, `Grade ${grade} keeps typed calculation out of early-primary checks`);
    else assert.ok(typed.length >= 200, `Grade ${grade} needs typed calculation practice`);
  }
});

test("thirty daily tests rotate through at least 120 task families", () => {
  const data = window.MapleQuestData;
  for (const grade of [2, 7]) {
    for (const correct of [true, false]) {
      const state = { attempts: [], sessions: [] };
      const families = [];
      for (let day = 1; day <= 30; day += 1) {
        const selected = assessment.selectModeOutcomeQuestions(
          state,
          data.allQuestions(grade),
          "today",
          question => assessment.startingQuestionWeight(state, question)
        ).slice(0, 10);
        for (const question of selected) {
          families.push(question.familyId);
          const date = `2026-07-${String(day).padStart(2, "0")}`;
          state.attempts.push({
            questionId: question.id,
            familyId: question.familyId,
            grade,
            subject: question.subject,
            outcomeId: question.outcomeId,
            correct,
            completed: true,
            day: date,
            date: `${date}T12:00:00Z`,
            difficulty: question.weight
          });
        }
        state.sessions.push({ mode: "today", completed: true });
      }
      assert.ok(new Set(families).size >= 120, `Grade ${grade} ${correct ? "correct" : "incorrect"} path repeats too much`);
    }
  }
});

test("every grade has 1,200 math questions and 200 questions per other subject", () => {
  const data = window.MapleQuestData;
  const promptWordLimits = { 1: 34, 2: 40, 3: 44, 4: 50, 5: 54, 6: 58, 7: 62, 8: 66 };
  for (let grade = 1; grade <= 8; grade += 1) {
    const questions = data.allQuestions(grade);
    assert.equal(questions.length, 1_800, `Grade ${grade}`);
    for (const subject of Object.keys(data.subjects)) {
      for (const [outcomeIndex, outcome] of data.curriculum[grade][subject].entries()) {
        const expected = subject === "math" ? 400 : outcomeIndex < 2 ? 67 : 66;
        assert.equal(
          questions.filter(question => question.subject === subject && question.outcomeId === outcome.code).length,
          expected,
          `Grade ${grade} ${subject} ${outcome.code}`
        );
      }
    }
    assert.equal(new Set(questions.map(question => question.prompt)).size, questions.length, `Grade ${grade} has duplicate prompts`);
    for (const question of questions) {
      assert.ok(question.prompt.split(/\s+/).length <= promptWordLimits[grade], `${question.id} is too wordy for Grade ${grade}`);
    }
    const answerCounts = [0, 0, 0, 0];
    questions.forEach(question => { answerCounts[question.answer] += 1; });
    assert.deepEqual(answerCounts, [450, 450, 450, 450], `Grade ${grade} answer positions are unbalanced`);
  }
});

test("every non-math subject has exactly 200 questions per grade", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    for (const subject of ["language", "science", "social"]) {
      assert.equal(data.allQuestions(grade).filter(question => question.subject === subject).length, 200, `Grade ${grade} ${subject}`);
    }
  }
});

test("every generated non-math variant retains its original question context", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    const questions = data.allQuestions(grade);
    for (const subject of ["language", "science", "social"]) {
      for (const outcome of data.curriculum[grade][subject]) {
        const outcomeQuestions = questions.filter(question => question.subject === subject && question.outcomeId === outcome.code);
        const anchors = outcomeQuestions.filter(question => !question.id.includes("-v-"));
        const variants = outcomeQuestions.filter(question => question.id.includes("-v-"));
        for (const variant of variants) {
          assert.ok(anchors.some(anchor => variant.prompt.includes(anchor.prompt)), `${variant.id} lost its question context`);
        }
      }
    }
  }
});

test("all 9,888 pre-expansion question ids remain stable", () => {
  const data = window.MapleQuestData;
  let checked = 0;
  for (const [grade, subjects] of Object.entries(legacyOutcomeCodes)) {
    const ids = new Set(data.allQuestions(Number(grade)).map(question => question.id));
    for (const [subject, codes] of Object.entries(subjects)) {
      codes.forEach((code, index) => {
        const prefix = `ON-G${grade}-${subject}-${code}-${index}`;
        if (subject === "math") {
          const anchorCount = Number(grade) <= 3 ? 3 : 1;
          for (let probeIndex = 0; probeIndex < anchorCount; probeIndex += 1) {
            assert.ok(ids.has(`${prefix}${probeIndex ? `-${probeIndex}` : ""}`));
            checked += 1;
          }
          for (let generated = 1; generated <= 400 - anchorCount; generated += 1) {
            assert.ok(ids.has(`${prefix}-g-${generated}`));
            checked += 1;
          }
        } else {
          for (let probeIndex = 0; probeIndex < 4; probeIndex += 1) {
            assert.ok(ids.has(`${prefix}${probeIndex ? `-${probeIndex}` : ""}`));
            checked += 1;
          }
        }
      });
    }
  }
  assert.equal(checked, 9_888);
});

test("large grade banks are cached after their first construction", () => {
  const data = window.MapleQuestData;
  const first = data.allQuestions(4);
  assert.strictEqual(data.allQuestions(4), first);
});

test("primary number distractors stay inside the taught ranges", () => {
  const data = window.MapleQuestData;
  const ranges = [
    { grade: 1, outcomeId: "N1", minimum: 1, maximum: 50 },
    { grade: 1, outcomeId: "N2", minimum: 0, maximum: 20 },
    { grade: 2, outcomeId: "N1", minimum: 1, maximum: 200 }
  ];
  for (const range of ranges) {
    const questions = data.allQuestions(range.grade).filter(question =>
      question.subject === "math" && question.outcomeId === range.outcomeId && question.id.includes("-g-")
    );
    for (const question of questions) {
      assert.ok(question.choices.every(choice => Number(choice) >= range.minimum && Number(choice) <= range.maximum), question.id);
    }
  }
});

test("Grade 1 measurement variants use truthful singular and equal-length wording", () => {
  const questions = window.MapleQuestData.allQuestions(1).filter(question =>
    question.subject === "math" && question.outcomeId === "S1" && question.id.includes("-g-")
  );
  for (const question of questions) {
    assert.doesNotMatch(question.prompt, /\b1 cubes\b/, question.id);
    const lengths = question.prompt.match(/Two strips are (\d+) cubes? and (\d+) cubes?/);
    if (lengths && lengths[1] === lengths[2]) {
      assert.match(question.explanation, /same length/, question.id);
      assert.ok(!question.explanation.includes("longer strip"), question.id);
    }
  }
});

test("every outcome offers assessable starting and stretch questions", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    for (const subject of Object.keys(data.subjects)) {
      for (const outcome of data.curriculum[grade][subject]) {
        const weights = new Set(data.allQuestions(grade)
          .filter(question => question.subject === subject && question.outcomeId === outcome.code && question.assessmentEligible !== false)
          .map(question => question.weight));
        assert.ok(weights.has(1), `Grade ${grade} ${subject} ${outcome.code} needs an easy question`);
        assert.ok(weights.has(subject === "math" ? 5 : 4), `Grade ${grade} ${subject} ${outcome.code} needs a stretch question`);
      }
    }
  }
});

test("study scaffolds never leak into assessment content or fake difficulty changes", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    const nonMath = data.allQuestions(grade).filter(question => question.subject !== "math");
    const study = nonMath.filter(question => question.assessmentEligible === false);
    assert.ok(study.length > 0, `Grade ${grade} needs study scaffolds`);
    assert.ok(study.every(question => question.context === "study-scaffold"), `Grade ${grade} study metadata`);

    const groups = new Map();
    for (const question of nonMath.filter(question => question.assessmentEligible !== false)) {
      const key = question.familyId;
      if (!groups.has(key)) groups.set(key, new Set());
      groups.get(key).add(question.weight);
    }
    for (const [key, weights] of groups) {
      assert.equal(weights.size, 1, `${key} appears at multiple assessment difficulties`);
    }
  }
});

test("real assessment paths exclude study scaffolds at every adaptive weight", () => {
  const data = window.MapleQuestData;
  const state = { attempts: [], sessions: [] };
  for (let grade = 1; grade <= 8; grade += 1) {
    const questions = data.allQuestions(grade);
    for (let weight = 1; weight <= 5; weight += 1) {
      const selected = [
        ...assessment.selectModeOutcomeQuestions(state, questions, "diagnostic", weight),
        ...assessment.selectProgressQuestions(questions, Object.keys(data.subjects), 0, state, weight),
        ...Object.keys(data.subjects).flatMap(subject => assessment.selectSubjectQuestions(
          state,
          questions.filter(question => question.subject === subject),
          12,
          weight
        ))
      ];
      assert.ok(selected.every(question => question.assessmentEligible !== false), `Grade ${grade} weight ${weight}`);
    }
  }
});

test("current Social Studies revisions are represented in the sampled bank", () => {
  const data = window.MapleQuestData;
  const text = question => [question.prompt, question.explanation, ...question.choices].join(" ");
  for (const grade of [1, 2, 3]) {
    const social = data.allQuestions(grade).filter(question => question.subject === "social");
    assert.ok(social.some(question => /Indigenous|First Nations|Métis|Inuit/i.test(text(question))), `Grade ${grade} needs Indigenous-focused learning`);
  }
  assert.ok(data.allQuestions(6).some(question => question.subject === "social" && /Holocaust|antisemitism/i.test(text(question))), "Grade 6 needs Holocaust learning");
  for (const grade of [7, 8]) {
    assert.ok(data.allQuestions(grade).some(question => question.subject === "social" && /Black (?:history|people|communities|Canadians)/i.test(text(question))), `Grade ${grade} needs Black Canadian history`);
  }
});

test("generated wording and units are grammatically and conventionally formatted", () => {
  const questions = Array.from({ length: 8 }, (_, index) => window.MapleQuestData.allQuestions(index + 1)).flat();
  for (const question of questions) {
    const fields = [question.prompt, question.explanation, ...question.choices];
    assert.ok(fields.every(field => !/\$\d+\.\d(?!\d)/.test(field)), `${question.id} has one-decimal currency`);
    assert.ok(fields.every(field => !/\bdegrees? C\b/.test(field)), `${question.id} needs Celsius or °C notation`);
    assert.doesNotMatch(question.explanation, /\bmove 1 spaces\b/i, question.id);
    assert.doesNotMatch(question.prompt, /What should replace .* here\?/i, question.id);
  }
  assert.match(window.MapleQuestData.allQuestions(2).find(question => question.id === "ON-G2-social-C1-2-1").prompt, /north is at the top/i);
  assert.doesNotMatch(window.MapleQuestData.allQuestions(7).find(question => question.id === "ON-G7-social-G2-2").prompt, /managed responsibly/i);
});

test("quantity and percent distractors stay possible in their stated situations", () => {
  const data = window.MapleQuestData;
  for (const question of data.allQuestions(6).filter(question => question.subject === "math" && question.outcomeId === "N1" && question.id.includes("-g-"))) {
    const whole = Number(question.prompt.match(/\$?(\d+)/)?.[1]);
    assert.ok(question.choices.every(choice => Number(String(choice).replace(/[^\d.-]/g, "")) <= whole), question.id);
  }
  for (const question of data.allQuestions(7).filter(question => question.subject === "math" && question.outcomeId === "D1" && question.id.includes("-g-"))) {
    assert.ok(question.choices.every(choice => Number(choice.replace("%", "")) >= 0 && Number(choice.replace("%", "")) <= 100), question.id);
  }
  for (const question of data.allQuestions(8).filter(question => question.subject === "math" && question.outcomeId === "N1" && question.id.includes("-g-"))) {
    const price = Number(question.prompt.match(/costs \$(\d+)/)?.[1]);
    assert.ok(question.choices.every(choice => Number(choice.replace("$", "")) <= price), question.id);
  }
});

test("the Grade 1 diagnostic pool avoids zero-identity warm-ups", () => {
  const questions = window.MapleQuestData.allQuestions(1).filter(question => question.subject === "math" && question.outcomeId === "N2" && question.id.includes("-g-"));
  assert.ok(questions.every(question => !/has 0 stickers|gets 0 more|gives 0 away/.test(question.prompt)));
});

test("generated maths questions ask learners to calculate inside a real situation", () => {
  const data = window.MapleQuestData;
  for (let grade = 1; grade <= 8; grade += 1) {
    const generated = data.allQuestions(grade).filter(question =>
      question.subject === "math" && question.id.includes("-g-")
    );
    assert.ok(generated.length > 1_100, `Grade ${grade} needs a large contextual maths bank`);
    for (const question of generated) {
      assert.equal(question.context, "word-problem", question.id);
      assert.ok(question.prompt.split(/\s+/).length >= 8, `${question.id} needs enough context to choose a calculation`);
      assert.doesNotMatch(question.prompt, /\b1 (blocks|buttons|shells|stickers|cans|books|activities|hours|degrees)\b/i, `${question.id} needs singular wording`);
      assert.doesNotMatch(question.prompt, /\b1 more books\b/i, `${question.id} needs singular wording`);
      assert.ok(question.choices.every(choice => !/\b1 degrees\b/i.test(choice)), `${question.id} needs singular answer wording`);
      assert.doesNotMatch(question.explanation, /\b1 (kilometres|hours|degrees)\b/i, `${question.id} needs singular explanation wording`);
    }
  }
});

test("Grade 6 temperature weights progress from simple changes to signed-integer reasoning", () => {
  const questions = window.MapleQuestData.allQuestions(6).filter(question =>
    question.subject === "math" && question.outcomeId === "N2" && question.id.includes("-g-")
  );
  for (const question of questions) {
    const start = Number(question.prompt.match(/temperature was (-?\d+)/)?.[1]);
    assert.ok(start >= -20 && start <= 29, `${question.id} uses an unrealistic classroom temperature`);
    if (question.weight === 1) {
      assert.ok(start >= 0, `${question.id} should be a non-negative warm-up`);
      assert.match(question.prompt, /rose (?:1 degree|[2-4] degrees)/, question.id);
    }
    if (question.weight === 5) {
      assert.ok(start < 0, `${question.id} should begin below zero`);
      assert.match(question.prompt, /rose 2[1-4] degrees/, question.id);
    }
  }
});

test("Grade 8 cable problems calculate a usable length rather than squared units", () => {
  const questions = window.MapleQuestData.allQuestions(8).filter(question =>
    question.subject === "math" && question.outcomeId === "D1" && question.id.includes("-g-")
  );
  for (const question of questions) {
    const dimensions = question.prompt.match(/frame (\d+) m wide and (\d+) m high/);
    assert.ok(dimensions, question.id);
    const expected = Math.sqrt(Number(dimensions[1]) ** 2 + Number(dimensions[2]) ** 2).toFixed(1);
    assert.equal(question.choices[question.answer], `${expected} m`, question.id);
    assert.doesNotMatch(question.choices[question.answer], /m²/, question.id);
    assert.match(question.explanation, /c is about/, question.id);
  }
});

test("Ontario subject labels change for Grades 7 and 8", () => {
  const data = window.MapleQuestData;
  assert.equal(data.subjectMeta("social", 6).name, "Social Studies");
  assert.equal(data.subjectMeta("social", 7).name, "History & Geography");
  assert.equal(data.subjectMeta("social", 8).name, "History & Geography");
});
