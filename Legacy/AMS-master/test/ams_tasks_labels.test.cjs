const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'ams_tasks.html'), 'utf8');

test('tasks page shows the renamed renewal workflow labels', () => {
  assert.match(html, /Pending Data Entry/);
  assert.match(html, /Annual Pay Reminder/);
  assert.match(html, /App Install Reminder/);
  assert.doesNotMatch(html, />Pending Entry</);
  assert.doesNotMatch(html, />Annual Tracking</);
  assert.doesNotMatch(html, />App Install Progress</);
});

test('tasks page no longer asks for a new policy number during renewal data entry completion', () => {
  assert.doesNotMatch(html, /Please enter the new policy number/);
  assert.match(html, /BIND000001/);
});
