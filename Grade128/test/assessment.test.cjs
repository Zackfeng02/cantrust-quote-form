const test = require("node:test");
const assert = require("node:assert/strict");
const assessment = require("../assessment.js");

const curriculum = { 2: { math: [{ code: "N1", title: "Numbers" }] } };
const subjects = { math: {} };
const attempt = (correct, day, completed = true, familyId = `family-${day}-${correct}`) => ({
  grade: 2,
  subject: "math",
  outcomeId: "N1",
  questionId: `${familyId}-question`,
  familyId,
  correct,
  day,
  completed
});

test("incomplete attempts never affect evidence", () => {
  const state = { attempts: [attempt(false, "2026-08-09", false)] };
  assert.equal(assessment.outcomeEvidence(state, 2, "math", curriculum[2].math[0]).status, "unseen");
});

test("study-only answers never affect mastery evidence", () => {
  const state = { attempts: [{ ...attempt(true, "2026-08-09"), assessmentEligible: false }] };
  assert.equal(assessment.outcomeEvidence(state, 2, "math", curriculum[2].math[0]).status, "unseen");
});

test("legacy study-scaffold ID ranges never affect mastery evidence", () => {
  const outcome = { code: "L1", title: "Growth and changes" };
  const record = questionId => ({
    ...attempt(true, "2026-08-09"),
    subject: "science",
    outcomeId: "L1",
    questionId: `ON-G2-science-L1-0-v-${questionId}`
  });
  for (const questionId of [5, 12, 37, 40, 49, 52]) {
    assert.equal(assessment.outcomeEvidence({ attempts: [record(questionId)] }, 2, "science", outcome).status, "unseen");
  }
  for (const questionId of [4, 13, 36, 41, 48, 53]) {
    assert.equal(assessment.outcomeEvidence({ attempts: [record(questionId)] }, 2, "science", outcome).status, "building");
  }
});

test("two same-day correct answers are not labelled consistent", () => {
  const state = { attempts: [attempt(true, "2026-08-09"), attempt(true, "2026-08-09")] };
  const result = assessment.outcomeEvidence(state, 2, "math", curriculum[2].math[0]);
  assert.equal(result.status, "building");
  assert.equal(result.label, "Building");
});

test("consistent evidence needs three attempts across two days", () => {
  const state = { attempts: [
    attempt(true, "2026-08-08", true, "family-1"),
    attempt(true, "2026-08-09", true, "family-2"),
    attempt(true, "2026-08-09", true, "family-3")
  ] };
  const result = assessment.outcomeEvidence(state, 2, "math", curriculum[2].math[0]);
  assert.equal(result.status, "consistent");
  assert.equal(result.days, 2);
  assert.equal(result.families, 3);
});

test("repeating one task family cannot create consistent evidence", () => {
  const state = { attempts: [
    attempt(true, "2026-08-07", true, "same-family"),
    attempt(true, "2026-08-08", true, "same-family"),
    attempt(true, "2026-08-09", true, "same-family")
  ] };
  const result = assessment.outcomeEvidence(state, 2, "math", curriculum[2].math[0]);
  assert.equal(result.status, "building");
  assert.equal(result.evidence, 1);
  assert.equal(result.families, 1);
});

test("overall evidence is outcome-weighted", () => {
  const state = { attempts: [attempt(true, "2026-08-09")] };
  const result = assessment.overallEvidence(state, curriculum, subjects, 2);
  assert.deepEqual(result, { score: 100, consistent: 0, assessed: 1, total: 1 });
});

test("streak counts only completed sessions", () => {
  const state = { sessions: [
    { day: "2026-08-08", completed: true },
    { day: "2026-08-09", completed: false }
  ] };
  const previous = value => value === "2026-08-09" ? "2026-08-08" : "2026-08-07";
  assert.equal(assessment.streakCount(state, "2026-08-09", previous), 1);
});

test("session IDs fall back when browser crypto is unavailable", () => {
  const id = assessment.createSessionId(null, () => 1_765_000_000_000, () => 0.5);

  assert.match(id, /^session-[a-z0-9]+-[a-z0-9]+$/);
  assert.ok(id.length <= 80);
});

