const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function loadQuoteImportParser() {
  const parserPath = path.join(__dirname, '..', 'ams_quote_import_parser.js');
  const source = fs.readFileSync(parserPath, 'utf8');

  const state = {};
  const context = {
    console,
    Date,
    Math,
    JSON,
    Number,
    String,
    Boolean,
    RegExp,
    Array,
    Object,
    Promise,
    Uint8Array,
    URL,
    document: {
      getElementById() {
        return { value: '', textContent: '' };
      },
    },
    window: {
      AMSQuoteImportState: state,
      setParseStatus() {},
      renderPreview() {},
      matchClient() {},
      renderMatchBanner() {},
      showToast() {},
      _t(key, value) {
        return value == null ? key : `${key}:${value}`;
      },
    },
  };
  context.window.window = context.window;
  context.globalThis = context.window;

  vm.createContext(context);
  vm.runInContext(source, context, { filename: parserPath });
  return context.window;
}

test('quote parser captures both primary and secondary driver details when driver 2 is present', () => {
  const parser = loadQuoteImportParser();
  const raw = [
    'Policy Information',
    'Intact',
    'Driver 1 of 2 | Mr John Smith',
    '01/02/1980 Birth Date',
    'A12345678 Licence Number',
    'G Licence Class',
    'Driver 2 of 2 | Mrs Jane Smith',
    '03/04/1982 Birth Date',
    'B87654321 Licence Number',
    'G2 Licence Class',
    'Effective Date 01/01/2026',
    'Annual Premium 1,234',
  ].join('\n');

  parser.parseQuoteFromText(raw, { source: 'paste' });

  assert.equal(parser.AMSQuoteImportState.parsed.driver.license_number, 'A12345678');
  assert.equal(parser.AMSQuoteImportState.parsed.secondary_driver.name, 'Jane Smith');
  assert.equal(parser.AMSQuoteImportState.parsed.secondary_driver.license_number, 'B87654321');
  assert.equal(parser.AMSQuoteImportState.parsed.secondary_driver.license_class, 'G2');
});
