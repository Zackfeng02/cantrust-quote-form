(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AMSQuoteImportWorkflow = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function toDayStamp(value) {
    if (!value) return null;
    const source = value instanceof Date ? new Date(value.getTime()) : new Date(`${value}T00:00:00`);
    if (Number.isNaN(source.getTime())) return null;
    source.setHours(0, 0, 0, 0);
    return source;
  }

  function diffInDays(left, right) {
    const leftDate = toDayStamp(left);
    const rightDate = toDayStamp(right);
    if (!leftDate || !rightDate) return null;
    return Math.round((leftDate.getTime() - rightDate.getTime()) / 86400000);
  }

  function selectReferencePolicy(importedEffectiveDate, existingPolicies) {
    const importedDate = toDayStamp(importedEffectiveDate);
    if (!importedDate || !Array.isArray(existingPolicies) || existingPolicies.length === 0) return null;

    return existingPolicies
      .map((policy) => {
        const referenceDate = toDayStamp(policy?.expiry_date) || toDayStamp(policy?.effective_date);
        const distance = referenceDate
          ? Math.abs(Math.round((importedDate.getTime() - referenceDate.getTime()) / 86400000))
          : Number.POSITIVE_INFINITY;
        return { policy, distance };
      })
      .sort((left, right) => left.distance - right.distance)[0]?.policy || null;
  }

  function classifyBinderImportWorkflow({
    importedEffectiveDate,
    importedTermMonths,
    today,
    existingPolicies = [],
  } = {}) {
    const normalizedImportedDate = toDayStamp(importedEffectiveDate);
    const normalizedToday = toDayStamp(today || new Date());
    const referencePolicy = selectReferencePolicy(normalizedImportedDate, existingPolicies);
    const expiryGapDays = referencePolicy ? diffInDays(normalizedImportedDate, referencePolicy.expiry_date) : null;
    const effectiveGapDays = referencePolicy ? diffInDays(normalizedImportedDate, referencePolicy.effective_date) : null;

    const isHistorical = !!(normalizedImportedDate && normalizedToday && normalizedImportedDate <= normalizedToday);
    const isRenewal = expiryGapDays === 0 || effectiveGapDays === 0;
    const isRemarket = expiryGapDays != null && Math.abs(expiryGapDays) <= 30;

    return {
      importedEffectiveDate: normalizedImportedDate ? normalizedImportedDate.toISOString().split('T')[0] : null,
      importedTermMonths: Number(importedTermMonths) || null,
      isHistorical,
      isRenewal,
      isRemarket,
      shouldPrompt: isHistorical && (isRenewal || isRemarket),
      referencePolicy,
    };
  }

  return {
    classifyBinderImportWorkflow,
  };
});
