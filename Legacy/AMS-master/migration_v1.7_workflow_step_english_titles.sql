-- Run in Supabase SQL Editor
-- Purpose:
-- 1. Add a stable workflow_step field for renewal workflow tasks
-- 2. Backfill workflow_step from existing Chinese/English task titles
-- 3. Rewrite legacy Chinese renewal task titles to English in place

ALTER TABLE tasks
  ADD COLUMN IF NOT EXISTS workflow_step TEXT;

ALTER TABLE tasks
  DROP CONSTRAINT IF EXISTS tasks_workflow_step_check;

ALTER TABLE tasks
  ADD CONSTRAINT tasks_workflow_step_check CHECK (
    workflow_step IN (
      'cancel_old_policy',
      'cancel_policy',
      'new_policy_sign',
      'new_policy_entry',
      'confirm_app_install'
    ) OR workflow_step IS NULL
  );

-- Backfill workflow_step first so later app logic no longer depends on title text.
UPDATE tasks
SET workflow_step = CASE
  WHEN title LIKE '%取消旧保单%' OR title LIKE '%Cancel Old Policy%' THEN 'cancel_old_policy'
  WHEN title LIKE '%取消保单%' OR title LIKE '[Cancel Policy]%' OR title LIKE '%Cancel Policy%' THEN 'cancel_policy'
  WHEN title LIKE '%新保单出单签字%' OR title LIKE '%New Policy Sign%' THEN 'new_policy_sign'
  WHEN title LIKE '%新保单录单%' OR title LIKE '%录单%' OR title LIKE '%New Policy Entry%' THEN 'new_policy_entry'
  WHEN title LIKE '%安装app%' OR title LIKE '%月付计划确认%' OR title LIKE '%Confirm App Install / Monthly Payment Plan%' THEN 'confirm_app_install'
  ELSE workflow_step
END
WHERE task_type = 'renewal_workflow'
  AND (
    workflow_step IS NULL
    OR workflow_step NOT IN (
      'cancel_old_policy',
      'cancel_policy',
      'new_policy_sign',
      'new_policy_entry',
      'confirm_app_install'
    )
  );

-- Rewrite legacy Chinese titles to English while preserving insurer / policy details.
UPDATE tasks
SET title = regexp_replace(title, '取消旧保单', 'Cancel Old Policy', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'cancel_old_policy'
  AND title LIKE '%取消旧保单%';

UPDATE tasks
SET title = regexp_replace(title, '取消保单', 'Cancel Policy', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'cancel_policy'
  AND title LIKE '%取消保单%';

UPDATE tasks
SET title = regexp_replace(title, '新保单出单签字', 'New Policy Sign', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'new_policy_sign'
  AND title LIKE '%新保单出单签字%';

UPDATE tasks
SET title = regexp_replace(title, '新保单录单', 'New Policy Entry', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'new_policy_entry'
  AND title LIKE '%新保单录单%';

UPDATE tasks
SET title = regexp_replace(title, '录单', 'New Policy Entry', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'new_policy_entry'
  AND title LIKE '%录单%'
  AND title NOT LIKE '%New Policy Entry%';

UPDATE tasks
SET title = regexp_replace(title, '安装app', 'Confirm App Install / Monthly Payment Plan', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'confirm_app_install'
  AND title LIKE '%安装app%';

UPDATE tasks
SET title = regexp_replace(title, '月付计划确认', 'Confirm App Install / Monthly Payment Plan', 'g')
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'confirm_app_install'
  AND title LIKE '%月付计划确认%';

-- Normalize a few known prefixes into the English format used by the app.
UPDATE tasks
SET title = '[Renewal] Cancel Old Policy' ||
  CASE
    WHEN strpos(title, ' - ') > 0 THEN substr(title, strpos(title, ' - '))
    WHEN strpos(title, ' — ') > 0 THEN substr(title, strpos(title, ' — '))
    ELSE ''
  END
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'cancel_old_policy'
  AND title NOT LIKE '[Renewal] Cancel Old Policy%';

UPDATE tasks
SET title = '[Cancel Policy] ' ||
  trim(regexp_replace(title, '^.*?(?:Cancel Policy|取消保单)\s*[-—]?\s*', ''))
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'cancel_policy'
  AND title NOT LIKE '[Cancel Policy]%';

UPDATE tasks
SET title = '[Renewal] New Policy Sign' ||
  CASE
    WHEN strpos(title, ' - ') > 0 THEN substr(title, strpos(title, ' - '))
    WHEN strpos(title, ' — ') > 0 THEN substr(title, strpos(title, ' — '))
    ELSE ''
  END
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'new_policy_sign'
  AND title NOT LIKE '[Renewal] New Policy Sign%';

UPDATE tasks
SET title = '[Renewal] New Policy Entry' ||
  CASE
    WHEN strpos(title, ' - ') > 0 THEN substr(title, strpos(title, ' - '))
    WHEN strpos(title, ' — ') > 0 THEN substr(title, strpos(title, ' — '))
    ELSE ''
  END
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'new_policy_entry'
  AND title NOT LIKE '[Renewal] New Policy Entry%';

UPDATE tasks
SET title = '[Renewal] Confirm App Install / Monthly Payment Plan' ||
  CASE
    WHEN strpos(title, ' - ') > 0 THEN substr(title, strpos(title, ' - '))
    WHEN strpos(title, ' — ') > 0 THEN substr(title, strpos(title, ' — '))
    ELSE ''
  END
WHERE task_type = 'renewal_workflow'
  AND workflow_step = 'confirm_app_install'
  AND title NOT LIKE '[Renewal] Confirm App Install / Monthly Payment Plan%';

-- Audit queries
SELECT workflow_step, COUNT(*) AS task_count
FROM tasks
WHERE task_type = 'renewal_workflow'
GROUP BY workflow_step
ORDER BY workflow_step;

SELECT id, title, workflow_step, status, workflow_id
FROM tasks
WHERE task_type = 'renewal_workflow'
  AND (
    title LIKE '%取消%'
    OR title LIKE '%录单%'
    OR title LIKE '%签字%'
    OR title LIKE '%安装app%'
    OR title LIKE '%月付%'
  )
ORDER BY created_at DESC
LIMIT 50;
