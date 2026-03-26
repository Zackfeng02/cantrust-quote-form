# CanTrust Canada Insurance Quote Form — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single self-contained `cantrust_quote_form.html` file that collects car/home/combined insurance quote data through a mobile-friendly bilingual (ZH/EN) multi-step wizard and emails it to zack.feng@cantrustcanada.com via Web3Forms.

**Architecture:** All HTML, CSS, and JS are inline in one file — no build step, no external dependencies, no server. Step content is dynamically rendered by JS so only the active step's fields are in the DOM at any time. All state lives in a single `state` object that is mirrored to `sessionStorage` on every change.

**Tech Stack:** Vanilla HTML5 / CSS3 / JavaScript (ES6+), Web3Forms API (fetch POST), sessionStorage, history.pushState

---

## File Map

| File | Role |
|------|------|
| `D:/New folder/cantrust_quote_form.html` | The single deliverable — all HTML, CSS, JS inline |

Internal JS module structure (all inside one `<script>` tag, ordered):

| Section | Responsibility |
|---------|---------------|
| `CONSTANTS` | `WEB3FORMS_KEY`, `LOGO_B64` |
| `STRINGS` | Full i18n object — every UI string in ZH + EN |
| `STEP_CONFIG` | Step counts, labels, and field lists per flow |
| `state` | Single source of truth: `{ flow, step, isTransition, data }` |
| `lang` | Standalone `let` variable (not in state) — always `'zh'` on fresh load / reload |
| State helpers | `saveState()`, `loadState()`, `resetState()` |
| i18n helpers | `t(key)`, `setLang(lang)`, `applyLang()` |
| Navigation | `navigate(n)`, `goBack()`, `handlePopState()` |
| Step renderers | `renderStep0()` … one function per numbered step |
| Transition card | `renderTransitionCard()` |
| Validation | `validateStep()`, per-field validators (`vinValid`, `dateChain`, etc.) |
| Submission | `buildPayload()`, `submitForm()`, `showSuccess()`, `showError()` |
| Bootstrap | `init()` — called on DOMContentLoaded |

---

## Task 1: HTML Scaffold + CSS Foundation

