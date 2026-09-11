(function () {
  const state = window.AMSQuoteImportState;
  const RECOGNIZED_IMPORT_POLICY_TYPES = new Set(['auto', 'home', 'tenant', 'condo']);

  function getDb() {
    return state?.db || null;
  }

  function buildImportBusinessKey(record = {}) {
    const parts = [
      record.customer_code || '',
      record.detected_policy_type || '',
      record.parsed_effective_date || '',
      record.parsed_premium_amount -  '',
      record.parsed_insurer || '',
    ];
    if (parts.some(part => part === '')) return '';
    return parts.join('|');
  }

  function haveMatchingImportBusinessKey(left, right) {
    const leftKey = buildImportBusinessKey(left);
    const rightKey = buildImportBusinessKey(right);
    return leftKey !== '' && rightKey !== '' && leftKey === rightKey;
  }

  function buildDuplicateQuotePdfImportRecord(existingRecord, incomingRecord = {}) {
    const duplicateOfImportId = existingRecord?.duplicate_of_import_id || existingRecord?.id || incomingRecord?.duplicate_of_import_id || null;
    return {
      ...existingRecord,
      ...incomingRecord,
      id: existingRecord?.id || incomingRecord?.id,
      review_status: 'duplicate',
      parse_confidence: 'high',
      duplicate_of_import_id: duplicateOfImportId,
    };
  }

  function sanitizeQuotePdfImportInsertRecord(record = {}) {
    const insertRecord = { ...record };
    delete insertRecord.id;
    delete insertRecord.created_at;
    delete insertRecord.updated_at;
    delete insertRecord.promotion_status;
    delete insertRecord.promoted_policy_id;
    delete insertRecord.promoted_premium_id;
    return insertRecord;
  }

  async function findClientByCustomerCode(customerCode) {
    const db = getDb();
    const normalizedCode = String(customerCode || '').trim().toUpperCase();
    if (!db || !normalizedCode) return null;
    const { data, error } = await db.from('clients')
      .select('id, customer_code, full_name, phone, email, address')
      .eq('customer_code', normalizedCode)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  }

  async function findImportByFileHash(fileHash) {
    const db = getDb();
    const normalizedHash = String(fileHash || '').trim();
    if (!db || !normalizedHash) return null;
    const { data, error } = await db.from('quote_pdf_imports')
      .select('*')
      .eq('source_file_hash', normalizedHash)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  }

  async function findImportByBusinessKey(record) {
    const db = getDb();
    const businessKey = buildImportBusinessKey(record);
    if (!db || !businessKey || !record?.customer_code) return null;
    const imports = await listQuotePdfImports({ customer_code: record.customer_code });
    return imports.find(importRecord => haveMatchingImportBusinessKey(importRecord, record)) || null;
  }

  async function listQuotePdfImports(filters = {}) {
    const db = getDb();
    if (!db) return [];
    let query = db.from('quote_pdf_imports').select('*');
    const filterKeys = ['review_status', 'detected_policy_type', 'customer_code', 'promotion_status', 'source_file_hash'];
    for (const key of filterKeys) {
      if (filters[key] != null && filters[key] !== '') query = query.eq(key, filters[key]);
    }
    if (query.order) query = query.order('created_at', { ascending: false });
    if (filters.limit) query = query.limit(filters.limit);
    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  }

  async function getQuotePdfImportById(importId) {
    const db = getDb();
    if (!db || !importId) return null;
    const { data, error } = await db.from('quote_pdf_imports')
      .select('*')
      .eq('id', importId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  }

  async function getQuotePdfImportCounts() {
    const records = await listQuotePdfImports();
    return records.reduce((summary, record) => {
      const status = record.review_status || 'unknown';
      summary.total += 1;
      summary.by_review_status[status] = (summary.by_review_status[status] || 0) + 1;
      return summary;
    }, {
      total: 0,
      by_review_status: {},
    });
  }

  function canPromoteImport(row = {}) {
    return row.review_status === 'ready_to_promote' && row.promotion_status === 'pending';
  }

  function getQuoteImportPolicySnapshot(row = {}) {
    const policy = row?.parsed_payload?.policy || {};
    const effectiveDate = row.parsed_effective_date || policy.effective_date || null;
    const premiumAmount = row.parsed_premium_amount -  policy.total_premium -  null;
    const termMonths = Number(policy.term_months) === 6 ? 6 : 12;
    const paymentType = policy.payment_type || (termMonths === 6 ? 'monthly' : 'annual');
    const insurer = row.parsed_insurer || policy.carrier || null;
    const policyNumber = policy.policy_number || row.policy_number || null;
    return {
      customerCode: row.customer_code || null,
      policyType: row.detected_policy_type || null,
      effectiveDate,
      expiryDate: policy.expiry_date || (effectiveDate ? addMonths(effectiveDate, termMonths) : null),
      premiumAmount,
      paymentType,
      insurer,
      policyNumber,
      termMonths,
      parsedPolicy: policy,
    };
  }

  async function findPolicyForPromotedImport(row = {}) {
    const db = getDb();
    const snapshot = getQuoteImportPolicySnapshot(row);
    if (!db || !snapshot.customerCode) return null;
    let query = db.from('policies')
      .select('id, customer_code, policy_number, insurer, policy_type, effective_date, expiry_date, premium_amount, payment_type, status, extra_fields, notes')
      .eq('customer_code', snapshot.customerCode)
      .eq('policy_type', snapshot.policyType);
    if (snapshot.policyNumber) {
      const { data, error } = await query.eq('policy_number', snapshot.policyNumber).maybeSingle();
      if (error) throw error;
      return data || null;
    }
    if (snapshot.insurer) query = query.eq('insurer', snapshot.insurer);
    if (query.order) query = query.order('effective_date', { ascending: false });
    const { data, error } = await query;
    if (error) throw error;
    const matches = data || [];
    if (matches.length <= 1) return matches[0] || null;
    throw new Error('Ambiguous policy match for import promotion');
  }

  async function createPolicyForPromotedImport(row = {}) {
    const db = getDb();
    if (!db) throw new Error('Database client is not connected');
    const snapshot = getQuoteImportPolicySnapshot(row);
    if (!snapshot.customerCode || !snapshot.effectiveDate || snapshot.premiumAmount == null) {
      throw new Error('Import row is missing policy promotion data');
    }
    const policyPayload = {
      customer_code: snapshot.customerCode,
      policy_number: snapshot.policyNumber || `IMPORTED-${Date.now().toString(36).toUpperCase()}`,
      insurer: snapshot.insurer,
      policy_type: snapshot.policyType,
      effective_date: snapshot.effectiveDate,
      expiry_date: snapshot.expiryDate,
      premium_amount: snapshot.premiumAmount,
      payment_type: snapshot.paymentType,
      status: snapshot.expiryDate && snapshot.expiryDate <= new Date().toISOString().split('T')[0] ? 'expired' : 'active',
      extra_fields: {
        source: 'quote_pdf_import_promotion',
        parsed_policy: snapshot.parsedPolicy,
      },
      notes: 'Created from promoted quote PDF import',
    };
    const { data, error } = await db.from('policies')
      .insert(policyPayload)
      .select('*')
      .single();
    if (error) {
      const isPolicyUniqueConflict = error.constraint === 'uq_policies_customer_type_number'
        || (error.code === '23505' && /uq_policies_customer_type_number/i.test(error.message || ''));
      if (isPolicyUniqueConflict && snapshot.policyNumber) {
        const existingPolicy = await findPolicyForPromotedImport({
          ...row,
          detected_policy_type: snapshot.policyType,
          customer_code: snapshot.customerCode,
          policy_number: snapshot.policyNumber,
          parsed_insurer: snapshot.insurer,
        });
        if (existingPolicy) return { policy: existingPolicy, created: false };
      }
      throw error;
    }
    return { policy: data, created: true };
  }

  async function resolvePolicyForPromotedImport(row = {}) {
    const existingPolicy = await findPolicyForPromotedImport(row);
    if (existingPolicy) return existingPolicy;
    const createdPolicy = await createPolicyForPromotedImport(row);
    return createdPolicy.policy;
  }

  async function resolvePolicyForPromotedImportWithTracking(row = {}) {
    const existingPolicy = await findPolicyForPromotedImport(row);
    if (existingPolicy) {
      return { policy: existingPolicy, created: false };
    }
    return createPolicyForPromotedImport(row);
  }

  async function ensureNoPremiumHistoryCollision({ policyId, effectiveDate, premiumAmount }) {
    const db = getDb();
    if (!db) throw new Error('Database client is not connected');
    if (!policyId || !effectiveDate || premiumAmount == null) {
      throw new Error('Premium collision check requires policyId, effectiveDate, and premiumAmount');
    }
    const { data, error } = await db.from('policy_premiums')
      .select('id, policy_id, effective_date, premium_amount')
      .eq('policy_id', policyId)
      .eq('effective_date', effectiveDate)
      .eq('premium_amount', premiumAmount)
      .maybeSingle();
    if (error) throw error;
    if (data) throw new Error('Premium history already exists for this policy/effective date/amount');
    return null;
  }

  function isPremiumHistoryCollisionError(error) {
    return /Premium history already exists/i.test(error?.message || '')
      || error?.constraint === 'uq_policy_premiums_policy_effective_amount'
      || (error?.code === '23505' && /uq_policy_premiums_policy_effective_amount/i.test(error?.message || ''));
  }

  function buildPromotionFailureContext(error) {
    return error?.message || 'Promotion failed';
  }

  function markPromotionErrorAsRouted(error) {
    if (error && typeof error === 'object') error.importAlreadyRouted = true;
    return error;
  }

  function isMissingClientPromotionError(error) {
    return /Client no longer exists/i.test(error?.message || '');
  }

  async function routeImportToReview(row = {}, error, promotionStatus = 'blocked', reviewStatus = 'needs_review', expectedCurrentPromotionStatus = null) {
    const db = getDb();
    const update = {
      review_status: reviewStatus,
      promotion_status: promotionStatus,
      parse_notes: buildPromotionFailureContext(error),
    };
    if (!db || !row?.id) {
      return { ...row, ...update };
    }
    let query = db.from('quote_pdf_imports')
      .update(update)
      .eq('id', row.id);
    if (expectedCurrentPromotionStatus) query = query.eq('promotion_status', expectedCurrentPromotionStatus);
    const { data, error: updateError } = await query.select('*').single();
    if (updateError) throw updateError;
    return data || { ...row, ...update };
  }

  async function releasePromotingImport(row = {}, error, reviewStatus = 'needs_review') {
    const db = getDb();
    const update = {
      review_status: reviewStatus,
      promotion_status: 'blocked',
      parse_notes: buildPromotionFailureContext(error),
    };
    if (!db || !row?.id) {
      return { ...row, ...update };
    }
    const { error: updateError } = await db.from('quote_pdf_imports')
      .update(update)
      .eq('id', row.id)
      .eq('promotion_status', 'promoting');
    if (updateError) throw updateError;
    const currentRow = await getQuotePdfImportById(row.id);
    return currentRow || { ...row, ...update };
  }

  async function claimQuotePdfImportForPromotion(importId) {
    const db = getDb();
    if (!db || !importId) throw new Error('Import row must exist in staging before promotion');
    const { data, error } = await db.from('quote_pdf_imports')
      .update({ promotion_status: 'promoting' })
      .eq('id', importId)
      .eq('review_status', 'ready_to_promote')
      .eq('promotion_status', 'pending')
      .select('*')
      .single();
    if (error || !data) throw new Error('Import row is not promotable');
    return data;
  }

  async function cleanupFailedPromotionArtifacts({ policy, premium, createdPolicy }) {
    const db = getDb();
    if (!db) return;
    if (premium?.id) {
      const { error } = await db.from('policy_premiums')
        .delete()
        .eq('id', premium.id);
      if (error) {
        console.warn('Failed to clean up promoted premium after a failed import promotion:', error);
      }
    }
    if (createdPolicy && policy?.id) {
      const { error } = await db.from('policies')
        .delete()
        .eq('id', policy.id);
      if (error) {
        console.warn('Failed to clean up promoted policy after a failed import promotion:', error);
      }
    }
  }

  async function promoteQuotePdfImport(row = {}) {
    const db = getDb();
    if (!db) throw new Error('Database client is not connected');
    if (!row?.id) throw new Error('Import row must exist in staging before promotion');
    const persistedRow = row?.id ? await getQuotePdfImportById(row.id) : null;
    if (row?.id && !persistedRow) throw new Error('Import row no longer exists');
    if (!canPromoteImport(persistedRow)) throw new Error('Import row is not promotable');
    const claimedRow = await claimQuotePdfImportForPromotion(row.id);
    const promotionRow = { ...row, ...claimedRow };
    let snapshot = null;
    let client = null;
    let policy = null;
    let created = false;
    let premium = null;
    try {
      snapshot = getQuoteImportPolicySnapshot(promotionRow);
      if (!snapshot.customerCode) throw new Error('Import row is missing customer code');
      if (!snapshot.policyType) throw new Error('Import row is missing policy type');
      if (!RECOGNIZED_IMPORT_POLICY_TYPES.has(snapshot.policyType)) {
        throw new Error(`Import row has unrecognized policy type: ${snapshot.policyType}`);
      }
      if (!snapshot.policyNumber) throw new Error('Import row is missing policy number');
      if (!snapshot.effectiveDate || snapshot.premiumAmount == null) {
        throw new Error('Import row is missing policy promotion data');
      }
      client = await findClientByCustomerCode(snapshot.customerCode);
      if (!client) {
        const missingClientError = new Error('Client no longer exists');
        try {
          await routeImportToReview(promotionRow, missingClientError, 'blocked', 'missing_client', 'promoting');
        } catch (routeError) {
          console.warn('Failed to route missing-client import to review:', routeError);
          await releasePromotingImport(promotionRow, missingClientError, 'missing_client');
        }
        throw markPromotionErrorAsRouted(missingClientError);
      }
      const resolvedPolicy = await resolvePolicyForPromotedImportWithTracking(promotionRow);
      policy = resolvedPolicy.policy;
      created = resolvedPolicy.created;
      await ensureNoPremiumHistoryCollision({
        policyId: policy.id,
        effectiveDate: snapshot.effectiveDate,
        premiumAmount: snapshot.premiumAmount,
      });
      const { data: premiumData, error: premiumError } = await db.from('policy_premiums')
        .insert({
          policy_id: policy.id,
          effective_date: snapshot.effectiveDate,
          expiry_date: snapshot.expiryDate,
          premium_amount: snapshot.premiumAmount,
          payment_type: snapshot.paymentType,
        })
        .select('*')
        .single();
      if (premiumError) throw premiumError;
      premium = premiumData;
      const importUpdate = {
        review_status: 'promoted',
        promotion_status: 'promoted',
        promoted_policy_id: policy.id,
        promoted_premium_id: premium.id,
      };
      const { data: importRow, error: importError } = await db.from('quote_pdf_imports')
        .update(importUpdate)
        .eq('id', row.id)
        .eq('promotion_status', 'promoting')
        .select('*')
        .single();
      if (importError) throw importError;
      return {
        client,
        policy,
        premium,
        importRow: importRow || { ...row, ...importUpdate },
      };
    } catch (error) {
      if (isPremiumHistoryCollisionError(error)) {
        let importRow;
        try {
          importRow = await routeImportToReview(promotionRow, error, 'blocked', 'needs_review', 'promoting');
        } catch (routeError) {
          console.warn('Failed to route collided import to review:', routeError);
          importRow = await releasePromotingImport(promotionRow, error);
        }
        await cleanupFailedPromotionArtifacts({ policy, premium, createdPolicy: created });
        return {
          client,
          policy,
          premium: null,
          importRow,
        };
      }
      if (error?.importAlreadyRouted) throw error;
      const fallbackReviewStatus = isMissingClientPromotionError(error) ? 'missing_client' : 'needs_review';
      try {
        await routeImportToReview(promotionRow, error, 'blocked', fallbackReviewStatus, 'promoting');
      } catch (routeError) {
        console.warn('Failed to route failed promotion to review:', routeError);
        await releasePromotingImport(promotionRow, error, fallbackReviewStatus);
      }
      await cleanupFailedPromotionArtifacts({ policy, premium, createdPolicy: created });
      throw error;
    }
  }

  async function upsertQuotePdfImportRecord(record) {
    const db = getDb();
    if (!db) throw new Error('Database client is not connected');
    const existingRecord = await findImportByFileHash(record?.source_file_hash);
    if (existingRecord) return buildDuplicateQuotePdfImportRecord(existingRecord, record);
    const businessKeyDuplicate = await findImportByBusinessKey(record);
    const recordToPersist = businessKeyDuplicate
      ? buildDuplicateQuotePdfImportRecord(businessKeyDuplicate, record)
      : record;
    const insertRecord = sanitizeQuotePdfImportInsertRecord(recordToPersist);
    const { data, error } = await db.from('quote_pdf_imports')
      .insert(insertRecord)
      .select('*')
      .single();
    if (error) throw error;
    return data;
  }

  function cloneParsedPayload(payload) {
    if (!payload || typeof payload !== 'object') return {};
    return JSON.parse(JSON.stringify(payload));
  }

  function getImportPolicyNumber(record = {}) {
    return record?.parsed_payload?.policy?.policy_number || record?.policy_number || null;
  }

  function normalizeReviewedImportRecord(record = {}, changes = {}) {
    const normalizedCustomerCode = changes.customer_code === undefined
      ? record.customer_code
      : String(changes.customer_code || '').trim().toUpperCase() || null;
    const normalizedPolicyType = changes.detected_policy_type === undefined
      ? record.detected_policy_type
      : String(changes.detected_policy_type || '').trim().toLowerCase() || null;
    const normalizedEffectiveDate = changes.parsed_effective_date === undefined
      ? (record.parsed_effective_date || null)
      : (String(changes.parsed_effective_date || '').trim() || null);
    const premiumInput = changes.parsed_premium_amount === undefined
      ? record.parsed_premium_amount
      : changes.parsed_premium_amount;
    const normalizedPremiumAmount = premiumInput == null || premiumInput === ''
      ? null
      : Number(premiumInput);
    const normalizedInsurer = changes.parsed_insurer === undefined
      ? (record.parsed_insurer || null)
      : (String(changes.parsed_insurer || '').trim() || null);
    const normalizedNotes = changes.parse_notes === undefined
      ? (record.parse_notes || null)
      : (String(changes.parse_notes || '').trim() || null);

    const parsedPayload = cloneParsedPayload(record.parsed_payload);
    parsedPayload.policy = parsedPayload.policy && typeof parsedPayload.policy === 'object'
      ? parsedPayload.policy
      : {};
    if (normalizedPolicyType) parsedPayload.policy.policy_type = normalizedPolicyType;
    if (normalizedEffectiveDate) parsedPayload.policy.effective_date = normalizedEffectiveDate;
    if (normalizedPremiumAmount != null && !Number.isNaN(normalizedPremiumAmount)) {
      parsedPayload.policy.total_premium = normalizedPremiumAmount;
    }
    if (normalizedInsurer) parsedPayload.policy.carrier = normalizedInsurer;
    if (changes.policy_number !== undefined) {
      const normalizedPolicyNumber = String(changes.policy_number || '').trim() || null;
      if (normalizedPolicyNumber) parsedPayload.policy.policy_number = normalizedPolicyNumber;
      else delete parsedPayload.policy.policy_number;
    }

    return {
      ...record,
      customer_code: normalizedCustomerCode,
      detected_policy_type: normalizedPolicyType,
      parsed_effective_date: normalizedEffectiveDate,
      parsed_premium_amount: normalizedPremiumAmount == null || Number.isNaN(normalizedPremiumAmount)
        ? null
        : normalizedPremiumAmount,
      parsed_insurer: normalizedInsurer,
      parsed_payload: parsedPayload,
      parse_notes: normalizedNotes,
    };
  }

  async function classifyPersistedQuotePdfImportRecord(record = {}) {
    const client = record.customer_code ? await findClientByCustomerCode(record.customer_code) : null;
    if (record.duplicate_of_import_id) {
      return {
        ...record,
        client_id: client?.id || null,
        review_status: 'duplicate',
        promotion_status: 'pending',
        parse_confidence: 'high',
      };
    }
    const classification = window.classifyImportRecord({
      customerCode: record.customer_code || null,
      clientExists: !!client,
      isDuplicate: false,
      policyType: record.detected_policy_type || null,
      effectiveDate: record.parsed_effective_date || null,
      premiumAmount: record.parsed_premium_amount,
    });
    const promotionStatus = classification.review_status === 'ready_to_promote'
      ? 'pending'
      : 'blocked';
    return {
      ...record,
      client_id: client?.id || null,
      review_status: classification.review_status,
      promotion_status: promotionStatus,
      parse_confidence: classification.parse_confidence,
    };
  }

  async function saveQuotePdfImportReview(importId, changes = {}) {
    const db = getDb();
    if (!db) throw new Error('Database client is not connected');
    const existingRow = await getQuotePdfImportById(importId);
    if (!existingRow) throw new Error('Import row no longer exists');
    if (existingRow.promotion_status === 'promoted') {
      throw new Error('Promoted import rows cannot be edited');
    }
    const normalizedRow = normalizeReviewedImportRecord(existingRow, changes);
    const reviewedRow = await classifyPersistedQuotePdfImportRecord(normalizedRow);
    const updatePayload = {
      customer_code: reviewedRow.customer_code,
      client_id: reviewedRow.client_id,
      detected_policy_type: reviewedRow.detected_policy_type,
      parsed_effective_date: reviewedRow.parsed_effective_date,
      parsed_premium_amount: reviewedRow.parsed_premium_amount,
      parsed_insurer: reviewedRow.parsed_insurer,
      parsed_payload: reviewedRow.parsed_payload,
      parse_notes: reviewedRow.parse_notes,
      parse_confidence: reviewedRow.parse_confidence,
      review_status: reviewedRow.review_status,
      promotion_status: reviewedRow.promotion_status,
    };
    const { data, error } = await db.from('quote_pdf_imports')
      .update(updatePayload)
      .eq('id', importId)
      .select('*')
      .single();
    if (error) throw error;
    return data || { ...existingRow, ...updatePayload };
  }

  async function retryQuotePdfImportReview(importId) {
    return saveQuotePdfImportReview(importId, {});
  }

  async function stageQuotePdfFiles(files = []) {
    const selectedFiles = Array.from(files || []).filter(Boolean);
    const results = [];
    for (const file of selectedFiles) {
      results.push(await window.stageQuotePdfFile({
        file,
        filename: file?.name || '',
        dryRun: false,
      }));
    }
    return results;
  }

  async function computeQuotePdfFileHash(file, filename) {
    const runtimeCrypto = globalThis?.crypto;
    if (file?.arrayBuffer && runtimeCrypto?.subtle?.digest) {
      const buffer = await file.arrayBuffer();
      const digest = await runtimeCrypto.subtle.digest('SHA-256', buffer);
      return Array.from(new Uint8Array(digest))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
    }
    const metadataParts = [];
    if (typeof file?.size === 'number') metadataParts.push(String(file.size));
    if (typeof file?.lastModified === 'number') metadataParts.push(String(file.lastModified));
    if (file?.type) metadataParts.push(String(file.type));
    if (metadataParts.length) return `meta:${metadataParts.join(':')}`;
    return String(filename || file?.name || '');
  }

  async function stageQuotePdfFile({ file, filename, dryRun = true }) {
    const resolvedFilename = filename || file?.name || '';
    const previousParsed = state.parsed;
    const parsedResult = await window.parseQuotePdfFile(file);
    const parsed = parsedResult || (state.parsed !== previousParsed ? state.parsed : null);
    const customerCode = window.extractCustomerCodeFromFilename
      ? window.extractCustomerCodeFromFilename(resolvedFilename)
      : null;
    const client = customerCode ? await findClientByCustomerCode(customerCode) : null;
    const fileHash = await computeQuotePdfFileHash(file, resolvedFilename);
    const stagedRecord = window.buildQuotePdfImportRecord({
      filename: resolvedFilename,
      fileHash,
      parsed,
      clientExists: !!client,
    });
    if (client?.id) stagedRecord.client_id = client.id;
    const existingRecord = await findImportByFileHash(fileHash);
    const duplicateRecord = existingRecord || await findImportByBusinessKey(stagedRecord);
    const record = duplicateRecord
      ? buildDuplicateQuotePdfImportRecord(duplicateRecord, stagedRecord)
      : stagedRecord;
    if (dryRun) {
      return {
        dry_run: true,
        filename: resolvedFilename,
        file_hash: fileHash,
        client,
        parsed,
        record,
      };
    }
    const persistedRecord = await upsertQuotePdfImportRecord(record);
    return {
      dry_run: false,
      filename: resolvedFilename,
      file_hash: fileHash,
      client,
      parsed,
      record: persistedRecord,
    };
  }

  async function autoConnect() {
    const creds = await window.AMSBootstrap.getCredentials();
    if (creds?.url && creds?.key) {
      state.db = window.supabase.createClient(creds.url, creds.key);
      window.AMSBootstrap.storeCredentials(creds.url, creds.key);
      document.getElementById('config-screen').style.display = 'none';
    }
  }

  function connectDB() {
    const url = document.getElementById('cfg-url').value.trim();
    const key = document.getElementById('cfg-key').value.trim();
    if (!url || !key) {
      window.showToast(window._t('import_msg_fill_fields'), 'error');
      return;
    }
    state.db = window.supabase.createClient(url, key);
    window.AMSBootstrap.storeCredentials(url, key);
    document.getElementById('config-screen').style.display = 'none';
  }

  function resetHistoryPolicyState() {
    state.clientPolicies = [];
    state.selectedPolicyId = null;
    const sel = document.getElementById('h-policy-select');
    if (sel) {
      sel.innerHTML = '';
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = window._t('import_select_policy_default');
      sel.appendChild(placeholder);
      sel.value = '';
    }
    const hint = document.getElementById('h-policy-hint');
    if (hint) hint.textContent = window._t('import_hint_match_first');
    const pnumInput = document.getElementById('h-policy-number');
    if (pnumInput) {
      pnumInput.value = '';
      pnumInput.placeholder = window._t('import_ph_policy_num_optional');
      pnumInput.style.borderColor = '';
    }
  }

  async function matchClient() {
    if (!state.db) return;
    const form = window.readQuoteImportFormSnapshot();
    const name = form.name;
    const phone = form.phone.replace(/\D/g, '');
    const email = form.email;
    if (!name && !phone && !email) {
      state.matchedClient = null;
      renderMatchBanner(null);
      return;
    }
    try {
      let query = state.db.from('clients').select('id, customer_code, full_name, phone, email, address');
      const conditions = [];
      if (name) conditions.push(`full_name.ilike.%${name}%`);
      if (phone) conditions.push(`phone.ilike.%${phone}%`);
      if (email) conditions.push(`email.ilike.%${email}%`);
      if (conditions.length) query = query.or(conditions.join(','));
      const { data, error } = await query.limit(8);
      if (error) throw error;
      if (data?.length) {
        const exact = data.find(client =>
          (email && client.email && client.email.toLowerCase() === email.toLowerCase()) ||
          (phone && client.phone && client.phone.replace(/\D/g, '') === phone)
        );
        state.matchedClient = exact || data[0];
        renderMatchBanner(state.matchedClient);
        if (state.importMode === 'history') loadClientPolicies(state.matchedClient.customer_code);
      } else {
        state.matchedClient = null;
        renderMatchBanner(null);
      }
    } catch (e) {
      console.warn('Match client error:', e);
      state.matchedClient = null;
      renderMatchBanner(null);
    }
  }

  async function matchClientByCode(customerCode = null) {
    if (!state.db) return;
    const rawCode = customerCode -  document.getElementById('history-client-code')?.value -  '';
    const code = rawCode.trim().toUpperCase();
    const input = document.getElementById('history-client-code');
    const errorEl = document.getElementById('history-code-err');
    if (input) input.value = code;
    if (errorEl) errorEl.textContent = '';
    if (!/^[A-Z]{4}[0-9]{2}$/.test(code)) {
      if (errorEl && code) errorEl.textContent = window._t('import_msg_code_format');
      state.matchedClient = null;
      resetHistoryPolicyState();
      renderMatchBanner(null);
      return;
    }
    try {
      const { data, error } = await state.db.from('clients')
        .select('id, customer_code, full_name, phone, email, address')
        .eq('customer_code', code)
        .maybeSingle();
      if (error) throw error;
      if (!data) {
        state.matchedClient = null;
        resetHistoryPolicyState();
        renderMatchBanner(null);
        if (errorEl) errorEl.textContent = window._t('import_msg_need_client');
        window.showToast(window._t('import_msg_need_client'), 'error');
        return;
      }
      state.matchedClient = data;
      renderMatchBanner(state.matchedClient);
      await loadClientPolicies(state.matchedClient.customer_code);
    } catch (e) {
      console.warn('Match client by code error:', e);
      state.matchedClient = null;
      resetHistoryPolicyState();
      renderMatchBanner(null);
      window.showToast(window._t('import_msg_import_fail') + e.message, 'error');
    }
  }

  function renderMatchBanner(client) {
    const wrap = document.getElementById('match-banner-wrap');
    if (!wrap) return;
    wrap.innerHTML = '';
    if (client) {
      const detailHref = client.id
        ? `ams_client_detail.html?id=${encodeURIComponent(client.id)}`
        : `ams_clients.html?search=${encodeURIComponent(client.customer_code || '')}`;
      const banner = document.createElement('div');
      banner.className = 'match-banner match-found';
      const icon = document.createElement('span');
      icon.className = 'match-icon';
      icon.textContent = '✓';
      const text = document.createElement('span');
      text.className = 'match-text';
      text.append(document.createTextNode(window._t('import_match_found') + ' '));
      const codeEl = document.createElement('strong');
      codeEl.textContent = client.customer_code || '';
      text.appendChild(codeEl);
      text.append(document.createTextNode(' — ' + (client.full_name || '')));
      const link = document.createElement('a');
      link.href = detailHref;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.fontSize = '12px';
      link.style.color = '#15803d';
      link.textContent = window._t('import_match_view');
      banner.append(icon, text, link);
      wrap.appendChild(banner);
      if (state.importMode === 'history') loadClientPolicies(client.customer_code);
    } else if (state.importMode === 'binder') {
      wrap.innerHTML = `
        <div class="match-banner match-new">
          <span class="match-icon">!</span>
          <div class="match-text">
            ${window._t('import_match_new')}
            <div style="margin-top:10px">
              <input class="match-code-input" id="new-client-code" placeholder="ABCD01" maxlength="6"
                     oninput="this.value=this.value.toUpperCase();updateCreateButton()">
              <div class="match-code-err" id="code-err"></div>
            </div>
          </div>
        </div>`;
    } else {
      wrap.innerHTML = `
        <div class="match-banner match-new">
          <span class="match-icon">#</span>
          <div class="match-text">
            ${window._t('import_hint_match_first')}
            <div style="margin-top:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
              <input class="match-code-input" id="history-client-code" placeholder="CHEL22" maxlength="6"
                     oninput="this.value=this.value.toUpperCase();if(this.value.length===6)matchClientByCode(this.value);">
              <button class="btn btn-sm btn-ghost" type="button" onclick="matchClientByCode()">${window._t('import_match_view')}</button>
            </div>
            <div class="match-code-err" id="history-code-err"></div>
          </div>
        </div>`;
    }
    updateCreateButton();
  }

  function setImportMode(mode) {
    state.importMode = mode;
    document.getElementById('mode-binder').classList.toggle('active-mode', mode === 'binder');
    document.getElementById('mode-history').classList.toggle('active-mode', mode === 'history');
    const isBinder = mode === 'binder';
    document.getElementById('mode-hint').textContent = isBinder
      ? window._t('import_mode_hint_binder')
      : window._t('import_mode_hint_history');
    document.getElementById('task-preview-section').style.display = isBinder ? '' : 'none';
    document.getElementById('history-policy-section').style.display = isBinder ? 'none' : '';
    const btn = document.getElementById('create-btn');
    btn.textContent = isBinder ? window._t('import_btn_create_binder') : window._t('import_btn_append_history');
    document.getElementById('create-bar-info').innerHTML = isBinder
      ? window._t('import_binder_info')
      : window._t('import_history_info');
    if (!isBinder) {
      if (state.matchedClient) loadClientPolicies(state.matchedClient.customer_code);
      else {
        resetHistoryPolicyState();
        renderMatchBanner(null);
      }
    } else if (!state.matchedClient) {
      renderMatchBanner(null);
    }
    updateCreateButton();
  }

  async function loadClientPolicies(custCode) {
    if (!state.db || !custCode) return;
    try {
      const { data, error } = await state.db.from('policies')
        .select('id, policy_number, insurer, policy_type, effective_date, expiry_date, premium_amount')
        .eq('customer_code', custCode)
        .order('effective_date', { ascending: false });
      if (error) throw error;
      state.clientPolicies = data || [];
      state.selectedPolicyId = null;
      const sel = document.getElementById('h-policy-select');
      sel.innerHTML = '';
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = window._t('import_select_policy_choose');
      sel.appendChild(placeholder);
      for (const policy of state.clientPolicies) {
        const option = document.createElement('option');
        option.value = policy.id;
        option.textContent = `${policy.policy_number} — ${policy.insurer || '?'} (${policy.effective_date} ~ ${policy.expiry_date})`;
        sel.appendChild(option);
      }
      const createNewOption = document.createElement('option');
      createNewOption.value = '__new__';
      createNewOption.textContent = window._t('import_select_policy_new');
      sel.appendChild(createNewOption);
      document.getElementById('h-policy-hint').textContent = state.clientPolicies.length
        ? window._t('import_policies_found', state.clientPolicies.length)
        : window._t('import_no_policies');
    } catch (e) {
      console.warn('Load policies error:', e);
      resetHistoryPolicyState();
    }
  }

  function onHistoryPolicySelect() {
    const val = document.getElementById('h-policy-select').value;
    state.selectedPolicyId = val === '__new__' ? '__new__' : val || null;
    const pnumInput = document.getElementById('h-policy-number');
    if (val === '__new__') {
      pnumInput.placeholder = window._t('import_ph_policy_num_required');
      pnumInput.style.borderColor = '#fcd34d';
    } else {
      pnumInput.placeholder = window._t('import_ph_update_policy_num');
      pnumInput.style.borderColor = '';
    }
    updateCreateButton();
  }

  function updateCreateButton() {
    const btn = document.getElementById('create-btn');
    if (!btn) return;
    const form = window.readQuoteImportFormSnapshot();
    let hasClient = false;
    if (state.matchedClient) hasClient = true;
    else {
      const code = document.getElementById('new-client-code')?.value?.trim() || '';
      hasClient = /^[A-Z]{4}[0-9]{2}$/.test(code);
    }
    if (state.importMode === 'binder') {
      btn.disabled = !(form.carrier && form.premium > 0 && form.effective && hasClient);
    } else {
      const hasPolicySelection = state.selectedPolicyId === '__new__'
        ? !!document.getElementById('h-policy-number')?.value?.trim()
        : !!state.selectedPolicyId;
      btn.disabled = !(form.premium > 0 && form.effective && !!state.matchedClient && hasPolicySelection);
    }
  }

  async function doImport() {
    try {
      const shouldContinue = await applyClientUpdatesIfConfirmed();
      if (!shouldContinue) return;
      if (state.importMode === 'binder') await createBinderPolicy();
      else await appendHistoryPremium();
    } catch (e) {
      window.showToast(window._t('import_msg_import_fail') + e.message, 'error');
    }
  }

  async function appendHistoryPremium() {
    if (!state.db) return;
    const form = window.readQuoteImportFormSnapshot();
    if (!form.premium || !form.effective) {
      window.showToast(window._t('import_msg_fill_premium'), 'error');
      return;
    }
    if (!state.matchedClient) {
      window.showToast(window._t('import_msg_need_client'), 'error');
      return;
    }
    const custCode = state.matchedClient.customer_code;
    const expDate = addMonths(form.effective, form.term);
    const btn = document.getElementById('create-btn');
    btn.textContent = window._t('import_msg_importing');
    btn.disabled = true;
    try {
      let targetPolicyId;
      const newPolicyNumber = document.getElementById('h-policy-number').value.trim();
      if (state.selectedPolicyId === '__new__') {
        if (!newPolicyNumber) {
          window.showToast(window._t('import_msg_need_policy_num'), 'error');
          return;
        }
        const polPayload = {
          customer_code: custCode,
          policy_number: newPolicyNumber,
          insurer: form.carrier,
          policy_type: 'auto',
          effective_date: form.effective,
          expiry_date: expDate,
          premium_amount: form.premium,
          payment_type: form.term === 6 ? 'monthly' : 'annual',
          status: expDate <= new Date().toISOString().split('T')[0] ? 'expired' : 'active',
          extra_fields: buildExtraFields(form.name),
          notes: 'Imported from quote into history',
        };
        const { data: pol, error: pErr } = await state.db.from('policies').insert(polPayload).select('id').single();
        if (pErr) throw pErr;
        targetPolicyId = pol.id;
      } else {
        targetPolicyId = state.selectedPolicyId;
        if (newPolicyNumber) await state.db.from('policies').update({ policy_number: newPolicyNumber }).eq('id', targetPolicyId);
      }
      const { error: premErr } = await state.db.from('policy_premiums').insert({
        policy_id: targetPolicyId,
        effective_date: form.effective,
        expiry_date: expDate,
        premium_amount: form.premium,
        payment_type: form.term === 6 ? 'monthly' : 'annual',
      });
      if (premErr) throw premErr;
      window.showToast(window._t('import_msg_history_ok'), 'success');
      setTimeout(() => {
        window.location.href = `ams_policies.html?edit_policy=${targetPolicyId}`;
      }, 1000);
    } catch (e) {
      window.showToast(window._t('import_msg_import_fail') + e.message, 'error');
    } finally {
      btn.textContent = window._t('import_btn_append_history');
      btn.disabled = false;
    }
  }

  function buildExtraFields(name) {
    const form = window.readQuoteImportFormSnapshot();
    const parsedSecondary = state.parsed?.secondary_driver || null;
    return {
      make: form.make || null,
      model: form.model || null,
      year: parseInt(form.year, 10) || null,
      vin: form.vin || null,
      primary_driver: {
        name: state.parsed?.driver?.name || name,
        license: form.license || null,
        dob: form.dob || null,
      },
      secondary_driver: parsedSecondary && (parsedSecondary.name || parsedSecondary.license_number || parsedSecondary.dob)
        ? {
            name: parsedSecondary.name || null,
            license: parsedSecondary.license_number || null,
            dob: parsedSecondary.dob || null,
          }
        : null,
      vehicle_details: {
        body_style: form.body || null,
        fuel_use: form.fuelUse || null,
      },
      driver_details: {
        license_class: form.licenseClass || null,
        training_date: form.training || null,
      },
      coverages: state.parsed?.coverages || [],
      source: 'quote_import',
    };
  }

  function normalizeCompareValue(value, type = 'text') {
    const raw = String(value || '').trim();
    if (!raw) return '';
    if (type === 'phone') return raw.replace(/\D/g, '');
    return raw.replace(/\s+/g, ' ').toLowerCase();
  }

  function getImportedClientSnapshot() {
    const form = window.readQuoteImportFormSnapshot();
    return {
      full_name: form.name,
      phone: form.phone,
      email: form.email,
      address: form.address,
    };
  }

  function getPendingClientUpdates() {
    if (!state.matchedClient) return [];
    const imported = getImportedClientSnapshot();
    let fieldMeta = [
      { key: 'full_name', label: 'Name', type: 'text' },
      { key: 'phone', label: 'Phone', type: 'phone' },
      { key: 'email', label: 'Email', type: 'text' },
      { key: 'address', label: 'Address', type: 'text' },
    ];
    if (state.importMode === 'history') {
      fieldMeta = fieldMeta.filter(meta => meta.key !== 'address');
    }
    return fieldMeta.map(meta => {
      const incoming = imported[meta.key];
      const current = String(state.matchedClient[meta.key] || '').trim();
      if (!incoming) return null;
      if (normalizeCompareValue(incoming, meta.type) === normalizeCompareValue(current, meta.type)) return null;
      return { ...meta, current, incoming };
    }).filter(Boolean);
  }

  async function applyClientUpdatesIfConfirmed() {
    if (!state.db || !state.matchedClient) return true;
    const pending = getPendingClientUpdates();
    if (!pending.length) return true;
    const lines = pending.map(change => `${change.label}: ${change.current || '(blank)'} -> ${change.incoming}`);
    const message =
      'The imported quote has different client details from the matched client record.\n\n' +
      lines.join('\n') +
      '\n\nPress OK to update the client record before continuing, or Cancel to keep the existing client details.';
    if (!window.confirm(message)) return false;
    const payload = {};
    for (const change of pending) payload[change.key] = change.incoming;
    let query = state.db.from('clients').update(payload);
    if (state.matchedClient.id) query = query.eq('id', state.matchedClient.id);
    else query = query.eq('customer_code', state.matchedClient.customer_code);
    const { error } = await query;
    if (error) throw error;
    Object.assign(state.matchedClient, payload);
    renderMatchBanner(state.matchedClient);
    return true;
  }

  async function createBinderPolicy() {
    if (!state.db) return;
    const form = window.readQuoteImportFormSnapshot();
    if (!form.carrier || !form.premium || !form.effective) {
      window.showToast(window._t('import_msg_fill_required'), 'error');
      return;
    }
    const btn = document.getElementById('create-btn');
    btn.textContent = window._t('import_msg_creating');
    btn.disabled = true;
    try {
      const custCode = state.matchedClient
        ? state.matchedClient.customer_code
        : document.getElementById('new-client-code').value.trim().toUpperCase();
      if (!state.matchedClient && !/^[A-Z]{4}[0-9]{2}$/.test(custCode)) {
        document.getElementById('code-err').textContent = window._t('import_msg_code_format');
        window.showToast(window._t('import_msg_invalid_code'), 'error');
        return;
      }
      let existingClient = state.matchedClient;
      if (!existingClient) {
        const { data } = await state.db.from('clients')
          .select('id, customer_code')
          .eq('customer_code', custCode)
          .maybeSingle();
        existingClient = data;
      }
      if (!existingClient) {
        const clientPayload = {
          customer_code: custCode,
          full_name: form.name || 'Unknown',
          phone: form.phone || null,
          email: form.email || null,
          address: form.address || null,
          client_type: 'individual',
          notes: 'Auto-created from quote import',
        };
        const { error: cErr } = await state.db.from('clients').insert(clientPayload);
        if (cErr) throw cErr;
      }
      const shouldCreateTasks = await confirmBinderTaskCreation(form, custCode);
      const expDate = addMonths(form.effective, form.term);
      const binderNumber = 'BINDER-' + Date.now().toString(36).toUpperCase();
      const { data: pol, error: pErr } = await state.db.from('policies').insert({
        customer_code: custCode,
        policy_number: binderNumber,
        insurer: form.carrier,
        policy_type: 'auto',
        effective_date: form.effective,
        expiry_date: expDate,
        premium_amount: form.premium,
        payment_type: form.term === 6 ? 'monthly' : 'annual',
        status: 'active',
        extra_fields: buildExtraFields(form.name),
        notes: 'Created from imported quote (binder)',
      }).select('id').single();
      if (pErr) throw pErr;
      const policyId = pol.id;
      await state.db.from('policy_premiums').insert({
        policy_id: policyId,
        effective_date: form.effective,
        expiry_date: expDate,
        premium_amount: form.premium,
        payment_type: form.term === 6 ? 'monthly' : 'annual',
      });
      if (shouldCreateTasks) {
        const workflowId = crypto.randomUUID();
        const now = new Date();
        const taskBase = {
          customer_code: custCode,
          policy_id: policyId,
          task_type: 'change_workflow',
          workflow_id: workflowId,
          policy_type: 'auto',
          description: `Quote import binder - ${form.carrier}, ${form.premium.toLocaleString('en-CA', { minimumFractionDigits: 2 })}. Client: ${form.name}`,
        };
        const tasks = [
          { ...taskBase, title: `[Binder] Issue - ${form.carrier} ${form.name}`, status: 'pending_issue', due_date: addDays(now, 1) },
          { ...taskBase, title: `[Binder] Sign - ${form.carrier} ${form.name}`, status: 'pending_sign', due_date: addDays(now, 3) },
          { ...taskBase, title: `[Binder] Entry - ${form.carrier} ${form.name}`, status: 'pending_entry', due_date: addDays(now, 5) },
        ];
        const { error: tErr } = await state.db.from('tasks').insert(tasks);
        if (tErr) console.warn('Task creation failed:', tErr.message);
      }
      window.showToast(window._t('import_msg_binder_ok'), 'success');
      setTimeout(() => {
        window.location.href = `ams_policies.html?edit_policy=${policyId}`;
      }, 1000);
    } catch (e) {
      window.showToast(window._t('import_msg_create_fail') + e.message, 'error');
    } finally {
      btn.textContent = window._t('import_btn_create_binder');
      btn.disabled = false;
    }
  }

  function addMonths(dateStr, months) {
    const d = new Date(dateStr + 'T00:00:00');
    d.setMonth(d.getMonth() + months);
    return d.toISOString().split('T')[0];
  }

  function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  }

  async function loadPoliciesForWorkflowDecision(custCode) {
    if (!state.db || !custCode) return [];
    const { data, error } = await state.db.from('policies')
      .select('id, policy_number, insurer, policy_type, effective_date, expiry_date, premium_amount, status')
      .eq('customer_code', custCode)
      .eq('policy_type', 'auto')
      .order('expiry_date', { ascending: false });
    if (error) throw error;
    return data || [];
  }

  function buildHistoricalTaskDecisionMessage(result, form) {
    const tags = [];
    if (result.isRenewal) tags.push('renewal');
    if (result.isRemarket) tags.push('remarket');
    const label = tags.join(' / ') || 'historical';
    const reference = result.referencePolicy;
    const referenceSummary = reference
      ? `Reference policy: ${reference.policy_number || '(no number)'}`
        + `${reference.insurer ? ` with ${reference.insurer}` : ''}`
        + `${reference.expiry_date ? `, expiring ${reference.expiry_date}` : ''}.`
      : 'No reference policy details were found.';
    return [
      'This binder import looks like historical data because the effective date is today or in the past.',
      '',
      `Detected workflow type: ${label}.`,
      referenceSummary,
      `Imported effective date: ${form.effective}.`,
      '',
      'Press OK to create the binder follow-up tasks anyway, or Cancel to create the binder without those tasks.',
    ].join('\n');
  }

  async function confirmBinderTaskCreation(form, custCode) {
    if (!custCode || !form.effective) return true;
    const workflow = window.AMSQuoteImportWorkflow;
    if (!workflow?.classifyBinderImportWorkflow) return true;
    const existingPolicies = await loadPoliciesForWorkflowDecision(custCode);
    const decision = workflow.classifyBinderImportWorkflow({
      importedEffectiveDate: form.effective,
      importedTermMonths: form.term,
      existingPolicies,
    });
    if (!decision.shouldPrompt) return true;
    return window.confirm(buildHistoricalTaskDecisionMessage(decision, form));
  }

  function initQuoteImportPage() {
    document.addEventListener('input', event => {
      if (['p-carrier', 'p-premium', 'p-effective', 'new-client-code', 'h-policy-number', 'history-client-code'].includes(event.target.id)) {
        updateCreateButton();
      }
    });
    document.getElementById('pdf-file').addEventListener('change', async event => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      await window.parseQuotePdfFile(file);
      event.target.value = '';
    });
    autoConnect();
  }

  window.connectDB = connectDB;
  window.buildImportBusinessKey = buildImportBusinessKey;
  window.haveMatchingImportBusinessKey = haveMatchingImportBusinessKey;
  window.buildDuplicateQuotePdfImportRecord = buildDuplicateQuotePdfImportRecord;
  window.findClientByCustomerCode = findClientByCustomerCode;
  window.findImportByFileHash = findImportByFileHash;
  window.findImportByBusinessKey = findImportByBusinessKey;
  window.listQuotePdfImports = listQuotePdfImports;
  window.getQuotePdfImportById = getQuotePdfImportById;
  window.getQuotePdfImportCounts = getQuotePdfImportCounts;
  window.canPromoteImport = canPromoteImport;
  window.claimQuotePdfImportForPromotion = claimQuotePdfImportForPromotion;
  window.getQuoteImportPolicySnapshot = getQuoteImportPolicySnapshot;
  window.findPolicyForPromotedImport = findPolicyForPromotedImport;
  window.resolvePolicyForPromotedImport = resolvePolicyForPromotedImport;
  window.ensureNoPremiumHistoryCollision = ensureNoPremiumHistoryCollision;
  window.promoteQuotePdfImport = promoteQuotePdfImport;
  window.upsertQuotePdfImportRecord = upsertQuotePdfImportRecord;
  window.saveQuotePdfImportReview = saveQuotePdfImportReview;
  window.retryQuotePdfImportReview = retryQuotePdfImportReview;
  window.stageQuotePdfFiles = stageQuotePdfFiles;
  window.stageQuotePdfFile = stageQuotePdfFile;
  window.matchClient = matchClient;
  window.matchClientByCode = matchClientByCode;
  window.renderMatchBanner = renderMatchBanner;
  window.setImportMode = setImportMode;
  window.loadClientPolicies = loadClientPolicies;
  window.onHistoryPolicySelect = onHistoryPolicySelect;
  window.updateCreateButton = updateCreateButton;
  window.doImport = doImport;
  window.appendHistoryPremium = appendHistoryPremium;
  window.buildExtraFields = buildExtraFields;
  window.applyClientUpdatesIfConfirmed = applyClientUpdatesIfConfirmed;
  window.createBinderPolicy = createBinderPolicy;
  window.initQuoteImportPage = initQuoteImportPage;
})();
