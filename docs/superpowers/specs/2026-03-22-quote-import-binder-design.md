# Design Spec: Quote Text Import to Binder Policy

**Date:** 2026-03-22
**Status:** Approved

## Overview

A new page `ams_import_quote.html` that lets the user paste plain text from a .doc quote file (Applied Rating Services format), parses it to extract structured insurance quote data, creates or matches a client record, creates a "binder" policy with a temporary policy number, and generates the standard 3-step workflow tasks (出单 / 签字 / 录单). When the 录单 task is completed for a binder policy, a special modal prompts for the official policy number and allows premium adjustment, then redirects to the policy detail page.

No new database tables required — uses existing `clients`, `policies`, `policy_premiums`, `tasks` tables.

## Files to Create / Modify

| Action | File | Purpose |
|--------|------|---------|
| CREATE | `ams_import_quote.html` | New quote import page |
| MODIFY | `ams_tasks.html` | Add binder completion modal and logic |
| MODIFY | All sidebar HTML files | Add nav link under "业务" section |

## New Page: `ams_import_quote.html`

### UI Flow (3 stages)

**Stage 1 — Paste & Parse**
- Big `<textarea>` (monospace, min-height 300px), placeholder "粘贴 .doc 报价文本..."
- "📋 解析报价" button → calls `parseQuoteText()`

**Stage 2 — Preview & Client Matching**
- Parsed results in organized editable cards:
  - Client Info (name, phone, email, address)
  - Vehicle Info (year, make, model, VIN, body style, fuel type, primary use)
  - Driver Info (DOB, license number, license class, training date)
  - Coverage table (coverage name + limit/deductible)
  - Policy Summary (carrier, effective date, term, total premium)
- Client matching: auto-search `clients` by name/phone
  - Match found → green banner "已有客户: {code} — {name}"
  - No match → amber banner with customer code input field

**Stage 3 — Create**
- "✓ 创建 Binder 保单" button, disabled until all required fields resolved

### "创建 Binder 保单" Logic

1. **If new client** → insert `clients` record (individual, name, phone, email, address)
2. **Create `policies`** with `policy_number: BINDER-{base36_timestamp}`, status active, all parsed data, `extra_fields` containing vehicle/driver/coverages JSONB
3. **Create `policy_premiums`** record for the period
4. **Create 3 workflow tasks**: 出单(pending_issue, +1d) → 签字(pending_sign, +3d) → 录单(pending_entry, +5d)
5. **Toast + redirect** to `ams_policies.html?edit_policy={id}`

## Binder Completion in `ams_tasks.html`

### Detection
In `completeChangeEntry()`, before marking complete, fetch linked policy. If `policy_number.startsWith('BINDER-')`, open binder modal instead.

### Binder Modal
- Official policy number input (required)
- Premium amount (pre-filled, editable)
- Payment type radio (pre-filled, editable)
- "✓ 确认并完成" button

### On Submit
1. Update `policies.policy_number` to official number
2. Update `premium_amount` and `payment_type` if changed
3. Update corresponding `policy_premiums` record
4. Mark task completed
5. Redirect to `ams_policies.html?edit_policy={id}`

## Text Parser

Regex/keyword-based extraction from Applied Rating Services format:
- Client: name, phone (`\d{3}[-.]?\d{3}[-.]?\d{4}`), email, address
- Vehicle: year, make, model, VIN, body style, fuel type, primary use
- Driver: DOB, license number/class, training date
- Coverages: coverage name + amounts
- Policy: carrier, effective date, term, total premium (`\$[\d,]+\.?\d*`)

Graceful degradation: unparsed fields left blank for manual input.

## `policies.extra_fields` Structure for Binder

```json
{
  "vehicle": { "year": 2025, "make": "LEXUS", "model": "UX300h", "vin": "...", "body_style": "...", "fuel_type": "...", "primary_use": "..." },
  "driver": { "dob": "...", "license_number": "...", "license_class": "...", "training_date": "..." },
  "coverages": [ { "name": "Bodily Injury", "limit": "1,000,000" }, ... ],
  "source": "quote_import"
}
```
