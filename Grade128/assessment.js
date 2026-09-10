(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.MapleQuestAssessment = api;
}(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  const STATUS_ORDER = { starting: 0, unseen: 1, building: 2, consistent: 3 };
  const MIN_QUESTION_WEIGHT = 1;
  const MAX_QUESTION_WEIGHT = 5;

  function isLegacyStudyScaffold(questionId) {
    const match = /^ON-G\d+-(?:language|science|social)-[^-]+-\d+-v-(\d+)$/.exec(questionId || "");
    if (!match) return false;
    const variant = Number(match[1]);
    return (variant >= 5 && variant <= 12) ||
      (variant >= 37 && variant <= 40) ||
      (variant >= 49 && variant <= 52);
  }

  function familyId(record) {
    return record?.familyId || record?.questionId || record?.id || null;
  }

  function completedAttempts(state, { grade, subject, outcomeId, expectationId }, limit = 8) {
    const matches = (state.attempts || []).filter(attempt =>
      attempt.completed !== false &&
      attempt.assessmentEligible !== false &&
      !isLegacyStudyScaffold(attempt.questionId) &&
      attempt.grade === Number(grade) &&
      attempt.subject === subject &&
      attempt.outcomeId === outcomeId &&
      (!expectationId || !Array.isArray(attempt.expectationIds) || attempt.expectationIds.includes(expectationId))
    );
    const latestByFamily = new Map();
    matches.forEach((attempt, index) => {
      const key = familyId(attempt) || `legacy-${index}`;
      latestByFamily.delete(key);
      latestByFamily.set(key, attempt);
    });
    return [...latestByFamily.values()].slice(-limit);
  }

  function evidenceResult(attempts) {
    if (!attempts.length) return { status: "unseen", score: null, evidence: 0, families: 0, days: 0, label: "Not assessed" };
    const score = attempts.filter(attempt => attempt.correct).length / attempts.length;
    const days = new Set(attempts.map(attempt => attempt.day)).size;
    const families = new Set(attempts.map((attempt, index) => familyId(attempt) || `legacy-${index}`)).size;
    if (families >= 3 && days >= 2 && score >= 0.75) {
      return { status: "consistent", score, evidence: attempts.length, families, days, label: "Consistent" };
    }
    if (score >= 0.5) return { status: "building", score, evidence: attempts.length, families, days, label: "Building" };
    return { status: "starting", score, evidence: attempts.length, families, days, label: "Needs practice" };
  }

  function expectationEvidence(state, grade, subject, outcome, expectationId) {
    return evidenceResult(completedAttempts(state, { grade, subject, outcomeId: outcome.code, expectationId }));
  }

  function outcomeEvidence(state, grade, subject, outcome) {
    const attempts = completedAttempts(state, { grade, subject, outcomeId: outcome.code });
    const result = evidenceResult(attempts);
    const expectationIds = outcome.expectationIds || [];
    return {
      ...result,
      expectations: expectationIds.map(expectationId => ({
        expectationId,
        ...expectationEvidence(state, grade, subject, outcome, expectationId)
      }))
    };
  }

  function subjectEvidence(state, curriculum, grade, subject) {
    const outcomes = curriculum[grade][subject];
    const results = outcomes.map(outcome => outcomeEvidence(state, grade, subject, outcome));
    const assessed = results.filter(result => result.status !== "unseen");
    const consistent = results.filter(result => result.status === "consistent").length;
    const score = assessed.length
      ? Math.round(assessed.reduce((sum, result) => sum + result.score, 0) / assessed.length * 100)
      : null;
    return { score, consistent, assessed: assessed.length, total: outcomes.length, results, outcomes };
  }

  function overallEvidence(state, curriculum, subjects, grade) {
    const summaries = Object.keys(subjects).map(subject => subjectEvidence(state, curriculum, grade, subject));
    const results = summaries.flatMap(summary => summary.results);
    const assessed = results.filter(result => result.status !== "unseen");
    return {
      score: assessed.length
        ? Math.round(assessed.reduce((sum, result) => sum + result.score, 0) / assessed.length * 100)
        : null,
      consistent: results.filter(result => result.status === "consistent").length,
      assessed: assessed.length,
      total: results.length
    };
  }

  function weakestOutcome(state, curriculum, subjects, grade, subjectFilter = null) {
    const candidates = Object.entries(curriculum[grade])
      .filter(([subject]) => !subjectFilter || subject === subjectFilter)
      .flatMap(([subject, outcomes]) => outcomes.map(outcome => ({
        subject,
        outcome,
        evidence: outcomeEvidence(state, grade, subject, outcome)
      })));
    return candidates.sort((a, b) =>
      STATUS_ORDER[a.evidence.status] - STATUS_ORDER[b.evidence.status] ||
      a.evidence.evidence - b.evidence.evidence
    )[0] || null;
  }

  function streakCount(state, todayKey, previousDay) {
    const days = new Set((state.sessions || []).filter(session => session.completed).map(session => session.day));
    let count = 0;
    let cursor = todayKey;
    if (!days.has(cursor)) cursor = previousDay(cursor);
    while (days.has(cursor)) {
      count += 1;
      cursor = previousDay(cursor);
    }
    return count;
  }

  function createSessionId(cryptoApi = typeof globalThis !== "undefined" ? globalThis.crypto : null, now = Date.now, random = Math.random) {
    if (cryptoApi && typeof cryptoApi.randomUUID === "function") return cryptoApi.randomUUID();
    return `session-${now().toString(36)}-${Math.floor(random() * Number.MAX_SAFE_INTEGER).toString(36)}`;
  }

  function questionUseStats(state) {
    const questions = new Map();
    const families = new Map();
    const lastSeen = new Map();
    (state?.attempts || []).forEach(attempt => {
      if (attempt.completed === false || !attempt.questionId) return;
      questions.set(attempt.questionId, (questions.get(attempt.questionId) || 0) + 1);
      const key = familyId(attempt);
      if (!key) return;
      families.set(key, (families.get(key) || 0) + 1);
      lastSeen.set(key, Math.max(lastSeen.get(key) || 0, Date.parse(attempt.date || attempt.day || "") || 0));
    });
    return { questions, families, lastSeen };
  }

  function leastUsedQuestion(state, questions, rotation = 0, useStats = null) {
    if (!questions.length) return null;
    const stats = useStats?.questions ? useStats : questionUseStats(state);
    const familyCounts = questions.map(question => stats.families.get(familyId(question)) || 0);
    const leastFamilyUse = Math.min(...familyCounts);
    const leastUsedFamilies = questions.filter((question, index) => familyCounts[index] === leastFamilyUse);
    const oldestSeen = Math.min(...leastUsedFamilies.map(question => stats.lastSeen.get(familyId(question)) || 0));
    const oldestFamilies = leastUsedFamilies.filter(question => (stats.lastSeen.get(familyId(question)) || 0) === oldestSeen);
    const questionCounts = oldestFamilies.map(question => stats.questions.get(question.id) || 0);
    const leastQuestionUse = Math.min(...questionCounts);
    const candidates = oldestFamilies.filter((question, index) => questionCounts[index] === leastQuestionUse);
    return candidates[Math.max(0, Number(rotation) || 0) % candidates.length];
  }

  function questionWeight(question) {
    const weight = Number(question?.weight ?? question?.difficulty);
    return Number.isInteger(weight) && weight >= MIN_QUESTION_WEIGHT && weight <= MAX_QUESTION_WEIGHT ? weight : 3;
  }

  function assessmentQuestions(questions) {
    return questions.filter(question => question.assessmentEligible !== false);
  }

  function adjustQuestionWeight(currentWeight, correct) {
    const current = Math.min(MAX_QUESTION_WEIGHT, Math.max(MIN_QUESTION_WEIGHT, Number(currentWeight) || MIN_QUESTION_WEIGHT));
    return Math.min(MAX_QUESTION_WEIGHT, Math.max(MIN_QUESTION_WEIGHT, current + (correct ? 1 : -1)));
  }

  function selectAdaptiveQuestion(state, questions, targetWeight = MIN_QUESTION_WEIGHT, excludedIds = new Set(), rotation = 0, useStats = null, excludedFamilyIds = new Set()) {
    const excluded = excludedIds instanceof Set ? excludedIds : new Set(excludedIds || []);
    const excludedFamilies = excludedFamilyIds instanceof Set ? excludedFamilyIds : new Set(excludedFamilyIds || []);
    const available = assessmentQuestions(questions).filter(question => !excluded.has(question.id) && !excludedFamilies.has(familyId(question)));
    if (!available.length) return null;
    const stats = useStats?.families ? useStats : questionUseStats(state);
    const target = Math.min(MAX_QUESTION_WEIGHT, Math.max(MIN_QUESTION_WEIGHT, Number(targetWeight) || MIN_QUESTION_WEIGHT));
    const leastFamilyUse = Math.min(...available.map(question => stats.families.get(familyId(question)) || 0));
    const leastUsedFamilies = available.filter(question => (stats.families.get(familyId(question)) || 0) === leastFamilyUse);
    const distance = Math.min(...leastUsedFamilies.map(question => Math.abs(questionWeight(question) - target)));
    const nearest = leastUsedFamilies.filter(question => Math.abs(questionWeight(question) - target) === distance);
    const contextual = nearest.filter(question => question.context === "word-problem");
    return leastUsedQuestion(
      state,
      contextual.length ? contextual : nearest,
      rotation,
      stats
    );
  }

  function difficultyKey(question) {
    return `${question.subject}:${question.outcomeId}`;
  }

  function startingQuestionWeight(state, question) {
    const attempts = completedAttempts(state, {
      grade: question.grade,
      subject: question.subject,
      outcomeId: question.outcomeId
    }, 6);
    if (attempts.length < 2) return MIN_QUESTION_WEIGHT;
    const score = attempts.filter(attempt => attempt.correct).length / attempts.length;
    const successfulWeights = attempts.filter(attempt => attempt.correct).map(attempt => questionWeight(attempt));
    const demonstrated = successfulWeights.length ? Math.max(...successfulWeights) : MIN_QUESTION_WEIGHT;
    if (score >= 0.75) return Math.min(MAX_QUESTION_WEIGHT, demonstrated + 1);
    if (score < 0.5) return Math.max(MIN_QUESTION_WEIGHT, demonstrated - 1);
    return Math.min(MAX_QUESTION_WEIGHT, Math.max(MIN_QUESTION_WEIGHT, demonstrated));
  }

  function adaptQuiz(state, quiz, questionBank, correct) {
    const current = quiz.questions[quiz.index];
    const currentKey = difficultyKey(current);
    const targetWeights = { ...(quiz.targetWeights || {}) };
    const currentTarget = targetWeights[currentKey] || quiz.targetWeight || MIN_QUESTION_WEIGHT;
    targetWeights[currentKey] = adjustQuestionWeight(currentTarget, correct);
    const nextIndex = quiz.questions.findIndex((question, index) => index > quiz.index && difficultyKey(question) === currentKey);
    if (nextIndex < 0) return { ...quiz, targetWeights, targetWeight: targetWeights[currentKey] };
    const slot = quiz.questions[nextIndex];
    const candidates = questionBank.filter(question =>
      question.grade === slot.grade &&
      question.subject === slot.subject &&
      question.outcomeId === slot.outcomeId
    );
    const excludedIds = new Set(quiz.questions.filter((_, index) => index !== nextIndex).map(question => question.id));
    const excludedFamilies = new Set(quiz.questions.filter((_, index) => index !== nextIndex).map(familyId));
    const replacement = selectAdaptiveQuestion(state, candidates, targetWeights[currentKey], excludedIds, nextIndex, null, excludedFamilies);
    if (!replacement) return { ...quiz, targetWeights, targetWeight: targetWeights[currentKey] };
    const questions = [...quiz.questions];
    questions[nextIndex] = replacement;
    return { ...quiz, questions, targetWeights, targetWeight: targetWeights[currentKey] };
  }

  function weightedQuestion(state, questions, rotation, useStats, targetWeight, excludedFamilyIds = new Set()) {
    const eligible = assessmentQuestions(questions);
    const resolvedWeight = typeof targetWeight === "function" ? targetWeight(eligible[0]) : targetWeight;
    return resolvedWeight === null || resolvedWeight === undefined
      ? leastUsedQuestion(state, eligible.filter(question => !excludedFamilyIds.has(familyId(question))), rotation, useStats)
      : selectAdaptiveQuestion(state, eligible, resolvedWeight, new Set(), rotation, useStats, excludedFamilyIds);
  }

  function groupByOutcome(questions) {
    const groups = new Map();
    questions.forEach(question => {
      const key = `${question.subject}:${question.outcomeId}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(question);
    });
    return groups;
  }

  function selectProgressQuestions(questions, subjectKeys, completedChecks = 0, state = null, targetWeight = null) {
    const eligible = assessmentQuestions(questions);
    const rotation = Math.max(0, Number(completedChecks) || 0);
    const useStats = questionUseStats(state);
    const selected = subjectKeys.map((subject, index) => {
      const outcomes = [...groupByOutcome(eligible.filter(question => question.subject === subject)).values()];
      if (!outcomes.length) return null;
      const usage = outcomes.map(group => [...new Set(group.map(familyId))].reduce((sum, id) => sum + (useStats.families.get(id) || 0), 0));
      const least = Math.min(...usage);
      const leastUsedOutcomes = outcomes.filter((group, outcomeIndex) => usage[outcomeIndex] === least);
      const outcome = leastUsedOutcomes[(rotation + index) % leastUsedOutcomes.length];
      return weightedQuestion(state, outcome, rotation, useStats, targetWeight);
    }).filter(Boolean);
    const selectedIds = new Set(selected.map(question => question.id));
    const selectedOutcomes = new Set(selected.map(question => `${question.subject}:${question.outcomeId}`));
    const outcomeGroups = [...groupByOutcome(eligible.filter(question => !selectedIds.has(question.id))).values()];
    const differentOutcomes = outcomeGroups.filter(group => !selectedOutcomes.has(`${group[0].subject}:${group[0].outcomeId}`));
    const remaining = differentOutcomes.length ? differentOutcomes : outcomeGroups;
    if (remaining.length) {
      const usage = remaining.map(group => [...new Set(group.map(familyId))].reduce((sum, id) => sum + (useStats.families.get(id) || 0), 0));
      const least = Math.min(...usage);
      const candidateGroups = remaining.filter((group, index) => usage[index] === least);
      const group = candidateGroups[rotation % candidateGroups.length];
      selected.push(weightedQuestion(state, group, rotation, useStats, targetWeight));
    }
    return selected.slice(0, 5);
  }

  function selectOutcomeQuestions(questions, completedChecks = 0, state = null, targetWeight = null) {
    const rotation = Math.max(0, Number(completedChecks) || 0);
    const useStats = questionUseStats(state);
    return [...groupByOutcome(assessmentQuestions(questions)).values()].map(group => weightedQuestion(state, group, rotation, useStats, targetWeight));
  }

  function selectModeOutcomeQuestions(state, questions, mode, targetWeight = null) {
    const completedChecks = (state.sessions || []).filter(session => session.mode === mode && session.completed).length;
    const modeQuestions = mode === "diagnostic"
      ? questions.filter(question => question.interactionType !== "numeric-input")
      : questions;
    return selectOutcomeQuestions(modeQuestions, completedChecks, state, targetWeight);
  }

  function selectSubjectQuestions(state, questions, limit = 12, targetWeight = null) {
    const eligible = assessmentQuestions(questions);
    const groups = [...groupByOutcome(eligible).values()];
    const useStats = questionUseStats(state);
    const selected = [];
    const selectedIds = new Set();
    const selectedFamilies = new Set();
    for (let round = 0; selected.length < limit && selected.length < eligible.length; round += 1) {
      for (const group of groups) {
        const candidates = group.filter(question => !selectedIds.has(question.id));
        const unusedFamilyCandidates = candidates.filter(question => !selectedFamilies.has(familyId(question)));
        const question = weightedQuestion(state, unusedFamilyCandidates.length ? unusedFamilyCandidates : candidates, round, useStats, targetWeight);
        if (question) {
          selected.push(question);
          selectedIds.add(question.id);
          selectedFamilies.add(familyId(question));
        }
        if (selected.length === limit) break;
      }
    }
    return selected;
  }

  return { completedAttempts, expectationEvidence, outcomeEvidence, subjectEvidence, overallEvidence, weakestOutcome, streakCount, createSessionId, leastUsedQuestion, questionWeight, adjustQuestionWeight, startingQuestionWeight, selectAdaptiveQuestion, adaptQuiz, selectProgressQuestions, selectOutcomeQuestions, selectModeOutcomeQuestions, selectSubjectQuestions };
}));
