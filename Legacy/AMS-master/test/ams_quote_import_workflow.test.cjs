const test = require('node:test');
const assert = require('node:assert/strict');

const {
  classifyBinderImportWorkflow,
} = require('../ams_quote_import_workflow.js');

test('classifies a current-effective binder that starts on the previous policy expiry as a renewal prompt', () => {
  const result = classifyBinderImportWorkflow({
    importedEffectiveDate: '2026-03-31',
    importedTermMonths: 12,
    today: '2026-03-31',
    existingPolicies: [
      {
        policy_number: 'OLD-1',
        effective_date: '2025-03-31',
        expiry_date: '2026-03-31',
      },
    ],
  });

  assert.equal(result.shouldPrompt, true);
  assert.equal(result.isHistorical, true);
  assert.equal(result.isRenewal, true);
  assert.equal(result.isRemarket, true);
  assert.equal(result.referencePolicy.policy_number, 'OLD-1');
});

test('classifies a recently expired policy as a remarket prompt even when it is not a renewal', () => {
  const result = classifyBinderImportWorkflow({
    importedEffectiveDate: '2026-03-25',
    importedTermMonths: 6,
    today: '2026-03-31',
    existingPolicies: [
      {
        policy_number: 'OLD-2',
        effective_date: '2025-09-15',
        expiry_date: '2026-03-10',
      },
    ],
  });

  assert.equal(result.shouldPrompt, true);
  assert.equal(result.isHistorical, true);
  assert.equal(result.isRenewal, false);
  assert.equal(result.isRemarket, true);
});

test('does not prompt for historical imports that do not look like renewal or remarket work', () => {
  const result = classifyBinderImportWorkflow({
    importedEffectiveDate: '2025-01-01',
    importedTermMonths: 12,
    today: '2026-03-31',
    existingPolicies: [
      {
        policy_number: 'OLD-3',
        effective_date: '2023-01-01',
        expiry_date: '2024-01-01',
      },
    ],
  });

  assert.equal(result.shouldPrompt, false);
  assert.equal(result.isHistorical, true);
  assert.equal(result.isRenewal, false);
  assert.equal(result.isRemarket, false);
});

test('does not prompt for future-effective binder imports', () => {
  const result = classifyBinderImportWorkflow({
    importedEffectiveDate: '2026-04-15',
    importedTermMonths: 12,
    today: '2026-03-31',
    existingPolicies: [
      {
        policy_number: 'OLD-4',
        effective_date: '2025-04-15',
        expiry_date: '2026-04-15',
      },
    ],
  });

  assert.equal(result.shouldPrompt, false);
  assert.equal(result.isHistorical, false);
  assert.equal(result.isRenewal, true);
  assert.equal(result.isRemarket, true);
});