test("progress checks use five questions, cover every subject, and rotate", () => {
  const subjectKeys = ["math", "language", "science", "social"];
  const questions = subjectKeys.flatMap(subject => ["A", "B"].flatMap(outcomeId =>
    Array.from({ length: 3 }, (_, index) => ({ id: `${subject}-${outcomeId}-${index}`, subject, outcomeId }))
  ));

  const first = assessment.selectProgressQuestions(questions, subjectKeys, 0);
  const second = assessment.selectProgressQuestions(questions, subjectKeys, 1);

  assert.equal(first.length, 5);
  assert.deepEqual(new Set(first.map(question => question.subject)), new Set(subjectKeys));
  assert.equal(new Set(first.map(question => `${question.subject}:${question.outcomeId}`)).size, 5);
  assert.notDeepEqual(second.map(question => question.id), first.map(question => question.id));
});

test("progress checks prefer the least-seen outcome and question in each subject", () => {
  const subjectKeys = ["math", "language", "science", "social"];
  const questions = subjectKeys.flatMap(subject => ["A", "B"].flatMap(outcomeId =>
    [0, 1].map(index => ({ id: `${subject}-${outcomeId}-${index}`, subject, outcomeId }))
  ));
  const state = { attempts: [
    { questionId: "math-A-0", completed: true },
    { questionId: "math-A-1", completed: true },
    { questionId: "math-B-0", completed: true }
  ] };

  const selected = assessment.selectProgressQuestions(questions, subjectKeys, 0, state);

  assert.ok(selected.some(question => question.id === "math-B-1"));
  assert.ok(!selected.some(question => question.id === "math-A-0"));
});

test("outcome-balanced tests sample every outcome once and rotate variants", () => {
  const questions = ["math", "language", "science", "social"].flatMap(subject =>
    ["A", "B", "C"].flatMap(outcomeId => Array.from({ length: 3 }, (_, index) => ({
      id: `${subject}-${outcomeId}-${index}`,
      subject,
      outcomeId
    })))
  );

  const first = assessment.selectOutcomeQuestions(questions, 0);
  const second = assessment.selectOutcomeQuestions(questions, 1);

  assert.equal(first.length, 12);
  assert.equal(new Set(first.map(question => `${question.subject}:${question.outcomeId}`)).size, 12);
  assert.notDeepEqual(second.map(question => question.id), first.map(question => question.id));
});

test("mode-balanced tests rotate variants across different days", () => {
  const questions = [0, 1, 2].map(index => ({ id: `math-N1-${index}`, subject: "math", outcomeId: "N1" }));
  const state = {
    attempts: [{ questionId: "math-N1-0", mode: "diagnostic", completed: true }],
    sessions: []
  };

  const selected = assessment.selectModeOutcomeQuestions(state, questions, "today");

  assert.equal(selected[0].id, "math-N1-1");
});

test("subject tests stay child-sized and distribute questions across outcomes", () => {
  const questions = ["A", "B", "C"].flatMap(outcomeId =>
    Array.from({ length: 4 }, (_, index) => ({ id: `${outcomeId}-${index}`, subject: "language", outcomeId }))
  );

  const selected = assessment.selectSubjectQuestions({ attempts: [{ questionId: "A-0", completed: true }] }, questions, 12);

  assert.equal(selected.length, 12);
  assert.ok(selected.findIndex(question => question.id === "A-0") > selected.findIndex(question => question.id === "A-3"));
  assert.deepEqual(
    Object.fromEntries(["A", "B", "C"].map(outcomeId => [outcomeId, selected.filter(question => question.outcomeId === outcomeId).length])),
    { A: 4, B: 4, C: 4 }
  );
});

test("adaptive tests start with easy questions and change weight after each answer", () => {
  const questions = ["A", "B"].flatMap(outcomeId =>
    Array.from({ length: 5 }, (_, index) => ({
      id: `${outcomeId}-${index + 1}`,
      subject: "math",
      outcomeId,
      weight: index + 1
    }))
  );

  const starting = assessment.selectModeOutcomeQuestions({ attempts: [], sessions: [] }, questions, "diagnostic", 1);

  assert.deepEqual(starting.map(question => question.weight), [1, 1]);
  assert.equal(assessment.adjustQuestionWeight(1, true), 2);
  assert.equal(assessment.adjustQuestionWeight(2, true), 3);
  assert.equal(assessment.adjustQuestionWeight(3, false), 2);
  assert.equal(assessment.adjustQuestionWeight(5, true), 5);
  assert.equal(assessment.adjustQuestionWeight(1, false), 1);
});