**Files:**
- Create: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 1.1 — Create the base HTML file**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CanTrust Canada — 保险报价 / Insurance Quote</title>
  <style>
    /* === CUSTOM PROPERTIES === */
    :root {
      --navy: #003366;
      --navy-hover: #002244;
      --accent: #0066cc;
      --bg: #ffffff;
      --card-bg: #f0f4f8;
      --border: #d0d8e4;
      --error: #cc0000;
      --success: #006633;
      --text: #1a1a2e;
      --muted: #6b7c93;
      --radius: 8px;
      --shadow: 0 2px 12px rgba(0,51,102,0.10);
    }

    /* === RESET === */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',
                   'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
      background: var(--card-bg);
      color: var(--text);
      min-height: 100vh;
      padding: 0;
    }

    /* === HEADER === */
    #header {
      background: var(--navy);
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    #logo { height: 40px; width: auto; }
    #lang-toggle {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.5);
      color: #fff;
      padding: 6px 14px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 13px;
      transition: background 0.2s;
    }
    #lang-toggle:hover { background: rgba(255,255,255,0.15); }

    /* === MAIN CONTAINER === */
    #app {
      max-width: 520px;
      margin: 0 auto;
      padding: 24px 16px 48px;
    }

    /* === CARD === */
    .card {
      background: var(--bg);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 28px 24px;
    }
    @media (max-width: 400px) { .card { padding: 20px 16px; } }

    /* === PROGRESS BAR === */
    #progress-wrap { margin-bottom: 20px; }
    #progress-label {
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
    }
    #progress-bar-track {
      display: flex;
      gap: 4px;
    }
    .progress-seg {
      flex: 1;
      height: 5px;
      border-radius: 3px;
      background: var(--border);
      transition: background 0.3s;
    }
    .progress-seg.done { background: var(--navy); }
    .progress-seg.active { background: var(--accent); }

    /* === STEP CONTENT === */
    #step-content { margin-bottom: 24px; }
    .step-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 20px;
    }

    /* === FORM FIELDS === */
    .field { margin-bottom: 18px; }
    .field label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 6px;
    }
    .field label .opt {
      font-weight: 400;
      color: var(--muted);
      font-size: 12px;
      margin-left: 4px;
    }
    .field input, .field select, .field textarea {
      width: 100%;
      padding: 11px 14px;
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      font-size: 15px;
      font-family: inherit;
      color: var(--text);
      background: var(--bg);
      min-height: 44px;
      transition: border-color 0.2s;
      -webkit-appearance: none;
    }
    .field input:focus, .field select:focus {
      outline: none;
      border-color: var(--accent);
    }
    .field input.error, .field select.error { border-color: var(--error); }
    .field-error {
      color: var(--error);
      font-size: 12px;
      margin-top: 4px;
      display: none;
    }
    .field-error.visible { display: block; }

    /* === RADIO GROUP === */
    .radio-group {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .radio-group label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 400;
      cursor: pointer;
      font-size: 15px;
      padding: 10px 16px;
      border: 1.5px solid var(--border);
      border-radius: var(--radius);
      min-height: 44px;
      transition: border-color 0.2s, background 0.2s;
    }
    .radio-group input[type=radio] { display: none; }
    .radio-group label.selected {
      border-color: var(--navy);
      background: #e8f0fb;
      font-weight: 600;
    }

    /* === AREA UNIT TOGGLE === */
    .area-wrap { display: flex; gap: 10px; align-items: center; }
    .area-wrap input { flex: 1; }
    .unit-toggle { display: flex; border: 1.5px solid var(--border); border-radius: var(--radius); overflow: hidden; }
    .unit-btn {
      padding: 0 14px;
      height: 44px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 13px;
      color: var(--muted);
      transition: background 0.2s, color 0.2s;
    }
    .unit-btn.active { background: var(--navy); color: #fff; font-weight: 600; }

    /* === HINT TEXT === */
    .hint {
      font-size: 12px;
      color: var(--muted);
      text-align: center;
      margin-top: 16px;
      font-style: italic;
    }

    /* === NAVIGATION BUTTONS === */
    #nav-buttons { display: flex; gap: 12px; }
    .btn {
      flex: 1;
      padding: 14px;
      border-radius: var(--radius);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      min-height: 48px;
      transition: background 0.2s, opacity 0.2s;
    }
    .btn-primary { background: var(--navy); color: #fff; }
    .btn-primary:hover { background: var(--navy-hover); }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-secondary {
      background: transparent;
      color: var(--navy);
      border: 1.5px solid var(--navy);
      flex: 0 0 auto;
      padding: 14px 20px;
    }
    .btn-secondary:hover { background: #e8f0fb; }

    /* === QUOTE TYPE CARDS (Step 0) === */
    #step-content.step0 { display: flex; flex-direction: column; gap: 14px; }
    .type-btn {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px 22px;
      border: 2px solid var(--border);
      border-radius: var(--radius);
      background: var(--bg);
      cursor: pointer;
      text-align: left;
      transition: border-color 0.2s, background 0.2s, transform 0.1s;
      min-height: 72px;
    }
    .type-btn:hover { border-color: var(--navy); background: #e8f0fb; transform: translateY(-1px); }
    .type-btn .icon { font-size: 28px; }
    .type-btn .label-zh { font-size: 17px; font-weight: 700; color: var(--navy); }
    .type-btn .label-en { font-size: 13px; color: var(--muted); margin-top: 2px; }
    .step0-title { font-size: 22px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
    .step0-sub { font-size: 14px; color: var(--muted); margin-bottom: 20px; }

    /* === TRANSITION CARD === */
    .transition-card { text-align: center; padding: 16px 0; }
    .transition-card .check { font-size: 48px; margin-bottom: 12px; }
    .transition-card h3 { font-size: 18px; font-weight: 700; color: var(--success); margin-bottom: 8px; }
    .transition-card p { font-size: 14px; color: var(--muted); }

    /* === SUCCESS CARD === */
    #success-card {
      display: none;
      text-align: center;
      padding: 40px 20px;
    }
    #success-card .check { font-size: 56px; margin-bottom: 16px; }
    #success-card h2 { font-size: 22px; font-weight: 700; color: var(--success); margin-bottom: 10px; }
    #success-card p { font-size: 15px; color: var(--muted); }

    /* === ERROR BANNER === */
    #submit-error {
      display: none;
      background: #fff0f0;
      border: 1px solid #ffcccc;
      border-radius: var(--radius);
      padding: 14px 16px;
      margin-bottom: 16px;
      font-size: 14px;
      color: var(--error);
    }
    #submit-error.visible { display: block; }

    /* === HELPER TEXT === */
    .field-hint { font-size: 12px; color: var(--muted); margin-top: 4px; }
  </style>
</head>
<body>
  <div id="header">
    <img id="logo" src="" alt="CanTrust Canada">
    <button id="lang-toggle" onclick="toggleLang()">EN</button>
  </div>
  <div id="app">
    <div id="wizard" class="card">
      <div id="progress-wrap" style="display:none">
        <div id="progress-label">
          <span id="progress-text"></span>
          <span id="progress-step-label"></span>
        </div>
        <div id="progress-bar-track"></div>
      </div>
      <div id="submit-error"></div>
      <div id="step-content"></div>
      <div id="nav-buttons"></div>
      <div class="hint" id="hint-text"></div>
    </div>
    <div id="success-card" class="card">
      <div class="check">✅</div>
      <h2 id="success-title"></h2>
      <p id="success-body"></p>
    </div>
  </div>

  <script>
  // ============================================================
  // CONSTANTS
  // ============================================================
  const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';
  const LOGO_B64 = ''; // Paste base64 PNG here before deploy

  // ============================================================
  // END OF SCAFFOLD — remaining sections added in later tasks
  // ============================================================
  </script>
</body>
</html>
```

- [ ] **Step 1.2 — Open in browser and verify layout**

Open `cantrust_quote_form.html` in Chrome. Confirm:
- Navy header renders, logo `<img>` is present (blank for now)
- White card renders centred at max 520px
- No JS errors in console
- Responsive: resize to 375px width — card fills nicely

- [ ] **Step 1.3 — Commit scaffold**

```bash
git -C "D:/New folder" init   # only if not already a repo
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add HTML scaffold and CSS foundation"
```

---

## Task 2: i18n System + Language Toggle

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html` — add STRINGS object and i18n helpers inside `<script>`

- [ ] **Step 2.1 — Add STRINGS object**

Replace the `// END OF SCAFFOLD` comment with:

```javascript
// ============================================================
// i18n STRINGS
// ============================================================
const STRINGS = {
  // --- Global ---
  lang_toggle:        { zh: 'EN',          en: '中文' },
  hint:               { zh: '填写越详细，越有助于获取更准确的报价',
                        en: 'The more detail you provide, the more accurate your quote will be.' },
  btn_next:           { zh: '下一步',       en: 'Next' },
  btn_back:           { zh: '返回',         en: 'Back' },
  btn_submit:         { zh: '提交',         en: 'Submit' },
  btn_retry:          { zh: '重试',         en: 'Retry' },
  btn_continue:       { zh: '继续',         en: 'Continue' },
  required_error:     { zh: '此项为必填项',  en: 'This field is required' },
  email_error:        { zh: '请输入有效的邮箱地址', en: 'Please enter a valid email address' },
  vin_error:          { zh: 'VIN号需为17位字母/数字（不含I、O、Q）',
                        en: 'VIN must be 17 alphanumeric characters (excluding I, O, Q)' },
  g2_before_g1_error: { zh: 'G2日期不能早于G1日期', en: 'G2 date cannot be before G1 date' },
  g_before_g2_error:  { zh: 'G牌日期不能早于G2日期', en: 'G date cannot be before G2 date' },
  cert_before_g_error:{ zh: '全科证书日期不能早于G牌日期',
                        en: 'Full certificate date cannot be before G licence date' },
  submit_error:       { zh: '提交失败，请稍后再试。如持续出现此问题，请直接致电或发送邮件联系我们。',
                        en: 'Submission failed. Please try again. If the issue persists, contact us directly.' },
  success_title:      { zh: '感谢您的提交！', en: 'Thank you!' },
  success_body:       { zh: '我们将尽快与您联系。', en: "We'll be in touch shortly." },
  opt:                { zh: '（选填）',     en: '(optional)' },

  // --- Step 0 ---
  step0_title:        { zh: '您需要哪种保险报价？', en: 'What would you like a quote for?' },
  step0_sub:          { zh: '请选择一项以开始',    en: 'Select one to begin' },
  auto_label:         { zh: '车险',          en: 'Auto Insurance' },
  home_label:         { zh: '房险',          en: 'Home Insurance' },
  both_label:         { zh: '车险 & 房险',   en: 'Auto & Home' },

  // --- Personal Info ---
  personal_title:     { zh: '个人信息',      en: 'Personal Info' },
  full_name:          { zh: '姓名',          en: 'Full Name' },
  dob:                { zh: '出生日期',       en: 'Date of Birth' },
  phone:              { zh: '手机号码',       en: 'Phone Number' },
  email:              { zh: '邮箱',           en: 'Email Address' },
  address:            { zh: '联系地址',       en: 'Mailing Address' },

  // --- Vehicle Info ---
  vehicle_title:      { zh: '车辆信息',       en: 'Vehicle Info' },
  auto_eff_date:      { zh: '汽车保险生效日期', en: 'Insurance Effective Date' },
  vin:                { zh: '车辆VIN Number', en: 'Vehicle VIN' },
  vehicle_year:       { zh: '车辆年份',        en: 'Vehicle Year' },
  make:               { zh: '品牌',            en: 'Make' },
  model:              { zh: '型号',            en: 'Model' },

  // --- Driving Info ---
  driving_title:      { zh: '驾驶信息',        en: 'Driving Info' },
  licence_num:        { zh: '驾照号',           en: "Driver's Licence #" },
  marital:            { zh: '婚姻状态',          en: 'Marital Status' },
  marital_single:     { zh: '未婚',              en: 'Single' },
  marital_married:    { zh: '已婚',              en: 'Married' },
  marital_divorced:   { zh: '离异',              en: 'Divorced' },
  g1_date:            { zh: 'G1取得日期',         en: 'G1 Licence Date' },
  g2_date:            { zh: 'G2取得日期',         en: 'G2 Licence Date' },
  g_date:             { zh: 'G牌取得日期',         en: 'G Licence Date' },
  cert_date:          { zh: '全科证书日期',         en: 'Full Certificate Date' },
  cert_hint:          { zh: '取得全科证书（G2 road test waiver）的日期，如适用',
                        en: 'Date of full certification (G2 road test waiver), if applicable' },

  // --- Vehicle Usage ---
  usage_title:        { zh: '使用情况',            en: 'Vehicle Usage' },
  annual_km:          { zh: '每年大概行驶公里',      en: 'Estimated Annual KM' },
  commute_km:         { zh: '通勤距离（单程）',       en: 'One-way Commute (KM)' },
  ownership:          { zh: '购车方式',              en: 'Vehicle Ownership' },
  own_lease:          { zh: 'Lease（租赁）',         en: 'Lease' },
  own_finance:        { zh: 'Finance（贷款购车）',    en: 'Finance' },
  own_own:            { zh: '自购（全款）',            en: 'Own (Paid off)' },
  snow_tires:         { zh: '配有雪胎',              en: 'Snow Tires Installed' },
  yes:                { zh: '是',                    en: 'Yes' },
  no:                 { zh: '否',                    en: 'No' },

  // --- Auto Insurance History ---
  auto_hist_title:    { zh: '保险历史',               en: 'Insurance History' },
  tickets:            { zh: '近3年警察罚单',            en: 'Traffic Tickets (past 3 yrs)' },
  accidents:          { zh: '近6年主要责任事故',         en: 'At-Fault Accidents (past 6 yrs)' },
  hist_none:          { zh: '无',                      en: 'None' },
  hist_once:          { zh: '1次',                     en: 'Once' },
  hist_multi:         { zh: '多次（2+）',               en: 'Multiple (2+)' },
  prev_auto_insurer:  { zh: '之前保险公司',              en: 'Previous Insurer' },
  prev_insurer_hint:  { zh: '如无，请填写"无" / Enter N/A if first-time insured',
                        en: 'Enter N/A if first-time insured / 如无，请填写"无"' },
  auto_cov_years:     { zh: '连续车险年数',              en: 'Years of Continuous Auto Coverage' },

  // --- Property Info ---
  prop_title:         { zh: '房屋信息',                 en: 'Property Info' },
  prop_address:       { zh: '房屋地址',                  en: 'Property Address' },
  home_eff_date:      { zh: '房屋险生效日期',              en: 'Insurance Effective Date' },
  prop_use:           { zh: '房屋主要用途',                en: 'Primary Use' },
  use_owner:          { zh: '自住',                      en: 'Owner-Occupied' },
  use_rental:         { zh: '出租',                      en: 'Rental' },
  use_seasonal:       { zh: '度假屋',                    en: 'Seasonal/Vacation' },
  mortgage:           { zh: '是否有贷款',                 en: 'Mortgage' },

  // --- Property Details ---
  details_title:      { zh: '房屋详情',                  en: 'Property Details' },
  bedrooms:           { zh: '卧室数量',                   en: 'Number of Bedrooms' },
  bathrooms:          { zh: '卫生间数量',                  en: 'Number of Bathrooms' },
  area:               { zh: '房屋面积',                    en: 'Living Area' },
  basement:           { zh: '地下室是否装修',               en: 'Finished Basement' },

  // --- Home Insurance History ---
  home_hist_title:    { zh: '保险历史',                   en: 'Insurance History' },
  prev_home_insurer:  { zh: '上一家房险公司',               en: 'Previous Home Insurer' },
  home_cov_years:     { zh: '连续房险年数',                 en: 'Years of Continuous Home Coverage' },
  prior_claims:       { zh: '是否有过房屋险理赔',             en: 'Prior Home Insurance Claims' },

  // --- Home Systems ---
  systems_title:      { zh: '房屋系统',                    en: 'Home Systems' },
  systems_header:     { zh: '如已更新，请填写更新年份（如未更新或不清楚，可跳过）',
                        en: 'If updated, enter the year of update. Skip if unknown.' },
  roof:               { zh: '屋顶',                       en: 'Roof' },
  furnace:            { zh: '暖炉 / 供暖系统',              en: 'Furnace / Heating System' },
  plumbing:           { zh: '上下水管道',                   en: 'Plumbing' },
  electrical:         { zh: '电线',                        en: 'Electrical Wiring' },

  // --- Transition Card ---
  transition_title:   { zh: '车险信息已完成！',              en: 'Auto info complete!' },
  transition_body:    { zh: '接下来填写房屋保险信息',          en: "Now let's collect your home insurance details." },

  // --- Progress step labels ---
  lbl_personal:       { zh: '个人信息',                    en: 'Personal Info' },
  lbl_vehicle:        { zh: '车辆信息',                    en: 'Vehicle Info' },
  lbl_driving:        { zh: '驾驶信息',                    en: 'Driving Info' },
  lbl_usage:          { zh: '使用情况',                    en: 'Vehicle Usage' },
  lbl_auto_hist:      { zh: '车险历史',                    en: 'Auto History' },
  lbl_auto_hist_car:  { zh: '保险历史',                    en: 'Ins. History' },
  lbl_prop:           { zh: '房屋信息',                    en: 'Property Info' },
  lbl_details:        { zh: '房屋详情',                    en: 'Property Details' },
  lbl_home_hist:      { zh: '房险历史',                    en: 'Home History' },
  lbl_home_hist_home: { zh: '保险历史',                    en: 'Ins. History' },
  lbl_systems:        { zh: '房屋系统',                    en: 'Home Systems' },
};

// ============================================================
// i18n HELPERS
// ============================================================
let lang = 'zh';

function t(key) {
  const entry = STRINGS[key];
  if (!entry) { console.warn('Missing i18n key:', key); return key; }
  return entry[lang] ?? entry.zh;
}

function toggleLang() {
  lang = lang === 'zh' ? 'en' : 'zh';
  document.getElementById('lang-toggle').textContent = t('lang_toggle');
  document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
  renderCurrentStep(); // re-render active step with new language
}
```

- [ ] **Step 2.2 — Verify no console errors**

Open the file in browser, open DevTools console. No errors expected. Type `t('btn_next')` in console — should return `'下一步'`. Type `lang='en'; t('btn_next')` — should return `'Next'`. Reset: `lang='zh'`.

- [ ] **Step 2.3 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add i18n strings and language toggle"
```

---

## Task 3: State Management + Navigation Engine

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 3.1 — Add STEP_CONFIG and state object**

```javascript
// ============================================================
// STEP CONFIG
// flow: 'auto' | 'home' | 'both'
// totalSteps: number of numbered steps
// labels: array of STRINGS keys for each step (1-indexed)
// ============================================================
const STEP_CONFIG = {
  auto: {
    total: 5,
    labels: [null, 'lbl_personal','lbl_vehicle','lbl_driving','lbl_usage','lbl_auto_hist_car'],
  },
  home: {
    total: 5,
    labels: [null, 'lbl_personal','lbl_prop','lbl_details','lbl_home_hist_home','lbl_systems'],
  },
  both: {
    total: 9,
    labels: [null,
      'lbl_personal','lbl_vehicle','lbl_driving','lbl_usage','lbl_auto_hist',
      'lbl_prop','lbl_details','lbl_home_hist','lbl_systems'],
  },
};

// ============================================================
// STATE
// ============================================================
const STATE_KEY = 'cantrust_quote_v1';

let state = {
  flow: null,          // 'auto' | 'home' | 'both'
  step: 0,             // 0 = type selector; 1..N = numbered steps
  isTransition: false, // true when showing the mid-flow transition card
  data: {},            // all collected field values keyed by field id
};

function saveState() {
  try {
    sessionStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch(e) { /* storage unavailable — continue silently */ }
}

function loadState() {
  try {
    const raw = sessionStorage.getItem(STATE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      // Merge saved into state (validates shape)
      if (saved.flow && saved.step != null) {
        Object.assign(state, saved);
        return true;
      }
    }
  } catch(e) {}
  return false;
}

function resetState() {
  state = { flow: null, step: 0, isTransition: false, data: {} };
  try { sessionStorage.removeItem(STATE_KEY); } catch(e) {}
}

// Read a field value from state
function val(key, fallback = '') {
  return state.data[key] ?? fallback;
}

// Write a field value to state and persist
function setVal(key, value) {
  state.data[key] = value;
  saveState();
}
```

- [ ] **Step 3.2 — Add navigation engine**

```javascript
// ============================================================
// NAVIGATION ENGINE
// ============================================================

function navigate(stepNum) {
  state.step = stepNum;
  state.isTransition = false;
  saveState();
  history.pushState({ step: stepNum, isTransition: false }, '');
  renderCurrentStep();
}

function showTransition() {
  state.isTransition = true;
  saveState();
  history.pushState({ step: state.step, isTransition: true }, '');
  renderTransitionCard();
}

function goBack() {
  history.back(); // triggers popstate
}

window.addEventListener('popstate', function(e) {
  if (!e.state) {
    // Navigated to before any pushState — show step 0
    state.step = 0;
    state.isTransition = false;
    renderCurrentStep();
    return;
  }
  state.step = e.state.step;
  state.isTransition = e.state.isTransition || false;
  if (state.isTransition) renderTransitionCard();
  else renderCurrentStep();
});

function renderCurrentStep() {
  const sc = document.getElementById('step-content');
  const nb = document.getElementById('nav-buttons');
  const pw = document.getElementById('progress-wrap');
  const hint = document.getElementById('hint-text');

  clearErrors();

  if (state.step === 0) {
    pw.style.display = 'none';
    hint.textContent = '';
    renderStep0();
    nb.innerHTML = '';
    return;
  }

  // Progress bar
  pw.style.display = 'block';
  renderProgressBar();

  // Hint
  hint.textContent = t('hint');

  // Render step content
  const renderer = getStepRenderer();
  if (renderer) renderer();

  // Nav buttons
  renderNavButtons();
}

function getStepRenderer() {
  const { flow, step } = state;
  // Map flow + step → renderer function
  const map = {
    auto: [null, renderPersonalInfo, renderVehicleInfo, renderDrivingInfo, renderUsage, renderAutoHistory],
    home: [null, renderPersonalInfo, renderPropertyInfo, renderPropertyDetails, renderHomeHistory, renderHomeSystems],
    both: [null,
      renderPersonalInfo, renderVehicleInfo, renderDrivingInfo, renderUsage, renderAutoHistory,
      renderPropertyInfo, renderPropertyDetails, renderHomeHistory, renderHomeSystems],
  };
  return map[flow]?.[step] ?? null;
}

function renderProgressBar() {
  const cfg = STEP_CONFIG[state.flow];
  const total = cfg.total;
  const current = state.step;
  const labelKey = cfg.labels[current];

  document.getElementById('progress-text').textContent =
    lang === 'zh' ? `步骤 ${current} / ${total}` : `Step ${current} of ${total}`;
  document.getElementById('progress-step-label').textContent =
    labelKey ? t(labelKey) : '';

  const track = document.getElementById('progress-bar-track');
  track.innerHTML = '';
  for (let i = 1; i <= total; i++) {
    const seg = document.createElement('div');
    seg.className = 'progress-seg' + (i < current ? ' done' : i === current ? ' active' : '');
    track.appendChild(seg);
  }
}

function renderNavButtons() {
  const nb = document.getElementById('nav-buttons');
  const cfg = STEP_CONFIG[state.flow];
  const isLast = state.step === cfg.total;

  let html = '';
  if (state.step > 1) {
    html += `<button class="btn btn-secondary" onclick="goBack()">${t('btn_back')}</button>`;
  }
  if (isLast) {
    html += `<button class="btn btn-primary" onclick="handleSubmit()">${t('btn_submit')}</button>`;
  } else {
    html += `<button class="btn btn-primary" onclick="handleNext()">${t('btn_next')}</button>`;
  }
  nb.innerHTML = html;
}

function handleNext() {
  if (!validateStep()) return;
  collectStepData();

  const cfg = STEP_CONFIG[state.flow];
  // For 'both' flow: after step 5 (auto history), show transition card
  if (state.flow === 'both' && state.step === 5) {
    showTransition();
    return;
  }
  navigate(state.step + 1);
}
```

- [ ] **Step 3.3 — Verify in console**

In browser console: `state` should be `{ flow: null, step: 0, isTransition: false, data: {} }`. No errors.

- [ ] **Step 3.4 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add state management and navigation engine"
```

---

## Task 4: Step 0 — Quote Type Selection

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 4.1 — Add renderStep0 and init**

```javascript
// ============================================================
// STEP RENDERERS
// ============================================================

function renderStep0() {
  const sc = document.getElementById('step-content');
  sc.className = 'step0';
  sc.innerHTML = `
    <p class="step0-title">${t('step0_title')}</p>
    <p class="step0-sub">${t('step0_sub')}</p>
    <button class="type-btn" onclick="selectFlow('auto')">
      <span class="icon">🚗</span>
      <span><div class="label-zh">${t('auto_label')}</div>
            <div class="label-en">Auto Insurance</div></span>
    </button>
    <button class="type-btn" onclick="selectFlow('home')">
      <span class="icon">🏠</span>
      <span><div class="label-zh">${t('home_label')}</div>
            <div class="label-en">Home Insurance</div></span>
    </button>
    <button class="type-btn" onclick="selectFlow('both')">
      <span class="icon">🚗&amp;🏠</span>
      <span><div class="label-zh">${t('both_label')}</div>
            <div class="label-en">Auto &amp; Home</div></span>
    </button>
  `;
}

function selectFlow(flow) {
  state.flow = flow;
  navigate(1);
}

// ============================================================
// BOOTSTRAP
// ============================================================
function init() {
  // Set logo
  const logoEl = document.getElementById('logo');
  if (LOGO_B64) logoEl.src = 'data:image/png;base64,' + LOGO_B64;

  // Restore session or start fresh
  const restored = loadState();

  if (restored && state.step > 0) {
    // Push an initial history entry so back works from restored state
    history.replaceState({ step: state.step, isTransition: state.isTransition }, '');
    if (state.isTransition) renderTransitionCard();
    else renderCurrentStep();
  } else {
    resetState();
    history.replaceState({ step: 0 }, '');
    renderCurrentStep();
  }
}

document.addEventListener('DOMContentLoaded', init);
```

- [ ] **Step 4.2 — Verify Step 0**

Reload page. Should see: title "您需要哪种保险报价？", three type buttons. Click 车险 — should advance (no step content yet, will show blank). Click `EN` toggle — labels switch. No JS errors.

- [ ] **Step 4.3 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add step 0 quote type selection"
```

---

## Task 5: Field Rendering Helpers + Personal Info (Step 1)

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 5.1 — Add field rendering helpers**

```javascript
// ============================================================
// FIELD RENDERING HELPERS
// ============================================================

function fieldHTML(id, labelKey, type = 'text', opts = {}) {
  const label = t(labelKey);
  const required = opts.required !== false;
  const optional = !required ? `<span class="opt">${t('opt')}</span>` : '';
  const placeholder = opts.placeholder || '';
  const extraAttrs = opts.attrs || '';
  const hint = opts.hint ? `<div class="field-hint">${opts.hint}</div>` : '';

  let inputHTML = '';
  if (type === 'select') {
    const options = (opts.options || [])
      .map(o => `<option value="${o.value}"${val(id) === o.value ? ' selected' : ''}>${o.label}</option>`)
      .join('');
    inputHTML = `<select id="${id}" onchange="setVal('${id}',this.value)" ${required ? 'required' : ''}>
      <option value="">${lang === 'zh' ? '请选择' : 'Select...'}</option>
      ${options}
    </select>`;
  } else if (type === 'radio') {
    const btns = (opts.options || []).map(o => `
      <label class="${val(id) === o.value ? 'selected' : ''}">
        <input type="radio" name="${id}" value="${o.value}"
          ${val(id) === o.value ? 'checked' : ''}
          onchange="setVal('${id}',this.value);
                    this.closest('.radio-group').querySelectorAll('label').forEach(l=>l.classList.remove('selected'));
                    this.parentElement.classList.add('selected')">
        ${o.label}
      </label>`).join('');
    inputHTML = `<div class="radio-group">${btns}</div>`;
  } else {
    const v = val(id);
    inputHTML = `<input type="${type}" id="${id}" value="${escHtml(v)}"
      placeholder="${placeholder}"
      ${required ? 'required' : ''}
      ${extraAttrs}
      oninput="setVal('${id}',this.value)">`;
  }

  return `<div class="field" id="field-${id}">
    <label for="${id}">${label}${optional}</label>
    ${inputHTML}
    ${hint}
    <div class="field-error" id="err-${id}"></div>
  </div>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
```

- [ ] **Step 5.2 — Add renderPersonalInfo**

```javascript
function renderPersonalInfo() {
  const sc = document.getElementById('step-content');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('personal_title')}</h2>
    ${fieldHTML('full_name','full_name','text',{placeholder: lang==='zh'?'张三':'John Smith'})}
    ${fieldHTML('dob','dob','date')}
    ${fieldHTML('phone','phone','tel',{placeholder:'604-123-4567'})}
    ${fieldHTML('email','email','email',{placeholder:'name@example.com'})}
    ${fieldHTML('address','address','text',{placeholder: lang==='zh'?'街道地址, 城市, 省份, 邮编':'Street, City, Province, Postal Code'})}
  `;
}
```

- [ ] **Step 5.3 — Verify Personal Info renders**

Select 车险 on Step 0 → Step 1 should show all 5 fields with labels in Chinese. Click EN toggle — labels switch instantly, values stay. Resize to 375px — all fields touch-target size. No errors.

- [ ] **Step 5.4 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add field helpers and personal info step"
```

---

## Task 6: Car Steps 2–5

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 6.1 — Add renderVehicleInfo (Car Step 2)**

> **Note:** VIN must NOT use `fieldHTML` for its input because `fieldHTML` generates its own `oninput` attribute that would silently override the uppercase-transform handler. Render the VIN `<input>` inline instead.

```javascript
function renderVehicleInfo() {
  const sc = document.getElementById('step-content');
  const currentYear = new Date().getFullYear();
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('vehicle_title')}</h2>
    ${fieldHTML('auto_eff_date','auto_eff_date','date')}
    <div class="field" id="field-vin">
      <label for="vin">${t('vin')}</label>
      <input type="text" id="vin"
        value="${escHtml(val('vin'))}"
        placeholder="e.g. 1HGCM82633A123456"
        maxlength="17"
        style="text-transform:uppercase"
        oninput="this.value=this.value.toUpperCase();setVal('vin',this.value)"
        required>
      <div class="field-error" id="err-vin"></div>
    </div>
    ${fieldHTML('vehicle_year','vehicle_year','number',{
      attrs:`min="1900" max="${currentYear+1}" placeholder="${currentYear}"`
    })}
    ${fieldHTML('make','make','text',{placeholder: lang==='zh'?'例：Toyota':'e.g. Toyota'})}
    ${fieldHTML('model','model','text',{placeholder: lang==='zh'?'例：Camry':'e.g. Camry'})}
  `;
}
```

- [ ] **Step 6.2 — Add renderDrivingInfo (Car Step 3)**

```javascript
function renderDrivingInfo() {
  const sc = document.getElementById('step-content');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('driving_title')}</h2>
    ${fieldHTML('licence_num','licence_num','text',{placeholder:'A12345-67890-12345'})}
    ${fieldHTML('marital','marital','select',{options:[
      {value:'single',  label: t('marital_single')},
      {value:'married', label: t('marital_married')},
      {value:'divorced',label: t('marital_divorced')},
    ]})}
    ${fieldHTML('g1_date','g1_date','date')}
    ${fieldHTML('g2_date','g2_date','date')}
    ${fieldHTML('g_date','g_date','date')}
    ${fieldHTML('cert_date','cert_date','date',{
      required: false,
      hint: t('cert_hint'),
    })}
  `;
}
```

- [ ] **Step 6.3 — Add renderUsage (Car Step 4)**

```javascript
function renderUsage() {
  const sc = document.getElementById('step-content');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('usage_title')}</h2>
    ${fieldHTML('annual_km','annual_km','number',{attrs:'min="0" placeholder="15000"'})}
    ${fieldHTML('commute_km','commute_km','number',{attrs:'min="0" placeholder="20"'})}
    ${fieldHTML('ownership','ownership','select',{options:[
      {value:'lease',   label: t('own_lease')},
      {value:'finance', label: t('own_finance')},
      {value:'own',     label: t('own_own')},
    ]})}
    ${fieldHTML('snow_tires','snow_tires','radio',{options:[
      {value:'yes', label: t('yes')},
      {value:'no',  label: t('no')},
    ]})}
  `;
}
```

- [ ] **Step 6.4 — Add renderAutoHistory (Car Step 5)**

```javascript
function renderAutoHistory() {
  const sc = document.getElementById('step-content');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('auto_hist_title')}</h2>
    ${fieldHTML('tickets','tickets','select',{options:[
      {value:'none',  label: t('hist_none')},
      {value:'once',  label: t('hist_once')},
      {value:'multi', label: t('hist_multi')},
    ]})}
    ${fieldHTML('accidents','accidents','select',{options:[
      {value:'none',  label: t('hist_none')},
      {value:'once',  label: t('hist_once')},
      {value:'multi', label: t('hist_multi')},
    ]})}
    ${fieldHTML('prev_auto_insurer','prev_auto_insurer','text',{
      hint: t('prev_insurer_hint'),
    })}
    ${fieldHTML('auto_cov_years','auto_cov_years','number',{
      attrs:'min="0" placeholder="3"',
    })}
  `;
}
```

- [ ] **Step 6.5 — Walk all 5 car steps manually**

Go to 车险 flow, click through steps 1→5. Verify:
- All fields present and labelled correctly in ZH and EN
- VIN input auto-uppercases
- Vehicle year input accepts only numbers
- Step 5 shows Submit button (not Next)
- Progress bar advances and shows correct labels
- Back button goes to previous step

- [ ] **Step 6.6 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add car insurance steps 2-5"
```

---

## Task 7: Home Steps 2–5

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 7.1 — Add renderPropertyInfo (Home Step 2)**

```javascript
function renderPropertyInfo() {
  const sc = document.getElementById('step-content');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('prop_title')}</h2>
    ${fieldHTML('prop_address','prop_address','text',{placeholder: lang==='zh'?'街道地址, 城市, 省份, 邮编':'Street, City, Province, Postal Code'})}
    ${fieldHTML('home_eff_date','home_eff_date','date')}
    ${fieldHTML('prop_use','prop_use','select',{options:[
      {value:'owner',    label: t('use_owner')},
      {value:'rental',   label: t('use_rental')},
      {value:'seasonal', label: t('use_seasonal')},
    ]})}
    ${fieldHTML('mortgage','mortgage','radio',{options:[
      {value:'yes', label: t('yes')},
      {value:'no',  label: t('no')},
    ]})}
  `;
}
```

- [ ] **Step 7.2 — Add renderPropertyDetails (Home Step 3) with area unit toggle**

```javascript
function renderPropertyDetails() {
  const sc = document.getElementById('step-content');
  const unit = val('area_unit','sqft');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('details_title')}</h2>
    ${fieldHTML('bedrooms','bedrooms','number',{attrs:'min="1" max="20" placeholder="3"'})}
    ${fieldHTML('bathrooms','bathrooms','number',{attrs:'min="1" max="20" placeholder="2"'})}
    <div class="field" id="field-area">
      <label>${t('area')}</label>
      <div class="area-wrap">
        <input type="number" id="area" min="1" placeholder="1500"
          value="${escHtml(val('area'))}"
          oninput="setVal('area',this.value)">
        <div class="unit-toggle">
          <button class="unit-btn${unit==='sqft'?' active':''}"
            onclick="setAreaUnit('sqft')">sq ft</button>
          <button class="unit-btn${unit==='sqm'?' active':''}"
            onclick="setAreaUnit('sqm')">m²</button>
        </div>
      </div>
      <div class="field-error" id="err-area"></div>
    </div>
    ${fieldHTML('basement','basement','radio',{options:[
      {value:'yes', label: t('yes')},
      {value:'no',  label: t('no')},
    ]})}
  `;
}

function setAreaUnit(unit) {
  setVal('area_unit', unit);
  // Re-render details step to update button active state
  renderPropertyDetails();
}
```

- [ ] **Step 7.3 — Add renderHomeHistory (Home Step 4)**

```javascript
function renderHomeHistory() {
  const sc = document.getElementById('step-content');
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('home_hist_title')}</h2>
    ${fieldHTML('prev_home_insurer','prev_home_insurer','text',{
      hint: t('prev_insurer_hint'),
    })}
    ${fieldHTML('home_cov_years','home_cov_years','number',{
      attrs:'min="0" placeholder="2"',
    })}
    ${fieldHTML('prior_claims','prior_claims','radio',{options:[
      {value:'yes', label: t('yes')},
      {value:'no',  label: t('no')},
    ]})}
  `;
}
```

- [ ] **Step 7.4 — Add renderHomeSystems (Home Step 5)**

```javascript
function renderHomeSystems() {
  const sc = document.getElementById('step-content');
  const currentYear = new Date().getFullYear();
  const yearAttrs = `type="number" min="1900" max="${currentYear}" placeholder="${lang==='zh'?'更新年份':'Year updated'}"`;
  sc.className = '';
  sc.innerHTML = `
    <h2 class="step-title">${t('systems_title')}</h2>
    <p class="field-hint" style="margin-bottom:16px">${t('systems_header')}</p>
    ${fieldHTML('roof','roof','number',{required:false,attrs:`min="1900" max="${currentYear}"`})}
    ${fieldHTML('furnace','furnace','number',{required:false,attrs:`min="1900" max="${currentYear}"`})}
    ${fieldHTML('plumbing','plumbing','number',{required:false,attrs:`min="1900" max="${currentYear}"`})}
    ${fieldHTML('electrical','electrical','number',{required:false,attrs:`min="1900" max="${currentYear}"`})}
  `;
}
```

- [ ] **Step 7.5 — Walk all 5 home steps**

Select 房险, go through steps 1→5. Verify: area unit toggle switches between sq ft / m², saves unit choice. All required/optional labels correct. Submit button on Step 5. Back works throughout.

- [ ] **Step 7.6 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add home insurance steps 2-5"
```

---

## Task 8: Combined Flow Transition Card

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 8.1 — Add renderTransitionCard**

```javascript
function renderTransitionCard() {
  const sc = document.getElementById('step-content');
  const nb = document.getElementById('nav-buttons');
  const pw = document.getElementById('progress-wrap');
  const hint = document.getElementById('hint-text');

  // Show progress bar at step 5 of 9 while transition is showing
  renderProgressBar();
  pw.style.display = 'block';
  hint.textContent = '';

  sc.className = '';
  sc.innerHTML = `
    <div class="transition-card">
      <div class="check">✅</div>
      <h3>${t('transition_title')}</h3>
      <p>${t('transition_body')}</p>
    </div>
  `;

  nb.innerHTML = `
    <button class="btn btn-secondary" onclick="goBack()">${t('btn_back')}</button>
    <button class="btn btn-primary" onclick="navigate(6)">${t('btn_continue')}</button>
  `;
}
```

- [ ] **Step 8.2 — Walk combined flow**

Select 车险&房险. Walk through all 9 steps. After Step 5, transition card appears (progress shows 5/9). Continue → Property Info. Step counter increments through 6→9. Submit on Step 9.

- [ ] **Step 8.3 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add combined flow and transition card"
```

---

## Task 9: Validation Engine

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 9.1 — Add validation functions**

```javascript
// ============================================================
// VALIDATION
// ============================================================

function clearErrors() {
  document.querySelectorAll('.field-error').forEach(el => {
    el.textContent = '';
    el.classList.remove('visible');
  });
  document.querySelectorAll('input.error, select.error').forEach(el => {
    el.classList.remove('error');
  });
}

function showFieldError(id, msg) {
  const errEl = document.getElementById('err-' + id);
  const inputEl = document.getElementById(id);
  if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
  if (inputEl) inputEl.classList.add('error');
}

function vinValid(v) {
  return /^[A-HJ-NPR-Z0-9]{17}$/.test(v.toUpperCase());
}

// Returns the list of required field ids for the current step
function getRequiredFields() {
  const { flow, step } = state;
  const maps = {
    auto: {
      1: ['full_name','dob','phone','email','address'],
      2: ['auto_eff_date','vin','vehicle_year','make','model'],
      3: ['licence_num','marital','g1_date','g2_date','g_date'], // cert_date optional
      4: ['annual_km','commute_km','ownership','snow_tires'],
      5: ['tickets','accidents','prev_auto_insurer','auto_cov_years'],
    },
    home: {
      1: ['full_name','dob','phone','email','address'],
      2: ['prop_address','home_eff_date','prop_use','mortgage'],
      3: ['bedrooms','bathrooms','area','basement'],
      4: ['prev_home_insurer','home_cov_years','prior_claims'],
      5: [], // all optional
    },
    both: {
      1: ['full_name','dob','phone','email','address'],
      2: ['auto_eff_date','vin','vehicle_year','make','model'],
      3: ['licence_num','marital','g1_date','g2_date','g_date'],
      4: ['annual_km','commute_km','ownership','snow_tires'],
      5: ['tickets','accidents','prev_auto_insurer','auto_cov_years'],
      6: ['prop_address','home_eff_date','prop_use','mortgage'],
      7: ['bedrooms','bathrooms','area','basement'],
      8: ['prev_home_insurer','home_cov_years','prior_claims'],
      9: [],
    },
  };
  return maps[flow]?.[step] ?? [];
}

function validateStep() {
  clearErrors();
  let valid = true;
  const required = getRequiredFields();

  for (const id of required) {
    const el = document.getElementById(id);
    // Radio groups: check state.data directly
    const v = (el ? el.value : null) ?? val(id);
    if (!v || v.toString().trim() === '') {
      showFieldError(id, t('required_error'));
      valid = false;
    }
  }

  // Email format
  const emailVal = val('email');
  if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    showFieldError('email', t('email_error'));
    valid = false;
  }

  // VIN format
  const vinVal = val('vin');
  if (vinVal && !vinValid(vinVal)) {
    showFieldError('vin', t('vin_error'));
    valid = false;
  }

  // G date chain (step 3 for auto/both)
  const { flow, step } = state;
  if ((flow === 'auto' && step === 3) || (flow === 'both' && step === 3)) {
    const g1 = val('g1_date'), g2 = val('g2_date'), g = val('g_date'), cert = val('cert_date');
    if (g1 && g2 && g2 < g1) { showFieldError('g2_date', t('g2_before_g1_error')); valid = false; }
    if (g2 && g && g < g2)   { showFieldError('g_date',  t('g_before_g2_error'));  valid = false; }
    if (cert && g && cert < g){ showFieldError('cert_date', t('cert_before_g_error')); valid = false; }
  }

  if (!valid) {
    // Scroll to first error
    const firstErr = document.querySelector('.field-error.visible');
    if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return valid;
}

// Collect current step's DOM values into state.data
function collectStepData() {
  const required = getRequiredFields();
  // Collect all inputs in step-content
  document.querySelectorAll('#step-content input, #step-content select').forEach(el => {
    if (el.type === 'radio') {
      if (el.checked) setVal(el.name, el.value);
    } else {
      setVal(el.id, el.value);
    }
  });
}
```

- [ ] **Step 9.2 — Test validation manually**

Go to 车险 Step 1. Click Next without filling anything → all 5 fields should show red errors. Fill them in → click Next → advances. Go to Step 3, enter G2 date before G1 → should show cross-field error. Enter VIN "ABCD" → VIN error on Step 2.

- [ ] **Step 9.3 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add validation engine with cross-field date rules"
```

---

## Task 10: Web3Forms Submission + Success/Error States

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 10.1 — Add buildPayload and submitForm**

```javascript
// ============================================================
// SUBMISSION
// ============================================================

function buildPayload() {
  const d = state.data;
  const flowLabel = { auto: 'Auto Insurance', home: 'Home Insurance', both: 'Auto & Home' }[state.flow];

  // Build a human-readable body
  const lines = [`Quote Type: ${flowLabel}`, ''];

  // add(label, key, transform?) — transform strips/formats the raw value before output
  function add(label, key, transform) {
    let v = d[key];
    if (v === undefined || v === '') return;
    if (transform) v = transform(String(v));
    lines.push(`${label}: ${v}`);
  }

  // Personal
  lines.push('=== Personal Info ===');
  add('Full Name',      'full_name');
  add('Date of Birth',  'dob');
  add('Phone',          'phone', v => v.replace(/[^\d+]/g, ''));  // strip formatting chars
  add('Email',          'email');
  add('Mailing Address','address');
  lines.push('');

  if (state.flow !== 'home') {
    // Vehicle
    lines.push('=== Vehicle Info ===');
    add('Insurance Effective Date', 'auto_eff_date');
    add('VIN',                      'vin');
    add('Vehicle Year',             'vehicle_year');
    add('Make',                     'make');
    add('Model',                    'model');
    lines.push('');

    // Driving
    lines.push('=== Driving Info ===');
    add("Driver's Licence #", 'licence_num');
    add('Marital Status',     'marital');
    add('G1 Licence Date',    'g1_date');
    add('G2 Licence Date',    'g2_date');
    add('G Licence Date',     'g_date');
    add('Full Certificate Date', 'cert_date');
    lines.push('');

    // Usage
    lines.push('=== Vehicle Usage ===');
    add('Annual KM',           'annual_km');
    add('One-way Commute (KM)','commute_km');
    add('Vehicle Ownership',   'ownership');
    add('Snow Tires',          'snow_tires');
    lines.push('');

    // Auto History
    lines.push('=== Auto Insurance History ===');
    add('Traffic Tickets (3yr)',     'tickets');
    add('At-Fault Accidents (6yr)',  'accidents');
    add('Previous Auto Insurer',     'prev_auto_insurer');
    add('Years of Continuous Auto Coverage', 'auto_cov_years');
    lines.push('');
  }

  if (state.flow !== 'auto') {
    // Property
    lines.push('=== Property Info ===');
    add('Property Address',          'prop_address');
    add('Home Insurance Effective Date', 'home_eff_date');
    add('Primary Use',               'prop_use');
    add('Mortgage',                  'mortgage');
    lines.push('');

    // Property Details
    lines.push('=== Property Details ===');
    add('Bedrooms',   'bedrooms');
    add('Bathrooms',  'bathrooms');
    const area = d['area'];
    const unit = d['area_unit'] === 'sqm' ? 'm²' : 'sq ft';
    if (area) lines.push(`Living Area: ${Number(area).toLocaleString('en-CA')} ${unit}`);
    add('Finished Basement', 'basement');
    lines.push('');

    // Home History
    lines.push('=== Home Insurance History ===');
    add('Previous Home Insurer',     'prev_home_insurer');
    add('Years of Continuous Home Coverage', 'home_cov_years');
    add('Prior Home Claims',         'prior_claims');
    lines.push('');

    // Home Systems
    const sysCols = [['roof','Roof'],['furnace','Furnace'],['plumbing','Plumbing'],['electrical','Electrical Wiring']];
    const sysLines = sysCols.filter(([k]) => d[k]).map(([k,l]) => `${l}: ${d[k]}`);
    if (sysLines.length) {
      lines.push('=== Home Systems (Year Updated) ===');
      lines.push(...sysLines);
      lines.push('');
    }
  }

  return {
    access_key: WEB3FORMS_KEY,
    subject: `CanTrust Insurance Quote Request — ${flowLabel}`,
    from_name: d['full_name'] || 'Unknown',
    message: lines.join('\n'),
    _honey: '',
  };
}

async function submitForm() {
  collectStepData();
  if (!validateStep()) return;

  const submitBtn = document.querySelector('#nav-buttons .btn-primary');
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = lang === 'zh' ? '提交中…' : 'Submitting…'; }

  hideSubmitError();

  try {
    const payload = buildPayload();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (response.ok && result.success) {
      showSuccess();
    } else {
      throw new Error(result.message || 'Server error');
    }
  } catch (err) {
    console.error('Submission error:', err);
    showSubmitError();
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = t('btn_submit'); }
  }
}

