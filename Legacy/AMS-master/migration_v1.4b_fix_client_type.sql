-- ============================================================
-- AMS 迁移脚本 v1.4b: 修复 client_type 约束
-- UI 使用 individual/corporation，DB 原约束为 personal/commercial
-- 在 Supabase SQL Editor 中执行
-- ============================================================

-- 1. 先删除旧约束（必须在 UPDATE 之前，否则旧约束会阻止写入新值）
ALTER TABLE clients DROP CONSTRAINT IF EXISTS clients_client_type_check;

-- 2. 将现有数据从旧值迁移到新值
UPDATE clients SET client_type = 'individual'  WHERE client_type = 'personal';
UPDATE clients SET client_type = 'corporation' WHERE client_type = 'commercial';

-- 3. 添加新约束
ALTER TABLE clients ADD CONSTRAINT clients_client_type_check
  CHECK (client_type IN ('individual', 'corporation'));

-- 4. 更新默认值
ALTER TABLE clients ALTER COLUMN client_type SET DEFAULT 'individual';

-- ============================================================
-- 完成！
-- ============================================================
