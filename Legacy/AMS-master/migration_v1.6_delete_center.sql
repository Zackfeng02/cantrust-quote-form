-- ============================================================
-- Migration v1.6: Delete Center
-- Scope:
--   - Add deletion batch tracking and archive tables for clients,
--     policies, policy changes, tasks, quotes, and policy premiums.
--   - Add append-only deletion audit logging.
--   - Add SQL helpers for preview, archive, restore, and purge.
--
-- Schema expectations:
--   - Live AMS rows use UUID primary keys for clients, policies,
--     policy_changes, and tasks.
--   - Clients are identified by customer_code in the format
--     [A-Z]{4}[0-9]{2}; policies are identified by UUID id.
--   - Archive flow is archive -> pending purge -> restore or purge.
--   - Early purge attempts move the batch to pending_purge instead of
--     trapping it in a dead-end state.
--   - Archived rows keep a surrogate archive_id so the same live source
--     row can be archived again after restore.
--   - Quote linkage and policy premium history are preserved in archive
--     tables so restore can rebuild those relationships.
--   - quote_pdf_imports rows are archived with client_id,
--     promoted_policy_id, and promoted_premium_id preserved.
--   - Policy batches store target_client_id so restore can survive a
--     client customer_code change while the policy is archived.
--   - Archived rows must preserve enough source data to rebuild live
--     rows in dependency-safe order.
--   - v1 retention defaults:
--       client archives: 14 days
--       policy archives: 7 days
-- ============================================================

-- ============================================================
-- Deletion batch ledger
-- ============================================================
CREATE TABLE deletion_batches (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type           TEXT NOT NULL
                        CHECK (target_type IN ('client', 'policy')),
  target_customer_code  TEXT,
  target_client_id      UUID,
  target_policy_id      UUID,
  status                TEXT NOT NULL DEFAULT 'archived'
                        CHECK (status IN ('archived', 'pending_purge', 'restored', 'purged')),
  retention_until       TIMESTAMPTZ NOT NULL,
  snapshot_version      INTEGER NOT NULL DEFAULT 1
                        CHECK (snapshot_version > 0),
  snapshot_summary      JSONB NOT NULL DEFAULT '{}'::jsonb,
  export_generated_at   TIMESTAMPTZ,
  archived_by           TEXT NOT NULL,
  archived_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  restored_by           TEXT,
  restored_at           TIMESTAMPTZ,
  purged_by             TEXT,
  purged_at             TIMESTAMPTZ,
  last_error            TEXT,
  CONSTRAINT chk_deletion_batches_target_shape CHECK (
    (target_type = 'client' AND target_customer_code IS NOT NULL AND target_client_id IS NOT NULL AND target_policy_id IS NULL)
    OR
    (target_type = 'policy' AND target_policy_id IS NOT NULL AND target_client_id IS NOT NULL)
  )
);

CREATE INDEX idx_deletion_batches_status_retention
  ON deletion_batches (status, retention_until);
CREATE INDEX idx_deletion_batches_target_customer_code
  ON deletion_batches (target_customer_code);
CREATE INDEX idx_deletion_batches_target_client_id
  ON deletion_batches (target_client_id);
CREATE INDEX idx_deletion_batches_target_policy_id
  ON deletion_batches (target_policy_id);
CREATE INDEX idx_deletion_batches_archived_at
  ON deletion_batches (archived_at DESC);


-- ============================================================
-- Archived clients
-- ============================================================
CREATE TABLE archived_clients (
  archive_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id              UUID NOT NULL,
  deletion_batch_id UUID NOT NULL
                    REFERENCES deletion_batches(id)
                    ON DELETE CASCADE,
  customer_code   TEXT NOT NULL,
  full_name       TEXT NOT NULL,
  birthday        DATE,
  phone           TEXT,
  email           TEXT,
  address         TEXT,
  contact_1       JSONB DEFAULT NULL,
  contact_2       JSONB DEFAULT NULL,
  client_type     TEXT NOT NULL
                    CHECK (client_type IN ('individual', 'corporation')),
  tags            TEXT[],
  referral_source TEXT,
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL,
  archived_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by     TEXT NOT NULL
);

CREATE INDEX idx_archived_clients_batch_id
  ON archived_clients (deletion_batch_id);
CREATE INDEX idx_archived_clients_customer_code
  ON archived_clients (customer_code);
CREATE INDEX idx_archived_clients_source_id
  ON archived_clients (id);


-- ============================================================
-- Archived policies
-- ============================================================
CREATE TABLE archived_policies (
  archive_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id              UUID NOT NULL,
  deletion_batch_id UUID NOT NULL
                    REFERENCES deletion_batches(id)
                    ON DELETE CASCADE,
  customer_code   TEXT NOT NULL,
  policy_number   TEXT NOT NULL,
  insurer         TEXT NOT NULL,
  policy_type     TEXT NOT NULL
                    CHECK (policy_type IN ('auto', 'home', 'commercial', 'other')),
  effective_date  DATE NOT NULL,
  expiry_date     DATE NOT NULL,
  premium_amount  NUMERIC(10, 2),
  payment_type    TEXT
                    CHECK (payment_type IN ('annual', 'monthly') OR payment_type IS NULL),
  status          TEXT NOT NULL
                    CHECK (status IN ('active', 'pending_renewal', 'pending_confirmation', 'renewed', 'cancelled', 'expired')),
  extra_fields    JSONB NOT NULL DEFAULT '{}'::jsonb,
  documents       TEXT[] NOT NULL DEFAULT '{}',
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL,
  archived_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by     TEXT NOT NULL
);

CREATE INDEX idx_archived_policies_batch_id
  ON archived_policies (deletion_batch_id);
CREATE INDEX idx_archived_policies_customer_code
  ON archived_policies (customer_code);
CREATE INDEX idx_archived_policies_policy_number
  ON archived_policies (policy_number);
CREATE INDEX idx_archived_policies_status
  ON archived_policies (status);
CREATE INDEX idx_archived_policies_source_id
  ON archived_policies (id);


-- ============================================================
-- Archived policy changes
-- ============================================================
CREATE TABLE archived_policy_changes (
  archive_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id              UUID NOT NULL,
  deletion_batch_id UUID NOT NULL
                    REFERENCES deletion_batches(id)
                    ON DELETE CASCADE,
  policy_id       UUID NOT NULL,
  customer_code   TEXT NOT NULL,
  change_type     TEXT NOT NULL
                    CHECK (change_type IN (
                      'address change',
                      'vehicle add',
                      'vehicle delete',
                      'vehicle substitute',
                      'add driver',
                      'add home',
                      'add condo',
                      'add rental',
                      'cancellation',
                      'renewal',
                      'other'
                    )),
  change_date     DATE NOT NULL,
  summary         TEXT NOT NULL,
  details         TEXT,
  change_snapshot JSONB DEFAULT '{}'::jsonb,
  created_at      TIMESTAMPTZ NOT NULL,
  archived_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by     TEXT NOT NULL
);

CREATE INDEX idx_archived_policy_changes_batch_id
  ON archived_policy_changes (deletion_batch_id);
CREATE INDEX idx_archived_policy_changes_policy_id
  ON archived_policy_changes (policy_id);
CREATE INDEX idx_archived_policy_changes_customer_code
  ON archived_policy_changes (customer_code);
CREATE INDEX idx_archived_policy_changes_change_date
  ON archived_policy_changes (change_date DESC);
CREATE INDEX idx_archived_policy_changes_source_id
  ON archived_policy_changes (id);


-- ============================================================
-- Archived tasks
-- ============================================================
CREATE TABLE archived_tasks (
  archive_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id              UUID NOT NULL,
  deletion_batch_id UUID NOT NULL
                    REFERENCES deletion_batches(id)
                    ON DELETE CASCADE,
  customer_code   TEXT,
  policy_id       UUID,
  title           TEXT NOT NULL,
  description     TEXT,
  task_type       TEXT NOT NULL
                    CHECK (task_type IN ('renewal_reminder', 'follow_up', 'manual', 'renewal_workflow', 'change_workflow')),
  status          TEXT NOT NULL
                    CHECK (status IN (
                      'pending', 'contacted', 'quoting', 'completed', 'abandoned',
                      'pending_issue', 'pending_sign', 'pending_entry',
                      'annual_tracking', 'app_install'
                    )),
  due_date        DATE,
  follow_up_date  DATE,
  follow_up_count INTEGER NOT NULL DEFAULT 0,
  new_insurer     TEXT,
  new_premium     NUMERIC(10, 2),
  payment_type    TEXT
                    CHECK (payment_type IN ('annual', 'monthly') OR payment_type IS NULL),
  has_app_discount BOOLEAN DEFAULT FALSE,
  workflow_id     UUID,
  policy_type     TEXT,
  change_type     TEXT,
  created_at      TIMESTAMPTZ NOT NULL,
  updated_at      TIMESTAMPTZ NOT NULL,
  archived_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by     TEXT NOT NULL
);

CREATE INDEX idx_archived_tasks_batch_id
  ON archived_tasks (deletion_batch_id);
CREATE INDEX idx_archived_tasks_customer_code
  ON archived_tasks (customer_code);
CREATE INDEX idx_archived_tasks_policy_id
  ON archived_tasks (policy_id);
