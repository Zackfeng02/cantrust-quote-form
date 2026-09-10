/**
 * AMS shared sidebar — single navigation for all pages (no fetch; works over file://).
 * Mark the mount point: <aside class="sidebar" data-ams-active="clients" id="sidebar"></aside>
 * Active keys: dashboard | clients | policies | tasks | quotes | import_quote | renewal |
 *   changes | reports | archive_import | data_sweeper | delete_center
 */
(function () {
  /** English defaults so labels are never blank if i18n loads late or a key is missing */
  var SIDEBAR_FALLBACK = {
    nav_main: 'Main',
    nav_dashboard: 'Dashboard',
    nav_clients: 'Clients',
    nav_policies: 'Policies',
    nav_tasks: 'Tasks',
    nav_business: 'Business',
    nav_quotes: 'New Quotes',
    nav_import: 'Quote Import',
    nav_renewal: 'Renewal Compare',
    nav_records: 'Records',
    nav_changes: 'Changes',
    nav_reports: 'Reports',
    nav_tools: 'Tools',
    nav_archive_import: 'Archive Import',
    nav_data_sweep: 'Data Sweep',
    nav_delete_center: 'Delete Center',
    user_name: 'Independent Broker',
    user_role_admin: 'Administrator'
  };

  function fallbackLabel(key) {
    return SIDEBAR_FALLBACK[key] || key || '';
  }

  var NAV = [
    { section: 'nav_main', marginTop: 0, items: [
      { id: 'dashboard', href: 'ams_dashboard.html', icon: '\u229e', i18n: 'nav_dashboard' },
      { id: 'clients', href: 'ams_clients.html', icon: '\ud83d\udc64', i18n: 'nav_clients' },
      { id: 'policies', href: 'ams_policies.html', icon: '\ud83d\udccb', i18n: 'nav_policies' },
      { id: 'tasks', href: 'ams_tasks.html', icon: '\u2713', i18n: 'nav_tasks' }
    ]},
    { section: 'nav_business', marginTop: 16, items: [
      { id: 'quotes', href: 'ams_quotes.html', icon: '\ud83d\udcb2', i18n: 'nav_quotes' },
      { id: 'import_quote', href: 'ams_import_quote.html', icon: '\ud83d\udce5', i18n: 'nav_import' },
      { id: 'renewal', href: 'ams_renewal.html', icon: '\ud83d\udd04', i18n: 'nav_renewal' }
    ]},
    { section: 'nav_records', marginTop: 16, items: [
      { id: 'changes', href: 'ams_changes.html', icon: '\ud83d\udcdd', i18n: 'nav_changes' },
      { id: 'reports', href: 'ams_reports.html', icon: '\ud83d\udcca', i18n: 'nav_reports' }
    ]},
    { section: 'nav_tools', marginTop: 16, items: [
      { id: 'archive_import', href: 'ams_import_archive.html', icon: '\ud83d\udce6', i18n: 'nav_archive_import' },
      { id: 'data_sweeper', href: 'ams_data_sweeper.html', icon: '\ud83e\uddf9', i18n: 'nav_data_sweep' },
      { id: 'delete_center', href: 'ams_delete_center.html', icon: '\u2715', i18n: 'nav_delete_center' }
    ]}
  ];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function buildSidebarHtml(active) {
    var a = String(active || 'dashboard').trim();
    var parts = [];
    parts.push(
      '<div class="sidebar-logo">',
      '<div class="logo-mark">AMS<span>+</span></div>',
      '<div class="logo-sub">Insurance Manager</div>',
      '</div>',
      '<nav class="sidebar-nav">'
    );
    NAV.forEach(function (group) {
      var mt = group.marginTop ? ' style="margin-top:' + group.marginTop + 'px"' : '';
      var secKey = group.section;
      parts.push('<div class="nav-section-label"' + mt + ' data-i18n="' + esc(secKey) + '">' + esc(fallbackLabel(secKey)) + '</div>');
      group.items.forEach(function (it) {
        var isActive = it.id === a ? ' active' : '';
        parts.push(
          '<a class="nav-item' + isActive + '" href="' + esc(it.href) + '">',
          '<span class="nav-icon">' + it.icon + '</span>',
          '<span class="nav-label" data-i18n="' + esc(it.i18n) + '">' + esc(fallbackLabel(it.i18n)) + '</span>',
          '</a>'
        );
      });
    });
    parts.push('</nav>');
    parts.push(
      '<div class="sidebar-footer">',
      '<div class="user-chip">',
      '<div class="user-avatar" id="user-avatar">A</div>',
      '<div><div class="user-name" data-i18n="user_name">' + esc(fallbackLabel('user_name')) + '</div>',
      '<div class="user-role" data-i18n="user_role_admin">' + esc(fallbackLabel('user_role_admin')) + '</div></div>',
      '</div></div>'
    );
    return parts.join('');
  }

  function applySidebarI18n() {
    // No-op: all labels are hardcoded English via SIDEBAR_FALLBACK
  }

  function mountInto(el) {
    if (!el || !el.getAttribute) return;
    var active = el.getAttribute('data-ams-active') || 'dashboard';
    el.innerHTML = buildSidebarHtml(active);
    el.classList.add('sidebar');
    applySidebarI18n(el);
  }

  function mountAll() {
    document.querySelectorAll('[data-ams-active]').forEach(mountInto);
  }

  window.AMSSidebar = { mount: mountInto, mountAll: mountAll, buildSidebarHtml: buildSidebarHtml };

  mountAll();
})();
