# CanTrust Canada — Insurance Quote Collection Form
**Date:** 2026-03-25
**Status:** Approved

---

## Overview

A single self-contained HTML file (no build step, no server) that collects insurance quote information for CanTrust Canada. Visitors pick a quote type (car / home / both), then complete a multi-step wizard. On submission all data is POSTed to Web3Forms which forwards a formatted email to `zack.feng@cantrustcanada.com`. The visitor sees a success message; no email is sent back to them.

---

## Technical Stack

| Concern | Decision |
|---------|----------|
| Delivery | Single `cantrust_quote_form.html` file |
| Email backend | Web3Forms (access_key hardcoded as a placeholder constant at top of `<script>`; real key inserted before deploy) |
| Hosting | Any static host (GitHub Pages, etc.) |
| Language | Bilingual — Chinese default, manual toggle to English; always Chinese regardless of browser locale |
| Logo | Inline base64-encoded PNG embedded in HTML (avoids cross-origin hotlink blocking) |
| Fonts | System font stack (no CDN dependency) |
| State persistence | All step data stored in a JS object; also written to `sessionStorage` under key `cantrust_quote_v1` (single JSON blob) on every field change so a page reload restores progress |
| Spam protection | Web3Forms honeypot field included (hidden input `name="_honey"`) |

---

## Step 0 — Quote Type Selection

Full-screen landing card. Three large tap-target buttons:

| Value | Chinese label | English label |
|-------|--------------|---------------|
| `auto` | 🚗 车险 | 🚗 Auto Insurance |
| `home` | 🏠 房险 | 🏠 Home Insurance |
| `both` | 🚗&🏠 车险&房险 | 🚗&🏠 Auto & Home |

Selection sets the active flow and advances to Step 1.

---

## Car Insurance Flow — 5 Steps

### Step 1 — 个人信息 / Personal Info

| Field | EN Label | Type | Required |
|-------|----------|------|----------|
| 姓名 | Full Name | Text | Yes |
| 出生日期 | Date of Birth | Date picker | Yes |
| 手机号码 | Phone Number | Tel | Yes | Placeholder: "604-123-4567"; formatting chars stripped before submission |
| 邮箱 | Email Address | Email | Yes |
| 联系地址 | Mailing Address | Text | Yes |

### Step 2 — 车辆信息 / Vehicle Info

| Field | EN Label | Type | Required |
|-------|----------|------|----------|
| 汽车保险生效日期 | Insurance Effective Date | Date picker | Yes |
| 车辆VIN Number | Vehicle VIN | Text (uppercase) | Yes | Client-side validation: exactly 17 alphanumeric chars, excluding I/O/Q |
| 车辆年份 | Vehicle Year | Number (4-digit) | Yes |
| 品牌 | Make | Text | Yes |
| 型号 | Model | Text | Yes |

### Step 3 — 驾驶信息 / Driving Info

| Field | EN Label | Type | Required | Notes |
|-------|----------|------|----------|-------|
| 驾照号 | Driver's Licence # | Text | Yes | |
| 婚姻状态 | Marital Status | Select | Yes | Options: 未婚 Single / 已婚 Married / 离异 Divorced |
| G1取得日期 | G1 Licence Date | Date picker | Yes | Must be earliest of the three G dates |
| G2取得日期 | G2 Licence Date | Date picker | Yes | Must be ≥ G1 date |
| G牌取得日期 | G Licence Date | Date picker | Yes | Must be ≥ G2 date |
| 全科证书日期 | Full Certificate Date | Date picker | No | Helper text: "取得全科证书（G2 road test waiver）的日期，如适用 / Date of full certification if applicable" |

**Validation rules:**
- G2 Date must be on or after G1 Date (inline error if not)
- G Date must be on or after G2 Date (inline error if not)
- Full Certificate Date, if entered, must be on or after G Date

### Step 4 — 使用情况 / Vehicle Usage

| Field | EN Label | Type | Required | Options / Notes |
|-------|----------|------|----------|-----------------|
| 每年大概行驶公里 | Estimated Annual KM | Number | Yes | |
| 通勤距离（单程） | One-way Commute (KM) | Number | Yes | |
| 购车方式 | Vehicle Ownership | Select | Yes | Lease / Finance / 自购 Own |
| 配有雪胎 | Snow Tires Installed | Radio | Yes | 是 Yes / 否 No |

### Step 5 — 保险历史 / Insurance History

