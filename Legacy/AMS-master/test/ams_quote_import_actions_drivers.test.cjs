const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function loadQuoteImportActions() {
  const actionsPath = path.join(__dirname, '..', 'ams_quote_import_actions.js');
  const source = fs.readFileSync(actionsPath, 'utf8');

  const state = {
    parsed: {
      driver: {
        name: 'John Smith',
      },
      secondary_driver: {
        name: 'Jane Smith',
        license_number: 'B87654321',
        dob: '1982-03-04',
      },
      coverages: [],
    },
  };

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
    crypto: {
      randomUUID() { return '00000000-0000-0000-0000-000000000000'; },
    },
    document: {
      getElementById() {
        return { value: '', textContent: '', disabled: false };
      },
      querySelector() {
        return null;
      },
      addEventListener() {},
    },
    window: {
      AMSQuoteImportState: state,
      readQuoteImportFormSnapshot() {
        return {
          make: 'Toyota',
          model: 'Corolla',
          year: '2020',
          vin: 'VIN123',
          license: 'A12345678',
          dob: '1980-01-02',
          body: '',
          fuelUse: '',
        };
      },
    },
  };
  context.window.window = context.window;
  context.globalThis = context.window;
  context.window.document = context.document;
  context.window.crypto = context.crypto;

  vm.createContext(context);
  vm.runInContext(source, context, { filename: actionsPath });
  return context.window;
}

test('buildExtraFields persists primary and secondary driver data from quote import', () => {
  const actions = loadQuoteImportActions();
  const fields = actions.buildExtraFields('Fallback Name');

  assert.equal(fields.primary_driver.name, 'John Smith');
  assert.equal(fields.primary_driver.license, 'A12345678');
  assert.equal(fields.secondary_driver.name, 'Jane Smith');
  assert.equal(fields.secondary_driver.license, 'B87654321');
  assert.equal(fields.secondary_driver.dob, '1982-03-04');
});
