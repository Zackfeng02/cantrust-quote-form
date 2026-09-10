const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('html pages do not contain common mojibake markers in visible text', () => {
  const root = path.join(__dirname, '..');
  const files = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
  const badSnippets = [
    'AMS 路',
    'AMS<span>路</span>',
    ' 路 ',
    '脳',
    '梅',
    '鈫?',
    '锛?',
    '鈥?/button>',
    '鈥?/option>',
    '鈥?/div>',
    'Loading鈥?',
    '馃',
    '鉁?',
    '鈽?',
    '鈿?',
    '鈴?',
    'Լ',
  ];
  const failures = [];

  for (const file of files) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    for (const snippet of badSnippets) {
      if (text.includes(snippet)) {
        failures.push(`${file}: ${snippet}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});
