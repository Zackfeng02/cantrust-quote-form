const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

function loadDeleteCenterHelpers() {
  const htmlPath = path.join(__dirname, '..', 'ams_delete_center.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1])
    .filter((script) => script.trim().length > 0);

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
    URLSearchParams,
    setTimeout,
    clearTimeout,
    document: {
      addEventListener() {},
      querySelectorAll() {
        return [];
      },
    },
    window: null,
    globalThis: null,
  };
  context.window = context;
  context.globalThis = context;

  vm.createContext(context);
  for (const script of scripts) {
    vm.runInContext(script, context, { filename: htmlPath });
  }

  return context;
}

test('isTypedConfirmationValid trims and normalizes case', () => {
  const { isTypedConfirmationValid } = loadDeleteCenterHelpers();

  assert.equal(isTypedConfirmationValid('DELETE BATCH', '  delete batch  '), true);
  assert.equal(isTypedConfirmationValid('DELETE BATCH', 'delete center'), false);
});

test('canPurgeBatch allows archived batches whose retention has elapsed', () => {
  const { canPurgeBatch } = loadDeleteCenterHelpers();
  const now = new Date('2026-04-02T12:00:00.000Z');

  assert.equal(
    canPurgeBatch(
      { status: 'archived', retentionUntil: '2026-04-01T00:00:00.000Z' },
      now
    ),
    true
  );
  assert.equal(
    canPurgeBatch(
      { status: 'archived', retentionUntil: '2026-04-03T00:00:00.000Z' },
      now
    ),
    false
  );
});

test('normalizePreviewSummary coerces missing counts to zero and trims scope', () => {
  const { normalizePreviewSummary } = loadDeleteCenterHelpers();
  const normalized = JSON.parse(
    JSON.stringify(
      normalizePreviewSummary({
        scope: ' policy ',
        client_count: '2',
        policy_count: '5',
        policy_change_count: undefined,
        task_count: '0',
        quote_count: '1',
        quote_import_count: '3',
        premium_count: null,
        retention_days: '7',
      })
    )
  );

  assert.deepEqual(normalized, {
    scope: 'policy',
    clientCount: 2,
    policyCount: 5,
    policyChangeCount: 0,
    taskCount: 0,
    quoteCount: 1,
    quoteImportCount: 3,
    premiumCount: 0,
    retentionDays: 7,
  });
});

test('statusLabelForBatch maps workflow statuses to user-facing labels', () => {
  const { statusLabelForBatch } = loadDeleteCenterHelpers();

  assert.equal(statusLabelForBatch({ status: 'archived' }), 'Pending Purge');
  assert.equal(statusLabelForBatch({ status: 'restored' }), 'Restored');
  assert.equal(statusLabelForBatch({ status: 'purged' }), 'Purged');
  assert.equal(statusLabelForBatch({ status: 'pending_purge' }), 'Pending Purge');
});

test('canArchivePreview requires a preview target key and matching typed confirmation', () => {
  const { canArchivePreview } = loadDeleteCenterHelpers();

  assert.equal(
    canArchivePreview({ targetKey: 'ABCD12' }, '  abcd12 '),
    true
  );
  assert.equal(
    canArchivePreview({ targetKey: 'ABCD12' }, 'ABCD13'),
    false
  );
  assert.equal(canArchivePreview(null, 'ABCD12'), false);
});

test('getPrefillTargetFromSearch extracts client routing params', () => {
  const { getPrefillTargetFromSearch } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(getPrefillTargetFromSearch('?target_type=client&customer_code=ABCD12'))),
    {
      targetType: 'client',
      lookupValue: 'ABCD12',
      confirmationHintKey: 'delete_confirm_hint_client',
    }
  );
});

test('getPrefillTargetFromSearch extracts policy routing params', () => {
  const { getPrefillTargetFromSearch } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(getPrefillTargetFromSearch('?target_type=policy&policy_id=policy-123'))),
    {
      targetType: 'policy',
      lookupValue: 'policy-123',
      confirmationHintKey: 'delete_confirm_hint_policy',
    }
  );
});

test('buildPreviewRequest maps client searches into rpc payload shape', () => {
  const { buildPreviewRequest } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(buildPreviewRequest('client', 'ABCD12'))),
    {
      target_type: 'client',
      customer_code: 'ABCD12',
      policy_id: null,
    }
  );
});

