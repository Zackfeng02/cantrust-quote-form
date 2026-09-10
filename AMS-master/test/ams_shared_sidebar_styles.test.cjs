const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');
const targets = ['ams_quotes.html', 'ams_import_quote.html', 'ams_renewal.html'];

for (const file of targets) {
  test(`${file} uses the standard shared sidebar visual rules`, () => {
    const html = fs.readFileSync(path.join(rootDir, file), 'utf8');
    assert.match(html, /\.sidebar-logo\{padding:28px 24px 24px;/);
    assert.match(html, /\.nav-item\.active \.nav-icon\s*\{\s*color:var\(--accent\);/);
    assert.match(html, /\.nav-section-label\{font-size:10px;color:var\(--text-3\);/);
  });
}
