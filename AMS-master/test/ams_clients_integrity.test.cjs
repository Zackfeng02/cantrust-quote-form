const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const clientsPath = path.join(__dirname, '..', 'ams_clients.html');
const html = fs.readFileSync(clientsPath, 'utf8');

test('ams_clients.html does not contain corrupted closing tags', () => {
  const brokenTagPatterns = [
    /\?\/div>/,
    /\?\/span>/,
    /\?\/label>/,
    /\?\/button>/,
  ];

  for (const pattern of brokenTagPatterns) {
    assert.equal(pattern.test(html), false, `unexpected broken tag pattern: ${pattern}`);
  }
});

test('ams_clients.html uses shared translation helpers without duplicate local overrides', () => {
  assert.equal((html.match(/function applyLang\(/g) || []).length, 0);
  assert.equal((html.match(/applyLang = function\(/g) || []).length, 0);
  assert.equal((html.match(/function toggleLang\(/g) || []).length, 0);
  assert.equal((html.match(/toggleLang = function\(/g) || []).length, 0);
  assert.equal(html.includes('const I18N = {'), false);
});
