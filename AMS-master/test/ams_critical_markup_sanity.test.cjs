const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('critical login pages do not contain malformed placeholder attributes', () => {
  const files = ['ams_clients.html', 'ams_policies.html', 'ams_tasks.html'];
  const failures = [];

  for (const file of files) {
    const text = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    const matches = [...text.matchAll(/placeholder=\"[^\"]*鈥\?>/g)];
    for (const match of matches) {
      failures.push(`${file}: ${match[0]}`);
    }
  }

  assert.deepEqual(failures, []);
});
