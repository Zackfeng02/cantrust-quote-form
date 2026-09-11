(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
    return;
  }
  root.AMSPolicyPremiumDisplay = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  function pickPolicyHeaderPremiumSource(policy, premiums) {
    const premiumRows = Array.isArray(premiums)
      ? premiums
          .filter(Boolean)
          .slice()
          .sort((a, b) => String(b.effective_date || '').localeCompare(String(a.effective_date || '')))
      : [];
    if (premiumRows.length > 0) {
      const latest = premiumRows[0];
      return {
        premium_amount: latest.premium_amount,
        payment_type: latest.payment_type || policy?.payment_type || null,
      };
    }

    return {
      premium_amount: policy?.premium_amount -  null,
      payment_type: policy?.payment_type || null,
    };
  }

  return {
    pickPolicyHeaderPremiumSource,
  };
});