CREATE INDEX idx_archived_tasks_status
  ON archived_tasks (status);
CREATE INDEX idx_archived_tasks_source_id
  ON archived_tasks (id);


-- ============================================================
-- Archived quote PDF imports
-- ============================================================
CREATE TABLE archived_quote_pdf_imports (
  archive_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id                      BIGINT NOT NULL,
  deletion_batch_id       UUID NOT NULL
                          REFERENCES deletion_batches(id)
                          ON DELETE CASCADE,
  customer_code           TEXT,
  client_id               UUID,
  source_filename         TEXT,
  source_file_hash        TEXT,
  source_folder           TEXT,
  detected_policy_type    TEXT,
  detected_variant_label  TEXT,
  parsed_payload          JSONB DEFAULT '{}'::jsonb,
  parsed_effective_date   DATE,
  parsed_expiry_date      DATE,
  parsed_premium_amount   NUMERIC(10, 2),
  parsed_insurer          TEXT,
  parse_confidence        TEXT,
  parse_notes             TEXT,
  review_status           TEXT,
  promotion_status        TEXT,
  duplicate_of_import_id  BIGINT,
  promoted_policy_id      UUID,
  promoted_premium_id     UUID,
  created_at              TIMESTAMPTZ,
  updated_at              TIMESTAMPTZ,
  archived_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by             TEXT NOT NULL
);

CREATE INDEX idx_archived_quote_pdf_imports_batch_id
  ON archived_quote_pdf_imports (deletion_batch_id);
CREATE INDEX idx_archived_quote_pdf_imports_source_id
  ON archived_quote_pdf_imports (id);
CREATE INDEX idx_archived_quote_pdf_imports_client_id
  ON archived_quote_pdf_imports (client_id);
CREATE INDEX idx_archived_quote_pdf_imports_promoted_policy_id
  ON archived_quote_pdf_imports (promoted_policy_id);
CREATE INDEX idx_archived_quote_pdf_imports_promoted_premium_id
  ON archived_quote_pdf_imports (promoted_premium_id);


-- ============================================================
-- Archived quotes
-- ============================================================
CREATE TABLE archived_quotes (
  archive_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id                  UUID NOT NULL,
  deletion_batch_id   UUID NOT NULL
                      REFERENCES deletion_batches(id)
                      ON DELETE CASCADE,
  customer_code       TEXT,
  client_name         TEXT NOT NULL,
  client_phone        TEXT,
  client_email        TEXT,
  policy_type         TEXT NOT NULL
                      CHECK (policy_type IN ('auto', 'home', 'commercial', 'other')),
  current_insurer     TEXT,
  current_premium     NUMERIC(10, 2),
  quote_data          JSONB NOT NULL DEFAULT '{}'::jsonb,
  status              TEXT NOT NULL
                      CHECK (status IN ('pending', 'confirmed', 'declined')),
  converted_policy_id UUID,
  notes               TEXT,
  created_at          TIMESTAMPTZ NOT NULL,
  updated_at          TIMESTAMPTZ NOT NULL,
  archived_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by         TEXT NOT NULL
);

CREATE INDEX idx_archived_quotes_batch_id
  ON archived_quotes (deletion_batch_id);
CREATE INDEX idx_archived_quotes_source_id
  ON archived_quotes (id);
CREATE INDEX idx_archived_quotes_customer_code
  ON archived_quotes (customer_code);
CREATE INDEX idx_archived_quotes_policy_id
  ON archived_quotes (converted_policy_id);


-- ============================================================
-- Archived policy premiums
-- ============================================================
CREATE TABLE archived_policy_premiums (
  archive_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id                  UUID NOT NULL,
  deletion_batch_id   UUID NOT NULL
                      REFERENCES deletion_batches(id)
                      ON DELETE CASCADE,
  policy_id           UUID NOT NULL,
  effective_date      DATE NOT NULL,
  expiry_date         DATE NOT NULL,
  premium_amount      NUMERIC(10, 2) NOT NULL DEFAULT 0,
  payment_type        TEXT
                      CHECK (payment_type IN ('annual', 'monthly') OR payment_type IS NULL),
  created_at          TIMESTAMPTZ NOT NULL,
  archived_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  archived_by         TEXT NOT NULL
);

CREATE INDEX idx_archived_policy_premiums_batch_id
  ON archived_policy_premiums (deletion_batch_id);
CREATE INDEX idx_archived_policy_premiums_source_id
  ON archived_policy_premiums (id);
CREATE INDEX idx_archived_policy_premiums_policy_id
  ON archived_policy_premiums (policy_id);


-- ============================================================
-- Deletion audit log
-- ============================================================
CREATE TABLE deletion_audit_log (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deletion_batch_id  UUID NOT NULL
                     REFERENCES deletion_batches(id)
                     ON DELETE CASCADE,
  event_type        TEXT NOT NULL
                    CHECK (event_type IN (
                      'archive_requested',
                      'archive_completed',
                      'restore_requested',
                      'restore_completed',
                      'restore_failed',
                      'purge_requested',
                      'purge_completed',
                      'purge_blocked'
                    )),
  actor             TEXT NOT NULL,
  event_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  details           JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE INDEX idx_deletion_audit_log_batch_id
  ON deletion_audit_log (deletion_batch_id);
CREATE INDEX idx_deletion_audit_log_event_type
  ON deletion_audit_log (event_type);
CREATE INDEX idx_deletion_audit_log_event_at
  ON deletion_audit_log (event_at DESC);


-- ============================================================
-- Preview helper
-- ============================================================
CREATE OR REPLACE FUNCTION fn_get_deletion_batch_preview(
  target_type TEXT,
  customer_code TEXT,
  policy_id UUID
)
RETURNS TABLE (
  preview_target_type TEXT,
  preview_customer_code TEXT,
  preview_policy_id UUID,
  preview_client_count INTEGER,
  preview_policy_count INTEGER,
  preview_policy_change_count INTEGER,
  preview_task_count INTEGER,
  preview_retention_days INTEGER,
  preview_summary JSONB
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_target_type TEXT := LOWER(BTRIM(COALESCE(target_type, '')));
  v_customer_code TEXT := UPPER(BTRIM(COALESCE(customer_code, '')));
  v_policy_id UUID := policy_id;
  v_client_id UUID;
  v_policy_ids UUID[];
  v_premium_ids UUID[];
  v_policy_count INTEGER;
  v_policy_change_count INTEGER;
  v_task_count INTEGER;
  v_quote_import_count INTEGER;
  v_summary JSONB;
BEGIN
  IF v_target_type NOT IN ('client', 'policy') THEN
    RAISE EXCEPTION 'Invalid target_type: %', target_type;
  END IF;

  IF v_target_type = 'client' THEN
    IF v_customer_code = '' THEN
      RAISE EXCEPTION 'customer_code is required for client previews';
    END IF;

    SELECT c.id
    INTO v_client_id
    FROM clients c
    WHERE c.customer_code = v_customer_code;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Client not found for customer_code %', v_customer_code;
    END IF;

    SELECT COALESCE(array_agg(p.id), '{}'::uuid[])
    INTO v_policy_ids
    FROM policies p
    WHERE p.customer_code = v_customer_code;

    SELECT COUNT(*)
    INTO v_policy_count
    FROM policies p
    WHERE p.customer_code = v_customer_code;

    SELECT COUNT(*)
    INTO v_policy_change_count
    FROM policy_changes pc
    WHERE pc.customer_code = v_customer_code;

    SELECT COUNT(DISTINCT t.id)
    INTO v_task_count
    FROM tasks t
    WHERE t.customer_code = v_customer_code
       OR t.policy_id = ANY(v_policy_ids);

    SELECT COALESCE(array_agg(pp.id), '{}'::uuid[])
    INTO v_premium_ids
    FROM policy_premiums pp
    WHERE pp.policy_id = ANY(v_policy_ids);

    SELECT COUNT(*)
    INTO v_quote_import_count
    FROM quote_pdf_imports qpi
    WHERE qpi.client_id = v_client_id
       OR qpi.customer_code = v_customer_code
       OR qpi.promoted_policy_id = ANY(v_policy_ids)
       OR qpi.promoted_premium_id = ANY(COALESCE(v_premium_ids, '{}'::uuid[]));

    v_summary := jsonb_build_object(
      'scope', 'client',
      'client_count', 1,
      'policy_count', v_policy_count,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', COALESCE(
        (SELECT COUNT(*) FROM quotes q WHERE q.customer_code = v_customer_code
          OR q.converted_policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))),
        0
      ),
      'quote_import_count', v_quote_import_count,
      'premium_count', COALESCE(
        (SELECT COUNT(*) FROM policy_premiums pp WHERE pp.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))),
        0
      ),
      'retention_days', 14
    );

    RETURN QUERY
    SELECT
      'client'::TEXT,
      v_customer_code,
      NULL::UUID,
      1,
      v_policy_count,
      v_policy_change_count,
      v_task_count,
      14,
      v_summary;
    RETURN;
  END IF;

  IF v_policy_id IS NULL THEN
    RAISE EXCEPTION 'policy_id is required for policy previews';
  END IF;

  SELECT p.customer_code, c.id
  INTO v_customer_code, v_client_id
  FROM policies p
  JOIN clients c ON c.customer_code = p.customer_code
  WHERE p.id = v_policy_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Policy not found for id %', v_policy_id;
  END IF;

  SELECT COUNT(*)
  INTO v_policy_change_count
  FROM policy_changes pc
  WHERE pc.policy_id = v_policy_id;

  SELECT COUNT(*)
  INTO v_task_count
  FROM tasks t
  WHERE t.policy_id = v_policy_id;

  SELECT COALESCE(array_agg(pp.id), '{}'::uuid[])
  INTO v_premium_ids
  FROM policy_premiums pp
  WHERE pp.policy_id = v_policy_id;

  SELECT COUNT(*)
  INTO v_quote_import_count
  FROM quote_pdf_imports qpi
  WHERE qpi.promoted_policy_id = v_policy_id
     OR qpi.promoted_premium_id = ANY(COALESCE(v_premium_ids, '{}'::uuid[]));

    v_summary := jsonb_build_object(
      'scope', 'policy',
      'client_count', 0,
      'policy_count', 1,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', COALESCE((SELECT COUNT(*) FROM quotes q WHERE q.converted_policy_id = v_policy_id), 0),
      'quote_import_count', v_quote_import_count,
      'premium_count', COALESCE((SELECT COUNT(*) FROM policy_premiums pp WHERE pp.policy_id = v_policy_id), 0),
      'retention_days', 7
    );

  RETURN QUERY
  SELECT
    'policy'::TEXT,
    v_customer_code,
    v_policy_id,
    0,
    1,
    v_policy_change_count,
    v_task_count,
    7,
    v_summary;
