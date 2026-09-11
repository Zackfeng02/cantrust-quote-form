// AMS i18n — English-only stub (multi-language support removed)
// All UI text is now hardcoded in English directly in each page.
// This stub keeps window.__amsT / window.__amsGetLang alive so that
// ams_import_archive.html's window._t() helper continues to work.
(function () {
  var EN = {
    // Navigation
    nav_main: 'Main', nav_dashboard: 'Dashboard', nav_clients: 'Clients',
    nav_policies: 'Policies', nav_tasks: 'Tasks', nav_business: 'Business',
    nav_quotes: 'New Quotes', nav_import: 'Quote Import', nav_renewal: 'Renewal Compare',
    nav_records: 'Records', nav_changes: 'Changes', nav_reports: 'Reports',
    nav_tools: 'Tools', nav_archive_import: 'Archive Import',
    nav_data_sweep: 'Data Sweep', nav_delete_center: 'Delete Center',
    user_name: 'Independent Broker', user_role_admin: 'Administrator',

    // Config
    config_sub: 'Enter your Supabase credentials to get started',
    cfg_sub: 'Enter your Supabase credentials to get started',
    config_hint_url: 'Found in Supabase > Project Settings > API',
    config_hint_key: 'anon / public key in Project API Keys',
    config_connect: 'Connect & Enter',
    cfg_url_label: 'Project URL', cfg_key_label: 'Anon Public Key',
    cfg_connect: 'Connect & Enter',
    archive_config_title: 'Connect Database',

    // Buttons
    btn_refresh: '↻ Refresh', btn_new_client: '＋ New Client',
    btn_save: '💾 Save', btn_cancel: 'Cancel', btn_close: 'Close',
    btn_confirm: 'Confirm', btn_delete: 'Delete', btn_edit: 'Edit',
    btn_export: '↓ Export', btn_import: '↑ Import', btn_print: '🖨 Print',
    btn_back: '← Back', btn_search: 'Search',

    // Common
    loading: 'Loading…', loading_more: 'Loading more…', no_data: 'No data',

    // Table headers
    th_client: 'Client', th_name: 'Name', th_code: 'Code', th_phone: 'Phone',
    th_email: 'Email', th_type: 'Type', th_insurer: 'Insurer', th_expiry: 'Expiry',
    th_premium: 'Premium', th_days_left: 'Days Left', th_status: 'Status',
    th_action: 'Action', th_renewal: 'Renewal', th_tasks: 'Tasks', th_date: 'Date',
    th_change_type: 'Change Type', th_description: 'Description', th_policy: 'Policy',
    th_due_date: 'Due Date', th_title: 'Title',

    // Dashboard
    stat_renew60: 'Renewals (60d)', stat_renew60_sub: 'policies expiring',
    stat_urgent14: 'Urgent (14d)', stat_urgent14_sub: 'need follow-up',
    stat_clients: 'Total Clients', stat_clients_sub: 'active clients',
    stat_tasks: 'Open Tasks', stat_tasks_sub: 'pending items',
    renews_in: 'Renews in {0}d', overdue_by: 'Overdue by {0}d',

    // Archive import
    import_page_title: 'Quote <span>Import</span>',
    archive_page_title: 'Archive <span>Import</span>',
    archive_controls_title: 'Archive Import Controls',
    archive_controls_sub: 'Dry-run selected PDFs, then review and promote ready records.',
    archive_queue_title: 'Import Queue',
    archive_detail_title: 'Record Detail',
    archive_status_all: 'All', archive_status_ready: 'Ready to Promote',
    archive_status_missing: 'Missing Client', archive_status_duplicate: 'Duplicate',
    archive_status_review: 'Needs Review', archive_status_failed: 'Parse Failed',
    archive_status_promoted: 'Promoted',
    archive_btn_dryrun: 'Dry Run', archive_btn_promote: 'Promote',
    archive_btn_promote_all: 'Promote All Ready',
    archive_col_file: 'File', archive_col_status: 'Status',
    archive_col_client: 'Client', archive_col_policy: 'Policy',
    archive_col_insurer: 'Insurer', archive_col_type: 'Type',
    archive_col_effective: 'Effective', archive_col_expiry: 'Expiry',
    archive_col_premium: 'Premium', archive_col_actions: 'Actions',
    archive_no_queue: 'No items in queue. Select PDF files and run a dry run.',
    archive_dry_running: 'Running dry run…',
    archive_promoting: 'Promoting…',
    archive_promoted_ok: 'Promoted successfully.',
    archive_promote_err: 'Promote failed: {0}',
    archive_parse_err: 'Parse failed: {0}',
  };

  window.__amsGetLang = function () { return 'en'; };
  window.__amsSetLang = function () {};
  window.__amsT = function (key) { return EN[key] || key; };
  window.__amsTranslate = function (root) {
    var scope = root && root.querySelectorAll ? root : document;
    if (!scope || !scope.querySelectorAll) return;
    scope.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.dataset.i18n;
      var value = EN[key] || key;
      if (node.dataset.i18nHtml === 'true') {
        node.innerHTML = value;
      } else {
        node.textContent = value;
      }
    });
  };
})();
