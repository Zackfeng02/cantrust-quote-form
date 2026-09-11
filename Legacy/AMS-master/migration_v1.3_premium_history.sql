-- ============================================================
-- AMS 迁移脚本 v1.3: 保费历史记录
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 1. 创建 policy_premiums 表
CREATE TABLE IF NOT EXISTS policy_premiums (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  policy_id       UUID NOT NULL
                  REFERENCES policies(id)
                  ON DELETE CASCADE,
  effective_date  DATE NOT NULL,
  expiry_date     DATE NOT NULL,
  CONSTRAINT chk_premium_dates CHECK (expiry_date > effective_date),
  premium_amount  NUMERIC(10, 2) NOT NULL DEFAULT 0,
  payment_type    TEXT
                  CHECK (payment_type IN ('annual','monthly') OR payment_type IS NULL),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_policy_premiums_policy_id ON policy_premiums (policy_id);
CREATE INDEX IF NOT EXISTS idx_policy_premiums_dates     ON policy_premiums (effective_date, expiry_date);

-- 2. 启用 RLS
ALTER TABLE policy_premiums ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "dev_all_policy_premiums" ON policy_premiums;
CREATE POLICY "dev_all_policy_premiums" ON policy_premiums FOR ALL TO anon USING (true) WITH CHECK (true);

-- 3. 迁移现有保单保费数据
--    将每张保单的当前 premium_amount 写入 policy_premiums 表
--    保期取 (expiry_date - 1 year) ~ expiry_date，代表最近一个保期
--    对于只录入了下一年续约价格的保单，该记录的 effective_date
--    会晚于当前日期，因此 UI 上当期保费将显示为 $0
INSERT INTO policy_premiums (policy_id, effective_date, expiry_date, premium_amount, payment_type)
SELECT
  p.id,
  (p.expiry_date - INTERVAL '1 year')::DATE,
  p.expiry_date,
  COALESCE(p.premium_amount, 0),
  p.payment_type
FROM policies p
WHERE p.premium_amount IS NOT NULL
  AND p.premium_amount > 0
  AND NOT EXISTS (
    SELECT 1 FROM policy_premiums pp WHERE pp.policy_id = p.id
  );

-- ============================================================
-- 完成！执行后确认：
--   policy_premiums 表已创建
--   现有保单保费已迁移至 policy_premiums
-- ============================================================
