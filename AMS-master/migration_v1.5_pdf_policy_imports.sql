-- ============================================================
-- AMS Migration v1.5: Quote PDF staged import table
-- Run in Supabase SQL Editor
--
-- Required table: quote_pdf_imports
-- Required columns:
--   id, customer_code, client_id, source_filename, source_file_hash, source_folder,
--   detected_policy_type, detected_variant_label, parsed_payload,
--   parsed_effective_date, parsed_expiry_date, parsed_premium_amount, parsed_insurer,
--   parse_confidence, parse_notes, review_status, promotion_status,
--   duplicate_of_import_id, promoted_policy_id, promoted_premium_id,
--   created_at, updated_at
-- ============================================================

-- 1. Create the staged import table for quote PDF migrations
CREATE TABLE IF NOT EXISTS quote_pdf_imports (
  id                      BIGSERIAL PRIMARY KEY,
  customer_code           TEXT,
  client_id               UUID
                          REFERENCES clients(id),
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
  parse_confidence        TEXT DEFAULT 'low'
                          CHECK (parse_confidence IN ('low', 'medium', 'high')),
  parse_notes             TEXT,
  review_status           TEXT DEFAULT 'needs_review'
                          CHECK (review_status IN (
                            'ready_to_promote',
                            'missing_client',
                            'duplicate',
                            'needs_review',
                            'parse_failed',
                            'promoted'
                          )),
  promotion_status        TEXT DEFAULT 'pending'
                          CHECK (promotion_status IN ('pending', 'promoting', 'promoted', 'blocked')),
  duplicate_of_import_id  BIGINT
                          REFERENCES quote_pdf_imports(id),
  promoted_policy_id      UUID
                          REFERENCES policies(id),
  promoted_premium_id     UUID
                          REFERENCES policy_premiums(id),
  created_at              TIMESTAMPTZ DEFAULT NOW(),
  updated_at              TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE quote_pdf_imports
  ADD COLUMN IF NOT EXISTS parse_notes TEXT;

ALTER TABLE quote_pdf_imports
  ADD COLUMN IF NOT EXISTS review_status TEXT DEFAULT 'needs_review';

UPDATE quote_pdf_imports
SET review_status = 'needs_review'
WHERE review_status IS NULL;

ALTER TABLE quote_pdf_imports
  ALTER COLUMN review_status SET DEFAULT 'needs_review';

ALTER TABLE quote_pdf_imports
  DROP CONSTRAINT IF EXISTS quote_pdf_imports_review_status_check;

ALTER TABLE quote_pdf_imports
  ADD CONSTRAINT quote_pdf_imports_review_status_check
  CHECK (review_status IN (
    'ready_to_promote',
    'missing_client',
    'duplicate',
    'needs_review',
    'parse_failed',
    'promoted'
  ));

ALTER TABLE quote_pdf_imports
  ADD COLUMN IF NOT EXISTS promotion_status TEXT DEFAULT 'pending';

UPDATE quote_pdf_imports
SET promotion_status = 'pending'
WHERE promotion_status IS NULL;

ALTER TABLE quote_pdf_imports
  ALTER COLUMN promotion_status SET DEFAULT 'pending';

ALTER TABLE quote_pdf_imports
  DROP CONSTRAINT IF EXISTS quote_pdf_imports_promotion_status_check;

ALTER TABLE quote_pdf_imports
  ADD CONSTRAINT quote_pdf_imports_promotion_status_check
  CHECK (promotion_status IN ('pending', 'promoting', 'promoted', 'blocked'));

ALTER TABLE quote_pdf_imports
  ADD COLUMN IF NOT EXISTS promoted_policy_id UUID REFERENCES policies(id);

ALTER TABLE quote_pdf_imports
  ADD COLUMN IF NOT EXISTS promoted_premium_id UUID REFERENCES policy_premiums(id);

-- 2. Indexes for file matching and review workflow
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM quote_pdf_imports
    WHERE source_file_hash IS NOT NULL
    GROUP BY source_file_hash
    HAVING COUNT(*) > 1
  ) THEN
    RAISE EXCEPTION 'Cannot create idx_quote_pdf_imports_source_file_hash until duplicate source_file_hash rows are cleaned up.';
  ELSE
    EXECUTE '
      CREATE UNIQUE INDEX IF NOT EXISTS idx_quote_pdf_imports_source_file_hash
      ON quote_pdf_imports (source_file_hash)
    ';
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_quote_pdf_imports_customer_code
  ON quote_pdf_imports (customer_code);

CREATE INDEX IF NOT EXISTS idx_quote_pdf_imports_review_status
  ON quote_pdf_imports (review_status);

CREATE INDEX IF NOT EXISTS idx_quote_pdf_imports_detected_policy_type
  ON quote_pdf_imports (detected_policy_type);

-- Prevent concurrent promotion races from inserting the same premium history twice.
-- Fail fast if legacy duplicates already exist so the operator can clean them before rerunning.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM policy_premiums
    WHERE policy_id IS NOT NULL
      AND effective_date IS NOT NULL
      AND premium_amount IS NOT NULL
    GROUP BY policy_id, effective_date, premium_amount
    HAVING COUNT(*) > 1
  ) THEN
    RAISE EXCEPTION 'Cannot create uq_policy_premiums_policy_effective_amount until duplicate policy_premiums rows are cleaned up.';
  ELSE
    EXECUTE '
      CREATE UNIQUE INDEX IF NOT EXISTS uq_policy_premiums_policy_effective_amount
      ON policy_premiums (policy_id, effective_date, premium_amount)
    ';
  END IF;
END $$;

-- Prevent concurrent creation of duplicate live policies when the same policy number is promoted twice.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM policies
    WHERE policy_number IS NOT NULL
      AND customer_code IS NOT NULL
      AND policy_type IS NOT NULL
    GROUP BY customer_code, policy_type, policy_number
    HAVING COUNT(*) > 1
  ) THEN
    RAISE EXCEPTION 'Cannot create uq_policies_customer_type_number until duplicate policies rows are cleaned up.';
  ELSE
    EXECUTE '
      CREATE UNIQUE INDEX IF NOT EXISTS uq_policies_customer_type_number
      ON policies (customer_code, policy_type, policy_number)
      WHERE policy_number IS NOT NULL
    ';
  END IF;
END $$;

-- 3. updated_at trigger support
DROP TRIGGER IF EXISTS trg_quote_pdf_imports_updated_at ON quote_pdf_imports;
CREATE TRIGGER trg_quote_pdf_imports_updated_at
  BEFORE UPDATE ON quote_pdf_imports
  FOR EACH ROW EXECUTE FUNCTION fn_update_updated_at();

-- ============================================================
-- Completed: quote_pdf_imports staged table is ready for:
--   - PDF filename hashing and deduplication
--   - client lookup by customer_code
--   - review queue filtering by status and policy type
--   - promotion tracking into policies / policy_premiums
-- ============================================================
