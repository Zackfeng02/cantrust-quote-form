const test = require('node:test');
const assert = require('node:assert/strict');

const {
  pickPolicyHeaderPremiumSource,
} = require('../ams_policy_premium_display.js');

test('prefers the latest premium history row for the policy header', () => {
  const result = pickPolicyHeaderPremiumSource(
    {
      premium_amount: 1800,
      payment_type: 'annual',
    },
    [
      {
        effective_date: '2026-01-01',
        expiry_date: '2026-12-31',
        premium_amount: 1900,
        payment_type: 'annual',
      },
      {
        effective_date: '2027-01-01',
        expiry_date: '2027-12-31',
        premium_amount: 2100,
        payment_type: 'monthly',
      },
    ],
    '2026-06-01'
  );

  assert.equal(result.premium_amount, 2100);
  assert.equal(result.payment_type, 'monthly');
});

test('falls back to the current premium history row when it is also the latest record', () => {
  const result = pickPolicyHeaderPremiumSource(
    {
      premium_amount: 1800,
      payment_type: 'annual',
    },
    [
      {
        effective_date: '2026-01-01',
        expiry_date: '2026-12-31',
        premium_amount: 1900,
        payment_type: 'monthly',
      },
    ],
    '2026-06-01'
  );

  assert.equal(result.premium_amount, 1900);
  assert.equal(result.payment_type, 'monthly');
});

test('falls back to policy fields when no premium history exists', () => {
  const result = pickPolicyHeaderPremiumSource(
    {
      premium_amount: 1750,
      payment_type: 'annual',
    },
    [],
    '2026-06-01'
  );

  assert.equal(result.premium_amount, 1750);
  assert.equal(result.payment_type, 'annual');
});
