(function () {
  "use strict";

  const DATA = window.MapleQuestData;
  const EVIDENCE = window.MapleQuestAssessment;
  const STORAGE_KEY = "maplequest.v1";
  const views = ["home", "subjects", "study", "progress"];
  let state = emptyState();
  let activeStudy = null;
  let quiz = null;
  let saveQueue = Promise.resolve();

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function emptyState() {
    return { profile: null, attempts: [], sessions: [], version: 1 };
  }

  function legacyState() {
    try {
      return { ...emptyState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch {
      return emptyState();
    }
  }

  async function loadState() {
    const response = await fetch("/api/state", { headers: { Accept: "application/json" } });
    if (response.ok) return (await response.json()).state;
    if (response.status !== 401) throw new Error("MapleQuest could not reach its learner records.");

    const legacy = legacyState();
    if (!legacy.profile?.pin) return emptyState();
    const migration = await fetch("/api/learners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: legacy.profile.name,
        grade: Number(legacy.profile.grade),
        province: "ON",
        pin: legacy.profile.pin,
        legacyState: legacy
      })
    });
    if (!migration.ok) throw new Error((await migration.json()).error || "Existing progress could not be moved to the server.");
    const migrated = (await migration.json()).state;
    localStorage.removeItem(STORAGE_KEY);
    return migrated;
  }

  function saveState() {
    saveQueue = saveQueue.then(async () => {
      const response = await fetch("/api/state", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      if (!response.ok) throw new Error((await response.json()).error || "Progress could not be saved.");
      state = (await response.json()).state;
    }).catch(error => showToast(error.message));
    return saveQueue;
  }

  function subjectMeta(key, grade = state.profile?.grade || 1) {
    return DATA.subjectMeta(key, grade);
  }

  function formatDate(value, options = { month: "short", day: "numeric", year: "numeric" }) {
    return new Intl.DateTimeFormat("en-CA", options).format(new Date(value));
  }

  function dateKey(date = new Date()) {
    return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  }

  function seededShuffle(items, seedText) {
    let seed = [...seedText].reduce((total, char) => ((total * 31) + char.charCodeAt(0)) >>> 0, 2166136261);
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const j = seed % (i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function gradeQuestions(grade = state.profile?.grade || 1) {
    return DATA.allQuestions(Number(grade));
  }

  function outcomeMastery(grade, subject, outcome) {
    return EVIDENCE.outcomeEvidence(state, grade, subject, outcome);
  }

  function subjectMastery(subject, grade = state.profile?.grade || 1) {
    return EVIDENCE.subjectEvidence(state, DATA.curriculum, grade, subject);
  }

  function overallMastery() {
    if (!state.profile) return { score: null, consistent: 0, assessed: 0, total: 0 };
    return EVIDENCE.overallEvidence(state, DATA.curriculum, DATA.subjects, state.profile.grade);
  }

  function weakestOutcome(subjectFilter = null) {
    if (!state.profile) return null;
    const result = EVIDENCE.weakestOutcome(state, DATA.curriculum, DATA.subjects, state.profile.grade, subjectFilter);
    return result ? { ...result, mastery: result.evidence } : null;
  }

  function streakCount() {
    return EVIDENCE.streakCount(state, dateKey(), key => {
      const [year, month, day] = key.split("-").map(Number);
      const cursor = new Date(year, month - 1, day);
      cursor.setDate(cursor.getDate() - 1);
      return dateKey(cursor);
    });
  }

  function todaySession() {
    const today = dateKey();
    return [...state.sessions].reverse().find(session => session.mode === "today" && session.day === today && session.completed);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[char]));
  }

  function renderChrome() {
    if (!state.profile) return;
    $("#learner-chip").hidden = false;
    $("#learner-chip").textContent = `${state.profile.name} · G${state.profile.grade}`;
    $("#grade-badge").textContent = `GRADE ${state.profile.grade}`;
    $("#welcome-title").textContent = `Good to see you, ${state.profile.name}.`;
    $("#family-access").hidden = false;
    $("#family-code").textContent = state.profile.familyCode;
  }

  function renderHome() {
    if (!state.profile) return;
    const overall = overallMastery();
    const complete = todaySession();
    const percent = complete ? complete.score : 0;
    $("#mission-percent").textContent = `${percent}%`;
    $("#mission-ring").style.setProperty("--progress", `${percent * 3.6}deg`);
    $("#mission-ring").setAttribute("aria-valuenow", String(percent));
    $("#mission-ring").setAttribute("aria-valuetext", complete
      ? `${complete.correct} of ${complete.total} questions correct`
      : "No quick test completed today");
    $("#mission-title").textContent = complete ? "Today’s mission complete" : "Ready when you are";
    $("#mission-detail").textContent = complete
      ? `${complete.correct} of ${complete.total} correct. Revisit one skill or come back tomorrow.`
      : "Your mixed quick test takes about 10 minutes.";
    $("#today-test span:first-child").textContent = complete ? "Try Today’s Test Again" : "Test for Today";
    $("#initial-test").textContent = state.sessions.some(session => session.mode === "diagnostic" && session.completed)
      ? "Retake Initial Test"
      : "Initial Test";
    const streak = streakCount();
    $("#streak-count").textContent = `${streak} day${streak === 1 ? "" : "s"} in a row`;

    $("#status-rail").innerHTML = Object.keys(DATA.subjects).map(key => {
      const meta = subjectMeta(key);
      const summary = subjectMastery(key);
      const shown = summary.score === null ? "—" : `${summary.score}%`;
      const width = summary.score === null ? 0 : summary.score;
      const progressValue = summary.score === null
        ? 'aria-valuetext="No assessed answers yet"'
        : `aria-valuenow="${summary.score}"`;
      return `<article class="status-item tone-${meta.colour}">
        <div><span>${escapeHtml(meta.short)}</span><strong>${shown}</strong></div>
        <div class="mini-track" role="progressbar" aria-label="${escapeHtml(meta.name)} recent accuracy" aria-valuemin="0" aria-valuemax="100" ${progressValue}><i style="--value:${width}%"></i></div>
        <small>${summary.assessed} of ${summary.total} skills checked</small>
      </article>`;
    }).join("");

    const statusOrder = { starting: 0, unseen: 1, building: 2, consistent: 3 };
    const recommendations = Object.keys(DATA.subjects)
      .map(subject => weakestOutcome(subject))
      .filter(Boolean)
      .sort((first, second) =>
        statusOrder[first.mastery.status] - statusOrder[second.mastery.status] ||
        first.mastery.evidence - second.mastery.evidence
      )
      .slice(0, 3);
    const [firstRecommendation, ...moreRecommendations] = recommendations;
    const last = [...state.sessions].filter(session => session.completed).pop();
    $("#continue-layout").innerHTML = `
      <div class="daily-study-list">
        <button class="continue-primary tone-${subjectMeta(firstRecommendation.subject).colour}" data-study-subject="${firstRecommendation.subject}">
          <strong>${escapeHtml(firstRecommendation.outcome.title)}</strong>
          <span>Start here · ${escapeHtml(subjectMeta(firstRecommendation.subject).name)} · ${escapeHtml(firstRecommendation.mastery.label)}</span>
          <i aria-hidden="true">→</i>
        </button>
        <div class="daily-study-more">
          ${moreRecommendations.map((recommendation, index) => `<button class="daily-study-step tone-${subjectMeta(recommendation.subject).colour}" data-study-subject="${recommendation.subject}" type="button">
            <span>Next ${index + 2}</span><strong>${escapeHtml(recommendation.outcome.title)}</strong><small>${escapeHtml(subjectMeta(recommendation.subject).short)} · ${escapeHtml(recommendation.mastery.label)}</small>
          </button>`).join("")}
        </div>
      </div>
      <div class="continue-note">
        <p class="evidence-label">Evidence so far</p>
        <strong>${overall.assessed} / ${overall.total}</strong>
        <p>grade-level skills sampled</p>
        ${last ? `<small>Last test: ${last.score}% on ${formatDate(last.date, { month: "short", day: "numeric" })}</small>` : "<small>Your first check-in will create a baseline.</small>"}
      </div>`;
    $$('[data-study-subject]').forEach(button => button.addEventListener("click", () => openStudy(button.dataset.studySubject)));
  }

  function populateGradeSelects() {
    const options = Array.from({ length: 8 }, (_, index) => `<option value="${index + 1}">Grade ${index + 1}</option>`).join("");
    $("#learner-grade").innerHTML = options;
    $("#grade-switch").innerHTML = options;
    if (state.profile) $("#grade-switch").value = String(state.profile.grade);
  }

  function renderSubjects(grade = Number($("#grade-switch").value || state.profile?.grade || 1)) {
    if (!state.profile) return;
    $("#curriculum-note").textContent = `${DATA.jurisdiction.frameworkNote} Showing Grade ${grade} representative expectations.`;
    $("#subject-list").innerHTML = Object.keys(DATA.subjects).map((key, index) => {
      const meta = subjectMeta(key, grade);
      const outcomes = DATA.curriculum[grade][key];
      const summary = subjectMastery(key, grade);
      return `<article class="subject-row tone-${meta.colour}" style="--row:${index}">
        <div class="subject-number" aria-hidden="true">0${index + 1}</div>
        <div class="subject-copy">
          <h2>${escapeHtml(meta.name)}</h2>
          <p>${escapeHtml(outcomes.map(outcome => outcome.title).join(" · "))}</p>
          <small>${escapeHtml(meta.source)}</small>
        </div>
        <div class="subject-score">
          <strong>${summary.score === null ? "—" : `${summary.score}%`}</strong>
          <span>${summary.assessed} / ${summary.total} checked</span>
        </div>
        <button class="btn btn-soft" data-open-subject="${key}" data-grade="${grade}" type="button">Study ${escapeHtml(meta.short)}</button>
      </article>`;
    }).join("");
    $$('[data-open-subject]').forEach(button => button.addEventListener("click", () => openStudy(button.dataset.openSubject, Number(button.dataset.grade))));
  }

  function openStudy(subject, grade = state.profile.grade) {
    activeStudy = { subject, grade };
    location.hash = "study";
    renderStudy();
  }

  function renderStudy() {
    if (!activeStudy) {
      location.hash = "subjects";
      return;
    }
    const { subject, grade } = activeStudy;
    const meta = subjectMeta(subject, grade);
    const outcomes = DATA.curriculum[grade][subject];
    $("#study-content").innerHTML = `
      <header class="study-heading tone-${meta.colour}">
        <div><p class="study-context">Grade ${grade} · ${escapeHtml(meta.source)}</p><h1>${escapeHtml(meta.name)}</h1><p>Read the idea, use the revision cue, then try one focused question.</p></div>
        <button class="btn btn-primary" id="subject-test" type="button">Test this subject →</button>
      </header>
      <div class="outcome-stack">
        ${outcomes.map((outcome, index) => {
          const mastery = outcomeMastery(grade, subject, outcome);
          return `<article class="outcome-card" style="--i:${index}">
            <div class="outcome-status status-${mastery.status}"><i aria-hidden="true"></i>${escapeHtml(mastery.label)}</div>
            <div class="outcome-main"><h2>${escapeHtml(outcome.title)}</h2><p>${escapeHtml(outcome.learn)}</p></div>
            <aside><span>Revision cue</span><p>${escapeHtml(outcome.tip)}</p></aside>
            <button class="btn btn-outline" data-practise-outcome="${escapeHtml(outcome.code)}" type="button">Try one question</button>
          </article>`;
        }).join("")}
      </div>`;
    $("#subject-test").addEventListener("click", () => {
      const candidates = DATA.allQuestions(grade).filter(item => item.subject === subject);
      startQuiz("subject", EVIDENCE.selectSubjectQuestions(state, candidates, 12, question => EVIDENCE.startingQuestionWeight(state, question)));
    });
    $$('[data-practise-outcome]').forEach(button => button.addEventListener("click", () => {
      const candidates = DATA.allQuestions(grade).filter(item => item.subject === subject && item.outcomeId === button.dataset.practiseOutcome);
      const question = EVIDENCE.leastUsedQuestion(state, candidates);
      startQuiz("practice", [question]);
    }));
  }

  function renderProgress() {
    if (!state.profile) return;
    const overall = overallMastery();
    $("#progress-summary").innerHTML = `
      <article><span>Consistent evidence</span><strong>${overall.consistent}</strong><small>of ${overall.total} sampled expectations</small></article>
      <article><span>Evidence collected</span><strong>${overall.assessed}</strong><small>skills with at least one answer</small></article>
      <article><span>Current accuracy</span><strong>${overall.score === null ? "—" : `${overall.score}%`}</strong><small>across recently sampled skills</small></article>`;
    $("#progress-details").innerHTML = Object.keys(DATA.subjects).map(subject => {
      const meta = subjectMeta(subject);
      const outcomes = DATA.curriculum[state.profile.grade][subject];
      const summary = subjectMastery(subject);
      return `<section class="progress-subject tone-${meta.colour}">
        <header><div><h2>${escapeHtml(meta.name)}</h2><p>${summary.assessed} of ${summary.total} skills assessed</p></div><strong>${summary.score === null ? "—" : `${summary.score}%`}</strong></header>
        <div>${outcomes.map(outcome => {
          const result = outcomeMastery(state.profile.grade, subject, outcome);
          return `<button data-progress-study="${subject}" class="skill-line"><i class="status-${result.status}" aria-hidden="true"></i><span>${escapeHtml(outcome.title)}</span><em>${escapeHtml(result.label)}</em></button>`;
        }).join("")}</div>
      </section>`;
    }).join("");
    $$('[data-progress-study]').forEach(button => button.addEventListener("click", () => openStudy(button.dataset.progressStudy)));
  }

  function showView(name) {
    const target = views.includes(name) ? name : "home";
    $$('[data-view]').forEach(view => { view.hidden = view.dataset.view !== target; });
    $$('[data-nav]').forEach(link => link.setAttribute("aria-current", link.dataset.nav === target ? "page" : "false"));
    if (target === "home") renderHome();
    if (target === "subjects") renderSubjects();
    if (target === "study") renderStudy();
    if (target === "progress") renderProgress();
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function route() {
    showView(location.hash.replace("#", "") || "home");
  }

  function startQuiz(mode, questions = null) {
    if (!state.profile) return;
    let selected = questions;
    if (!selected) {
      const all = gradeQuestions();
      if (mode === "today") {
        const completedTodayTests = state.sessions.filter(session => session.mode === "today" && session.completed).length;
        selected = EVIDENCE.selectModeOutcomeQuestions(state, all, "today", question => EVIDENCE.startingQuestionWeight(state, question));
        selected = seededShuffle(selected, `${dateKey()}-${state.profile.name}-${completedTodayTests}`).slice(0, 10);
      }
      if (mode === "diagnostic") {
        const completedDiagnostics = state.sessions.filter(session => session.mode === "diagnostic" && session.completed).length;
        selected = EVIDENCE.selectModeOutcomeQuestions(state, all, "diagnostic", 1);
        selected = seededShuffle(selected, `diagnostic-${state.profile.grade}-${completedDiagnostics}`);
      }
      if (mode === "progress") {
        const completedChecks = state.sessions.filter(session => session.mode === "progress" && session.completed).length;
        selected = EVIDENCE.selectProgressQuestions(all, Object.keys(DATA.subjects), completedChecks, state, question => EVIDENCE.startingQuestionWeight(state, question));
        selected = seededShuffle(selected, `progress-${state.profile.grade}-${completedChecks}`);
      }
    }
    selected = [...selected].sort((a, b) => EVIDENCE.questionWeight(a) - EVIDENCE.questionWeight(b));
    const targetWeights = Object.fromEntries(selected.map(question => [`${question.subject}:${question.outcomeId}`, EVIDENCE.questionWeight(question)]));
    quiz = { mode, questions: selected, index: 0, correct: 0, streak: 0, answers: [], pendingAttempts: [], targetWeights, started: new Date().toISOString() };
    $("#quiz-dialog").showModal();
    document.body.setAttribute("data-dialog-open", "true");
    renderQuestion();
  }

  function quizModeLabel() {
    return ({ today: "Test for Today", diagnostic: "First Check-In", progress: "Progress Check", subject: "Subject Test", practice: "Quick Practice" })[quiz.mode];
  }

  function renderQuestion() {
    const question = quiz.questions[quiz.index];
    const progress = Math.round((quiz.index / quiz.questions.length) * 100);
    const answerControl = question.interactionType === "numeric-input"
      ? `<form class="numeric-answer" id="numeric-answer-form">
          <label for="numeric-answer-input">Type your answer</label>
          <div><input id="numeric-answer-input" name="answer" inputmode="decimal" autocomplete="off" required><button class="btn btn-primary" type="submit">Check answer</button></div>
          <small>You can leave out symbols and units.</small>
        </form>`
      : `<div class="answer-list">
          ${question.choices.map((choice, index) => `<button class="answer-button" type="button" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(choice)}</button>`).join("")}
        </div>`;
    $("#quiz-mode").textContent = quizModeLabel();
    $("#quiz-title-label").textContent = "Question";
    $("#question-number").textContent = `${quiz.index + 1} of ${quiz.questions.length}`;
    $(".quiz-progress").setAttribute("aria-valuenow", String(progress));
    $("#quiz-progress-bar").style.setProperty("--quiz-progress", String(progress / 100));
    $("#quiz-stage").innerHTML = `
      <div class="question-card" data-question-id="${escapeHtml(question.id)}" data-question-weight="${EVIDENCE.questionWeight(question)}">
        <div class="question-meta"><span>${escapeHtml(subjectMeta(question.subject, question.grade).short)}</span><span>Grade ${question.grade}</span><span>${escapeHtml(question.outcomeTitle)}</span></div>
        <h3 id="question-prompt" tabindex="-1">${escapeHtml(question.prompt)}</h3>
        ${answerControl}
        <button class="read-button" id="read-question" type="button">Read question aloud</button>
      </div>`;
    $$('[data-answer]').forEach(button => button.addEventListener("click", () => chooseAnswer(Number(button.dataset.answer))));
    $("#numeric-answer-form")?.addEventListener("submit", event => {
      event.preventDefault();
      chooseAnswer(null, String(new FormData(event.currentTarget).get("answer") || ""));
    });
    $("#read-question").addEventListener("click", () => readAloud(question));
    $("#question-prompt").focus();
  }

  function numericValue(value) {
    const match = String(value).replace(/,/g, "").replace(/−/g, "-").match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : Number.NaN;
  }

  function chooseAnswer(answerIndex, typedAnswer = "") {
    const question = quiz.questions[quiz.index];
    const numeric = question.interactionType === "numeric-input";
    const correct = numeric
      ? Number.isFinite(numericValue(typedAnswer)) && Math.abs(numericValue(typedAnswer) - numericValue(question.expectedAnswer)) < 0.005
      : answerIndex === question.answer;
    if (correct) quiz.correct += 1;
    quiz.streak = correct ? quiz.streak + 1 : 0;
    quiz.answers.push({ questionId: question.id, correct });
    quiz.pendingAttempts.push({
      date: new Date().toISOString(),
      day: dateKey(),
      questionId: question.id,
      familyId: question.familyId,
      expectationIds: [...question.expectationIds],
      grade: question.grade,
      subject: question.subject,
      outcomeId: question.outcomeId,
      interactionType: question.interactionType,
      difficulty: EVIDENCE.questionWeight(question),
      cognitiveDemand: question.cognitiveDemand,
      contentVersion: question.contentVersion,
      correct,
      mode: quiz.mode,
      assessmentEligible: question.assessmentEligible !== false,
      completed: true
    });
    quiz = EVIDENCE.adaptQuiz(state, quiz, DATA.allQuestions(question.grade), correct);
    $$('[data-answer]').forEach(button => {
      button.disabled = true;
      const index = Number(button.dataset.answer);
      if (index === question.answer) button.dataset.state = "success";
      if (index === answerIndex && !correct) button.dataset.state = "error";
    });
    if (numeric) {
      $("#numeric-answer-input").disabled = true;
      $("#numeric-answer-form button").disabled = true;
      $("#numeric-answer-form").dataset.state = correct ? "success" : "error";
    }
    const learnerGrade = Number(state.profile.grade);
    const message = answerFeedbackMessage(correct, learnerGrade, quiz.streak, quiz.index);
    const feedback = document.createElement("div");
    feedback.className = `answer-feedback ${correct ? "is-correct" : "is-incorrect"}`;
    feedback.dataset.feedbackStreak = String(quiz.streak);
    feedback.setAttribute("role", "status");
    feedback.innerHTML = `
      <div class="feedback-heading">
        <span class="feedback-icon" aria-hidden="true">${correct ? "★" : "↗"}</span>
        <div>
          <span class="feedback-reward">${escapeHtml(message.reward)}</span>
          <strong>${escapeHtml(message.title)}</strong>
        </div>
      </div>
      <p>${numeric && !correct ? `<strong>Answer: ${escapeHtml(question.expectedAnswer)}.</strong> ` : ""}${escapeHtml(question.explanation)}</p>
      <button class="btn btn-soft" id="next-question" type="button">${quiz.index + 1 === quiz.questions.length ? "See my result" : "Next question →"}</button>`;
    $(".question-card").append(feedback);
    if (correct) createAnswerCelebration(numeric ? $("#numeric-answer-form button") : $(`[data-answer="${question.answer}"]`), learnerGrade, quiz.streak);
    $("#next-question").focus();
    $("#next-question").addEventListener("click", () => {
      quiz.index += 1;
      if (quiz.index >= quiz.questions.length) finishQuiz(); else renderQuestion();
    });
  }

  function answerFeedbackMessage(correct, grade, streak, questionIndex) {
    if (!correct) {
      return grade <= 3
        ? { reward: "Learning move", title: "Good try — now you have a clue." }
        : { reward: "Keep going", title: "Good attempt. Use this clue on the next one." };
    }

    const praise = grade <= 3
      ? ["You found it!", "Super solving!", "That clicked!", "Bright thinking!"]
      : ["Strong reasoning.", "Nicely worked out.", "Exactly right.", "Good thinking."];
    return {
      reward: streak >= 2 ? `${streak} in a row!` : grade <= 3 ? "Skill spark earned" : "Well reasoned",
      title: praise[questionIndex % praise.length]
    };
  }

  function finishQuiz() {
    const score = Math.round(quiz.correct / quiz.questions.length * 100);
    const sessionId = EVIDENCE.createSessionId();
    const session = {
      id: sessionId,
      date: new Date().toISOString(),
      day: dateKey(),
      mode: quiz.mode,
      grade: state.profile.grade,
      score,
      correct: quiz.correct,
      total: quiz.questions.length,
      completed: true,
      subjects: [...new Set(quiz.questions.map(question => question.subject))]
    };
    state.attempts.push(...quiz.pendingAttempts.map(attempt => ({ ...attempt, sessionId })));
    state.sessions.push(session);
    saveState();
    renderHome();
    $("#quiz-progress-bar").style.setProperty("--quiz-progress", "1");
    $(".quiz-progress").setAttribute("aria-valuenow", "100");
    $("#quiz-title-label").textContent = "Results";
    $("#question-number").textContent = "";
    const next = weakestOutcome();
    const completionReward = state.profile.grade <= 3
      ? `<div class="result-reward"><span aria-hidden="true">★</span> Mission complete</div>`
      : "";
    $("#quiz-stage").innerHTML = `
      <div class="result-card">
        ${completionReward}
        <div class="result-score"><span>${score}%</span></div>
        <h3 id="result-heading" tabindex="-1">${score >= 80 ? "Strong work. Keep it moving." : score >= 55 ? "Good evidence. One more pass will help." : "Useful check-in. Now we know where to start."}</h3>
        <p>You answered ${quiz.correct} of ${quiz.questions.length} correctly. Your next useful revision is <strong>${escapeHtml(next.outcome.title)}</strong> in ${escapeHtml(subjectMeta(next.subject).name)}.</p>
        <div class="result-actions">
          <button class="btn btn-primary" id="result-study" type="button">Revise that skill →</button>
          <button class="btn btn-soft" id="result-home" type="button">Back home</button>
        </div>
      </div>`;
    $("#result-study").addEventListener("click", () => { closeQuiz(); openStudy(next.subject); });
    $("#result-home").addEventListener("click", () => { closeQuiz(); location.hash = "home"; renderHome(); });
    $("#result-heading").focus();
    createBurst($(".result-score"));
  }

  function closeQuiz() {
    if ($("#quiz-dialog").open) $("#quiz-dialog").close();
    document.body.removeAttribute("data-dialog-open");
    quiz = null;
  }

  function readAloud(question) {
    if (!("speechSynthesis" in window)) {
      showToast("Reading aloud is not available in this browser.");
      return;
    }
    speechSynthesis.cancel();
    const choices = question.interactionType === "numeric-input"
      ? "Type the number that answers the question."
      : question.choices.map((choice, index) => `${String.fromCharCode(65 + index)}. ${choice}`).join(". ");
    speechSynthesis.speak(new SpeechSynthesisUtterance(`${question.prompt}. ${choices}`));
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    $("#toast-region").append(toast);
    setTimeout(() => toast.remove(), 5000);
  }

  function createBurst(origin) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const burst = document.createElement("span");
    burst.className = "star-burst";
    burst.setAttribute("aria-hidden", "true");
    origin.append(burst);
    setTimeout(() => burst.remove(), 500);
  }

  function createAnswerCelebration(origin, grade, streak) {
    if (!origin || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    origin.classList.add("is-celebrating");
    setTimeout(() => origin.classList.remove("is-celebrating"), 650);
    if (grade > 3) return;

    const vectors = [
      ["-4.5rem", "-2.4rem"], ["-2.2rem", "-3.8rem"], ["0.3rem", "-3.4rem"],
      ["3.1rem", "-2.5rem"], ["4.4rem", "-0.2rem"], ["-4.2rem", "0.7rem"],
      ["-2.4rem", "2.5rem"], ["2.7rem", "2.1rem"]
    ];
    const celebration = document.createElement("span");
    celebration.className = "answer-celebration";
    celebration.setAttribute("aria-hidden", "true");
    vectors.slice(0, streak >= 3 ? 8 : 6).forEach(([x, y], index) => {
      const spark = document.createElement("span");
      spark.className = "celebration-spark";
      spark.style.setProperty("--spark-x", x);
      spark.style.setProperty("--spark-y", y);
      spark.style.setProperty("--spark-delay", `${index * 22}ms`);
      celebration.append(spark);
    });
    origin.append(celebration);
    setTimeout(() => celebration.remove(), 800);
  }

  function setupFirstVisit() {
    if (state.profile) return;
    const dialog = $("#setup-dialog");
    dialog.addEventListener("cancel", event => event.preventDefault());
    dialog.showModal();
  }

  function activateLearner(nextState) {
    state = nextState;
    $("#grade-switch").value = String(state.profile.grade);
    renderChrome();
    route();
  }

  function bindEvents() {
    window.addEventListener("hashchange", route);
    window.addEventListener("scroll", () => $("#site-nav").classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });
    $("#menu-button").addEventListener("click", () => {
      const open = $("#menu-button").getAttribute("aria-expanded") === "true";
      $("#menu-button").setAttribute("aria-expanded", String(!open));
      $("#mobile-nav").hidden = open;
    });
    $$("#mobile-nav a").forEach(link => link.addEventListener("click", () => {
      $("#mobile-nav").hidden = true;
      $("#menu-button").setAttribute("aria-expanded", "false");
    }));
    const navResizeObserver = new ResizeObserver(() => {
      if (matchMedia("(max-width: 60rem)").matches) return;
      $("#mobile-nav").hidden = true;
      $("#menu-button").setAttribute("aria-expanded", "false");
    });
    navResizeObserver.observe(document.documentElement);
    $("#today-test").addEventListener("click", () => startQuiz("today"));
    $("#progress-check").addEventListener("click", () => startQuiz("progress"));
    $("#initial-test").addEventListener("click", () => startQuiz("diagnostic"));
    $("#revise-weakest").addEventListener("click", () => {
      const next = weakestOutcome();
      if (next) openStudy(next.subject);
    });
    $("#repeat-diagnostic").addEventListener("click", () => startQuiz("diagnostic"));
    $("#back-to-subjects").addEventListener("click", () => { location.hash = "subjects"; });
    $("#grade-switch").addEventListener("change", event => renderSubjects(Number(event.target.value)));
    $("#close-quiz").addEventListener("click", closeQuiz);
    $("#quiz-dialog").addEventListener("cancel", event => {
      event.preventDefault();
      closeQuiz();
    });
    $("#quiz-dialog").addEventListener("click", event => {
      if (event.target === $("#quiz-dialog")) closeQuiz();
    });
    $("#source-button").addEventListener("click", () => $("#source-dialog").showModal());
    $$('[data-close-dialog]').forEach(button => button.addEventListener("click", () => $(`#${button.dataset.closeDialog}`).close()));
    $("#open-resume").addEventListener("click", () => {
      $("#setup-dialog").close();
      $("#resume-dialog").showModal();
    });
    $("#back-to-setup").addEventListener("click", () => {
      $("#resume-dialog").close();
      $("#setup-dialog").showModal();
    });
    $("#resume-dialog").addEventListener("cancel", event => {
      event.preventDefault();
      $("#resume-dialog").close();
      $("#setup-dialog").showModal();
    });
    $("#resume-form").addEventListener("submit", async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const submit = $("#resume-submit");
      submit.disabled = true;
      submit.dataset.state = "loading";
      $("#resume-error").textContent = "";
      try {
        const response = await fetch("/api/student/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ familyCode: form.get("familyCode"), pin: form.get("pin") })
        });
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "The learner record could not be resumed.");
        $("#resume-dialog").close();
        activateLearner(body.state);
      } catch (error) {
        $("#resume-error").textContent = error.message;
      } finally {
        submit.disabled = false;
        delete submit.dataset.state;
      }
    });
    $("#setup-form").addEventListener("submit", async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const submit = $("#setup-submit");
      submit.disabled = true;
      submit.dataset.state = "loading";
      $("#setup-error").textContent = "";
      try {
        const response = await fetch("/api/learners", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: String(form.get("name")).trim(),
            grade: Number(form.get("grade")),
            pin: String(form.get("pin"))
          })
        });
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "The learner profile could not be created.");
        activateLearner(body.state);
        localStorage.removeItem(STORAGE_KEY);
        $("#setup-dialog").close();
        showToast(`Parent access code: ${state.profile.familyCode}`);
        startQuiz("diagnostic");
      } catch (error) {
        $("#setup-error").textContent = error.message;
      } finally {
        submit.disabled = false;
        delete submit.dataset.state;
      }
    });
  }

  async function init() {
    $("#today-label").textContent = new Intl.DateTimeFormat("en-CA", { weekday: "long", month: "long", day: "numeric" }).format(new Date()).toUpperCase();
    populateGradeSelects();
    bindEvents();
    try {
      state = await loadState();
    } catch (error) {
      $("#setup-error").textContent = error.message;
      showToast(error.message);
    }
    renderChrome();
    route();
    setupFirstVisit();
  }

  init();
}());
