-- ============================================================
-- Migration: Auto Follow-Up Reminders (2026-03-28)
-- Run in Supabase SQL Editor
-- ============================================================

-- 1. New columns on tasks
ALTER TABLE tasks
  ADD COLUMN IF NOT EXISTS follow_up_date DATE,
  ADD COLUMN IF NOT EXISTS follow_up_count INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_followed_up_at TIMESTAMPTZ;

-- Partial index for dashboard query performance
CREATE INDEX IF NOT EXISTS idx_tasks_follow_up_date ON tasks (follow_up_date)
  WHERE follow_up_date IS NOT NULL;

-- 2. Trigger: auto-set follow_up_date on status change
--    Fires on INSERT (OLD is NULL, IS DISTINCT FROM always true)
--    and UPDATE (only when status actually changes).
--    Note: trg_tasks_follow_up fires before trg_tasks_updated_at (alphabetical).
CREATE OR REPLACE FUNCTION fn_set_follow_up_date()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'INSERT') OR (OLD.status IS DISTINCT FROM NEW.status) THEN
    IF NEW.status IN ('completed', 'abandoned') THEN
      NEW.follow_up_date := NULL;
    ELSIF NEW.status = 'contacted' THEN
      NEW.follow_up_date := CURRENT_DATE + INTERVAL '3 days';
    ELSIF NEW.status = 'quoting' THEN
      NEW.follow_up_date := CURRENT_DATE + INTERVAL '5 days';
    ELSIF NEW.status IN ('pending_issue', 'pending_sign', 'pending_entry') THEN
      NEW.follow_up_date := CURRENT_DATE + INTERVAL '2 days';
    END IF;
    -- pending, annual_tracking, app_install: no auto-set
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_tasks_follow_up ON tasks;
CREATE TRIGGER trg_tasks_follow_up
  BEFORE INSERT OR UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION fn_set_follow_up_date();

-- 3. Atomic snooze function (avoids client-side race on follow_up_count)
--    Note: This UPDATE does not change `status`, so trg_tasks_follow_up will
--    NOT overwrite follow_up_date (the OLD.status IS DISTINCT FROM check fails).
CREATE OR REPLACE FUNCTION fn_snooze_task(p_task_id UUID, p_days INTEGER DEFAULT 3)
RETURNS void AS $$
BEGIN
  UPDATE tasks SET
    follow_up_count = follow_up_count + 1,
    last_followed_up_at = NOW(),
    follow_up_date = CURRENT_DATE + (p_days || ' days')::INTERVAL
  WHERE id = p_task_id;
END;
$$ LANGUAGE plpgsql;

-- KNOWN LIMITATION: If a user manually sets follow_up_date in the modal AND
-- changes the status in the same save, the trigger will overwrite the manual
-- date with its auto-calculated value. This is acceptable for v1 — the user
-- can re-edit the date after saving. A future improvement could check whether
-- follow_up_date was explicitly provided in the UPDATE SET clause.
