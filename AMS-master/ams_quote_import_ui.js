(function () {
  const state = window.AMSQuoteImportState || (window.AMSQuoteImportState = {
    db: null,
    parsed: null,
    matchedClient: null,
    importMode: 'binder',
    selectedPolicyId: null,
    clientPolicies: [],
  });

  function _t(key, ...args) {
    const lang = localStorage.getItem('ams_lang') || 'zh';
    const entry = typeof AMS_LANG !== 'undefined' ? AMS_LANG[key] : null;
    let str = entry ? (entry[lang] || entry.zh) : key;
    args.forEach((arg, index) => {
      str = str.replace(`{${index}}`, arg);
    });
    return str;
  }

  function setParseStatus(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message || '';
  }

  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el && val != null && val !== '') el.value = val;
  }

  function readFormSnapshot() {
    return {
      name: document.getElementById('p-name')?.value.trim() || '',
      phone: document.getElementById('p-phone')?.value.trim() || '',
      email: document.getElementById('p-email')?.value.trim() || '',
      address: document.getElementById('p-address')?.value.trim() || '',
      year: document.getElementById('p-year')?.value.trim() || '',
      make: document.getElementById('p-make')?.value.trim() || '',
      model: document.getElementById('p-model')?.value.trim() || '',
      vin: document.getElementById('p-vin')?.value.trim() || '',
      body: document.getElementById('p-body')?.value.trim() || '',
      fuelUse: document.getElementById('p-fuel-use')?.value.trim() || '',
      dob: document.getElementById('p-dob')?.value || '',
      license: document.getElementById('p-license')?.value.trim() || '',
      licenseClass: document.getElementById('p-license-class')?.value.trim() || '',
      training: document.getElementById('p-training')?.value || '',
      carrier: document.getElementById('p-carrier')?.value.trim() || '',
      premium: parseFloat(document.getElementById('p-premium')?.value) || 0,
      effective: document.getElementById('p-effective')?.value || '',
      term: parseInt(document.getElementById('p-term')?.value, 10) || 12,
    };
  }

  function renderPreview() {
    const parsed = state.parsed;
    if (!parsed) return;

    setVal('p-name', parsed.client.name);
    setVal('p-phone', parsed.client.phone);
    setVal('p-email', parsed.client.email);
    setVal('p-address', parsed.client.address);

    setVal('p-year', parsed.vehicle.year);
    setVal('p-make', parsed.vehicle.make);
    setVal('p-model', parsed.vehicle.model);
    setVal('p-vin', parsed.vehicle.vin);
    setVal('p-body', parsed.vehicle.body_style);
    setVal('p-fuel-use', [parsed.vehicle.fuel_type, parsed.vehicle.primary_use].filter(Boolean).join(' / '));

    setVal('p-dob', parsed.driver.dob);
    setVal('p-license', parsed.driver.license_number);
    setVal('p-license-class', parsed.driver.license_class);
    setVal('p-training', parsed.driver.training_date);

    setVal('p-carrier', parsed.policy.carrier);
    setVal('p-premium', parsed.policy.total_premium);
    setVal('p-effective', parsed.policy.effective_date);
    document.getElementById('p-term').value = parsed.policy.term_months || 12;

    document.getElementById('ph-carrier').textContent = parsed.policy.carrier || _t('import_carrier_unknown');
    const eff = parsed.policy.effective_date || '—';
    const termLabel = parsed.policy.term_months === 6 ? _t('import_term_6m') : _t('import_term_12m');
    document.getElementById('ph-detail').textContent = `${_t('import_eff_date_label')} ${eff} · ${_t('import_term_label')} ${termLabel}`;
    document.getElementById('ph-premium').textContent = parsed.policy.total_premium
      ? '$' + parsed.policy.total_premium.toLocaleString('en-CA', { minimumFractionDigits: 2 })
      : '—';
    document.getElementById('ph-term').textContent = parsed.policy.term_months === 6 ? '6-Month Premium' : 'Annual Premium';

    const tbody = document.getElementById('cov-tbody');
    tbody.textContent = '';
    if (parsed.coverages.length) {
      for (const coverage of parsed.coverages) {
        const tr = document.createElement('tr');
        const nameCell = document.createElement('td');
        const valueCell = document.createElement('td');
        const premiumCell = document.createElement('td');
        nameCell.className = 'cov-name';
        valueCell.className = 'cov-val';
        premiumCell.className = 'cov-val';
        nameCell.textContent = coverage.name || '';
        valueCell.textContent = coverage.limit ? coverage.limit : coverage.deductible ? ('Ded. ' + coverage.deductible) : '-';
        premiumCell.textContent = coverage.premium ? '$' + parseInt(coverage.premium, 10).toLocaleString('en-CA') : '';
        tr.append(nameCell, valueCell, premiumCell);
        tbody.appendChild(tr);
      }
    } else {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 3;
      td.style.color = '#94a3b8';
      td.style.textAlign = 'center';
      td.style.padding = '16px';
      td.textContent = _t('import_no_coverages');
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    document.getElementById('paste-card').style.display = 'none';
    document.getElementById('preview-section').classList.add('visible');
    if (window.updateCreateButton) window.updateCreateButton();
  }

  function backToPaste() {
    document.getElementById('paste-card').style.display = '';
    document.getElementById('preview-section').classList.remove('visible');
  }

  function resetAll() {
    if (!confirm(_t('import_msg_confirm_reset'))) return;
    state.parsed = null;
    state.matchedClient = null;
    state.clientPolicies = [];
    state.selectedPolicyId = null;
    document.getElementById('paste-area').value = '';
    document.getElementById('pdf-file').value = '';
    document.getElementById('paste-card').style.display = '';
    document.getElementById('preview-section').classList.remove('visible');
    document.getElementById('parse-status').textContent = '';
    document.getElementById('pdf-status').textContent = '';
    document.getElementById('match-banner-wrap').innerHTML = '';
    showToast(_t('import_msg_reset_done'));
  }

  function showToast(msg, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show' + (type ? ' ' + type : '');
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);
  }

  window._t = _t;
  window.setParseStatus = setParseStatus;
  window.setVal = setVal;
  window.readQuoteImportFormSnapshot = readFormSnapshot;
  window.renderPreview = renderPreview;
  window.backToPaste = backToPaste;
  window.resetAll = resetAll;
  window.showToast = showToast;
})();



