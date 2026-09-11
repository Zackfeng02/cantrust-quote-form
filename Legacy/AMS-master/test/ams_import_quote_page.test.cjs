const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const htmlPath = path.join(__dirname, '..', 'ams_import_quote.html');
const i18nPath = path.join(__dirname, '..', 'ams_i18n.js');
const parserPath = path.join(__dirname, '..', 'ams_quote_import_parser.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const i18n = fs.readFileSync(i18nPath, 'utf8');
const parser = fs.readFileSync(parserPath, 'utf8');

test('quote import page uses the bundled non-module PDF.js assets', () => {
  assert.match(html, /<script\s+src="\.\/vendor\/pdfjs\/pdf\.bundle\.js"><\/script>/);
  assert.match(html, /<script\s+src="\.\/vendor\/pdfjs\/pdf\.worker\.bundle\.js"><\/script>/);
  assert.match(html, /window\.pdfjsWorker = window\.pdfjsWorker \|\| window\.pdfjsWorkerBundle;/);
});

test('quote import title is marked for HTML-aware translation', () => {
  assert.match(html, /class="page-title"[^>]*data-i18n="import_page_title"[^>]*data-i18n-html="true"/);
});

test('shared translator supports HTML translation targets', () => {
  assert.match(i18n, /dataset\.i18nHtml\s*===\s*['"]true['"]/);
});

test('quote import parser still guards against missing PDF.js at runtime', () => {
  assert.match(parser, /if \(!window\.pdfjsLib\)/);
  assert.match(parser, /if \(window\.ensurePdfJsWorker\) window\.ensurePdfJsWorker\(\);/);
});
