(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
    return;
  }
  root.AMSPolicyInsurerOptions = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  function buildInsurerOptionList(options, preserveValue) {
    const list = Array.isArray(options) ? options.slice() : [];
    const preserved = String(preserveValue || '').trim();
    if (!preserved) return list;
    if (list.includes(preserved)) return list;
    return [preserved].concat(list);
  }

  return {
    buildInsurerOptionList,
  };
});
