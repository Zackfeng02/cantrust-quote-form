(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
    return;
  }
  root.AMSTaskWorkflow = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  const VALID_STEPS = new Set([
    'cancel_old_policy',
    'cancel_policy',
    'new_policy_sign',
    'new_policy_entry',
    'confirm_app_install',
  ]);

  const TITLE_RULES = [
    { step: 'cancel_old_policy', patterns: ['取消旧保单', 'Cancel Old Policy'] },
    { step: 'cancel_policy', patterns: ['取消保单', '[Cancel Policy]', 'Cancel Policy'] },
    { step: 'new_policy_sign', patterns: ['新保单出单签字', 'New Policy Sign'] },
    { step: 'new_policy_entry', patterns: ['新保单录单', '录单', 'New Policy Entry'] },
    { step: 'confirm_app_install', patterns: ['安装app', '月付计划确认', 'Confirm App Install / Monthly Payment Plan'] },
  ];

  function normalizeString(value) {
    return String(value || '').trim();
  }

  function includesAny(text, patterns) {
    return patterns.some((pattern) => text.includes(pattern));
  }

  function normalizeWorkflowStep(step) {
    const normalized = normalizeString(step);
    return VALID_STEPS.has(normalized) ? normalized : null;
  }

  function getTaskWorkflowStep(task) {
    if (!task) return null;

    const explicitStep = normalizeWorkflowStep(task.workflow_step);
    if (explicitStep) return explicitStep;

    if (task.task_type && task.task_type !== 'renewal_workflow') return null;

    const title = normalizeString(task.title);
    if (!title) return null;

    for (const rule of TITLE_RULES) {
      if (rule.step === 'cancel_policy' && title.includes('取消旧保单')) continue;
      if (rule.step === 'cancel_policy' && title.includes('Cancel Old Policy')) continue;
      if (includesAny(title, rule.patterns)) return rule.step;
    }

    return null;
  }

  function isNewPolicyEntryTask(task) {
    return getTaskWorkflowStep(task) === 'new_policy_entry';
  }

  function buildWorkflowTitle(step, detail) {
    const suffix = normalizeString(detail);
    const tail = suffix ? ` - ${suffix}` : '';

    switch (step) {
      case 'cancel_old_policy':
        return `[Renewal] Cancel Old Policy${tail}`;
      case 'cancel_policy':
        return `[Cancel Policy]${suffix ? ` ${suffix}` : ''}`;
      case 'new_policy_sign':
        return `[Renewal] New Policy Sign${tail}`;
      case 'new_policy_entry':
        return `[Renewal] New Policy Entry${tail}`;
      case 'confirm_app_install':
        return `[Renewal] Confirm App Install / Monthly Payment Plan${tail}`;
      default:
        return suffix;
    }
  }

  function getNextBinderNumber(policyNumbers) {
    let max = 0;

    for (const value of policyNumbers || []) {
      const match = normalizeString(value).match(/^BIND(\d{6})$/);
      if (!match) continue;
      const numeric = Number(match[1]);
      if (numeric > max) max = numeric;
    }

    return `BIND${String(max + 1).padStart(6, '0')}`;
  }

  return {
    VALID_STEPS,
    buildWorkflowTitle,
    getNextBinderNumber,
    getTaskWorkflowStep,
    isNewPolicyEntryTask,
    normalizeWorkflowStep,
  };
});
