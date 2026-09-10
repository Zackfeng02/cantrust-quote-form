-- ============================================================
-- 保险代理管理系统 (AMS) 数据库结构
-- 适用平台: Supabase (PostgreSQL)
-- 版本: V1.2 | 2026年2月
-- 使用方法: 在 Supabase > SQL Editor 中完整粘贴并执行
-- ============================================================
--
-- 表结构总览与关联关系：
--
--   clients (客户表)
--     └── customer_code  ← 业务主标识（TEXT UNIQUE NOT NULL）
--           ├── policies.customer_code        (一客户 → 多保单)
--           ├── policy_changes.customer_code  (一客户 → 多变更记录)
--           └── tasks.customer_code           (一客户 → 多待办任务)
--
--   policies (保单表)
--     └── id (UUID)
--           ├── policy_changes.policy_id      (一保单 → 多变更记录)
--           └── tasks.policy_id               (一保单 → 多待办任务)
--
-- 数据一致性保障：
--   - customer_code CHECK 约束强制格式为 4大写字母+2数字
--   - ON UPDATE CASCADE：客户编码修改时所有关联表自动同步
--   - ON DELETE RESTRICT（policies/policy_changes）：有数据的客户不可直接删除
--   - ON DELETE SET NULL（tasks）：客户删除后任务保留但解除关联
--   - expiry_date > effective_date 约束防止保单日期倒置
--   - updated_at 由触发器自动维护
-- ============================================================


