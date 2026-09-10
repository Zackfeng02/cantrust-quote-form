# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AMS (保险代理管理系统) is a zero-build insurance agency management system. It is pure HTML/CSS/JavaScript — no Node.js, no bundler, no package manager. Open any `.html` file directly in a browser to run it.

## Running the App

No build step. Open any `.html` file in a browser. On first load, the app prompts for Supabase credentials (Project URL + Anon Key), which are stored in `sessionStorage` for the session.

## Database Setup

Run `ams_database_schema.sql` once in the Supabase SQL Editor to create all tables, views, triggers, and functions. For existing databases upgrading from v1.0, run only the commented migration block at the bottom of the file.

To enable automatic renewal reminders, schedule the function in Supabase pg_cron:
```sql
SELECT cron.schedule('0 8 * * *', 'SELECT fn_auto_create_renewal_tasks()');
```

## Architecture

Each page is a self-contained `.html` file with inline CSS and JS. There is no shared module or component system — logic is duplicated across files intentionally for simplicity.

**Supabase client initialization pattern** (repeated in every page):
- On page load, reads `SUPABASE_URL` and `SUPABASE_KEY` from `sessionStorage`
- If missing, shows a modal to collect credentials
- Creates a `supabase` client via `supabase.createClient(url, key)`

**Design system** (CSS variables, consistent across all pages):
- Dark sidebar: `--navy` (`#0d1b2a`) background with `--accent` (`#e8a020`) highlights
- Light content area: `--page-bg` (`#f0f4f8`) with white cards
- Fonts: Syne (headings/logo) + Outfit (body) via Google Fonts

## Database Schema

4 core tables with `customer_code` (format: `[A-Z]{4}[0-9]{2}`) as the cross-table business key:

- **clients** — customer profiles with JSONB `contact_1`/`contact_2` sub-contacts
- **policies** — policy records with type-specific `extra_fields` JSONB (auto/home/commercial/other)
- **policy_changes** — append-only change history (no `updated_at`), 11 change types
- **tasks** — to-do items with two status tracks: general (`pending/contacted/quoting/completed/abandoned`) and renewal workflow (`pending_issue/pending_sign/pending_entry/annual_tracking/app_install`)

2 views: `v_renewal_dashboard` (policies expiring within 60 days), `v_latest_policy_changes` (most recent change per client).

## Pages

| File | Purpose |
|------|---------|
| `ams_dashboard.html` | Dashboard: renewal warnings, task overview, 4 KPI cards |
| `ams_clients.html` | Client list: search (multi-field), filters, renewal/task badges, infinite scroll, CSV import/export, new-client modal |
| `ams_client_detail.html` | Client profile: inline edit, sub-contact cards (JSONB patch), linked policies, at-a-glance renewals/tasks panel, delete |
| `ams_policies.html` | Policy management: type-specific fields, change recording, status |
| `ams_tasks.html` | Task board/list, overdue alerts, renewal scan, status progression |
| `ams_changes.html` | Full change history: paginated, expandable detail, new entry form |
| `ams_reports.html` | Reports: KPI cards, expiry chart, policy-type pie, insurer ranking, trend chart |
| `ams_renewal.html` | Renewal comparison (v1.1): side-by-side old vs new policy data for renewal workflow |

**Cross-page dependencies:** `ams_policies.html?customer_code=<CODE>` and `ams_tasks.html?customer_code=<CODE>` are linked from the detail page but those pages do not yet consume the parameter.

**Important constraints:**
- `clients` cannot be deleted if they have policies or policy_changes (RESTRICT)
- `customer_code` changes cascade to all related tables automatically
- `expiry_date` must be after `effective_date`

## Security Note

Use a local, git-ignored `local-config.js` file for browser-side Supabase bootstrap credentials. `New.txt` is deprecated and should not be used for auto-connect anymore. The current RLS policy allows full `anon` access (development mode). Before production use, replace the `dev_all_*` policies with `auth.uid()`-based policies.