test("the first diagnostic uses supported choices before typed calculation", () => {
  const questions = [
    { id: "typed", subject: "math", outcomeId: "N1", weight: 1, interactionType: "numeric-input" },
    { id: "choice", subject: "math", outcomeId: "N1", weight: 1, interactionType: "multiple-choice" }
  ];
  assert.equal(assessment.selectModeOutcomeQuestions({ attempts: [], sessions: [] }, questions, "diagnostic", 1)[0].id, "choice");
  assert.equal(assessment.selectModeOutcomeQuestions({ attempts: [], sessions: [] }, questions, "today", 1)[0].id, "typed");
});

test("assessment selectors never serve study-only answer scaffolds", () => {
  const questions = ["A", "B"].flatMap(outcomeId => [
    { id: `${outcomeId}-study`, subject: "science", outcomeId, weight: 1, assessmentEligible: false },
    { id: `${outcomeId}-easy`, subject: "science", outcomeId, weight: 1, assessmentEligible: true },
    { id: `${outcomeId}-next`, subject: "science", outcomeId, weight: 2, assessmentEligible: true }
  ]);

  const selected = assessment.selectModeOutcomeQuestions({ attempts: [], sessions: [] }, questions, "diagnostic", 1);

  assert.deepEqual(selected.map(question => question.id), ["A-easy", "B-easy"]);
  assert.equal(assessment.selectAdaptiveQuestion({ attempts: [] }, questions.slice(0, 3), 1).id, "A-easy");
});

test("adaptive selection keeps the requested outcome and avoids answered questions", () => {
  const questions = Array.from({ length: 5 }, (_, index) => ({
    id: `math-N1-${index + 1}`,
    subject: "math",
    outcomeId: "N1",
    weight: index + 1
  }));

  const selected = assessment.selectAdaptiveQuestion(
    { attempts: [] },
    questions,
    4,
    new Set(["math-N1-4"])
  );

  assert.equal(selected.id, "math-N1-3");
  assert.equal(selected.outcomeId, "N1");

  const contextual = assessment.selectAdaptiveQuestion({ attempts: [] }, [
    { id: "bare", subject: "math", outcomeId: "N1", weight: 2 },
    { id: "story", subject: "math", outcomeId: "N1", weight: 2, context: "word-problem" }
  ], 2);
  assert.equal(contextual.id, "story");
});

test("adaptive quiz transitions change only the next question for the answered outcome", () => {
  const question = (id, outcomeId, weight) => ({ id, grade: 2, subject: "math", outcomeId, weight, context: "word-problem" });
  const bank = [
    question("A-1a", "A", 1), question("A-1b", "A", 1), question("A-2", "A", 2),
    question("B-1a", "B", 1), question("B-1b", "B", 1), question("B-2", "B", 2),
    question("C-1a", "C", 1), question("C-1b", "C", 1), question("C-2", "C", 2)
  ];
  const quiz = {
    index: 0,
    targetWeights: { "math:A": 1, "math:B": 1, "math:C": 1 },
    questions: [bank[0], bank[3], bank[6], bank[1], bank[4]]
  };

  const afterCorrect = assessment.adaptQuiz({ attempts: [] }, quiz, bank, true);
  assert.equal(afterCorrect.targetWeights["math:A"], 2);
  assert.equal(afterCorrect.targetWeights["math:B"], 1);
  assert.equal(afterCorrect.questions[1].id, "B-1a");
  assert.equal(afterCorrect.questions[3].id, "A-2");

  const afterIncorrect = assessment.adaptQuiz(
    { attempts: [] },
    { ...afterCorrect, index: 1 },
    bank,
    false
  );
  assert.equal(afterIncorrect.targetWeights["math:A"], 2);
  assert.equal(afterIncorrect.targetWeights["math:B"], 1);
  assert.equal(afterIncorrect.questions[4].id, "B-1b");
  assert.equal(afterIncorrect.questions[4].outcomeId, "B");
  assert.equal(quiz.questions[3].id, "A-1b", "the original quiz object stays unchanged");
});

test("a learner's next starting weight uses distinct recent families in that outcome", () => {
  const question = { grade: 2, subject: "math", outcomeId: "N1" };
  const state = { attempts: [
    { ...attempt(true, "2026-08-08", true, "family-1"), difficulty: 1 },
    { ...attempt(true, "2026-08-09", true, "family-2"), difficulty: 2 }
  ] };
  assert.equal(assessment.startingQuestionWeight({ attempts: [] }, question), 1);
  assert.equal(assessment.startingQuestionWeight(state, question), 3);
});
