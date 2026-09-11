const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function createStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem(key) {
      return data.has(key) ? data.get(key) : null;
    },
    setItem(key, value) {
      data.set(key, String(value));
    },
    removeItem(key) {
      data.delete(key);
    },
  };
}

function loadBootstrapContext({ local = {}, session = {} } = {}) {
  const scriptPath = path.join(__dirname, '..', 'ams_bootstrap.js');
  const script = fs.readFileSync(scriptPath, 'utf8');
  const appendedScripts = [];

  const context = {
    console,
    window: {},
    localStorage: createStorage(local),
    sessionStorage: createStorage(session),
    document: {
      createElement(tagName) {
        return {
          tagName,
          async: false,
          src: '',
          onload: null,
          onerror: null,
        };
      },
      head: {
        appendChild(node) {
          appendedScripts.push(node);
        },
      },
    },
  };
  context.window = context;

  vm.createContext(context);
  vm.runInContext(script, context, { filename: scriptPath });

  return { context, appendedScripts };
}

test('AMSBootstrap.getCredentials returns stored credentials without loading local-config.js', async () => {
  const { context, appendedScripts } = loadBootstrapContext({
    local: {
      ams_url: 'https://example.supabase.co',
      ams_key: 'example-key',
    },
  });

  const creds = await context.AMSBootstrap.getCredentials();

  assert.deepEqual(
    JSON.parse(JSON.stringify(creds)),
    { url: 'https://example.supabase.co', key: 'example-key' }
  );
  assert.equal(appendedScripts.length, 0);
});

test('AMSBootstrap.getCredentials falls back to loading local-config.js when storage is empty', async () => {
  const { context, appendedScripts } = loadBootstrapContext();
  const credentialsPromise = context.AMSBootstrap.getCredentials();

  assert.equal(appendedScripts.length, 1);
  assert.equal(appendedScripts[0].src, 'local-config.js');

  context.window.AMS_LOCAL_CONFIG = {
    SUPABASE_URL: 'https://fallback.supabase.co',
    SUPABASE_ANON_KEY: 'fallback-key',
  };
  appendedScripts[0].onload();

  const creds = await credentialsPromise;
  assert.deepEqual(
    JSON.parse(JSON.stringify(creds)),
    { url: 'https://fallback.supabase.co', key: 'fallback-key' }
  );
});
