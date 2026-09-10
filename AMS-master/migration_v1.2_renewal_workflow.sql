-- ============================================================
-- AMS 迁移脚本 v1.2: 续保决策流程 + 付款方式
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 1. policies 表新增 payment_type 列
ALTER TABLE policies ADD COLUMN IF NOT EXISTS payment_type TEXT
  CHECK (payment_type IN ('annual','monthly') OR payment_type IS NULL);

-- 2. policies.status 新增 'pending_confirmation' 状态
ALTER TABLE policies DROP CONSTRAINT IF EXISTS policies_status_check;
ALTER TABLE policies ADD CONSTRAINT policies_status_check CHECK (
  status IN ('active', 'pending_renewal', 'pending_confirmation', 'renewed', 'cancelled', 'expired')
);

-- 3. 更新 fn_auto_create_renewal_tasks: 同时将保单状态改为 pending_renewal
CREATE OR REPLACE FUNCTION fn_auto_create_renewal_tasks()
RETURNS void AS $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN
    SELECT p.id AS policy_id, p.customer_code, p.policy_number,
           p.policy_type, p.expiry_date, p.insurer
    FROM policies p
    WHERE p.status = 'active'
      AND p.expiry_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '60 days'
      AND NOT EXISTS (
        SELECT 1 FROM tasks t
        WHERE t.policy_id = p.id
          AND t.task_type = 'renewal_reminder'
          AND t.status NOT IN ('completed', 'abandoned')
      )
  LOOP
    -- 创建续保提醒任务
    INSERT INTO tasks (customer_code, policy_id, title, task_type, due_date, status)
    VALUES (
      pol.customer_code,
      pol.policy_id,
      '续保提醒：' || pol.insurer || ' — ' ||
        CASE pol.policy_type
          WHEN 'auto'       THEN '车险'
          WHEN 'home'       THEN '家财险'
          WHEN 'commercial' THEN '商业险'
          ELSE '其他'
        END ||
        '（到期：' || TO_CHAR(pol.expiry_date, 'YYYY-MM-DD') || '）',
      'renewal_reminder',
      pol.expiry_date,
      'pending'
    );

    -- 同时将保单状态更新为 pending_renewal
    UPDATE policies SET status = 'pending_renewal' WHERE id = pol.policy_id;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- 4. 更新仪表盘视图: 纳入 pending_confirmation 状态
--    注意：原视图列结构已变（新增 payment_type、重命名 policy_status），
--    PostgreSQL 不允许 CREATE OR REPLACE 改列名/顺序，因此需先 DROP 再 CREATE。
DROP VIEW IF EXISTS v_renewal_dashboard;
CREATE VIEW v_renewal_dashboard AS
SELECT
  p.id                               AS policy_id,
  p.policy_number,
  p.policy_type,
  p.insurer,
  p.effective_date,
  p.expiry_date,
  p.premium_amount,
  p.status                           AS policy_status,
  p.payment_type,
  (p.expiry_date - CURRENT_DATE)     AS days_until_expiry,
  c.customer_code,
  c.full_name                        AS client_name,
  c.phone                            AS client_phone,
  c.email                            AS client_email
FROM policies p
JOIN clients c ON c.customer_code = p.customer_code
WHERE p.expiry_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '60 days'
  AND p.status IN ('active', 'pending_renewal', 'pending_confirmation')
ORDER BY p.expiry_date ASC;

-- 5. tasks 表新增 change_workflow 类型 + change_type 列
ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_task_type_check;
ALTER TABLE tasks ADD CONSTRAINT tasks_task_type_check CHECK (
  task_type IN ('renewal_reminder', 'follow_up', 'manual', 'renewal_workflow', 'change_workflow')
);
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS change_type TEXT;

-- ============================================================
-- 完成！执行后确认：
--   policies 表新增 payment_type 列
--   policies.status 约束已更新（含 pending_confirmation）
--   fn_auto_create_renewal_tasks 已更新（自动设置 pending_renewal）
--   v_renewal_dashboard 视图已更新（含 pending_confirmation）
--   tasks.task_type 约束已更新（含 change_workflow）
--   tasks 表新增 change_type 列
-- ============================================================
