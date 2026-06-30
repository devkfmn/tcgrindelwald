(() => {
  let overlay = null;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'flyer-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const img = document.createElement('img');
    img.alt = '';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'flyer-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Schließen / Close');
    closeBtn.innerHTML = '&times;';

    overlay.appendChild(closeBtn);
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    closeBtn.addEventListener('click', closeFlyer);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeFlyer();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeFlyer();
    });

    overlay._img = img;
    return overlay;
  }

  function openFlyer(src, alt = '') {
    if (!src) return;
    if (!overlay) buildOverlay();
    overlay._img.src = src;
    overlay._img.alt = alt;
    overlay.classList.add('open');
  }

  function closeFlyer() {
    if (overlay) overlay.classList.remove('open');
  }

  window.openFlyer = openFlyer;
  window.closeFlyer = closeFlyer;
})();
