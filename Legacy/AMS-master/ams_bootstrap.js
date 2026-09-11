(function () {
  const STORAGE_KEYS = {
    url: 'ams_url',
    key: 'ams_key'
  };

  function normalizeCredentials(raw) {
    if (!raw || typeof raw !== 'object') return null;

    const url = String(raw.url || raw.ams_url || raw.SUPABASE_URL || '').trim();
    const key = String(
      raw.key ||
      raw.ams_key ||
      raw.SUPABASE_ANON_KEY ||
      raw.SUPABASE_KEY ||
      ''
    ).trim();

    if (!url || !key) return null;
    return { url, key };
  }

  function readStorage(storage) {
    try {
      const url = storage.getItem(STORAGE_KEYS.url);
      const key = storage.getItem(STORAGE_KEYS.key);
      return url && key ? { url, key } : null;
    } catch (_) {
      return null;
    }
  }

  function writeStorage(storage, url, key) {
    try {
      storage.setItem(STORAGE_KEYS.url, url);
      storage.setItem(STORAGE_KEYS.key, key);
    } catch (_) {}
  }

  function clearStorage(storage) {
    try {
      storage.removeItem(STORAGE_KEYS.url);
      storage.removeItem(STORAGE_KEYS.key);
    } catch (_) {}
  }

  let localConfigReady = null;

  function loadLocalConfig() {
    if (window.AMS_LOCAL_CONFIG) {
      return Promise.resolve(normalizeCredentials(window.AMS_LOCAL_CONFIG));
    }

    if (localConfigReady) {
      return localConfigReady;
    }

    localConfigReady = new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'local-config.js';
      script.async = true;
      script.onload = function () {
        resolve(normalizeCredentials(window.AMS_LOCAL_CONFIG));
      };
      script.onerror = function () {
        resolve(null);
      };
      document.head.appendChild(script);
    });

    return localConfigReady;
  }

  window.AMSBootstrap = {
    async getCredentials() {
      return (
        readStorage(sessionStorage) ||
        readStorage(localStorage) ||
        await loadLocalConfig()
      );
    },
    storeCredentials(url, key) {
      writeStorage(sessionStorage, url, key);
      writeStorage(localStorage, url, key);
    },
    clearCredentials() {
      clearStorage(sessionStorage);
      clearStorage(localStorage);
    }
  };
})();
