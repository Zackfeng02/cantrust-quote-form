const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

test('all inline html scripts compile without syntax errors', () => {
  const rootDir = path.join(__dirname, '..');
  const htmlFiles = fs.readdirSync(rootDir).filter((file) => file.endsWith('.html'));
  const failures = [];

  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(rootDir, file), 'utf8');
    const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]
      .map((match) => match[1])
      .filter((script) => script.trim().length > 0);

    scripts.forEach((script, index) => {
      try {
        new vm.Script(script, { filename: `${file}#script${index + 1}` });
      } catch (error) {
        failures.push(`${file}#script${index + 1}: ${error.message}`);
      }
    });
  }

  assert.deepEqual(failures, []);
});
