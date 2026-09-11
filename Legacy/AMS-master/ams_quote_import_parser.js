(function () {
  const state = window.AMSQuoteImportState;

  function buildEmptyParsedQuote() {
    return {
      client: { name: null, phone: null, email: null, address: null },
      vehicle: { year: null, make: null, model: null, vin: null, body_style: null, fuel_type: null, primary_use: null },
      driver: { dob: null, license_number: null, license_class: null, training_date: null },
      secondary_driver: { name: null, dob: null, license_number: null, license_class: null, training_date: null },
      policy: { carrier: null, effective_date: null, term_months: 12, total_premium: null },
      coverages: [],
    };
  }

  function beginQuoteParse(source = 'paste') {
    state.parsed = buildEmptyParsedQuote();
    state.matchedClient = null;
    state.clientPolicies = [];
    state.selectedPolicyId = null;
    window.setParseStatus('parse-status', '');
    if (source !== 'pdf') window.setParseStatus('pdf-status', '');
    const matchWrap = document.getElementById('match-banner-wrap');
    if (matchWrap) matchWrap.textContent = '';
  }

  function countParsedFields() {
    if (!state.parsed) return 0;
    let count = 0;
    const check = obj => {
      for (const value of Object.values(obj)) if (value) count++;
    };
    check(state.parsed.client);
    check(state.parsed.vehicle);
    check(state.parsed.driver);
    check(state.parsed.policy);
    count += state.parsed.coverages.length;
    return count;
  }

  function finalizeParsedQuote(source = 'paste') {
    const count = countParsedFields();
    window.setParseStatus('parse-status', window._t('import_parsed_fields', count));
    if (source === 'pdf') window.setParseStatus('pdf-status', `Parsed ${count} fields`);
    window.renderPreview();
    if (state.importMode === 'binder') {
      state.matchedClient = null;
      if (window.renderMatchBanner) window.renderMatchBanner(null);
    } else if (window.matchClient) {
      window.matchClient();
    }
  }

  async function parseQuotePdfFile(file) {
    if (!file || (!/\.pdf$/i.test(file.name || '') && file.type !== 'application/pdf')) {
      const message = 'Please choose a PDF file';
      window.setParseStatus('pdf-status', message);
      window.showToast(message, 'error');
      return;
    }
    if (!window.pdfjsLib) {
      const message = 'PDF.js failed to load. Use the paste flow or reload the page.';
      window.setParseStatus('pdf-status', message);
      window.showToast(message, 'error');
      return;
    }
    if (window.ensurePdfJsWorker) window.ensurePdfJsWorker();
    window.setParseStatus('pdf-status', 'Reading PDF...');
    try {
      const pages = await extractPdfPages(file);
      window.setParseStatus('pdf-status', `Parsed ${pages.length} page(s)`);
      const normalized = normalizePdfPages(pages);
      parseQuoteFromText(normalized.fullText, { source: 'pdf', lines: normalized.lines });
    } catch (error) {
      console.error('PDF parse failed:', error);
      const message = `PDF parse failed: ${error?.message || 'Unknown error'}`;
      window.setParseStatus('pdf-status', message);
      window.showToast(message, 'error');
    }
  }

  async function extractPdfPages(file) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const pdf = await window.pdfjsLib.getDocument({ data: bytes }).promise;
    const pages = [];
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      pages.push(textContentToPageText(content));
    }
    return pages;
  }

  function textContentToPageText(content) {
    const chunks = [];
    for (const item of content.items || []) {
      const str = String(item.str || '').replace(/\u00a0/g, ' ');
      if (!str.trim()) continue;
      chunks.push(str);
      chunks.push(item.hasEOL ? '\n' : ' ');
    }
    return chunks.join('')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n[ \t]+/g, '\n')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();
  }

  function normalizePdfPages(pages) {
    const pageTexts = pages.map(page => String(page || '').replace(/\u00a0/g, ' ').replace(/\r/g, ''));
    const fullText = pageTexts.join('\n\n');
    const lines = fullText.split(/\n+/).map(line => line.trim()).filter(Boolean);
    return { pageTexts, fullText, lines };
  }

  function parseQuoteFromText(raw, { source = 'paste', lines: providedLines = null } = {}) {
    const lines = providedLines || raw.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    const text = raw;
    beginQuoteParse(source);
    try { parseClient(text, lines); } catch (e) { console.warn('parseClient:', e); }
    try { parseVehicle(text, lines); } catch (e) { console.warn('parseVehicle:', e); }
    try { parseDriver(text, lines); } catch (e) { console.warn('parseDriver:', e); }
    try { parsePolicy(text, lines); } catch (e) { console.warn('parsePolicy:', e); }
    try { parseCoverages(text, lines); } catch (e) { console.warn('parseCoverages:', e); }
    finalizeParsedQuote(source);
  }

  function parseQuoteText() {
    const raw = document.getElementById('paste-area').value.trim();
    if (!raw || raw.length < 50) {
      window.showToast(window._t('import_msg_paste_first'), 'error');
      return;
    }
    parseQuoteFromText(raw, { source: 'paste' });
  }

  function findLineIndex(lines, pattern, start = 0) {
    for (let i = start; i < lines.length; i++) {
      if (pattern.test(lines[i])) return i;
    }
    return -1;
  }

  function lineBefore(lines, pattern, start = 0) {
    const idx = findLineIndex(lines, pattern, start);
    return idx > 0 ? lines[idx - 1] : null;
  }

  function sliceSection(lines, startPattern, endPattern) {
    const start = findLineIndex(lines, startPattern);
    if (start < 0) return [];
    const end = endPattern ? findLineIndex(lines, endPattern, start + 1) : -1;
    return end > start ? lines.slice(start, end) : lines.slice(start);
  }

  function parseClient(text, lines) {
    const parsed = state.parsed;
    const applicantSection = sliceSection(lines, /Applicant Information/i, /Co-Applicant Information/i);
    const headerSection = sliceSection(lines, /Policy Information/i, /Applicant Information/i);
    const applicantText = applicantSection.join(' ');
    const firstName = lineBefore(applicantSection, /^First Name$/i);
    const lastName = lineBefore(applicantSection, /^Last Name$/i);
    const inlineNameMatch = applicantText.match(/Applicant Information[\s\S]{0,120}?Salutation\s+([A-Za-z'-]+)\s+First Name[\s\S]{0,40}?([A-Za-z'-]+)\s+Last Name/i);
    const fallbackName =
      (lineBefore(lines, /^Breakdown$/i) || lineBefore(lines, /^Policy Information$/i)) ||
      (text.match(/Driver 1 of \d+\s*\|\s*(?:Miss|Mr|Mrs|Ms)\s+([A-Za-z'-]+\s+[A-Za-z'-]+)/i)?.[1]) ||
      (text.match(/Breakdown\s+([A-Za-z'-]+\s+[A-Za-z'-]+)/i)?.[1]);
    parsed.client.name = [firstName, lastName].filter(Boolean).join(' ').trim() || fallbackName || parsed.client.name;
    if (!parsed.client.name && inlineNameMatch) parsed.client.name = `${inlineNameMatch[1]} ${inlineNameMatch[2]}`.trim();

    const emailCandidates = [...headerSection.filter(line => /@/.test(line)), ...lines.filter(line => /@/.test(line))];
    const extractedEmail = emailCandidates
      .flatMap(line => [...line.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/ig)].map(match => match[0]))
      .find(email => !/info@cantrustcanada.com/i.test(email));
    parsed.client.email = extractedEmail || parsed.client.email;

    const phoneLine = [...headerSection, ...lines].find(line => /Home:|Mobile:/i.test(line));
    if (phoneLine) {
      const homeMatch = phoneLine.match(/Home:\s*(\(\d{3}\)\d{3}-\d{4})/i);
      const mobileMatch = phoneLine.match(/Mobile:\s*(\(\d{3}\)\d{3}-\d{4})/i);
      parsed.client.phone = (homeMatch && homeMatch[1]) || (mobileMatch && mobileMatch[1]) || parsed.client.phone;
    }

    const compactAddressLine = [...headerSection, ...lines].find(line => /^\d+\s+.+[A-Za-z],?\s*ON\s+[A-Z]\d[A-Z]\s*\d[A-Z]\d$/i.test(line));
    if (compactAddressLine) {
      const addressMatch = compactAddressLine.match(/^(\d+\s+.+?)([A-Z][a-z]+,\s*ON\s+[A-Z]\d[A-Z]\s*\d[A-Z]\d)$/);
      parsed.client.address = addressMatch ? `${addressMatch[1].trim()}, ${addressMatch[2].trim()}` : compactAddressLine;
    }

    for (let i = 0; i < lines.length - 1; i++) {
      if (/^\d+\s/.test(lines[i]) && /ON\s+[A-Z]\d[A-Z]\s*\d[A-Z]\d/i.test(lines[i + 1])) {
        parsed.client.address =
          lines[i].replace(/([A-Za-z])([A-Z][a-z])/g, '$1 $2') + ', ' +
          lines[i + 1].replace(/([a-z])([A-Z]{2}\s+[A-Z]\d[A-Z])/g, '$1, $2');
        break;
      }
    }
  }

  function parseVehicle(text, lines) {
    const parsed = state.parsed;
    const vehicleSection = sliceSection(lines, /Vehicle\s+1\s+of\s+\d+/i, /Prepared\s+\d{2}\/\d{2}\/\d{4}/i);
    const vehicleText = vehicleSection.join('\n');
    const vehicleFlatText = vehicleSection.join(' ');
    const vehicleHeader = vehicleSection.find(line => /Private Passenger\s*-\s*\d{4}\s+\S+/i.test(line)) || '';
    const headerMatch = vehicleHeader.match(/Private Passenger\s*-\s*(\d{4})\s+([A-Z]+)\s+(.+?)(?:\s*\(|$)/i);
    if (headerMatch) {
      parsed.vehicle.year = parseInt(headerMatch[1], 10);
      parsed.vehicle.make = headerMatch[2];
      parsed.vehicle.model = headerMatch[3].trim();
    }
    const vinM = vehicleText.match(/\b[A-HJ-NPR-Z0-9]{17}\b/);
    if (vinM) parsed.vehicle.vin = vinM[0];
    parsed.vehicle.body_style = lineBefore(vehicleSection, /^Body Style$/i) || parsed.vehicle.body_style;
    parsed.vehicle.fuel_type = lineBefore(vehicleSection, /^Fuel Type$/i) || parsed.vehicle.fuel_type;
    parsed.vehicle.primary_use = lineBefore(vehicleSection, /^Primary Use$/i) || parsed.vehicle.primary_use;
    if (!parsed.vehicle.body_style && parsed.vehicle.vin) {
      const bodyInline = vehicleFlatText.match(new RegExp(parsed.vehicle.vin + '\\s+([\\s\\S]+?)\\s+Body Style', 'i'));
      if (bodyInline) parsed.vehicle.body_style = bodyInline[1].replace(/^VIN\s+/i, '').replace(/\s+/g, ' ').trim();
    }
    if (!parsed.vehicle.fuel_type) {
      const fuelInline = vehicleFlatText.match(/Body Style\s+(.+?)\s+Fuel Type/i);
      if (fuelInline) parsed.vehicle.fuel_type = fuelInline[1].replace(/\s+/g, ' ').trim();
    }
    if (!parsed.vehicle.primary_use) {
      const useInline = vehicleFlatText.match(/Hybrid\s+(.+?)\s+Primary Use/i) || vehicleFlatText.match(/Fuel Type\s+.+?\s+Hybrid\s+(.+?)\s+Primary Use/i);
      if (useInline) parsed.vehicle.primary_use = useInline[1].replace(/\s+/g, ' ').trim();
    }
  }

  function parseDriver(text, lines) {
    const parsed = state.parsed;
    const driverSection = sliceSection(lines, /Driver\s+1\s+of\s+\d+/i, /CanTrust Canada Insurance Services/i);
    const driverText = driverSection.join(' ');
    const primaryNameMatch = text.match(/Driver 1 of \d+\s*\|\s*(?:Miss|Mr|Mrs|Ms)\s+([A-Za-z'-]+\s+[A-Za-z'-]+)/i);
    if (primaryNameMatch) parsed.driver.name = primaryNameMatch[1].trim();
    const dobLine = lineBefore(driverSection, /^Birth Date$/i);
    if (dobLine) parsed.driver.dob = parseDate(dobLine);
    if (!parsed.driver.dob) {
      const dobInline = driverText.match(/Driver\s+1\s+of\s+\d+\s*\|.*?(\d{2}\/\d{2}\/\d{4})\s+Birth Date/i);
      if (dobInline) parsed.driver.dob = parseDate(dobInline[1]);
    }
    const licenseNumberLine = lineBefore(driverSection, /^Licence Number$/i);
    if (licenseNumberLine) parsed.driver.license_number = licenseNumberLine;
    if (!parsed.driver.license_number) {
      const licenseInline = driverText.match(/([A-Z]\d{8,})\s+Licence Number/i);
      if (licenseInline) parsed.driver.license_number = licenseInline[1];
    }
    const classLine = lineBefore(driverSection, /^Licence Class$/i);
    if (classLine) parsed.driver.license_class = classLine.toUpperCase();
    if (!parsed.driver.license_class) {
      const classInline = driverText.match(/Country Driver\s+([A-Z0-9]+)\s+Licence Class/i);
      if (classInline) parsed.driver.license_class = classInline[1].toUpperCase();
    }
    const trainingLabelIdx = findLineIndex(driverSection, /^Driver Training$/i);
    if (trainingLabelIdx >= 0) {
      for (let i = trainingLabelIdx + 1; i < Math.min(trainingLabelIdx + 4, driverSection.length); i++) {
        if (/\d{2}\/\d{2}\/\d{4}/.test(driverSection[i])) {
          parsed.driver.training_date = parseDate(driverSection[i]);
          break;
        }
      }
    }
    if (!parsed.driver.training_date) {
      const trainingInline = driverText.match(/Driver Training\s+(\d{2}\/\d{2}\/\d{4})\s+Driver Training/i);
      if (trainingInline) parsed.driver.training_date = parseDate(trainingInline[1]);
    }

    const secondaryText = text.match(/Driver 2 of \d+\s*\|([\s\S]*?)(?:CanTrust Canada Insurance Services|Effective Date|Annual Premium|6 Month Premium|$)/i)?.[1] || '';
    const secondary = parsed.secondary_driver || (parsed.secondary_driver = { name: null, dob: null, license_number: null, license_class: null, training_date: null });
    const secondaryNameMatch = text.match(/Driver 2 of \d+\s*\|\s*(?:Miss|Mr|Mrs|Ms)\s+([A-Za-z'-]+\s+[A-Za-z'-]+)/i);
    if (secondaryNameMatch) secondary.name = secondaryNameMatch[1].trim();
    const secondaryDob = secondaryText.match(/(\d{2}\/\d{2}\/\d{4})\s+Birth Date/i);
    if (secondaryDob) secondary.dob = parseDate(secondaryDob[1]);
    const secondaryLicense = secondaryText.match(/([A-Z]\d{8,})\s+Licence Number/i);
    if (secondaryLicense) secondary.license_number = secondaryLicense[1];
    const secondaryClass = secondaryText.match(/\b([A-Z][0-9]?)\s+Licence Class/i);
    if (secondaryClass) secondary.license_class = secondaryClass[1].toUpperCase();
    const secondaryTraining = secondaryText.match(/Driver Training\s+(\d{2}\/\d{2}\/\d{4})\s+Driver Training/i);
    if (secondaryTraining) secondary.training_date = parseDate(secondaryTraining[1]);
  }

  function parsePolicy(text, lines) {
    const parsed = state.parsed;
    const carriers = ['Intact', 'Aviva', 'Wawanesa', 'Economical', 'CAA', 'Gore Mutual', 'Pembridge', 'Pafco', 'Facility', 'Travelers', 'RSA', 'Desjardins', 'Co-operators', 'Northbridge', 'Echelon', 'Unica', 'Hagerty', 'Definity'];
    for (const carrier of carriers) {
      const re = new RegExp('\\b' + carrier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      if (re.test(text)) {
        parsed.policy.carrier = carrier;
        break;
      }
    }
    if (!parsed.policy.carrier) {
      const carrierLine = lines.find(line => carriers.some(carrier => new RegExp('^' + carrier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\b|\\d)', 'i').test(line)));
      if (carrierLine) {
        const matchedCarrier = carriers.find(carrier => new RegExp('^' + carrier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\b|\\d)', 'i').test(carrierLine));
        if (matchedCarrier) parsed.policy.carrier = matchedCarrier;
      }
    }
    const effM = text.match(/Effective\s*Date[:\s]*(\d{1,2}\/\d{1,2}\/\d{4})/i);
    if (effM) parsed.policy.effective_date = parseDate(effM[1]);
    if (/6\s*Month/i.test(text) && !/12\s*Month/i.test(text)) parsed.policy.term_months = 6;
    else if (/6\s*Months?\s*and\s*12\s*Months?/i.test(text) && /6\s*Month\s*Premium/i.test(text)) parsed.policy.term_months = 6;
    const totalM = text.match(/Total\s*Premium\s*\$?([\d,]+\.?\d*)/i);
    if (totalM) parsed.policy.total_premium = parseFloat(totalM[1].replace(/,/g, ''));
    if (!parsed.policy.total_premium) {
      const altM = text.match(/(?:6\s*Month|Annual)\s*Premium\s*\$?([\d,]+\.?\d*)/i);
      if (altM) parsed.policy.total_premium = parseFloat(altM[1].replace(/,/g, ''));
    }
  }

  function parseCoverages(text) {
    const parsed = state.parsed;
    const covPatterns = [
      { name: 'Bodily Injury', re: /Bodily\s*Injury(?:\s*\/\s*Prop\.\s*Damage)?\s*(?:\(?([\d,]+(?:\.\d+)?)\s*[M]?\)?)?/i },
      { name: 'Property Damage', re: /Property\s*Damage\s*(?:\(?([\d,]+(?:\.\d+)?)\s*[M]?\)?)?/i },
      { name: 'Direct Compensation', re: /Direct\s*Compensation\s*(?:\(?([\d,]+)\)?)?/i },
      { name: 'Accident Benefits', re: /Accident\s*Benefits\s*(?:\(?([\w]+)\)?)?/i },
      { name: 'Collision', re: /Collision\s*(?:\(?([\d,]+)\)?)?/i },
      { name: 'Comprehensive', re: /Comprehensive\s*(?:\(?([\d,]+)\)?)?/i },
      { name: 'All Perils', re: /All\s*Perils\s*(?:\(?([\d,]+)\)?)?/i },
      { name: 'Uninsured Automobile', re: /Uninsured\s*Automobile/i },
      { name: 'Limited Waiver', re: /#43\s*Limited\s*Waiver(?:\s*\(([\d\sA-Za-z]+)\))?/i },
      { name: 'Family Protection', re: /(?:#44\s*)?Family\s*Protection\s*(?:\(?([\d,]+(?:\.\d+)?)\s*[M]?\)?)?/i },
      { name: 'Responsible Driver Guarantee', re: /#39\s*Responsible\s*Driver\s*Guarantee/i },
    ];
    const breakdownPremiums = {};
    const premRe = /^\s*(Bodily Injury(?: \/ Prop\. Damage)?|Property Damage|Direct Compensation|Accident Benefits|Collision|Comprehensive|All Perils|Uninsured Automobile|#43 Limited Waiver(?: \(Months\))?|(?:#44\s*)?Family Protection|#39 Responsible Driver Guarantee)\s+(?:[\d,]+\s*[A-Za-z]?\s+)?([\d,]+)\s+([\d,]+)\s*$/gim;
    let pm;
    while ((pm = premRe.exec(text)) !== null) {
      const name = pm[1].replace(/#44\s*/, '').replace(/#43\s*/, '').trim().toLowerCase();
      breakdownPremiums[name] = pm[3] || pm[2];
    }
    parsed.coverages = [];
    for (const cp of covPatterns) {
      const match = text.match(cp.re);
      if (!match) continue;
      const cov = { name: cp.name, limit: match[1] || null, deductible: null, premium: null };
      if (['Collision', 'Comprehensive', 'All Perils'].includes(cp.name) && cov.limit) {
        cov.deductible = cov.limit;
        cov.limit = null;
      }
      if (cov.limit && /^\d+$/.test(cov.limit.replace(/,/g, ''))) {
        const n = parseInt(cov.limit.replace(/,/g, ''), 10);
        if (n >= 1000000) cov.limit = n / 1000000 + 'M';
        else if (n >= 1000) cov.limit = n.toLocaleString('en-CA');
      }
      const key = cp.name.toLowerCase();
      if (breakdownPremiums[key]) cov.premium = breakdownPremiums[key];
      parsed.coverages.push(cov);
    }
  }

  function parseDate(str) {
    if (!str) return null;
    const m = str.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (!m) return null;
    return `${m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`;
  }

  function extractCustomerCodeFromFilename(filename) {
    const match = String(filename || '').match(/\b([A-Z]{4}[0-9]{2})\b/);
    return match ? match[1] : null;
  }

  function normalizeFilenameForClassification(filename) {
    return String(filename || '')
      .toLowerCase()
      .replace(/[_]+/g, ' ')
      .replace(/[^a-z0-9]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function classifyPolicyTypeFromFilename(filename) {
    const normalized = normalizeFilenameForClassification(filename);
    if (!normalized) return null;

    const tokens = normalized.split(' ');
    const has = token => tokens.includes(token);

    if (has('auto') || has('car')) return 'auto';
    if ((has('rented') && has('condo')) || has('condo')) return 'condo';
    if ((has('rented') && has('home')) || has('tenant') || has('rented')) return 'tenant';
    if (has('home') || has('house')) return 'home';
    return null;
  }

  function extractFilenameRevision(filename) {
    const match = String(filename || '').match(/\s-\s(\d+)\s-/);
    return match ? parseInt(match[1], 10) : 1;
  }

  function classifyImportRecord(input = {}) {
    if (!input.customerCode) return { review_status: 'needs_review', parse_confidence: 'low' };
    if (!input.clientExists) return { review_status: 'missing_client', parse_confidence: 'medium' };
    if (input.isDuplicate) return { review_status: 'duplicate', parse_confidence: 'high' };
    if (!input.policyType || !input.effectiveDate || !input.premiumAmount) {
      return { review_status: 'needs_review', parse_confidence: 'low' };
    }
    return { review_status: 'ready_to_promote', parse_confidence: 'high' };
  }

  function buildQuotePdfImportRecord({ filename, fileHash, parsed, clientExists }) {
    const customerCode = extractCustomerCodeFromFilename(filename);
    const detectedPolicyType = classifyPolicyTypeFromFilename(filename) || parsed?.policy_type || null;
    const parsedEffectiveDate = parsed?.policy?.effective_date || null;
    const parsedPremiumAmount = parsed?.policy?.total_premium || null;
    const parsedInsurer = parsed?.policy?.carrier || null;
    const classification = classifyImportRecord({
      customerCode,
      clientExists,
      isDuplicate: false,
      policyType: detectedPolicyType,
      effectiveDate: parsedEffectiveDate,
      premiumAmount: parsedPremiumAmount,
    });

    return {
      customer_code: customerCode,
      source_filename: filename,
      source_file_hash: fileHash,
      detected_policy_type: detectedPolicyType,
      parsed_payload: parsed,
      parsed_effective_date: parsedEffectiveDate,
      parsed_premium_amount: parsedPremiumAmount,
      parsed_insurer: parsedInsurer,
      ...classification,
    };
  }

  window.buildEmptyParsedQuote = buildEmptyParsedQuote;
  window.parseQuoteFromText = parseQuoteFromText;
  window.parseQuoteText = parseQuoteText;
  window.parseQuotePdfFile = parseQuotePdfFile;
  window.extractCustomerCodeFromFilename = extractCustomerCodeFromFilename;
  window.classifyPolicyTypeFromFilename = classifyPolicyTypeFromFilename;
  window.extractFilenameRevision = extractFilenameRevision;
  window.classifyImportRecord = classifyImportRecord;
  window.buildQuotePdfImportRecord = buildQuotePdfImportRecord;
})();