function handleSubmit() {
  submitForm();
}

function showSuccess() {
  document.getElementById('wizard').style.display = 'none';
  const card = document.getElementById('success-card');
  card.style.display = 'block';
  document.getElementById('success-title').textContent = t('success_title');
  document.getElementById('success-body').textContent = t('success_body');
  sessionStorage.removeItem(STATE_KEY); // Clear saved state on success
}

function showSubmitError() {
  const el = document.getElementById('submit-error');
  el.textContent = t('submit_error');
  el.classList.add('visible');
  // Add retry button
  const nb = document.getElementById('nav-buttons');
  nb.innerHTML = `
    <button class="btn btn-secondary" onclick="goBack()">${t('btn_back')}</button>
    <button class="btn btn-primary" onclick="submitForm()">${t('btn_retry')}</button>
  `;
}

function hideSubmitError() {
  const el = document.getElementById('submit-error');
  el.textContent = '';
  el.classList.remove('visible');
}
```

- [ ] **Step 10.2 — Test submission flow**

Fill all fields in 车险 flow. On Step 5, click Submit. With `WEB3FORMS_KEY = 'invalid'`:
- Should see error banner + Retry button (do NOT advance to success)
- Values should still be in fields after error

With a valid key (test key available at app.web3forms.com): should see green success card, sessionStorage `cantrust_quote_v1` should be cleared.

- [ ] **Step 10.3 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: add Web3Forms submission, success and error handling"
```