END;
$$;


-- ============================================================
-- Archive a client batch
-- ============================================================
CREATE OR REPLACE FUNCTION fn_archive_client_batch(
  target_customer_code TEXT,
  actor TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_customer_code TEXT := UPPER(BTRIM(COALESCE(target_customer_code, '')));
  v_actor TEXT := BTRIM(COALESCE(actor, ''));
  v_batch_id UUID := gen_random_uuid();
  v_client_id UUID;
  v_policy_ids UUID[];
  v_premium_ids UUID[];
  v_quote_import_ids BIGINT[];
  v_policy_count INTEGER;
  v_policy_change_count INTEGER;
  v_task_count INTEGER;
  v_quote_count INTEGER;
  v_quote_import_count INTEGER;
  v_premium_count INTEGER;
  v_rows INTEGER;
BEGIN
  IF v_actor = '' THEN
    RAISE EXCEPTION 'actor is required';
  END IF;

  IF v_customer_code = '' THEN
    RAISE EXCEPTION 'target_customer_code is required';
  END IF;

  SELECT c.id
  INTO v_client_id
  FROM clients c
  WHERE c.customer_code = v_customer_code
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Client not found for customer_code %', v_customer_code;
  END IF;

  SELECT COALESCE(array_agg(p.id), '{}'::uuid[])
  INTO v_policy_ids
  FROM (
    SELECT p.id
    FROM policies p
    WHERE p.customer_code = v_customer_code
    FOR UPDATE
  ) p;

  SELECT COALESCE(array_agg(pp.id), '{}'::uuid[])
  INTO v_premium_ids
  FROM (
    SELECT pp.id
    FROM policy_premiums pp
    WHERE pp.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))
    FOR UPDATE
  ) pp;

  SELECT COUNT(*)
  INTO v_policy_count
  FROM policies p
  WHERE p.customer_code = v_customer_code;

  PERFORM 1
  FROM policy_changes pc
  WHERE pc.customer_code = v_customer_code
  FOR UPDATE;

  PERFORM 1
  FROM tasks t
  WHERE t.customer_code = v_customer_code
     OR t.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))
  FOR UPDATE;

  PERFORM 1
  FROM quotes q
  WHERE q.customer_code = v_customer_code
     OR q.converted_policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))
  FOR UPDATE;

  PERFORM 1
  FROM policy_premiums pp
  WHERE pp.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))
  FOR UPDATE;

  SELECT COUNT(*)
  INTO v_policy_change_count
  FROM policy_changes pc
  WHERE pc.customer_code = v_customer_code;

  SELECT COUNT(DISTINCT t.id)
  INTO v_task_count
  FROM tasks t
  WHERE t.customer_code = v_customer_code
     OR t.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]));

  SELECT COUNT(*)
  INTO v_quote_count
  FROM quotes q
  WHERE q.customer_code = v_customer_code
     OR q.converted_policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]));

  SELECT COUNT(*)
  INTO v_premium_count
  FROM policy_premiums pp
  WHERE pp.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]));

  SELECT COALESCE(array_agg(qpi.id), '{}'::bigint[])
  INTO v_quote_import_ids
  FROM (
    SELECT qpi.id
    FROM quote_pdf_imports qpi
    WHERE qpi.client_id = v_client_id
       OR qpi.customer_code = v_customer_code
       OR qpi.promoted_policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))
       OR qpi.promoted_premium_id = ANY(COALESCE(v_premium_ids, '{}'::uuid[]))
    FOR UPDATE
  ) qpi;

  v_quote_import_count := COALESCE(array_length(v_quote_import_ids, 1), 0);

  INSERT INTO deletion_batches (
    id,
    target_type,
    target_customer_code,
    target_client_id,
    target_policy_id,
    status,
    retention_until,
    snapshot_version,
    snapshot_summary,
    archived_by,
    archived_at
  ) VALUES (
    v_batch_id,
    'client',
    v_customer_code,
    v_client_id,
    NULL,
    'archived',
    NOW() + INTERVAL '14 days',
    1,
    jsonb_build_object(
      'scope', 'client',
      'client_count', 1,
      'policy_count', v_policy_count,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', v_quote_count,
      'quote_import_count', v_quote_import_count,
      'premium_count', v_premium_count,
      'retention_days', 14
    ),
    v_actor,
    NOW()
  );

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch_id,
    'archive_requested',
    v_actor,
    jsonb_build_object(
      'target_type', 'client',
      'target_customer_code', v_customer_code,
      'target_client_id', v_client_id
    )
  );

  INSERT INTO archived_clients (
    id,
    deletion_batch_id,
    customer_code,
    full_name,
    birthday,
    phone,
    email,
    address,
    contact_1,
    contact_2,
    client_type,
    tags,
    referral_source,
    notes,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    c.id,
    v_batch_id,
    c.customer_code,
    c.full_name,
    c.birthday,
    c.phone,
    c.email,
    c.address,
    c.contact_1,
    c.contact_2,
    c.client_type,
    c.tags,
    c.referral_source,
    c.notes,
    c.created_at,
    c.updated_at,
    NOW(),
    v_actor
  FROM clients c
  WHERE c.customer_code = v_customer_code;

  INSERT INTO archived_policies (
    id,
    deletion_batch_id,
    customer_code,
    policy_number,
    insurer,
    policy_type,
    effective_date,
    expiry_date,
    premium_amount,
    payment_type,
    status,
    extra_fields,
    documents,
    notes,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    p.id,
    v_batch_id,
    p.customer_code,
    p.policy_number,
    p.insurer,
    p.policy_type,
    p.effective_date,
    p.expiry_date,
    p.premium_amount,
    p.payment_type,
    p.status,
    p.extra_fields,
    p.documents,
    p.notes,
    p.created_at,
    p.updated_at,
    NOW(),
    v_actor
  FROM policies p
  WHERE p.customer_code = v_customer_code;

  INSERT INTO archived_policy_changes (
    id,
    deletion_batch_id,
    policy_id,
    customer_code,
    change_type,
    change_date,
    summary,
    details,
    change_snapshot,
    created_at,
    archived_at,
    archived_by
  )
  SELECT
    pc.id,
    v_batch_id,
    pc.policy_id,
    pc.customer_code,
    pc.change_type,
    pc.change_date,
    pc.summary,
    pc.details,
    pc.change_snapshot,
    pc.created_at,
    NOW(),
    v_actor
  FROM policy_changes pc
  WHERE pc.customer_code = v_customer_code;

  INSERT INTO archived_tasks (
    id,
    deletion_batch_id,
    customer_code,
    policy_id,
    title,
    description,
    task_type,
    status,
    due_date,
    follow_up_date,
    follow_up_count,
    new_insurer,
    new_premium,
    payment_type,
    has_app_discount,
    workflow_id,
    policy_type,
    change_type,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    t.id,
    v_batch_id,
    t.customer_code,
    t.policy_id,
    t.title,
    t.description,
    t.task_type,
    t.status,
    t.due_date,
    t.follow_up_date,
    t.follow_up_count,
    t.new_insurer,
    t.new_premium,
    t.payment_type,
    t.has_app_discount,
    t.workflow_id,
    t.policy_type,
    t.change_type,
    t.created_at,
    t.updated_at,
    NOW(),
    v_actor
  FROM (
    SELECT *
    FROM tasks t
    WHERE t.customer_code = v_customer_code

    UNION

    SELECT t.*
    FROM tasks t
    WHERE t.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]))
  ) AS t;

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_task_count THEN
    RAISE EXCEPTION 'Archived task row count mismatch for batch %', v_batch_id;
  END IF;

  INSERT INTO archived_policy_premiums (
    id,
    deletion_batch_id,
    policy_id,
    effective_date,
    expiry_date,
    premium_amount,
    payment_type,
    created_at,
    archived_at,
    archived_by
  )
  SELECT
    pp.id,
    v_batch_id,
    pp.policy_id,
    pp.effective_date,
    pp.expiry_date,
    pp.premium_amount,
    pp.payment_type,
    pp.created_at,
    NOW(),
    v_actor
  FROM policy_premiums pp
  WHERE pp.policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]));

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_premium_count THEN
    RAISE EXCEPTION 'Archived premium row count mismatch for batch %', v_batch_id;
  END IF;

  INSERT INTO archived_quote_pdf_imports (
    id,
    deletion_batch_id,
    customer_code,
    client_id,
    source_filename,
    source_file_hash,
    source_folder,
    detected_policy_type,
    detected_variant_label,
    parsed_payload,
    parsed_effective_date,
    parsed_expiry_date,
    parsed_premium_amount,
    parsed_insurer,
    parse_confidence,
    parse_notes,
    review_status,
    promotion_status,
    duplicate_of_import_id,
    promoted_policy_id,
    promoted_premium_id,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    qpi.id,
    v_batch_id,
    qpi.customer_code,
    qpi.client_id,
    qpi.source_filename,
    qpi.source_file_hash,
    qpi.source_folder,
    qpi.detected_policy_type,
    qpi.detected_variant_label,
    qpi.parsed_payload,
    qpi.parsed_effective_date,
    qpi.parsed_expiry_date,
    qpi.parsed_premium_amount,
    qpi.parsed_insurer,
    qpi.parse_confidence,
    qpi.parse_notes,
    qpi.review_status,
    qpi.promotion_status,
    qpi.duplicate_of_import_id,
    qpi.promoted_policy_id,
    qpi.promoted_premium_id,
    qpi.created_at,
    qpi.updated_at,
    NOW(),
    v_actor
  FROM quote_pdf_imports qpi
  WHERE qpi.id = ANY(COALESCE(v_quote_import_ids, '{}'::bigint[]));

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_quote_import_count THEN
    RAISE EXCEPTION 'Archived quote import row count mismatch for batch %', v_batch_id;
  END IF;

  INSERT INTO archived_quotes (
    id,
    deletion_batch_id,
    customer_code,
    client_name,
    client_phone,
    client_email,
    policy_type,
    current_insurer,
    current_premium,
    quote_data,
    status,
    converted_policy_id,
    notes,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    q.id,
    v_batch_id,
    q.customer_code,
    q.client_name,
    q.client_phone,
    q.client_email,
    q.policy_type,
    q.current_insurer,
    q.current_premium,
    q.quote_data,
    q.status,
    q.converted_policy_id,
    q.notes,
    q.created_at,
    q.updated_at,
    NOW(),
    v_actor
  FROM quotes q
  WHERE q.customer_code = v_customer_code
     OR q.converted_policy_id = ANY(COALESCE(v_policy_ids, '{}'::uuid[]));

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_quote_count THEN
    RAISE EXCEPTION 'Archived quote row count mismatch for batch %', v_batch_id;
  END IF;

  DELETE FROM tasks t
  USING archived_tasks at
  WHERE at.deletion_batch_id = v_batch_id
    AND t.id = at.id;

  DELETE FROM quotes q
  USING archived_quotes aq
  WHERE aq.deletion_batch_id = v_batch_id
    AND q.id = aq.id;

  DELETE FROM quote_pdf_imports qpi
  WHERE qpi.id = ANY(COALESCE(v_quote_import_ids, '{}'::bigint[]));

  DELETE FROM policy_premiums pp
  USING archived_policy_premiums app
  WHERE app.deletion_batch_id = v_batch_id
    AND pp.id = app.id;

  DELETE FROM policy_changes pc
  USING archived_policy_changes apc
  WHERE apc.deletion_batch_id = v_batch_id
    AND pc.id = apc.id;

  DELETE FROM policies p
  USING archived_policies ap
  WHERE ap.deletion_batch_id = v_batch_id
    AND p.id = ap.id;

  DELETE FROM clients c
  USING archived_clients ac
  WHERE ac.deletion_batch_id = v_batch_id
    AND c.id = ac.id;

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch_id,
    'archive_completed',
    v_actor,
    jsonb_build_object(
      'target_type', 'client',
      'target_customer_code', v_customer_code,
      'client_count', 1,
      'policy_count', v_policy_count,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', v_quote_count,
      'quote_import_count', v_quote_import_count,
      'premium_count', v_premium_count
    )
  );

  RETURN v_batch_id;
END;
$$;


-- ============================================================
-- Restore a deletion batch
-- ============================================================
CREATE OR REPLACE FUNCTION fn_restore_deletion_batch(
  target_batch_id UUID,
  actor TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_actor TEXT := BTRIM(COALESCE(actor, ''));
  v_batch deletion_batches%ROWTYPE;
  v_current_customer_code TEXT;
  v_client_count INTEGER;
  v_policy_count INTEGER;
  v_policy_change_count INTEGER;
  v_task_count INTEGER;
  v_quote_count INTEGER;
  v_quote_import_count INTEGER;
  v_premium_count INTEGER;
  v_restore_error TEXT;
BEGIN
  IF v_actor = '' THEN
    RAISE EXCEPTION 'actor is required';
  END IF;

  IF target_batch_id IS NULL THEN
    RAISE EXCEPTION 'target_batch_id is required';
  END IF;

  SELECT *
  INTO v_batch
  FROM deletion_batches
  WHERE id = target_batch_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Deletion batch not found for id %', target_batch_id;
  END IF;

  IF v_batch.status = 'restored' THEN
    RETURN v_batch.id;
  END IF;

  IF v_batch.status = 'pending_purge' AND v_batch.restored_at IS NOT NULL THEN
    UPDATE deletion_batches
    SET status = 'restored',
        last_error = NULL
    WHERE id = v_batch.id;

    RETURN v_batch.id;
  END IF;

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch.id,
    'restore_requested',
    v_actor,
    jsonb_build_object(
      'target_type', v_batch.target_type
    )
  );

  BEGIN
    IF v_batch.status NOT IN ('archived', 'pending_purge', 'restored') THEN
      RAISE EXCEPTION 'Batch % is not eligible for restore', target_batch_id;
    END IF;

    IF v_batch.target_type = 'client' THEN
    SELECT COUNT(*)
    INTO v_client_count
    FROM archived_clients ac
    WHERE ac.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_policy_count
    FROM archived_policies ap
    WHERE ap.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_policy_change_count
    FROM archived_policy_changes apc
    WHERE apc.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_task_count
    FROM archived_tasks at
    WHERE at.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_premium_count
    FROM archived_policy_premiums app
    WHERE app.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_quote_count
    FROM archived_quotes aq
    WHERE aq.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_quote_import_count
    FROM archived_quote_pdf_imports aqpi
    WHERE aqpi.deletion_batch_id = v_batch.id;

      IF v_client_count <> 1
         OR v_policy_count <> COALESCE((v_batch.snapshot_summary->>'policy_count')::INTEGER, 0)
         OR v_policy_change_count <> COALESCE((v_batch.snapshot_summary->>'policy_change_count')::INTEGER, 0)
         OR v_task_count <> COALESCE((v_batch.snapshot_summary->>'task_count')::INTEGER, 0)
         OR v_quote_import_count <> COALESCE((v_batch.snapshot_summary->>'quote_import_count')::INTEGER, 0)
         OR v_premium_count <> COALESCE((v_batch.snapshot_summary->>'premium_count')::INTEGER, 0)
         OR v_quote_count <> COALESCE((v_batch.snapshot_summary->>'quote_count')::INTEGER, 0) THEN
        RAISE EXCEPTION 'Archive snapshot integrity check failed for batch %', v_batch.id;
      END IF;

      IF v_client_count <> 1 THEN
        RAISE EXCEPTION 'Archived client row missing for batch %', v_batch.id;
      END IF;

    SELECT ac.customer_code
    INTO v_current_customer_code
    FROM archived_clients ac
    WHERE ac.deletion_batch_id = v_batch.id;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Archived client row missing for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM clients c
      JOIN archived_clients ac ON ac.deletion_batch_id = v_batch.id
      WHERE c.id = ac.id
         OR c.customer_code = ac.customer_code
    ) THEN
      RAISE EXCEPTION 'Live client conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM policies p
      JOIN archived_policies ap ON ap.deletion_batch_id = v_batch.id
      WHERE p.id = ap.id
    ) THEN
      RAISE EXCEPTION 'Live policy conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM policy_changes pc
      JOIN archived_policy_changes apc ON apc.deletion_batch_id = v_batch.id
      WHERE pc.id = apc.id
    ) THEN
      RAISE EXCEPTION 'Live policy change conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM tasks t
      JOIN archived_tasks at ON at.deletion_batch_id = v_batch.id
      WHERE t.id = at.id
    ) THEN
      RAISE EXCEPTION 'Live task conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM policy_premiums pp
      JOIN archived_policy_premiums app ON app.deletion_batch_id = v_batch.id
      WHERE pp.id = app.id
    ) THEN
      RAISE EXCEPTION 'Live premium conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM quotes q
      JOIN archived_quotes aq ON aq.deletion_batch_id = v_batch.id
      WHERE q.id = aq.id
    ) THEN
      RAISE EXCEPTION 'Live quote conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM quote_pdf_imports qpi
      JOIN archived_quote_pdf_imports aqpi ON aqpi.deletion_batch_id = v_batch.id
      WHERE qpi.id = aqpi.id
    ) THEN
      RAISE EXCEPTION 'Live quote import conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM archived_policies ap
      JOIN policies p
        ON p.customer_code = v_current_customer_code
       AND p.policy_type = ap.policy_type
       AND p.policy_number = ap.policy_number
      WHERE ap.deletion_batch_id = v_batch.id
        AND p.id <> ap.id
    ) THEN
      RAISE EXCEPTION 'Live policy business-key conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM archived_policy_premiums app
      JOIN policy_premiums pp
        ON pp.policy_id = app.policy_id
       AND pp.effective_date = app.effective_date
       AND pp.premium_amount = app.premium_amount
      WHERE app.deletion_batch_id = v_batch.id
        AND pp.id <> app.id
    ) THEN
      RAISE EXCEPTION 'Live premium business-key conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM archived_quote_pdf_imports aqpi
      JOIN quote_pdf_imports qpi
        ON qpi.source_file_hash = aqpi.source_file_hash
      WHERE aqpi.deletion_batch_id = v_batch.id
        AND aqpi.source_file_hash IS NOT NULL
        AND qpi.id <> aqpi.id
    ) THEN
      RAISE EXCEPTION 'Live quote import hash conflict prevents restore for batch %', v_batch.id;
    END IF;

    INSERT INTO clients (
      id,
      customer_code,
      full_name,
      birthday,
      phone,
      email,
      address,
      contact_1,
      contact_2,
      client_type,
      tags,
      referral_source,
      notes,
      created_at,
      updated_at
    )
    SELECT
      ac.id,
      ac.customer_code,
      ac.full_name,
      ac.birthday,
      ac.phone,
      ac.email,
      ac.address,
      ac.contact_1,
      ac.contact_2,
      ac.client_type,
      ac.tags,
      ac.referral_source,
      ac.notes,
      ac.created_at,
      ac.updated_at
    FROM archived_clients ac
    WHERE ac.deletion_batch_id = v_batch.id;

    INSERT INTO policies (
      id,
      customer_code,
      policy_number,
      insurer,
      policy_type,
      effective_date,
      expiry_date,
      premium_amount,
      payment_type,
      status,
      extra_fields,
      documents,
      notes,
      created_at,
      updated_at
    )
    SELECT
      ap.id,
      v_current_customer_code,
      ap.policy_number,
      ap.insurer,
      ap.policy_type,
      ap.effective_date,
      ap.expiry_date,
      ap.premium_amount,
      ap.payment_type,
      ap.status,
      ap.extra_fields,
      ap.documents,
      ap.notes,
      ap.created_at,
      ap.updated_at
    FROM archived_policies ap
    WHERE ap.deletion_batch_id = v_batch.id;

    INSERT INTO policy_changes (
      id,
      policy_id,
      customer_code,
      change_type,
      change_date,
      summary,
      details,
      change_snapshot,
      created_at
    )
    SELECT
      apc.id,
      apc.policy_id,
      v_current_customer_code,
      apc.change_type,
      apc.change_date,
      apc.summary,
      apc.details,
      apc.change_snapshot,
      apc.created_at
    FROM archived_policy_changes apc
    WHERE apc.deletion_batch_id = v_batch.id;

    INSERT INTO tasks (
      id,
      customer_code,
      policy_id,
      title,
      description,
      task_type,
      status,
      due_date,
      follow_up_date,
      follow_up_count,
      new_insurer,
      new_premium,
      payment_type,
      has_app_discount,
      workflow_id,
      policy_type,
      change_type,
      created_at,
      updated_at
    )
    SELECT
      at.id,
      v_current_customer_code,
      at.policy_id,
      at.title,
      at.description,
      at.task_type,
      at.status,
      at.due_date,
      at.follow_up_date,
      at.follow_up_count,
      at.new_insurer,
      at.new_premium,
      at.payment_type,
      at.has_app_discount,
      at.workflow_id,
      at.policy_type,
      at.change_type,
      at.created_at,
      at.updated_at
    FROM archived_tasks at
    WHERE at.deletion_batch_id = v_batch.id;

    INSERT INTO policy_premiums (
      id,
      policy_id,
      effective_date,
      expiry_date,
      premium_amount,
      payment_type,
      created_at
    )
    SELECT
      app.id,
      app.policy_id,
      app.effective_date,
      app.expiry_date,
      app.premium_amount,
      app.payment_type,
      app.created_at
    FROM archived_policy_premiums app
    WHERE app.deletion_batch_id = v_batch.id;

    INSERT INTO quotes (
      id,
      customer_code,
      client_name,
      client_phone,
      client_email,
      policy_type,
      current_insurer,
      current_premium,
      quote_data,
      status,
      converted_policy_id,
      notes,
      created_at,
      updated_at
    )
    SELECT
      aq.id,
      v_current_customer_code,
      aq.client_name,
      aq.client_phone,
      aq.client_email,
      aq.policy_type,
      aq.current_insurer,
      aq.current_premium,
      aq.quote_data,
      aq.status,
      aq.converted_policy_id,
      aq.notes,
      aq.created_at,
      aq.updated_at
    FROM archived_quotes aq
    WHERE aq.deletion_batch_id = v_batch.id;

    INSERT INTO quote_pdf_imports (
      id,
      customer_code,
      client_id,
      source_filename,
      source_file_hash,
      source_folder,
      detected_policy_type,
      detected_variant_label,
      parsed_payload,
      parsed_effective_date,
      parsed_expiry_date,
      parsed_premium_amount,
      parsed_insurer,
      parse_confidence,
      parse_notes,
      review_status,
      promotion_status,
      promoted_policy_id,
      promoted_premium_id,
      created_at,
      updated_at
    )
    SELECT
      aqpi.id,
      v_current_customer_code,
      aqpi.client_id,
      aqpi.source_filename,
      aqpi.source_file_hash,
      aqpi.source_folder,
      aqpi.detected_policy_type,
      aqpi.detected_variant_label,
      aqpi.parsed_payload,
      aqpi.parsed_effective_date,
      aqpi.parsed_expiry_date,
      aqpi.parsed_premium_amount,
      aqpi.parsed_insurer,
      aqpi.parse_confidence,
      aqpi.parse_notes,
      aqpi.review_status,
      aqpi.promotion_status,
      aqpi.promoted_policy_id,
      aqpi.promoted_premium_id,
      aqpi.created_at,
      aqpi.updated_at
    FROM archived_quote_pdf_imports aqpi
    WHERE aqpi.deletion_batch_id = v_batch.id;

    UPDATE quote_pdf_imports qpi
    SET duplicate_of_import_id = CASE
      WHEN EXISTS (
        SELECT 1
        FROM archived_quote_pdf_imports parent
        WHERE parent.deletion_batch_id = v_batch.id
          AND parent.id = aqpi.duplicate_of_import_id
      )
      OR EXISTS (
        SELECT 1
        FROM quote_pdf_imports live_parent
        WHERE live_parent.id = aqpi.duplicate_of_import_id
      ) THEN aqpi.duplicate_of_import_id
      ELSE NULL
    END
    FROM archived_quote_pdf_imports aqpi
    WHERE aqpi.deletion_batch_id = v_batch.id
      AND qpi.id = aqpi.id;

    UPDATE deletion_batches
    SET status = 'restored',
        restored_by = v_actor,
        restored_at = NOW(),
        last_error = NULL
    WHERE id = v_batch.id;

    INSERT INTO deletion_audit_log (
      deletion_batch_id,
      event_type,
      actor,
      details
    ) VALUES (
      v_batch.id,
      'restore_completed',
      v_actor,
        jsonb_build_object(
          'target_type', 'client',
          'client_count', v_client_count,
          'policy_count', v_policy_count,
          'policy_change_count', v_policy_change_count,
          'task_count', v_task_count,
          'quote_count', v_quote_count,
          'quote_import_count', v_quote_import_count,
          'premium_count', v_premium_count
        )
    );

      RETURN v_batch.id;
    END IF;

    IF v_batch.target_type = 'policy' THEN
    SELECT c.customer_code
    INTO v_current_customer_code
    FROM clients c
    WHERE c.id = v_batch.target_client_id;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Parent client is missing for policy batch %', v_batch.id;
    END IF;

    SELECT COUNT(*)
    INTO v_policy_count
    FROM archived_policies ap
    WHERE ap.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_policy_change_count
    FROM archived_policy_changes apc
    WHERE apc.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_task_count
    FROM archived_tasks at
    WHERE at.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_premium_count
    FROM archived_policy_premiums app
    WHERE app.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_quote_count
    FROM archived_quotes aq
    WHERE aq.deletion_batch_id = v_batch.id;

    SELECT COUNT(*)
    INTO v_quote_import_count
    FROM archived_quote_pdf_imports aqpi
    WHERE aqpi.deletion_batch_id = v_batch.id;

      IF v_policy_count <> COALESCE((v_batch.snapshot_summary->>'policy_count')::INTEGER, 0)
         OR v_policy_change_count <> COALESCE((v_batch.snapshot_summary->>'policy_change_count')::INTEGER, 0)
         OR v_task_count <> COALESCE((v_batch.snapshot_summary->>'task_count')::INTEGER, 0)
         OR v_quote_import_count <> COALESCE((v_batch.snapshot_summary->>'quote_import_count')::INTEGER, 0)
         OR v_premium_count <> COALESCE((v_batch.snapshot_summary->>'premium_count')::INTEGER, 0)
         OR v_quote_count <> COALESCE((v_batch.snapshot_summary->>'quote_count')::INTEGER, 0) THEN
        RAISE EXCEPTION 'Archive snapshot integrity check failed for batch %', v_batch.id;
      END IF;

      IF v_policy_count <> 1 THEN
        RAISE EXCEPTION 'Archived policy row missing for batch %', v_batch.id;
      END IF;

    IF EXISTS (
      SELECT 1
      FROM policies p
      JOIN archived_policies ap ON ap.deletion_batch_id = v_batch.id
      WHERE p.id = ap.id
    ) THEN
      RAISE EXCEPTION 'Live policy conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM policy_changes pc
      JOIN archived_policy_changes apc ON apc.deletion_batch_id = v_batch.id
      WHERE pc.id = apc.id
    ) THEN
      RAISE EXCEPTION 'Live policy change conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM tasks t
      JOIN archived_tasks at ON at.deletion_batch_id = v_batch.id
      WHERE t.id = at.id
    ) THEN
      RAISE EXCEPTION 'Live task conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM policy_premiums pp
      JOIN archived_policy_premiums app ON app.deletion_batch_id = v_batch.id
      WHERE pp.id = app.id
    ) THEN
      RAISE EXCEPTION 'Live premium conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM quotes q
      JOIN archived_quotes aq ON aq.deletion_batch_id = v_batch.id
      WHERE q.id = aq.id
    ) THEN
      RAISE EXCEPTION 'Live quote conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM quote_pdf_imports qpi
      JOIN archived_quote_pdf_imports aqpi ON aqpi.deletion_batch_id = v_batch.id
      WHERE qpi.id = aqpi.id
    ) THEN
      RAISE EXCEPTION 'Live quote import conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM archived_policies ap
      JOIN policies p
        ON p.customer_code = v_current_customer_code
       AND p.policy_type = ap.policy_type
       AND p.policy_number = ap.policy_number
      WHERE ap.deletion_batch_id = v_batch.id
        AND p.id <> ap.id
    ) THEN
      RAISE EXCEPTION 'Live policy business-key conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM archived_policy_premiums app
      JOIN policy_premiums pp
        ON pp.policy_id = app.policy_id
       AND pp.effective_date = app.effective_date
       AND pp.premium_amount = app.premium_amount
      WHERE app.deletion_batch_id = v_batch.id
        AND pp.id <> app.id
    ) THEN
      RAISE EXCEPTION 'Live premium business-key conflict prevents restore for batch %', v_batch.id;
    END IF;

    IF EXISTS (
      SELECT 1
      FROM archived_quote_pdf_imports aqpi
      JOIN quote_pdf_imports qpi
        ON qpi.source_file_hash = aqpi.source_file_hash
      WHERE aqpi.deletion_batch_id = v_batch.id
        AND aqpi.source_file_hash IS NOT NULL
        AND qpi.id <> aqpi.id
    ) THEN
      RAISE EXCEPTION 'Live quote import hash conflict prevents restore for batch %', v_batch.id;
    END IF;

    INSERT INTO policies (
      id,
      customer_code,
      policy_number,
      insurer,
      policy_type,
      effective_date,
      expiry_date,
      premium_amount,
      payment_type,
      status,
      extra_fields,
      documents,
      notes,
      created_at,
      updated_at
    )
    SELECT
      ap.id,
      v_current_customer_code,
      ap.policy_number,
      ap.insurer,
      ap.policy_type,
      ap.effective_date,
      ap.expiry_date,
      ap.premium_amount,
      ap.payment_type,
      ap.status,
      ap.extra_fields,
      ap.documents,
      ap.notes,
      ap.created_at,
      ap.updated_at
    FROM archived_policies ap
    WHERE ap.deletion_batch_id = v_batch.id;

    INSERT INTO policy_changes (
      id,
      policy_id,
      customer_code,
      change_type,
      change_date,
      summary,
      details,
      change_snapshot,
      created_at
    )
    SELECT
      apc.id,
      apc.policy_id,
      v_current_customer_code,
      apc.change_type,
      apc.change_date,
      apc.summary,
      apc.details,
      apc.change_snapshot,
      apc.created_at
    FROM archived_policy_changes apc
    WHERE apc.deletion_batch_id = v_batch.id;

    INSERT INTO tasks (
      id,
      customer_code,
      policy_id,
      title,
      description,
      task_type,
      status,
      due_date,
      follow_up_date,
      follow_up_count,
      new_insurer,
      new_premium,
      payment_type,
      has_app_discount,
      workflow_id,
      policy_type,
      change_type,
      created_at,
      updated_at
    )
    SELECT
      at.id,
      v_current_customer_code,
      at.policy_id,
      at.title,
      at.description,
      at.task_type,
      at.status,
      at.due_date,
      at.follow_up_date,
      at.follow_up_count,
      at.new_insurer,
      at.new_premium,
      at.payment_type,
      at.has_app_discount,
      at.workflow_id,
      at.policy_type,
      at.change_type,
      at.created_at,
      at.updated_at
    FROM archived_tasks at
    WHERE at.deletion_batch_id = v_batch.id;

    INSERT INTO policy_premiums (
      id,
      policy_id,
      effective_date,
      expiry_date,
      premium_amount,
      payment_type,
      created_at
    )
    SELECT
      app.id,
      app.policy_id,
      app.effective_date,
      app.expiry_date,
      app.premium_amount,
      app.payment_type,
      app.created_at
    FROM archived_policy_premiums app
    WHERE app.deletion_batch_id = v_batch.id;

    INSERT INTO quotes (
      id,
      customer_code,
      client_name,
      client_phone,
      client_email,
      policy_type,
      current_insurer,
      current_premium,
      quote_data,
      status,
      converted_policy_id,
      notes,
      created_at,
      updated_at
    )
    SELECT
      aq.id,
      v_current_customer_code,
      aq.client_name,
      aq.client_phone,
      aq.client_email,
      aq.policy_type,
      aq.current_insurer,
      aq.current_premium,
      aq.quote_data,
      aq.status,
      aq.converted_policy_id,
      aq.notes,
      aq.created_at,
      aq.updated_at
    FROM archived_quotes aq
    WHERE aq.deletion_batch_id = v_batch.id;

    INSERT INTO quote_pdf_imports (
      id,
      customer_code,
      client_id,
      source_filename,
      source_file_hash,
      source_folder,
      detected_policy_type,
      detected_variant_label,
      parsed_payload,
      parsed_effective_date,
      parsed_expiry_date,
      parsed_premium_amount,
      parsed_insurer,
      parse_confidence,
      parse_notes,
      review_status,
      promotion_status,
      promoted_policy_id,
      promoted_premium_id,
      created_at,
      updated_at
    )
    SELECT
      aqpi.id,
      v_current_customer_code,
      aqpi.client_id,
      aqpi.source_filename,
      aqpi.source_file_hash,
      aqpi.source_folder,
      aqpi.detected_policy_type,
      aqpi.detected_variant_label,
      aqpi.parsed_payload,
      aqpi.parsed_effective_date,
      aqpi.parsed_expiry_date,
      aqpi.parsed_premium_amount,
      aqpi.parsed_insurer,
      aqpi.parse_confidence,
      aqpi.parse_notes,
      aqpi.review_status,
      aqpi.promotion_status,
      aqpi.promoted_policy_id,
      aqpi.promoted_premium_id,
      aqpi.created_at,
      aqpi.updated_at
    FROM archived_quote_pdf_imports aqpi
    WHERE aqpi.deletion_batch_id = v_batch.id;

    UPDATE quote_pdf_imports qpi
    SET duplicate_of_import_id = CASE
      WHEN EXISTS (
        SELECT 1
        FROM archived_quote_pdf_imports parent
        WHERE parent.deletion_batch_id = v_batch.id
          AND parent.id = aqpi.duplicate_of_import_id
      )
      OR EXISTS (
        SELECT 1
        FROM quote_pdf_imports live_parent
        WHERE live_parent.id = aqpi.duplicate_of_import_id
      ) THEN aqpi.duplicate_of_import_id
      ELSE NULL
    END
    FROM archived_quote_pdf_imports aqpi
    WHERE aqpi.deletion_batch_id = v_batch.id
      AND qpi.id = aqpi.id;

    UPDATE deletion_batches
    SET status = 'restored',
        restored_by = v_actor,
        restored_at = NOW(),
        last_error = NULL
    WHERE id = v_batch.id;

    INSERT INTO deletion_audit_log (
      deletion_batch_id,
      event_type,
      actor,
      details
    ) VALUES (
      v_batch.id,
      'restore_completed',
      v_actor,
        jsonb_build_object(
          'target_type', 'policy',
          'policy_count', v_policy_count,
          'policy_change_count', v_policy_change_count,
          'task_count', v_task_count,
          'quote_count', v_quote_count,
          'quote_import_count', v_quote_import_count,
          'premium_count', v_premium_count
        )
    );

      RETURN v_batch.id;
    END IF;

    RAISE EXCEPTION 'Unsupported batch target_type %', v_batch.target_type;
  EXCEPTION
    WHEN OTHERS THEN
      v_restore_error := SQLERRM;
      UPDATE deletion_batches
      SET last_error = v_restore_error
      WHERE id = v_batch.id;

      INSERT INTO deletion_audit_log (
        deletion_batch_id,
        event_type,
        actor,
        details
      ) VALUES (
        v_batch.id,
        'restore_failed',
        v_actor,
        jsonb_build_object(
          'target_type', v_batch.target_type,
          'error', v_restore_error
        )
      );

      RETURN NULL;
  END;