-- ============================================================
-- 表1: 客户表 (clients)
-- ============================================================
CREATE TABLE clients (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 客户编码（业务主标识，格式：4位大写字母 + 2位数字，如 ABCD01）
  -- NOT NULL + UNIQUE，用于跨表关联
  customer_code   TEXT NOT NULL UNIQUE
                  CHECK (customer_code ~ '^[A-Z]{4}[0-9]{2}$'),

  -- 基本联系信息
  full_name       TEXT NOT NULL,
  birthday        DATE,
  phone           TEXT,
  email           TEXT,
  address         TEXT,

  -- 联系人1（可完全为空）
  -- 子字段: title, full_name, email, phone, birthday, marital_status, relation
  -- marital_status 建议值: single / married / divorced / widowed
  -- 示例:
  -- {
  --   "title": "Mrs.", "full_name": "张丽", "email": "zhangli@example.com",
  --   "phone": "416-555-0102", "birthday": "1982-09-20",
  --   "marital_status": "married", "relation": "spouse"
  -- }
  contact_1       JSONB DEFAULT NULL,

  -- 联系人2（结构与联系人1相同，可完全为空）
  contact_2       JSONB DEFAULT NULL,

  -- 分类与标签
  client_type     TEXT NOT NULL DEFAULT 'individual'
                  CHECK (client_type IN ('individual', 'corporation')),

  tags            TEXT[],
  referral_source TEXT,
  notes           TEXT,

  -- 系统字段
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_clients_customer_code ON clients (customer_code);
CREATE        INDEX idx_clients_full_name     ON clients (full_name);
CREATE        INDEX idx_clients_phone         ON clients (phone);
CREATE        INDEX idx_clients_email         ON clients (email);


-- ============================================================
-- 表2: 保单表 (policies)
-- ============================================================
CREATE TABLE policies (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 关联客户（通过 customer_code）
  -- NOT NULL：每张保单必须归属一位客户
  -- ON UPDATE CASCADE：客户编码变更时自动同步
  -- ON DELETE RESTRICT：有保单的客户不可直接删除
  customer_code   TEXT NOT NULL
                  REFERENCES clients(customer_code)
                  ON UPDATE CASCADE
                  ON DELETE RESTRICT,

  -- 保单基本信息
  policy_number   TEXT NOT NULL,
  insurer         TEXT NOT NULL,
  policy_type     TEXT NOT NULL
                  CHECK (policy_type IN ('auto', 'home', 'commercial', 'other')),

  -- 保单期间（到期日必须晚于生效日）
  effective_date  DATE NOT NULL,
  expiry_date     DATE NOT NULL,
  CONSTRAINT chk_policy_dates CHECK (expiry_date > effective_date),

  -- 保费（单位统一 CAD）
  premium_amount  NUMERIC(10, 2),

  -- 付款方式（年付 / 月付）
  payment_type    TEXT
                  CHECK (payment_type IN ('annual','monthly') OR payment_type IS NULL),

  -- 保单状态
  status          TEXT NOT NULL DEFAULT 'active'
                  CHECK (status IN ('active', 'pending_renewal', 'pending_confirmation', 'renewed', 'cancelled', 'expired')),

  -- 险种专属扩展字段（JSONB）
  --
  -- 【车险 auto】
  -- {
  --   "vin": "1HGBH41JXMN109186", "make": "Toyota", "model": "Camry", "year": 2021,
  --   "primary_driver":    {"name": "张伟",   "license": "A1234567", "dob": "1980-06-15"},
  --   "secondary_driver":  {"name": "张丽",   "license": "B7654321", "dob": "1982-09-20"},
  --   "occasional_driver": {"name": "张小明", "license": "C9876543", "dob": "2002-03-10"}
  -- }
  -- （不需要的驾驶员设为 null）
  --
  -- 【家财险 home】
  -- {"property_address": "123 Main St, Toronto, ON", "coverage_type": "comprehensive"}
  --
  -- 【商业险 commercial】
  -- {"business_name": "ABC Corp", "business_type": "retail", "coverage_limit": 1000000}
  --
  extra_fields    JSONB NOT NULL DEFAULT '{}',

  -- 文档附件（Supabase Storage 路径列表）
  documents       TEXT[] NOT NULL DEFAULT '{}',

  notes           TEXT,

  -- 系统字段
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_policies_customer_code ON policies (customer_code);
CREATE INDEX idx_policies_expiry_date   ON policies (expiry_date);
CREATE INDEX idx_policies_status        ON policies (status);
CREATE INDEX idx_policies_policy_type   ON policies (policy_type);
CREATE INDEX idx_policies_policy_number ON policies (policy_number);


-- ============================================================
-- 表3: 保单变更记录表 (policy_changes)
-- 只增不改，完整保留每张保单的操作历史
-- ============================================================
CREATE TABLE policy_changes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 关联保单（NOT NULL，变更记录必须对应一张保单）
  -- ON DELETE RESTRICT：有变更记录的保单不可直接删除
  policy_id       UUID NOT NULL
                  REFERENCES policies(id)
                  ON DELETE RESTRICT,

  -- 关联客户（冗余存储，方便按客户查询全部变更历史）
  -- ON UPDATE CASCADE：客户编码变更时自动同步
  -- ON DELETE RESTRICT：有变更记录的客户不可直接删除
  customer_code   TEXT NOT NULL
                  REFERENCES clients(customer_code)
                  ON UPDATE CASCADE
                  ON DELETE RESTRICT,

  -- 变更类型
  change_type     TEXT NOT NULL
                  CHECK (change_type IN (
                    'address change',     -- 地址变更
                    'vehicle add',        -- 新增车辆
                    'vehicle delete',     -- 删除车辆
                    'vehicle substitute', -- 替换车辆
                    'add driver',         -- 新增驾驶员
                    'add home',           -- 新增家庭保险
                    'add condo',          -- 新增公寓保险
                    'add rental',         -- 新增租赁保险
                    'cancellation',       -- 取消保单
                    'renewal',            -- 续保（含公司切换）
                    'other'               -- 其他
                  )),

  change_date     DATE NOT NULL DEFAULT CURRENT_DATE,

  -- 变更摘要（必填）
  summary         TEXT NOT NULL,

  -- 变更详情（选填）
  -- 示例: {"before": {"address": "100 Main St"}, "after": {"address": "200 Oak Ave"}}
  details         TEXT,
  change_snapshot JSONB DEFAULT '{}',

  -- 系统字段（只增不改，无 updated_at）
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_changes_policy_id     ON policy_changes (policy_id);
CREATE INDEX idx_changes_customer_code ON policy_changes (customer_code);
CREATE INDEX idx_changes_change_date   ON policy_changes (change_date DESC);
CREATE INDEX idx_changes_change_type   ON policy_changes (change_type);


-- ============================================================
-- 表4: 待办任务表 (tasks)
-- ============================================================
CREATE TABLE tasks (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 关联客户（可为空）
  -- ON UPDATE CASCADE：客户编码变更时自动同步
  -- ON DELETE SET NULL：客户删除后任务保留，解除关联
  customer_code   TEXT
                  REFERENCES clients(customer_code)
                  ON UPDATE CASCADE
                  ON DELETE SET NULL,

  -- 关联保单（可为空）
  -- ON DELETE SET NULL：保单删除后任务保留，解除关联
  policy_id       UUID
                  REFERENCES policies(id)
                  ON DELETE SET NULL,

  -- 任务内容
  title           TEXT NOT NULL,
  description     TEXT,

  -- 任务类型
  task_type       TEXT NOT NULL DEFAULT 'manual'
                  CHECK (task_type IN ('renewal_reminder', 'follow_up', 'manual', 'renewal_workflow', 'change_workflow')),

  -- 任务状态
  -- 通用状态: pending / contacted / quoting / completed / abandoned
  -- 续保流程状态: pending_issue(待出单) / pending_sign(待签字) /
  --               pending_entry(待录单) / annual_tracking(年付进度) /
  --               app_install(APP安装进度)
  status          TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN (
                    'pending', 'contacted', 'quoting', 'completed', 'abandoned',
                    'pending_issue', 'pending_sign', 'pending_entry',
                    'annual_tracking', 'app_install'
                  )),

  due_date        DATE,
  follow_up_date  DATE,
  follow_up_count INTEGER NOT NULL DEFAULT 0,

  -- 续保流程扩展字段（renewal_workflow 任务专用）
  new_insurer     TEXT,                          -- 确认切换的新保险公司
  new_premium     NUMERIC(10,2),                 -- 确认的新年保费
  payment_type    TEXT                           -- 'annual' 年付 / 'monthly' 月付
                  CHECK (payment_type IN ('annual','monthly') OR payment_type IS NULL),
  has_app_discount BOOLEAN DEFAULT FALSE,        -- 车险是否含 APP 折扣
  workflow_id     UUID,                          -- 同一续保流程的任务共享此 ID
  policy_type     TEXT,                          -- 保单类型 auto/home（流程创建时记录）
  change_type     TEXT,                          -- 变更流程专用：记录变更类型（address change, vehicle add 等）

  -- 系统字段
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_tasks_customer_code ON tasks (customer_code);
CREATE INDEX idx_tasks_policy_id     ON tasks (policy_id);
CREATE INDEX idx_tasks_due_date      ON tasks (due_date);
CREATE INDEX idx_tasks_follow_up_date ON tasks (follow_up_date);
CREATE INDEX idx_tasks_status        ON tasks (status);
CREATE INDEX idx_tasks_task_type     ON tasks (task_type);


-- ============================================================
-- 触发器：自动维护 updated_at
-- 适用：clients / policies / tasks
-- policy_changes 只增不改，不需要此触发器
-- ============================================================
CREATE OR REPLACE FUNCTION fn_update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ============================================================
-- 函数：延后跟进日期
-- 用于 Dashboard / Tasks 页面中的“已跟进”操作
-- ============================================================
CREATE OR REPLACE FUNCTION fn_snooze_task(
  p_task_id UUID,
  p_days    INTEGER DEFAULT 3
)
RETURNS void AS $$
BEGIN
  UPDATE tasks
  SET
    follow_up_date = COALESCE(follow_up_date, CURRENT_DATE) + GREATEST(COALESCE(p_days, 0), 0),
    follow_up_count = COALESCE(follow_up_count, 0) + 1,
    updated_at = NOW()
  WHERE id = p_task_id;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_clients_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION fn_update_updated_at();

CREATE TRIGGER trg_policies_updated_at
  BEFORE UPDATE ON policies
  FOR EACH ROW EXECUTE FUNCTION fn_update_updated_at();

CREATE TRIGGER trg_tasks_updated_at
  BEFORE UPDATE ON tasks
  FOR EACH ROW EXECUTE FUNCTION fn_update_updated_at();

CREATE TRIGGER trg_quotes_updated_at
  BEFORE UPDATE ON quotes
  FOR EACH ROW EXECUTE FUNCTION fn_update_updated_at();


-- ============================================================
-- 函数：自动生成续保提醒任务
-- 扫描 active 保单中到期日距今 <= 60 天、且无未完成 renewal_reminder 的保单
-- 建议在 Supabase pg_cron 中每日执行：
--   SELECT cron.schedule('0 8 * * *', 'SELECT fn_auto_create_renewal_tasks()');
-- ============================================================
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


-- ============================================================
-- 表5: 报价记录表 (quotes)
-- 新客户保险报价存档，支持历史报价自动联想
-- ============================================================
CREATE TABLE quotes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 客户标识（已有客户 → customer_code；潜在客户 → 仅姓名+联系方式）
  customer_code   TEXT
                  REFERENCES clients(customer_code)
                  ON UPDATE CASCADE
                  ON DELETE SET NULL,
  client_name     TEXT NOT NULL,
  client_phone    TEXT,
  client_email    TEXT,

  -- 报价险种
  policy_type     TEXT NOT NULL
                  CHECK (policy_type IN ('auto', 'home', 'commercial', 'other')),

  -- 现有保险信息（可为空 = 未知）
  current_insurer TEXT,
  current_premium NUMERIC(10, 2),

  -- 报价方案数据（完整快照：卡片数组 + 选中项 + 备注）
  quote_data      JSONB NOT NULL DEFAULT '{}',

  -- 报价结果
  status          TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'confirmed', 'declined')),

  -- 转化关联：报价确认后关联生成的保单
  converted_policy_id UUID
                  REFERENCES policies(id)
                  ON DELETE SET NULL,

  notes           TEXT,

  -- 系统字段
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_quotes_customer_code ON quotes (customer_code);
CREATE INDEX idx_quotes_client_name   ON quotes (client_name);
CREATE INDEX idx_quotes_status        ON quotes (status);
CREATE INDEX idx_quotes_policy_type   ON quotes (policy_type);


