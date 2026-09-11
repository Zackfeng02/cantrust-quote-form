const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getTaskWorkflowStep,
  isNewPolicyEntryTask,
  buildWorkflowTitle,
  getNextBinderNumber,
} = require('../ams_task_workflow.js');

test('maps legacy Chinese renewal titles to stable workflow steps', () => {
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '取消旧保单 - ABC' }), 'cancel_old_policy');
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '取消保单 - ABC' }), 'cancel_policy');
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '新保单出单签字 - ABC' }), 'new_policy_sign');
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '新保单录单 - ABC', new_insurer: 'Intact' }), 'new_policy_entry');
});

test('maps English renewal titles to the same workflow steps', () => {
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '[Renewal] Cancel Old Policy - ABC' }), 'cancel_old_policy');
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '[Cancel Policy] ABC - P123' }), 'cancel_policy');
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '[Renewal] New Policy Sign - ABC' }), 'new_policy_sign');
  assert.equal(getTaskWorkflowStep({ task_type: 'renewal_workflow', title: '[Renewal] New Policy Entry - ABC', new_insurer: 'Intact' }), 'new_policy_entry');
});

test('prefers the explicit workflow_step over title inference', () => {
  assert.equal(
    getTaskWorkflowStep({
      task_type: 'renewal_workflow',
      workflow_step: 'new_policy_entry',
      title: '取消旧保单 - ABC',
    }),
    'new_policy_entry'
  );
});

test('detects entry tasks without relying on localized title text', () => {
  assert.equal(isNewPolicyEntryTask({ workflow_step: 'new_policy_entry', title: 'anything' }), true);
  assert.equal(isNewPolicyEntryTask({ title: '新保单录单 - ABC', new_insurer: 'Intact' }), true);
  assert.equal(isNewPolicyEntryTask({ title: '[Renewal] New Policy Sign - Intact', new_insurer: 'Intact' }), false);
});

test('builds English titles from workflow steps', () => {
  assert.equal(buildWorkflowTitle('cancel_old_policy', 'Intact'), '[Renewal] Cancel Old Policy - Intact');
  assert.equal(buildWorkflowTitle('cancel_policy', 'Intact - P123'), '[Cancel Policy] Intact - P123');
  assert.equal(buildWorkflowTitle('new_policy_sign', 'Aviva'), '[Renewal] New Policy Sign - Aviva');
  assert.equal(buildWorkflowTitle('new_policy_entry', 'Aviva'), '[Renewal] New Policy Entry - Aviva');
});

test('generates the first binder number when none exist', () => {
  assert.equal(getNextBinderNumber([]), 'BIND000001');
});

test('increments from the highest existing binder number', () => {
  assert.equal(
    getNextBinderNumber(['BIND000001', 'BIND000127', 'POL123', 'BINDER-45']),
    'BIND000128'
  );
});
