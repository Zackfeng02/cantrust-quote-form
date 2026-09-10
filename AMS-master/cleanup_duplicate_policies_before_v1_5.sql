-- ============================================================
-- Cleanup duplicate policies before running migration_v1.5
--
-- Problem:
--   migration_v1.5_pdf_policy_imports.sql creates a unique index on:
--     policies(customer_code, policy_type, policy_number)
--   and will fail if duplicate live policy rows already exist.
--
-- What this script does:
--   1. Finds duplicate policy groups by (customer_code, policy_type, policy_number)
--   2. Keeps the earliest row in each group
--   3. Repoints child records to the keeper policy row
--   4. Deduplicates policy_premiums collisions created by the merge
--   5. Deletes the extra policy rows
--
-- Notes:
--   - Run this in Supabase SQL Editor.
--   - Review the preview queries first if you want to inspect before cleanup.
--   - After this succeeds, rerun migration_v1.5_pdf_policy_imports.sql
-- ============================================================

-- ------------------------------------------------------------
-- Preview: duplicate live policy groups
-- ------------------------------------------------------------
SELECT
  customer_code,
  policy_type,
  policy_number,
  COUNT(*) AS row_count,
  ARRAY_AGG(id ORDER BY created_at, id) AS policy_ids
FROM policies
WHERE policy_number IS NOT NULL
  AND customer_code IS NOT NULL
  AND policy_type IS NOT NULL
GROUP BY customer_code, policy_type, policy_number
HAVING COUNT(*) > 1
ORDER BY row_count DESC, customer_code, policy_type, policy_number;

-- ------------------------------------------------------------
-- Cleanup pass
-- ------------------------------------------------------------
BEGIN;

CREATE TEMP TABLE tmp_policy_dedupe_map AS
WITH ranked AS (
  SELECT
    id,
    customer_code,
    policy_type,
    policy_number,
    created_at,
    ROW_NUMBER() OVER (
      PARTITION BY customer_code, policy_type, policy_number
      ORDER BY created_at, id
    ) AS rn,
    FIRST_VALUE(id) OVER (
      PARTITION BY customer_code, policy_type, policy_number
      ORDER BY created_at, id
    ) AS keep_id
  FROM policies
  WHERE policy_number IS NOT NULL
    AND customer_code IS NOT NULL
    AND policy_type IS NOT NULL
)
SELECT
  id AS duplicate_policy_id,
  keep_id
FROM ranked
WHERE rn > 1;

-- If this returns 0 rows, there is nothing to clean up.
SELECT COUNT(*) AS duplicate_policy_rows_to_merge
FROM tmp_policy_dedupe_map;

-- Repoint child rows that reference policies.id directly.
UPDATE policy_changes pc
SET policy_id = m.keep_id
FROM tmp_policy_dedupe_map m
WHERE pc.policy_id = m.duplicate_policy_id;

UPDATE tasks t
SET policy_id = m.keep_id
FROM tmp_policy_dedupe_map m
WHERE t.policy_id = m.duplicate_policy_id;

UPDATE quotes q
SET converted_policy_id = m.keep_id
FROM tmp_policy_dedupe_map m
WHERE q.converted_policy_id = m.duplicate_policy_id;

UPDATE policy_premiums pp
SET policy_id = m.keep_id
FROM tmp_policy_dedupe_map m
WHERE pp.policy_id = m.duplicate_policy_id;

DO $$
BEGIN
  IF to_regclass('public.quote_pdf_imports') IS NOT NULL THEN
    IF EXISTS (
      SELECT 1
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'quote_pdf_imports'
        AND column_name = 'promoted_policy_id'
    ) THEN
      EXECUTE '
        UPDATE quote_pdf_imports q
        SET promoted_policy_id = m.keep_id
        FROM tmp_policy_dedupe_map m
        WHERE q.promoted_policy_id = m.duplicate_policy_id
      ';
    END IF;
  END IF;
END $$;

-- policy_premiums can become duplicated after two duplicate policy rows are merged
-- onto the same keeper policy. Keep the earliest premium row for each:
--   (policy_id, effective_date, premium_amount)
CREATE TEMP TABLE tmp_policy_premium_dedupe_map AS
WITH ranked AS (
  SELECT
    id,
    policy_id,
    effective_date,
    premium_amount,
    created_at,
    ROW_NUMBER() OVER (
      PARTITION BY policy_id, effective_date, premium_amount
      ORDER BY created_at, id
    ) AS rn,
    FIRST_VALUE(id) OVER (
      PARTITION BY policy_id, effective_date, premium_amount
      ORDER BY created_at, id
    ) AS keep_id
  FROM policy_premiums
  WHERE policy_id IS NOT NULL
    AND effective_date IS NOT NULL
    AND premium_amount IS NOT NULL
)
SELECT
  id AS duplicate_premium_id,
  keep_id
FROM ranked
WHERE rn > 1;

SELECT COUNT(*) AS duplicate_policy_premium_rows_to_delete
FROM tmp_policy_premium_dedupe_map;

DO $$
BEGIN
  IF to_regclass('public.quote_pdf_imports') IS NOT NULL THEN
    IF EXISTS (
      SELECT 1
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'quote_pdf_imports'
        AND column_name = 'promoted_premium_id'
    ) THEN
      EXECUTE '
        UPDATE quote_pdf_imports q
        SET promoted_premium_id = m.keep_id
        FROM tmp_policy_premium_dedupe_map m
        WHERE q.promoted_premium_id = m.duplicate_premium_id
      ';
    END IF;
  END IF;
END $$;

DELETE FROM policy_premiums pp
USING tmp_policy_premium_dedupe_map m
WHERE pp.id = m.duplicate_premium_id;

DELETE FROM policies p
USING tmp_policy_dedupe_map m
WHERE p.id = m.duplicate_policy_id;

-- ------------------------------------------------------------
-- Post-cleanup verification
-- ------------------------------------------------------------
SELECT
  customer_code,
  policy_type,
  policy_number,
  COUNT(*) AS row_count
FROM policies
WHERE policy_number IS NOT NULL
  AND customer_code IS NOT NULL
  AND policy_type IS NOT NULL
GROUP BY customer_code, policy_type, policy_number
HAVING COUNT(*) > 1
ORDER BY row_count DESC, customer_code, policy_type, policy_number;

SELECT
  policy_id,
  effective_date,
  premium_amount,
  COUNT(*) AS row_count
FROM policy_premiums
WHERE policy_id IS NOT NULL
  AND effective_date IS NOT NULL
  AND premium_amount IS NOT NULL
GROUP BY policy_id, effective_date, premium_amount
HAVING COUNT(*) > 1
ORDER BY row_count DESC, policy_id, effective_date;

COMMIT;

-- If both verification queries above return 0 rows,
-- rerun migration_v1.5_pdf_policy_imports.sql