-- ============================================================
-- 表6: 保单保费历史表 (policy_premiums)
-- 记录每个保单每个保期的保费，支持多年续保价格追踪
-- ============================================================
CREATE TABLE policy_premiums (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- 关联保单
  policy_id       UUID NOT NULL
                  REFERENCES policies(id)
                  ON DELETE CASCADE,

  -- 本条保费对应的保期
  effective_date  DATE NOT NULL,
  expiry_date     DATE NOT NULL,
  CONSTRAINT chk_premium_dates CHECK (expiry_date > effective_date),

  -- 保费金额（CAD）
  premium_amount  NUMERIC(10, 2) NOT NULL DEFAULT 0,

  -- 付款方式
  payment_type    TEXT
                  CHECK (payment_type IN ('annual','monthly') OR payment_type IS NULL),

  -- 系统字段
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_policy_premiums_policy_id ON policy_premiums (policy_id);
CREATE INDEX idx_policy_premiums_dates     ON policy_premiums (effective_date, expiry_date);


-- ============================================================
-- 视图1：仪表盘续保预警 (v_renewal_dashboard)
-- 未来 60 天内到期保单 + 客户联系信息 + 剩余天数
-- ============================================================
CREATE OR REPLACE VIEW v_renewal_dashboard AS
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


-- ============================================================
-- 视图2：每位客户最近一次保单变更 (v_latest_policy_changes)
-- 每位客户只返回最新一条，用于客户列表页"最近变更"列
-- ============================================================
CREATE OR REPLACE VIEW v_latest_policy_changes AS
SELECT DISTINCT ON (pc.customer_code)
  pc.customer_code,
  c.full_name          AS client_name,
  pc.policy_id,
  p.policy_number,
  p.policy_type,
  p.insurer,
  pc.change_type,
  pc.change_date,
  pc.summary           AS last_change_summary
FROM policy_changes pc
JOIN clients  c ON c.customer_code = pc.customer_code
JOIN policies p ON p.id            = pc.policy_id
ORDER BY pc.customer_code, pc.change_date DESC;


-- ============================================================
-- 行级安全策略（RLS）
-- 当前为开发模式，允许 anon 角色全权操作
-- 正式上线前替换为基于 auth.uid() 的登录验证策略
-- ============================================================
ALTER TABLE clients          ENABLE ROW LEVEL SECURITY;
ALTER TABLE policies         ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_changes   ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks            ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes           ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_premiums  ENABLE ROW LEVEL SECURITY;

CREATE POLICY "dev_all_clients"          ON clients          FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "dev_all_policies"         ON policies         FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "dev_all_policy_changes"   ON policy_changes   FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "dev_all_tasks"            ON tasks            FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "dev_all_quotes"           ON quotes           FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "dev_all_policy_premiums"  ON policy_premiums  FOR ALL TO anon USING (true) WITH CHECK (true);


-- ============================================================
-- 示例数据（验证用，可按需删除）
-- ============================================================

INSERT INTO clients (customer_code, full_name, birthday, phone, email, address, client_type, notes, contact_1)
VALUES
  (
    'ZWEI01', '张伟', '1980-06-15', '416-555-0101', 'zhang.wei@example.com',
    '100 Main St, Toronto, ON', 'individual', '长期客户，每年准时续保',
    '{"title":"Mrs.","full_name":"张丽","email":"zhangli@example.com",
      "phone":"416-555-0102","birthday":"1982-09-20",
      "marital_status":"married","relation":"spouse"}'
  ),
  (
    'LINA01', '李娜', '1990-03-22', '905-555-0202', 'lina@example.com',
    '200 Oak Ave, Mississauga, ON', 'individual', '通过朋友介绍', NULL
  ),
  (
    'ABCT01', 'ABC贸易公司', NULL, '416-555-0303', 'info@abctrade.com',
    '300 Bay St, Toronto, ON', 'corporation', '商业客户，有多张保单', NULL
  );