---

## Task 11: Logo Encoding

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html`

- [ ] **Step 11.1 — Fetch and encode the logo**

The site is WordPress and almost certainly blocks cross-origin fetch. Use the right-click method (most reliable):

1. Open [https://cantrustcanada.com](https://cantrustcanada.com) in Chrome
2. Right-click the white logo in the header → **Inspect**
3. In DevTools Elements panel, find the `<img>` tag with the logo
4. Right-click the image in the viewport (not the tag) → **Copy image as Data URI**
5. The clipboard now contains `data:image/png;base64,iVBOR...`
6. Strip the prefix `data:image/png;base64,` — the remaining string is the base64 value

Alternative if the above doesn't work (fetch from same origin):
```javascript
// Run this in the browser console while on cantrustcanada.com
const img = document.querySelector('img[src*="Cantrust"]') || document.querySelector('.site-logo img') || document.querySelector('header img');
const canvas = document.createElement('canvas');
canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
canvas.getContext('2d').drawImage(img, 0, 0);
console.log(canvas.toDataURL('image/png').split(',')[1]);
```

- [ ] **Step 11.2 — Set LOGO_B64 constant**

```javascript
const LOGO_B64 = 'iVBORw0KGgoAAAANSUhEUgAA...'; // full base64 string
```

Verify logo displays in header on reload.

- [ ] **Step 11.3 — Commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: embed logo as inline base64"
```

