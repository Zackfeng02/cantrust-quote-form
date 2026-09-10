const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function createElement(tagName = 'div') {
  return {
    tagName,
    children: [],
    className: '',
    textContent: '',
    value: '',
    innerHTML: '',
    style: {},
    classList: {
      add() {},
      remove() {},
    },
    appendChild(child) {
      this.children.push(child);
    },
    append(...children) {
      this.children.push(...children);
    },
  };
}

function loadQuoteImportUi() {
  const uiPath = path.join(__dirname, '..', 'ams_quote_import_ui.js');
  const source = fs.readFileSync(uiPath, 'utf8');

  const elements = new Map();
  const ids = [
    'p-name', 'p-phone', 'p-email', 'p-address', 'p-year', 'p-make', 'p-model', 'p-vin',
    'p-body', 'p-fuel-use', 'p-dob', 'p-license', 'p-license-class', 'p-training',
    'p-carrier', 'p-premium', 'p-effective', 'p-term', 'ph-carrier', 'ph-detail',
    'ph-premium', 'ph-term', 'cov-tbody', 'paste-card', 'preview-section',
    'parse-status', 'pdf-status', 'match-banner-wrap', 'toast', 'paste-area', 'pdf-file'
  ];
  ids.forEach((id) => elements.set(id, createElement()));

  const state = {
    parsed: null,
    matchedClient: null,
    importMode: 'binder',
    selectedPolicyId: null,
    clientPolicies: [],
  };

  const context = {
    console,
    setTimeout,
    clearTimeout,
    localStorage: {
      getItem() { return 'en'; },
    },
    document: {
      getElementById(id) {
        if (!elements.has(id)) elements.set(id, createElement());
        return elements.get(id);
      },
      createElement,
    },
    window: {
      AMSQuoteImportState: state,
      updateCreateButton() {},
      confirm() { return true; },
    },
  };
  context.window.window = context.window;
  context.globalThis = context.window;
  context.window.document = context.document;
  context.window.localStorage = context.localStorage;
  context.window.setTimeout = setTimeout;
  context.window.clearTimeout = clearTimeout;

  vm.createContext(context);
  vm.runInContext(source, context, { filename: uiPath });
  return { window: context.window, elements, state };
}

test('renderPreview uses an ASCII-safe placeholder for coverages without limit or deductible', () => {
  const { window, elements, state } = loadQuoteImportUi();
  state.parsed = {
    client: {},
    vehicle: {},
    driver: {},
    policy: { carrier: 'Intact', effective_date: '2026-01-01', term_months: 12, total_premium: 1234 },
    coverages: [
      { name: 'Uninsured Automobile', limit: null, deductible: null, premium: '45' },
      { name: 'Responsible Driver Guarantee', limit: null, deductible: null, premium: '12' },
    ],
  };

  window.renderPreview();

  const rows = elements.get('cov-tbody').children;
  assert.equal(rows.length, 2);
  assert.equal(rows[0].children[1].textContent, '-');
  assert.equal(rows[1].children[1].textContent, '-');
});