INSERT INTO policies (customer_code, policy_number, insurer, policy_type, effective_date, expiry_date, premium_amount, status, extra_fields)
VALUES (
  'ZWEI01', 'AUTO-2024-001', 'Intact Insurance', 'auto',
  '2024-03-01', '2025-03-01', 1850.00, 'active',
  '{"vin":"1HGBH41JXMN109186","make":"Toyota","model":"Camry","year":2021,
    "primary_driver":   {"name":"张伟", "license":"A1234567","dob":"1980-06-15"},
    "secondary_driver": {"name":"张丽", "license":"B7654321","dob":"1982-09-20"},
    "occasional_driver":null}'
);

INSERT INTO policy_changes (policy_id, customer_code, change_type, change_date, summary)
VALUES (
  (SELECT id FROM policies WHERE policy_number = 'AUTO-2024-001'),
  'ZWEI01', 'add driver', '2024-08-15',
  '新增 occasional driver：张小明（驾照 C9876543），保费调整 +$120'
);

INSERT INTO tasks (customer_code, policy_id, title, task_type, due_date, status)
VALUES (
  'ZWEI01',
  (SELECT id FROM policies WHERE policy_number = 'AUTO-2024-001'),
  '跟进张伟车险续保意向，当前保费 $1850',
  'follow_up', '2025-02-01', 'pending'
);