---

## Task 12: SessionStorage Reload Recovery + Browser Back

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html` (already partially handled in Task 3 — verify and harden)

- [ ] **Step 12.1 — Verify reload recovery**

1. Start 车险 flow, fill Step 1 (all 5 fields), advance to Step 2
2. Hard-reload the page (Ctrl+Shift+R / Cmd+Shift+R)
3. Page should restore to Step 2 with Step 1 data intact in `state.data`
4. Check: `JSON.parse(sessionStorage.getItem('cantrust_quote_v1'))` shows all filled values

- [ ] **Step 12.2 — Verify browser back button**

1. Go through Steps 1→3 of 车险 flow
2. Press browser Back → should go to Step 2 (not navigate away from page)
3. Press browser Back again → Step 1
4. Press browser Back again → Step 0 (or browser navigates away — both are acceptable)

- [ ] **Step 12.3 — Verify combined flow transition card back navigation**

In 车险&房险 flow, advance through Steps 1→5 → transition card appears. Press browser Back → Step 5 auto history. Press in-form Back on transition card → Step 5.

- [ ] **Step 12.4 — Commit if any fixes needed**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "fix: harden sessionStorage recovery and browser back navigation"
```

---

## Task 13: Final Polish + Cross-Device QA

**Files:**
- Modify: `D:/New folder/cantrust_quote_form.html` — cosmetic fixes only

