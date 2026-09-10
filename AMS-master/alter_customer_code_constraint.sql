-- ============================================================
-- AMS: Extend customer_code to accept all agency code formats
-- Run this once in Supabase SQL Editor
-- ============================================================

-- Drop the existing check constraint
ALTER TABLE clients
  DROP CONSTRAINT IF EXISTS clients_customer_code_check;

-- Re-add to accept ALL four formats:
--   [A-Z]{4}[0-9]{2}        — standard alpha codes     (e.g. HANW02)
--   [0-9]{6}                — 6-digit numeric codes    (e.g. 047940, 100065)
--   [0-9][A-Z]{3}[0-9]{2}  — digit-first codes        (e.g. 8BCT01)
--   [A-Z]-[A-Z]{2}[0-9]{2} — hyphenated alpha codes   (e.g. U-NO01)
ALTER TABLE clients
  ADD CONSTRAINT clients_customer_code_check
  CHECK (customer_code ~ '^([A-Z]{4}[0-9]{2}|[0-9]{6}|[0-9][A-Z]{3}[0-9]{2}|[A-Z]-[A-Z]{2}[0-9]{2})$');
