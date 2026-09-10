-- ============================================================
-- AMS 迁移脚本 v1.4: 新客户报价功能
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 1. 创建 quotes 表
CREATE TABLE IF NOT EXISTS quotes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_code   TEXT
                  REFERENCES clients(customer_code)
                  ON UPDATE CASCADE
                  ON DELETE SET NULL,
  client_name     TEXT NOT NULL,
  client_phone    TEXT,
  client_email    TEXT,
  policy_type     TEXT NOT NULL
                  CHECK (policy_type IN ('auto', 'home', 'commercial', 'other')),
  current_insurer TEXT,
  current_premium NUMERIC(10, 2),
  quote_data      JSONB NOT NULL DEFAULT '{}',
  status          TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'confirmed', 'declined')),
  converted_policy_id UUID
                  REFERENCES policies(id)
                  ON DELETE SET NULL,
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quotes_customer_code ON quotes (customer_code);
CREATE INDEX IF NOT EXISTS idx_quotes_client_name   ON quotes (client_name);
CREATE INDEX IF NOT EXISTS idx_quotes_status        ON quotes (status);
CREATE INDEX IF NOT EXISTS idx_quotes_policy_type   ON quotes (policy_type);

-- 2. RLS
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "dev_all_quotes" ON quotes;
CREATE POLICY "dev_all_quotes" ON quotes FOR ALL TO anon USING (true) WITH CHECK (true);

-- 3. updated_at 触发器
CREATE TRIGGER trg_quotes_updated_at
  BEFORE UPDATE ON quotes
  FOR EACH ROW EXECUTE FUNCTION fn_update_updated_at();

-- ============================================================
-- 完成！执行后确认：
--   quotes 表已创建
--   RLS 策略已启用
--   updated_at 触发器已配置
-- ============================================================
