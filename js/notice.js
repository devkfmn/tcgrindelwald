(() => {
  const STORAGE_KEY = 'tcg-court-closed-notice-dismissed';
  const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  const translations = {
    de: {
      title: 'Plätze geschlossen',
      body: 'Unsere Tennisplätze sind bis Ende April 2027 geschlossen.',
      close: 'Schliessen',
      closeAria: 'Hinweis schliessen'
    },
    en: {
      title: 'Courts closed',
      body: 'Our tennis courts are closed until the end of April 2027.',
      close: 'Close',
      closeAria: 'Close notice'
    }
  };

  let overlay = null;
  let dialog = null;
  let titleEl = null;
  let bodyEl = null;
  let closeBtn = null;
  let iconBtn = null;
  let lastFocus = null;

  function currentLang() {
    const saved = localStorage.getItem('language');
    return saved && translations[saved] ? saved : 'de';
  }

  function wasDismissed() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  }

  function rememberDismissed() {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Ignore quota / private-mode failures.
    }
  }

  function applyLanguage(lang) {
    const content = translations[lang] || translations.de;
    if (!overlay) return;
    titleEl.textContent = content.title;
    bodyEl.textContent = content.body;
    closeBtn.textContent = content.close;
    iconBtn.setAttribute('aria-label', content.closeAria);
    overlay.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function getFocusable() {
    return [...dialog.querySelectorAll(FOCUSABLE)].filter((el) => {
      return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
    });
  }

  function setPageInert(inert) {
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) return;
    if (inert) {
      wrapper.setAttribute('inert', '');
      wrapper.setAttribute('aria-hidden', 'true');
    } else {
      wrapper.removeAttribute('inert');
      wrapper.removeAttribute('aria-hidden');
    }
  }

  function trapFocus(event) {
    if (event.key !== 'Tab' || !overlay || !overlay.classList.contains('open')) return;
    const focusable = getFocusable();
    if (!focusable.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function onKeydown(event) {
    if (!overlay || !overlay.classList.contains('open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeNotice();
      return;
    }
    trapFocus(event);
  }

  function closeNotice() {
    if (!overlay || !overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    overlay.setAttribute('hidden', '');
    document.documentElement.classList.remove('notice-open');
    setPageInert(false);
    document.removeEventListener('keydown', onKeydown);
    rememberDismissed();
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
  }

  function openNotice() {
    overlay.classList.add('open');
    overlay.removeAttribute('hidden');
    document.documentElement.classList.add('notice-open');
    setPageInert(true);
    lastFocus = document.activeElement;
    document.addEventListener('keydown', onKeydown);
    applyLanguage(currentLang());
    window.requestAnimationFrame(() => {
      closeBtn.focus();
    });
  }

  function switchSiteLanguage(lang) {
    if (typeof window.switchLanguage === 'function') {
      window.switchLanguage(lang);
      return;
    }
    localStorage.setItem('language', lang);
    applyLanguage(lang);
  }

  function hookLanguageSwitcher() {
    const original = window.switchLanguage;
    if (typeof original !== 'function' || original._noticeHooked) return;
    function wrapped(lang, event) {
      original(lang, event);
      applyLanguage(lang);
    }
    wrapped._noticeHooked = true;
    window.switchLanguage = wrapped;
  }

  function buildNotice() {
    overlay = document.createElement('div');
    overlay.className = 'notice-overlay';
    overlay.setAttribute('hidden', '');

    dialog = document.createElement('div');
    dialog.className = 'notice-dialog';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-labelledby', 'notice-title');
    dialog.setAttribute('aria-describedby', 'notice-body');
    dialog.tabIndex = -1;

    iconBtn = document.createElement('button');
    iconBtn.className = 'notice-x';
    iconBtn.type = 'button';
    iconBtn.innerHTML = '&times;';

    const langs = document.createElement('div');
    langs.className = 'notice-langs';
    ['de', 'en'].forEach((lang) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'notice-lang';
      btn.setAttribute('data-lang', lang);
      btn.textContent = lang.toUpperCase();
      btn.addEventListener('click', () => switchSiteLanguage(lang));
      langs.appendChild(btn);
    });

    titleEl = document.createElement('h2');
    titleEl.id = 'notice-title';

    bodyEl = document.createElement('p');
    bodyEl.id = 'notice-body';

    closeBtn = document.createElement('button');
    closeBtn.className = 'event-link notice-close';
    closeBtn.type = 'button';

    dialog.appendChild(iconBtn);
    dialog.appendChild(langs);
    dialog.appendChild(titleEl);
    dialog.appendChild(bodyEl);
    dialog.appendChild(closeBtn);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    iconBtn.addEventListener('click', closeNotice);
    closeBtn.addEventListener('click', closeNotice);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeNotice();
    });
  }

  function init() {
    hookLanguageSwitcher();
    if (wasDismissed()) return;
    buildNotice();
    applyLanguage(currentLang());
    openNotice();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