| Field | EN Label | Type | Required | Options |
|-------|----------|------|----------|---------|
| 近3年警察罚单 | Traffic Tickets (past 3 yrs) | Select | Yes | 无 None / 1次 Once / 多次(2+) Multiple (2+) |
| 近6年主要责任事故 | At-Fault Accidents (past 6 yrs) | Select | Yes | 无 None / 1次 Once / 多次(2+) Multiple (2+) |
| 之前保险公司 | Previous Insurer | Text | Yes | Placeholder: "如无，请填写"无" / Enter N/A if first-time insured" |
| 连续车险年数 | Years of Continuous Auto Coverage | Number (0+) | Yes | 0 is valid for first-time insured |

---

## Home Insurance Flow — 5 Steps

### Step 1 — 个人信息 / Personal Info
Same fields as Car Step 1. In the combined flow this step is shared and shown only once.

### Step 2 — 房屋信息 / Property Info

| Field | EN Label | Type | Required | Options |
|-------|----------|------|----------|---------|
| 房屋地址 | Property Address | Text | Yes | |
| 房屋险生效日期 | Insurance Effective Date | Date picker | Yes | Separate from car effective date in combined flow |
| 房屋主要用途 | Primary Use | Select | Yes | 自住 Owner-Occupied / 出租 Rental / 度假屋 Seasonal/Vacation |
| 是否有贷款 | Mortgage | Radio | Yes | 是 Yes / 否 No |

### Step 3 — 房屋详情 / Property Details

| Field | EN Label | Type | Required | Notes |
|-------|----------|------|----------|-------|
| 卧室数量 | Number of Bedrooms | Number (1+) | Yes | |
| 卫生间数量 | Number of Bathrooms | Number (1+) | Yes | |
| 房屋面积 | Living Area | Number + unit toggle | Yes | Unit toggle: sq ft / m² (radio, inline beside input); serialized as e.g. "1,200 sq ft" |
| 地下室是否装修 | Finished Basement | Radio | Yes | 是 Yes / 否 No |

### Step 4 — 保险历史 / Insurance History

| Field | EN Label | Type | Required | Notes |
|-------|----------|------|----------|-------|
| 上一家房险公司 | Previous Home Insurer | Text | Yes | Placeholder: "如无，请填写"无" / Enter N/A if first-time insured" |
| 连续房险年数 | Years of Continuous Home Coverage | Number (0+) | Yes | 0 valid for first-time insured |
| 是否有过房屋险理赔 | Prior Home Insurance Claims | Radio | Yes | 是 Yes / 否 No |

*(No follow-up detail field for claims — Yes/No only.)*

### Step 5 — 房屋系统 / Home Systems *(Optional step)*

Header text: "如已更新，请填写更新年份（如未更新或不清楚，可跳过）/ If updated, enter the year of update. Skip if unknown."

| Field | EN Label | Type | Required |
|-------|----------|------|----------|
| 屋顶 | Roof | Number (year, 4-digit) | No |
| 暖炉 | Furnace / Heating System | Number (year, 4-digit) | No |
| 上下水管道 | Plumbing | Number (year, 4-digit) | No |
| 电线 | Electrical Wiring | Number (year, 4-digit) | No |

Year inputs: min = 1900, max = current year.

---

## Combined Flow (车险&房险) — 9 Steps