END;
$$;


-- ============================================================
-- Purge a deletion batch
-- ============================================================
CREATE OR REPLACE FUNCTION fn_purge_deletion_batch(
  target_batch_id UUID,
  actor TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_actor TEXT := BTRIM(COALESCE(actor, ''));
  v_batch deletion_batches%ROWTYPE;
  v_policy_count INTEGER;
  v_policy_change_count INTEGER;
  v_task_count INTEGER;
  v_quote_count INTEGER;
  v_quote_import_count INTEGER;
  v_premium_count INTEGER;
BEGIN
  IF v_actor = '' THEN
    RAISE EXCEPTION 'actor is required';
  END IF;

  IF target_batch_id IS NULL THEN
    RAISE EXCEPTION 'target_batch_id is required';
  END IF;

  SELECT *
  INTO v_batch
  FROM deletion_batches
  WHERE id = target_batch_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Deletion batch not found for id %', target_batch_id;
  END IF;

  IF v_batch.status NOT IN ('archived', 'pending_purge', 'restored') THEN
    RAISE EXCEPTION 'Batch % is not available for purge', target_batch_id;
  END IF;

  IF NOW() <= v_batch.retention_until THEN
    UPDATE deletion_batches
    SET status = 'pending_purge',
        last_error = 'Retention window has not elapsed'
    WHERE id = v_batch.id;

    INSERT INTO deletion_audit_log (
      deletion_batch_id,
      event_type,
      actor,
      details
    ) VALUES (
      v_batch.id,
      'purge_blocked',
      v_actor,
      jsonb_build_object(
        'reason', 'retention window has not elapsed',
        'retention_until', v_batch.retention_until
      )
    );

    RETURN NULL;
  END IF;

  SELECT COUNT(*)
  INTO v_policy_count
  FROM archived_policies ap
  WHERE ap.deletion_batch_id = v_batch.id;

  SELECT COUNT(*)
  INTO v_policy_change_count
  FROM archived_policy_changes apc
  WHERE apc.deletion_batch_id = v_batch.id;

  SELECT COUNT(*)
  INTO v_task_count
  FROM archived_tasks at
  WHERE at.deletion_batch_id = v_batch.id;

  SELECT COUNT(*)
  INTO v_premium_count
  FROM archived_policy_premiums app
  WHERE app.deletion_batch_id = v_batch.id;

  SELECT COUNT(*)
  INTO v_quote_count
  FROM archived_quotes aq
  WHERE aq.deletion_batch_id = v_batch.id;

  SELECT COUNT(*)
  INTO v_quote_import_count
  FROM archived_quote_pdf_imports aqpi
  WHERE aqpi.deletion_batch_id = v_batch.id;

  IF v_batch.target_type = 'client' THEN
    IF NOT EXISTS (
      SELECT 1
      FROM archived_clients ac
      WHERE ac.deletion_batch_id = v_batch.id
    ) THEN
      RAISE EXCEPTION 'Archived client row missing for batch %', v_batch.id;
    END IF;

    IF v_policy_count <> COALESCE((v_batch.snapshot_summary->>'policy_count')::INTEGER, 0)
       OR v_policy_change_count <> COALESCE((v_batch.snapshot_summary->>'policy_change_count')::INTEGER, 0)
       OR v_task_count <> COALESCE((v_batch.snapshot_summary->>'task_count')::INTEGER, 0)
       OR v_quote_count <> COALESCE((v_batch.snapshot_summary->>'quote_count')::INTEGER, 0)
       OR v_quote_import_count <> COALESCE((v_batch.snapshot_summary->>'quote_import_count')::INTEGER, 0)
       OR v_premium_count <> COALESCE((v_batch.snapshot_summary->>'premium_count')::INTEGER, 0) THEN
      RAISE EXCEPTION 'Archive snapshot integrity check failed for batch %', v_batch.id;
    END IF;
  ELSIF v_batch.target_type = 'policy' THEN
    IF v_policy_count <> COALESCE((v_batch.snapshot_summary->>'policy_count')::INTEGER, 0)
       OR v_policy_change_count <> COALESCE((v_batch.snapshot_summary->>'policy_change_count')::INTEGER, 0)
       OR v_task_count <> COALESCE((v_batch.snapshot_summary->>'task_count')::INTEGER, 0)
       OR v_quote_count <> COALESCE((v_batch.snapshot_summary->>'quote_count')::INTEGER, 0)
       OR v_quote_import_count <> COALESCE((v_batch.snapshot_summary->>'quote_import_count')::INTEGER, 0)
       OR v_premium_count <> COALESCE((v_batch.snapshot_summary->>'premium_count')::INTEGER, 0) THEN
      RAISE EXCEPTION 'Archive snapshot integrity check failed for batch %', v_batch.id;
    END IF;

    IF v_policy_count <> 1 THEN
      RAISE EXCEPTION 'Archived policy row missing for batch %', v_batch.id;
    END IF;
  ELSE
    RAISE EXCEPTION 'Unsupported batch target_type %', v_batch.target_type;
  END IF;

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch.id,
    'purge_requested',
    v_actor,
    jsonb_build_object(
      'target_type', v_batch.target_type
    )
  );

  DELETE FROM archived_policy_changes apc
  WHERE apc.deletion_batch_id = v_batch.id;

  DELETE FROM archived_tasks at
  WHERE at.deletion_batch_id = v_batch.id;

  DELETE FROM archived_quotes aq
  WHERE aq.deletion_batch_id = v_batch.id;

  DELETE FROM archived_quote_pdf_imports aqpi
  WHERE aqpi.deletion_batch_id = v_batch.id;

  DELETE FROM archived_policy_premiums app
  WHERE app.deletion_batch_id = v_batch.id;

  DELETE FROM archived_policies ap
  WHERE ap.deletion_batch_id = v_batch.id;

  DELETE FROM archived_clients ac
  WHERE ac.deletion_batch_id = v_batch.id;

  UPDATE deletion_batches
  SET status = 'purged',
      purged_by = v_actor,
      purged_at = NOW(),
      last_error = NULL
  WHERE id = v_batch.id;

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch.id,
    'purge_completed',
    v_actor,
    jsonb_build_object(
      'target_type', v_batch.target_type,
      'policy_count', v_policy_count,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', v_quote_count,
      'quote_import_count', v_quote_import_count,
      'premium_count', v_premium_count
    )
  );

  RETURN v_batch.id;
