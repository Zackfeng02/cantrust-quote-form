const test = require('node:test');
const assert = require('node:assert/strict');

const {
  buildInsurerOptionList,
} = require('../ams_policy_insurer_options.js');

test('preserves an existing plain-text insurer that is not in the canned list', () => {
  const options = buildInsurerOptionList(
    ['Intact - INTACT', 'Aviva - AVIVA'],
    'Intact'
  );

  assert.deepEqual(options, ['Intact', 'Intact - INTACT', 'Aviva - AVIVA']);
});

test('does not duplicate an insurer already present in the options list', () => {
  const options = buildInsurerOptionList(
    ['Intact', 'Aviva'],
    'Intact'
  );

  assert.deepEqual(options, ['Intact', 'Aviva']);
});