| Step | Section | Content |
|------|---------|---------|
| 1 | Shared | Personal Info (name, DOB, phone, email, address) — shown once |
| 2 | Car | Vehicle Info (effective date, VIN, year/make/model) |
| 3 | Car | Driving Info (licence #, marital status, G1/G2/G dates, full cert date) |
| 4 | Car | Vehicle Usage (annual KM, commute, lease/finance/own, snow tires) |
| 5 | Car | Auto Insurance History (tickets, accidents, previous insurer, years) |
| — | — | Transition card: "✅ 车险信息已完成！接下来填写房屋保险信息 / Auto info complete! Now let's collect your home insurance details." Next button advances. |
| 6 | Home | Property Info (address, effective date, use, mortgage) — **separate effective date from car** |
| 7 | Home | Property Details (bedrooms, bathrooms, area+unit, basement) |
| 8 | Home | Home Insurance History (previous insurer, years, prior claims) |
| 9 | Home | Home Systems (roof, furnace, plumbing, electrical — all optional) |

**Fields that do NOT repeat in combined flow:**
- Personal info (name, DOB, phone, email, address) — Step 1 only
- Marital status — Step 3 only (car-specific; not re-asked in home flow)

---

## Progress Bar

Shown on every numbered step. Format: segmented bar (one segment per total steps) + "步骤 X / Y · [Step Label] / Step X of Y · [Label]"

The **transition card** in the combined flow (between Step 5 and Step 6) is **not** a numbered step. It does not appear in the progress bar count. The bar shows "5 / 9" when the transition card is displayed; clicking Next on the transition card advances to "6 / 9."

Step labels (both languages, all three flows):

| Step | Car-only ZH | Car-only EN | Home-only ZH | Home-only EN | Combined ZH | Combined EN |
|------|------------|------------|-------------|-------------|------------|------------|
| 1 | 个人信息 | Personal Info | 个人信息 | Personal Info | 个人信息 | Personal Info |
| 2 | 车辆信息 | Vehicle Info | 房屋信息 | Property Info | 车辆信息 | Vehicle Info |
| 3 | 驾驶信息 | Driving Info | 房屋详情 | Property Details | 驾驶信息 | Driving Info |
| 4 | 使用情况 | Vehicle Usage | 保险历史 | Ins. History | 使用情况 | Vehicle Usage |
| 5 | 保险历史 | Ins. History | 房屋系统 | Home Systems | 车险历史 | Auto History |
| 6 | — | — | — | — | 房屋信息 | Property Info |
| 7 | — | — | — | — | 房屋详情 | Property Details |
| 8 | — | — | — | — | 房险历史 | Home History |
| 9 | — | — | — | — | 房屋系统 | Home Systems |

---

## Per-Step Hint Text

Small grey text at the bottom of every step card, in the active language:

- **ZH:** 填写越详细，越有助于获取更准确的报价
- **EN:** The more detail you provide, the more accurate your quote will be.

---

## Navigation & Validation

- **Back button:** Every step except Step 1 (or Step 0 on the type-selection screen). Goes to previous step; previously entered values restored from JS state object.
- **Next / 下一步:** Validates required fields on current step before advancing. Shows inline errors below failing fields.
- **Submit / 提交:** Final step only. Triggers Web3Forms POST.
- **Browser back button:** Each step push a `history.pushState` entry so the browser back button acts as the in-form Back button rather than navigating away.
- **Page reload recovery:** All field values written to `sessionStorage` on every change. On load, if `sessionStorage` has saved state, user is returned to the step they were on with all data restored.

---

## Language Toggle

- Fixed top-right button: `中文 | EN` — clicking switches the active language
- All labels, placeholders, option text, hint text, error messages, and button labels switch immediately
- Toggle state stored in a JS variable; initial state always Chinese regardless of browser locale
- Switching language mid-form re-renders only labels and static text; entered values are preserved

---

## Submission

**POST body** (Web3Forms):
```
access_key: [WEB3FORMS_ACCESS_KEY placeholder]
subject: CanTrust Insurance Quote Request — [Auto/Home/Auto & Home]
_honey: (empty — honeypot)
from_name: [applicant full name]
All collected fields as labelled key-value pairs
```

**On success (HTTP 200):** Replace wizard with a centred thank-you card:
- ZH: 感谢您的提交！我们将尽快与您联系。
- EN: Thank you! We'll be in touch shortly.

**On failure (non-200 or network error):**
- Show error message inside the form card (do not replace wizard):
  - ZH: 提交失败，请稍后再试。如持续出现此问题，请直接致电或发送邮件联系我们。
  - EN: Submission failed. Please try again. If the issue persists, contact us directly.
- Show a **Retry / 重试** button that re-submits the same data
- All field values are preserved (held in JS state + sessionStorage)
- Covers both server-side errors and network-offline scenarios (fetch rejection)

---

## Visual Design

- **Brand colours:** Navy `#003366` primary, white backgrounds, light grey `#f0f4f8` card backgrounds (derived from cantrustcanada.com)
- **Logo:** Inline base64-encoded PNG in `<img>` tag — avoids cross-origin hotlink issues on static hosting
- **Layout:** Centred card, `max-width: 520px`, horizontally padded for mobile
- **Inputs:** Rounded corners, `min-height: 44px` for touch targets, clear focus ring
- **Buttons:** Solid navy primary (Next/Submit), outline secondary (Back)
- **Error states:** Red border + small red inline message below field
- **Optional fields:** Labelled with `（选填）/ (optional)` suffix

---

## File Delivery

| Item | Value |
|------|-------|
| Filename | `cantrust_quote_form.html` |
| Location | `D:/New folder/` |
| Dependencies | None (all inline) |
| Web3Forms key | Placeholder constant `const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'` at top of script |
| Logo | Base64 inline — to be encoded from cantrustcanada.com logo before final delivery |
