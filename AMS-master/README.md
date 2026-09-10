# AMS · 保险代理管理系统 v1.0
发布日期：2026年2月

## 使用方法

1. 将本文件夹中的所有文件放在同一目录下
2. 用浏览器打开任意 .html 文件
3. 首次使用需输入 Supabase 配置信息（Project URL 和 Anon Key）
   → 配置保存在 sessionStorage，同一浏览器 session 内无需重复输入
4. 数据库初始化：将 ams_database_schema.sql 在 Supabase SQL Editor 中完整执行一次

## 文件说明

| 文件 | 说明 |
|------|------|
| ams_dashboard.html   | 仪表盘：续保预警、待办任务概览、4项核心数字 |
| ams_clients.html     | 客户管理：列表/搜索/筛选、新增/编辑、详情（保单+变更时间线） |
| ams_policies.html    | 保单管理：车险/家财险/商业险专属字段、记录变更、状态管理 |
| ams_tasks.html       | 待办任务：看板/列表双视图、逾期预警、续保扫描、快速状态推进 |
| ams_changes.html     | 变更记录：全历史检索、分页、展开详情、新增变更 |
| ams_reports.html     | 报表：KPI卡、到期分布图、险种饼图、保险公司排行、变更趋势图 |
| ams_database_schema.sql | 数据库结构（在 Supabase SQL Editor 执行） |

## 技术栈

- 前端：纯 HTML / CSS / JavaScript（无需 Node.js 或构建工具）
- 数据库：Supabase（PostgreSQL）
- 图表：Chart.js 4.4
- 部署：本地浏览器直接打开，或部署到任意静态托管服务

## Supabase 配置获取

1. 登录 https://supabase.com
2. 进入项目 → Project Settings → API
3. 复制 Project URL 和 anon/public key

## v1.0 功能清单

- ✓ 客户增删改查（个人/商业，联系人1/2，标签）
- ✓ 保单全生命周期管理（车/家财/商业/其他）
- ✓ 车险三类驾驶员（Primary/Secondary/Occasional）
- ✓ 10 种保单变更类型记录与历史追溯
- ✓ 待办任务看板（续保提醒/跟进/手动）
- ✓ 60 天续保预警，14 天紧急标红
- ✓ 数据库自动生成续保提醒任务（pg_cron）
- ✓ 报表：6张图表 + 4项 KPI
- ✓ 全局搜索 + 多维筛选
- ✓ 移动端响应式布局
