(function () {
  "use strict";

  const DATA = window.MapleQuestData;
  const EVIDENCE = window.MapleQuestAssessment;
  const $ = selector => document.querySelector(selector);
  let state = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[char]));
  }

  async function request(url, options = {}) {
    const response = await fetch(url, {
      ...options,
      headers: { Accept: "application/json", ...(options.headers || {}) }
    });
    const body = await response.json();
    if (!response.ok) {
      const error = new Error(body.error || "The parent report could not be loaded.");
      error.status = response.status;
      throw error;
    }
    return body;
  }

  function subjectResult(subject) {
    return EVIDENCE.subjectEvidence(state, DATA.curriculum, state.profile.grade, subject);
  }

  function overall() {
    return EVIDENCE.overallEvidence(state, DATA.curriculum, DATA.subjects, state.profile.grade);
  }

  function subjectMeta(subject) {
    return DATA.subjectMeta(subject, state.profile.grade);
  }

  function renderDashboard() {
    const profile = state.profile;
    const summary = overall();
    const evidenceFamilies = Object.keys(DATA.subjects).reduce((total, subject) =>
      total + subjectResult(subject).results.reduce((sum, result) => sum + result.families, 0), 0);
    $("#parent-title").textContent = `${profile.name}’s Grade ${profile.grade} learning picture`;
    $("#parent-context").textContent = `${DATA.jurisdiction.name} · ${DATA.jurisdiction.frameworkNote}`;
    $("#analytics-summary").innerHTML = `
      <article class="summary-main"><span>Accuracy in mapped checks</span><strong>${summary.score === null ? "—" : `${summary.score}%`}</strong><small>Current evidence, not a report-card grade</small></article>
      <article><span>Ontario groups sampled</span><strong>${summary.assessed} / ${summary.total}</strong><small>${evidenceFamilies} distinct task ${evidenceFamilies === 1 ? "family" : "families"} counted</small></article>
      <article><span>Consistent evidence</span><strong>${summary.consistent} / ${summary.total}</strong><small>3+ distinct task families across 2+ days, with 75%+ accuracy</small></article>
      <article><span>Completed tests</span><strong>${(state.sessions || []).filter(session => session.completed).length}</strong><small>Since ${new Intl.DateTimeFormat("en-CA", { month: "short", day: "numeric", year: "numeric" }).format(new Date(profile.created))}</small></article>`;

    $("#subject-analytics").innerHTML = Object.keys(DATA.subjects).map(subject => {
      const meta = subjectMeta(subject);
      const result = subjectResult(subject);
      const width = result.score === null ? 0 : result.score;
      const progressValue = result.score === null
        ? 'aria-valuetext="No assessed answers yet"'
        : `aria-valuenow="${result.score}"`;
      return `<article class="analytics-row tone-${meta.colour}">
        <header><div><h3>${escapeHtml(meta.name)}</h3><p>${result.consistent} consistent · ${result.assessed} sampled · ${result.outcomes.length} mapped Ontario groups</p></div><strong>${result.score === null ? "—" : `${result.score}%`}</strong></header>
        <div class="mastery-track" role="progressbar" aria-label="${escapeHtml(meta.name)} recent accuracy" aria-valuemin="0" aria-valuemax="100" ${progressValue}><i style="--value:${width}%"></i></div>
        <div class="expectation-list">${result.outcomes.map((outcome, index) => {
          const evidence = result.results[index];
          const mapping = `Ontario strand${outcome.strandIds.length === 1 ? "" : "s"} ${outcome.strandIds.join(" + ")} · ${outcome.expectationIds.join(", ")}`;
          return `<div><i class="status-${evidence.status}" aria-hidden="true"></i><span><strong>${escapeHtml(outcome.title)}</strong><small>${escapeHtml(outcome.learn)}</small><small class="expectation-map">${escapeHtml(mapping)}</small></span><em>${escapeHtml(evidence.label)}${evidence.families ? ` · ${evidence.families} ${evidence.families === 1 ? "family" : "families"} · ${evidence.days} ${evidence.days === 1 ? "day" : "days"}` : ""}</em></div>`;
        }).join("")}</div>
      </article>`;
    }).join("");

    const steps = Object.keys(DATA.subjects).flatMap(subject => {
      const meta = subjectMeta(subject);
      const result = subjectResult(subject);
      return result.outcomes.map((outcome, index) => ({ subject, meta, outcome, result: result.results[index] }));
    }).sort((a, b) => {
      const order = { starting: 0, unseen: 1, building: 2, consistent: 3 };
      return order[a.result.status] - order[b.result.status] || a.result.evidence - b.result.evidence;
    }).slice(0, 4);
    $("#next-steps").innerHTML = steps.map((step, index) => `<article class="next-step tone-${step.meta.colour}"><span>${index + 1}</span><div><strong>${escapeHtml(step.outcome.title)}</strong><p>${escapeHtml(step.outcome.tip)}</p><small>${escapeHtml(step.meta.name)} · ${escapeHtml(step.result.label)}</small></div></article>`).join("");

    const sessions = [...(state.sessions || [])].filter(session => session.completed).reverse().slice(0, 6);
    $("#test-history").innerHTML = sessions.length ? sessions.map(session => `<article class="history-row"><div><strong>${({ today: "Test for Today", diagnostic: "Check-in", progress: "Progress Check", subject: "Subject test", practice: "Practice" })[session.mode] || "Test"}</strong><span>${new Intl.DateTimeFormat("en-CA", { month: "short", day: "numeric" }).format(new Date(session.date))}</span></div><strong>${session.score}%</strong><small>${session.correct} / ${session.total} correct</small></article>`).join("") : `<div class="empty-report"><strong>No completed tests yet.</strong><p>Ask ${escapeHtml(profile.name)} to finish the first check-in. Results will appear here.</p></div>`;
  }

  function unlock(shouldFocus = true) {
    $("#parent-lock").hidden = true;
    $("#parent-dashboard").hidden = false;
    renderDashboard();
    if (shouldFocus) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      $("#parent-title").focus({ preventScroll: true });
    }
  }

  function showLock() {
    $("#parent-dashboard").hidden = true;
    $("#parent-lock").hidden = false;
    $("#pin-input").value = "";
    $("#family-code-input").focus();
  }

  $("#pin-form").addEventListener("submit", async event => {
    event.preventDefault();
    const submit = event.currentTarget.querySelector("button[type=submit]");
    submit.disabled = true;
    submit.dataset.state = "loading";
    $("#pin-error").textContent = "";
    try {
      const body = await request("/api/parent/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          familyCode: $("#family-code-input").value,
          pin: $("#pin-input").value
        })
      });
      state = body.state;
      $("#pin-input").removeAttribute("aria-invalid");
      unlock();
    } catch (error) {
      $("#pin-input").setAttribute("aria-invalid", "true");
      $("#pin-error").textContent = error.message;
    } finally {
      submit.disabled = false;
      delete submit.dataset.state;
    }
  });

  $("#lock-dashboard").addEventListener("click", async () => {
    try {
      await request("/api/parent/logout", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
    } finally {
      state = null;
      showLock();
    }
  });
  $("#print-report").addEventListener("click", () => window.print());

  async function init() {
    try {
      state = (await request("/api/parent/state")).state;
      unlock(false);
    } catch (error) {
      if (error.status !== 401) $("#pin-error").textContent = error.message;
    }
  }

  init();
}());