test('buildPreviewRequest maps policy searches into rpc payload shape', () => {
  const { buildPreviewRequest } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(buildPreviewRequest('policy', 'policy-123'))),
    {
      target_type: 'policy',
      customer_code: null,
      policy_id: 'policy-123',
    }
  );
});

test('normalizeBatchRecord maps batch rows into stable UI fields', () => {
  const { normalizeBatchRecord } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(normalizeBatchRecord({
      id: 'batch-1',
      status: 'pending_purge',
      target_type: 'client',
      target_customer_code: 'ABCD12',
      retention_until: '2026-04-10T00:00:00.000Z',
      archived_at: '2026-04-02T00:00:00.000Z',
    }))),
    {
      id: 'batch-1',
      status: 'pending_purge',
      statusLabel: 'Pending Purge',
      targetType: 'client',
      targetLabel: 'ABCD12',
      retentionUntil: '2026-04-10T00:00:00.000Z',
      archivedAt: '2026-04-02T00:00:00.000Z',
    }
  );
});

test('resolvePreviewTargetKey prefers customer code for clients and policy id for policies', () => {
  const { resolvePreviewTargetKey } = loadDeleteCenterHelpers();

  assert.equal(
    resolvePreviewTargetKey({ scope: 'client', target_customer_code: 'ABCD12', preview_customer_code: 'ZZZZ99' }),
    'ABCD12'
  );
  assert.equal(
    resolvePreviewTargetKey({ scope: 'policy', target_policy_id: 'policy-123', preview_policy_id: 'policy-999' }),
    'policy-123'
  );
});

test('buildArchiveRequest targets the client archive function with uppercase customer code', () => {
  const { buildArchiveRequest } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(buildArchiveRequest('client', { targetKey: 'abcd12' }, 'broker@ams'))),
    {
      fnName: 'fn_archive_client_batch',
      payload: {
        target_customer_code: 'ABCD12',
        actor: 'broker@ams',
      },
    }
  );
});

test('buildArchiveRequest targets the policy archive function with policy id', () => {
  const { buildArchiveRequest } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(buildArchiveRequest('policy', { targetKey: 'policy-123' }, 'broker@ams'))),
    {
      fnName: 'fn_archive_policy_batch',
      payload: {
        target_policy_id: 'policy-123',
        actor: 'broker@ams',
      },
    }
  );
});

test('isDeleteCenterSchemaMissingError detects missing table errors from Supabase', () => {
  const { isDeleteCenterSchemaMissingError } = loadDeleteCenterHelpers();

  assert.equal(
    isDeleteCenterSchemaMissingError({
      message: "Could not find the table 'public.deletion_batches' in the schema cache",
    }),
    true
  );
  assert.equal(
    isDeleteCenterSchemaMissingError({
      message: 'Client not found for customer_code ABCD12',
    }),
    false
  );
});

test('describeDeleteCenterError converts schema-missing errors into a migration hint', () => {
  const { describeDeleteCenterError } = loadDeleteCenterHelpers();

  assert.equal(
    describeDeleteCenterError({
      message: "Could not find the table 'public.deletion_batches' in the schema cache",
    }),
    'Delete Center migration is not applied in this Supabase project yet.'
  );
  assert.equal(
    describeDeleteCenterError({ message: 'Preview failed' }),
    'Preview failed'
  );
});

test('extractPreviewSummary preserves preview target identifiers from rpc rows', () => {
  const { extractPreviewSummary } = loadDeleteCenterHelpers();

  assert.deepEqual(
    JSON.parse(JSON.stringify(extractPreviewSummary([
      {
        preview_target_type: 'client',
        preview_customer_code: 'ZWEI01',
        preview_policy_id: null,
        preview_summary: {
          scope: 'client',
          client_count: 1,
          policy_count: 2,
          policy_change_count: 3,
          task_count: 4,
          retention_days: 14,
        },
      },
    ]))),
    {
      scope: 'client',
      client_count: 1,
      policy_count: 2,
      policy_change_count: 3,
      task_count: 4,
      retention_days: 14,
      preview_target_type: 'client',
      preview_customer_code: 'ZWEI01',
      preview_policy_id: null,
    }
  );
});
