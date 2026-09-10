"use strict";

global.window = {};
require("../curriculum.js");
const assessment = require("../assessment.js");

const data = window.MapleQuestData;
const errors = [];
const warnings = [];
const all = Array.from({ length: 8 }, (_, index) => data.allQuestions(index + 1)).flat();
const fail = (condition, message) => { if (!condition) errors.push(message); };

fail(data.jurisdiction.code === "ON", "The curriculum jurisdiction is not locked to Ontario.");
fail(all.length === 14_400, `Expected 14,400 questions; found ${all.length}.`);
fail(new Set(all.map(question => question.id)).size === all.length, "Question IDs are not globally unique.");
fail(new Set(all.map(question => question.prompt)).size === all.length, "Question prompts are not globally unique.");

for (const question of all) {
  fail(question.id.startsWith("ON-G"), `${question.id}: non-Ontario question ID.`);
  fail(Boolean(question.familyId), `${question.id}: missing task family.`);
  fail(Array.isArray(question.expectationIds) && question.expectationIds.length > 0, `${question.id}: missing expectation mapping.`);
  fail(question.expectationIds.every(id => id.startsWith("MQ-ON-")), `${question.id}: non-Ontario expectation mapping.`);
  fail(["multiple-choice", "numeric-input"].includes(question.interactionType), `${question.id}: unsupported interaction.`);
  fail(question.interactionType !== "numeric-input" || Boolean(question.expectedAnswer), `${question.id}: typed response has no answer key.`);
  fail(question.answer >= 0 && question.answer < question.choices.length, `${question.id}: invalid answer index.`);
  fail(question.choices.length === 4 && new Set(question.choices).size === 4, `${question.id}: choices are not four distinct options.`);
  fail(question.explanation.trim().length > 0, `${question.id}: missing explanation.`);
  fail(question.difficulty === question.weight && question.weight >= 1 && question.weight <= 5, `${question.id}: invalid difficulty.`);
  fail(question.contentVersion === data.contentVersion, `${question.id}: stale content version.`);
}

for (let grade = 1; grade <= 8; grade += 1) {
  const gradeQuestions = data.allQuestions(grade);
  for (const [subject, outcomes] of Object.entries(data.curriculum[grade])) {
    const subjectQuestions = gradeQuestions.filter(question => question.subject === subject);
    const families = new Set(subjectQuestions.filter(question => question.assessmentEligible !== false).map(question => question.familyId));
    fail(subject === "math" ? families.size >= 18 : families.size >= 48, `Grade ${grade} ${subject}: only ${families.size} assessment families.`);
    for (const outcome of outcomes) {
      fail(outcome.strandIds.length > 0 && outcome.source.startsWith("Ontario "), `Grade ${grade} ${subject} ${outcome.code}: incomplete Ontario mapping.`);
    }
  }
}

const curated = all.filter(question => question.subject !== "math" && question.context === "knowledge-check");
const uniquelyLongest = curated.filter(question => {
  const lengths = question.choices.map(choice => choice.length);
  const maximum = Math.max(...lengths);
  return lengths[question.answer] === maximum && lengths.filter(length => length === maximum).length === 1;
});
const absoluteDistractors = curated.filter(question => question.choices.some((choice, index) =>
  index !== question.answer && /\b(always|never|every|all|none|only)\b/i.test(choice)
));
const longestRate = uniquelyLongest.length / curated.length;
const absoluteRate = absoluteDistractors.length / curated.length;
fail(longestRate <= 0.40, `Correct answer is uniquely longest in ${(longestRate * 100).toFixed(1)}% of curated items.`);
fail(absoluteRate <= 0.30, `Absolute-word distractors appear in ${(absoluteRate * 100).toFixed(1)}% of curated items.`);
if (longestRate > 0.35) warnings.push(`Answer-length cue remains elevated: ${(longestRate * 100).toFixed(1)}% of curated items.`);
if (absoluteRate > 0.25) warnings.push(`Absolute-word distractors remain elevated: ${(absoluteRate * 100).toFixed(1)}% of curated items.`);

const revealing = all.filter(question =>
  question.assessmentEligible !== false &&
  question.subject !== "math" &&
  /not correct|correct the answer/i.test(question.prompt)
);
fail(revealing.length === 0, `${revealing.length} assessment prompts reveal that a shown choice is wrong.`);

function dailyRotation(grade, correct) {
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
  return new Set(families).size;
}

for (let grade = 1; grade <= 8; grade += 1) {
  for (const correct of [true, false]) {
    const families = dailyRotation(grade, correct);
    fail(families >= 120, `Grade ${grade} ${correct ? "all-correct" : "all-incorrect"} path uses only ${families} families in 30 days.`);
  }
}

console.log("MapleQuest content audit");
console.log(`Questions: ${all.length.toLocaleString("en-CA")} · curated anchors: ${curated.length}`);
console.log(`Answer-length cue: ${(longestRate * 100).toFixed(1)}% · absolute distractors: ${(absoluteRate * 100).toFixed(1)}%`);
warnings.forEach(message => console.warn(`WARN: ${message}`));
if (errors.length) {
  errors.forEach(message => console.error(`FAIL: ${message}`));
  process.exitCode = 1;
} else {
  console.log("PASS: structural, Ontario-mapping, interaction, family-rotation, and wording gates passed.");
}