END;
$$;


-- ============================================================
-- Archive a policy batch
-- ============================================================
CREATE OR REPLACE FUNCTION fn_archive_policy_batch(
  target_policy_id UUID,
  actor TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_actor TEXT := BTRIM(COALESCE(actor, ''));
  v_batch_id UUID := gen_random_uuid();
  v_customer_code TEXT;
  v_client_id UUID;
  v_policy_count INTEGER;
  v_policy_change_count INTEGER;
  v_task_count INTEGER;
  v_quote_count INTEGER;
  v_quote_import_count INTEGER;
  v_premium_count INTEGER;
  v_premium_ids UUID[];
  v_rows INTEGER;
BEGIN
  IF v_actor = '' THEN
    RAISE EXCEPTION 'actor is required';
  END IF;

  IF target_policy_id IS NULL THEN
    RAISE EXCEPTION 'target_policy_id is required';
  END IF;

  SELECT p.customer_code, c.id
  INTO v_customer_code, v_client_id
  FROM policies p
  JOIN clients c
    ON c.customer_code = p.customer_code
  WHERE p.id = target_policy_id
  FOR UPDATE OF p, c;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Policy not found for id %', target_policy_id;
  END IF;

  PERFORM 1
  FROM policy_changes pc
  WHERE pc.policy_id = target_policy_id
  FOR UPDATE;

  PERFORM 1
  FROM tasks t
  WHERE t.policy_id = target_policy_id
  FOR UPDATE;

  PERFORM 1
  FROM policy_premiums pp
  WHERE pp.policy_id = target_policy_id
  FOR UPDATE;

  SELECT COALESCE(array_agg(pp.id), '{}'::uuid[])
  INTO v_premium_ids
  FROM (
    SELECT pp.id
    FROM policy_premiums pp
    WHERE pp.policy_id = target_policy_id
    FOR UPDATE
  ) pp;

  PERFORM 1
  FROM quotes q
  WHERE q.converted_policy_id = target_policy_id
  FOR UPDATE;

  PERFORM 1
  FROM quote_pdf_imports qpi
  WHERE qpi.promoted_policy_id = target_policy_id
     OR qpi.promoted_premium_id = ANY(COALESCE(v_premium_ids, '{}'::uuid[]))
  FOR UPDATE;

  SELECT COUNT(*)
  INTO v_policy_count
  FROM policies p
  WHERE p.id = target_policy_id;

  SELECT COUNT(*)
  INTO v_policy_change_count
  FROM policy_changes pc
  WHERE pc.policy_id = target_policy_id;

  SELECT COUNT(*)
  INTO v_task_count
  FROM tasks t
  WHERE t.policy_id = target_policy_id;

  SELECT COUNT(*)
  INTO v_premium_count
  FROM policy_premiums pp
  WHERE pp.policy_id = target_policy_id;

  SELECT COUNT(*)
  INTO v_quote_count
  FROM quotes q
  WHERE q.converted_policy_id = target_policy_id;

  SELECT COUNT(*)
  INTO v_quote_import_count
  FROM quote_pdf_imports qpi
  WHERE qpi.promoted_policy_id = target_policy_id
     OR qpi.promoted_premium_id = ANY(COALESCE(v_premium_ids, '{}'::uuid[]));

  INSERT INTO deletion_batches (
    id,
    target_type,
    target_customer_code,
    target_client_id,
    target_policy_id,
    status,
    retention_until,
    snapshot_version,
    snapshot_summary,
    archived_by,
    archived_at
  ) VALUES (
    v_batch_id,
    'policy',
    v_customer_code,
    v_client_id,
    target_policy_id,
    'archived',
    NOW() + INTERVAL '7 days',
    1,
    jsonb_build_object(
      'scope', 'policy',
      'client_count', 0,
      'policy_count', 1,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', v_quote_count,
      'quote_import_count', v_quote_import_count,
      'premium_count', v_premium_count,
      'retention_days', 7
    ),
    v_actor,
    NOW()
  );

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch_id,
    'archive_requested',
    v_actor,
    jsonb_build_object(
      'target_type', 'policy',
      'target_policy_id', target_policy_id,
      'target_customer_code', v_customer_code,
      'target_client_id', v_client_id
    )
  );

  INSERT INTO archived_policies (
    id,
    deletion_batch_id,
    customer_code,
    policy_number,
    insurer,
    policy_type,
    effective_date,
    expiry_date,
    premium_amount,
    payment_type,
    status,
    extra_fields,
    documents,
    notes,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    p.id,
    v_batch_id,
    p.customer_code,
    p.policy_number,
    p.insurer,
    p.policy_type,
    p.effective_date,
    p.expiry_date,
    p.premium_amount,
    p.payment_type,
    p.status,
    p.extra_fields,
    p.documents,
    p.notes,
    p.created_at,
    p.updated_at,
    NOW(),
    v_actor
  FROM policies p
  WHERE p.id = target_policy_id;

  INSERT INTO archived_policy_changes (
    id,
    deletion_batch_id,
    policy_id,
    customer_code,
    change_type,
    change_date,
    summary,
    details,
    change_snapshot,
    created_at,
    archived_at,
    archived_by
  )
  SELECT
    pc.id,
    v_batch_id,
    pc.policy_id,
    pc.customer_code,
    pc.change_type,
    pc.change_date,
    pc.summary,
    pc.details,
    pc.change_snapshot,
    pc.created_at,
    NOW(),
    v_actor
  FROM policy_changes pc
  WHERE pc.policy_id = target_policy_id;

  INSERT INTO archived_tasks (
    id,
    deletion_batch_id,
    customer_code,
    policy_id,
    title,
    description,
    task_type,
    status,
    due_date,
    follow_up_date,
    follow_up_count,
    new_insurer,
    new_premium,
    payment_type,
    has_app_discount,
    workflow_id,
    policy_type,
    change_type,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    t.id,
    v_batch_id,
    t.customer_code,
    t.policy_id,
    t.title,
    t.description,
    t.task_type,
    t.status,
    t.due_date,
    t.follow_up_date,
    t.follow_up_count,
    t.new_insurer,
    t.new_premium,
    t.payment_type,
    t.has_app_discount,
    t.workflow_id,
    t.policy_type,
    t.change_type,
    t.created_at,
    t.updated_at,
    NOW(),
    v_actor
  FROM tasks t
  WHERE t.policy_id = target_policy_id;

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_task_count THEN
    RAISE EXCEPTION 'Archived task row count mismatch for batch %', v_batch_id;
  END IF;

  INSERT INTO archived_policy_premiums (
    id,
    deletion_batch_id,
    policy_id,
    effective_date,
    expiry_date,
    premium_amount,
    payment_type,
    created_at,
    archived_at,
    archived_by
  )
  SELECT
    pp.id,
    v_batch_id,
    pp.policy_id,
    pp.effective_date,
    pp.expiry_date,
    pp.premium_amount,
    pp.payment_type,
    pp.created_at,
    NOW(),
    v_actor
  FROM policy_premiums pp
  WHERE pp.policy_id = target_policy_id;

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_premium_count THEN
    RAISE EXCEPTION 'Archived premium row count mismatch for batch %', v_batch_id;
  END IF;

  INSERT INTO archived_quotes (
    id,
    deletion_batch_id,
    customer_code,
    client_name,
    client_phone,
    client_email,
    policy_type,
    current_insurer,
    current_premium,
    quote_data,
    status,
    converted_policy_id,
    notes,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    q.id,
    v_batch_id,
    q.customer_code,
    q.client_name,
    q.client_phone,
    q.client_email,
    q.policy_type,
    q.current_insurer,
    q.current_premium,
    q.quote_data,
    q.status,
    q.converted_policy_id,
    q.notes,
    q.created_at,
    q.updated_at,
    NOW(),
    v_actor
  FROM quotes q
  WHERE q.converted_policy_id = target_policy_id;

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_quote_count THEN
    RAISE EXCEPTION 'Archived quote row count mismatch for batch %', v_batch_id;
  END IF;

  INSERT INTO archived_quote_pdf_imports (
    id,
    deletion_batch_id,
    customer_code,
    client_id,
    source_filename,
    source_file_hash,
    source_folder,
    detected_policy_type,
    detected_variant_label,
    parsed_payload,
    parsed_effective_date,
    parsed_expiry_date,
    parsed_premium_amount,
    parsed_insurer,
    parse_confidence,
    parse_notes,
    review_status,
    promotion_status,
    duplicate_of_import_id,
    promoted_policy_id,
    promoted_premium_id,
    created_at,
    updated_at,
    archived_at,
    archived_by
  )
  SELECT
    qpi.id,
    v_batch_id,
    qpi.customer_code,
    qpi.client_id,
    qpi.source_filename,
    qpi.source_file_hash,
    qpi.source_folder,
    qpi.detected_policy_type,
    qpi.detected_variant_label,
    qpi.parsed_payload,
    qpi.parsed_effective_date,
    qpi.parsed_expiry_date,
    qpi.parsed_premium_amount,
    qpi.parsed_insurer,
    qpi.parse_confidence,
    qpi.parse_notes,
    qpi.review_status,
    qpi.promotion_status,
    qpi.duplicate_of_import_id,
    qpi.promoted_policy_id,
    qpi.promoted_premium_id,
    qpi.created_at,
    qpi.updated_at,
    NOW(),
    v_actor
  FROM quote_pdf_imports qpi
  WHERE qpi.promoted_policy_id = target_policy_id
     OR qpi.promoted_premium_id = ANY(COALESCE(v_premium_ids, '{}'::uuid[]));

  GET DIAGNOSTICS v_rows = ROW_COUNT;
  IF v_rows <> v_quote_import_count THEN
    RAISE EXCEPTION 'Archived quote import row count mismatch for batch %', v_batch_id;
  END IF;

  DELETE FROM quotes q
  USING archived_quotes aq
  WHERE aq.deletion_batch_id = v_batch_id
    AND q.id = aq.id;

  DELETE FROM quote_pdf_imports qpi
  USING archived_quote_pdf_imports aqpi
  WHERE aqpi.deletion_batch_id = v_batch_id
    AND qpi.id = aqpi.id;

  DELETE FROM policy_premiums pp
  USING archived_policy_premiums app
  WHERE app.deletion_batch_id = v_batch_id
    AND pp.id = app.id;

  DELETE FROM tasks t
  USING archived_tasks at
  WHERE at.deletion_batch_id = v_batch_id
    AND t.id = at.id;

  DELETE FROM policy_changes pc
  USING archived_policy_changes apc
  WHERE apc.deletion_batch_id = v_batch_id
    AND pc.id = apc.id;

  DELETE FROM policies p
  USING archived_policies ap
  WHERE ap.deletion_batch_id = v_batch_id
    AND p.id = ap.id;

  INSERT INTO deletion_audit_log (
    deletion_batch_id,
    event_type,
    actor,
    details
  ) VALUES (
    v_batch_id,
    'archive_completed',
    v_actor,
    jsonb_build_object(
      'target_type', 'policy',
      'target_policy_id', target_policy_id,
      'target_customer_code', v_customer_code,
      'policy_count', 1,
      'policy_change_count', v_policy_change_count,
      'task_count', v_task_count,
      'quote_count', v_quote_count,
      'quote_import_count', v_quote_import_count,
      'premium_count', v_premium_count
    )
  );

  RETURN v_batch_id;
END;
$$;