- [ ] **Step 13.1 — Mobile viewport test (375px)**

Open Chrome DevTools → toggle device toolbar → iPhone SE (375px wide). Check every step of the 房险 flow:
- All inputs fully visible, no horizontal overflow
- Touch targets ≥ 44px
- Labels not truncated
- Progress bar renders correctly
- Radio group wraps if needed

Fix any issues found.

- [ ] **Step 13.2 — Language toggle mid-flow test**

Walk to Step 3 of 车险 flow (partially filled). Click EN toggle. Verify:
- All labels, hints, error messages, button text switch to English
- Filled values remain in fields
- Select options switch to English
- Switch back to ZH — all returns to Chinese

- [ ] **Step 13.3 — Accessibility spot check**

- All inputs have `<label for=...>` linking via id
- All date pickers use `type="date"` (native, accessible)
- Error messages appear below the field (not only colour-coded)
- Focus rings visible on all interactive elements

- [ ] **Step 13.4 — Full combined flow end-to-end**

Complete the entire 车险&房险 flow (9 steps) with realistic test data. Verify the submitted email body (with valid Web3Forms key or check test dashboard) contains all fields labelled correctly in English.

- [ ] **Step 13.5 — Final commit**

```bash
git -C "D:/New folder" add cantrust_quote_form.html
git -C "D:/New folder" commit -m "feat: complete cantrust insurance quote form v1.0"
```

---

## Deployment Checklist

Before sharing the file with the client:

- [ ] Replace `const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'` with the real key from [app.web3forms.com](https://app.web3forms.com) (configured to forward to `zack.feng@cantrustcanada.com`)
- [ ] Embed the CanTrust logo as base64 in `LOGO_B64`
- [ ] Do one end-to-end submission test with the real key
- [ ] Host on GitHub Pages or any static host — no server config needed
- [ ] Share the URL or the HTML file directly
