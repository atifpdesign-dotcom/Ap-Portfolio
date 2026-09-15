/* Mobile full-screen menu: open/close, focus trap, Escape to close */
export function initMenu() {
  const menu = document.getElementById('site-menu');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = menu?.querySelector('[data-menu-close]');
  if (!menu || !openBtn || !closeBtn) return;

  const focusables = () => [...menu.querySelectorAll('a[href], button:not([disabled])')];

  function open() {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-locked');
    closeBtn.focus();
  }

  function close({ restoreFocus = true } = {}) {
    if (menu.hidden) return;
    menu.classList.remove('is-open');
    menu.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
    if (restoreFocus) openBtn.focus();
  }

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', () => close());
  menu.addEventListener('click', (e) => { if (e.target.closest('a[href]')) close({ restoreFocus: false }); });

  document.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Close if the window grows past the mobile breakpoint
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) close({ restoreFocus: false }); });
}