-- ============================================================
-- 完成！执行后请在 Table Editor 确认：
--   表：clients / policies / policy_changes / tasks / policy_premiums
--   视图：v_renewal_dashboard / v_latest_policy_changes
--   函数：fn_auto_create_renewal_tasks / fn_update_updated_at
--   触发器：trg_clients_updated_at / trg_policies_updated_at / trg_tasks_updated_at
-- ============================================================


-- ============================================================
-- 迁移脚本 v1.1（已有数据库执行此段）
-- 如是全新安装请忽略此段
-- ============================================================
-- ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_status_check;
-- ALTER TABLE tasks ADD CONSTRAINT tasks_status_check CHECK (
--   status IN (
--     'pending', 'contacted', 'quoting', 'completed', 'abandoned',
--     'pending_issue', 'pending_sign', 'pending_entry',
--     'annual_tracking', 'app_install'
--   )
-- );
-- ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_task_type_check;
-- ALTER TABLE tasks ADD CONSTRAINT tasks_task_type_check CHECK (
--   task_type IN ('renewal_reminder', 'follow_up', 'manual', 'renewal_workflow')
-- );
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS new_insurer     TEXT;
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS new_premium     NUMERIC(10,2);
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS payment_type    TEXT
--   CHECK (payment_type IN ('annual','monthly') OR payment_type IS NULL);
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS follow_up_date  DATE;
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS follow_up_count INTEGER NOT NULL DEFAULT 0;
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS has_app_discount BOOLEAN DEFAULT FALSE;
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS workflow_id     UUID;
-- ALTER TABLE tasks ADD COLUMN IF NOT EXISTS policy_type     TEXT;
-- CREATE INDEX IF NOT EXISTS idx_tasks_follow_up_date ON tasks (follow_up_date);
-- CREATE OR REPLACE FUNCTION fn_snooze_task(
--   p_task_id UUID,
--   p_days    INTEGER DEFAULT 3
-- )
-- RETURNS void AS $$
-- BEGIN
--   UPDATE tasks
--   SET
--     follow_up_date = COALESCE(follow_up_date, CURRENT_DATE) + GREATEST(COALESCE(p_days, 0), 0),
--     follow_up_count = COALESCE(follow_up_count, 0) + 1,
--     updated_at = NOW()
--   WHERE id = p_task_id;
-- END;
-- $$ LANGUAGE plpgsql;
-- 新增 policy_changes 续保变更类型（已有数据库）:
-- ALTER TABLE policy_changes DROP CONSTRAINT IF EXISTS policy_changes_change_type_check;
-- ALTER TABLE policy_changes ADD CONSTRAINT policy_changes_change_type_check CHECK (
--   change_type IN ('address change','vehicle add','vehicle delete','vehicle substitute',
--                   'add driver','add home','add condo','add rental','cancellation','renewal','other')
-- );
