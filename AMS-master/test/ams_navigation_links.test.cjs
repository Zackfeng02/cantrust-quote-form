const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.join(__dirname, '..');
const dashboardHtml = fs.readFileSync(path.join(rootDir, 'ams_dashboard.html'), 'utf8');

test('dashboard links to the new operations pages', () => {
  assert.match(dashboardHtml, /href="ams_import_archive\.html"/);
  assert.match(dashboardHtml, /href="ams_data_sweeper\.html"/);
  assert.match(dashboardHtml, /href="ams_delete_center\.html"/);
});

test('local html pages use an existing favicon asset', () => {
  const htmlFiles = fs.readdirSync(rootDir).filter((name) => name.endsWith('.html'));

  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(rootDir, file), 'utf8');
    const iconMatch = html.match(/<link\s+rel="icon"\s+href="([^"]+)"/i);

    if (!iconMatch) continue;

    const assetPath = path.join(rootDir, iconMatch[1]);
    assert.equal(
      fs.existsSync(assetPath),
      true,
      `${file} points to a missing favicon asset: ${iconMatch[1]}`
    );
  }
});
