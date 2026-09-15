/* Header sits transparent over the homepage image, then turns solid */
let observer;

export function setHeaderMode(mode, root) {
  const header = document.querySelector('[data-header]');
  observer?.disconnect();
  if (!header) return;
  const hero = root.querySelector('[data-hero]');
  if (mode !== 'overlay' || !hero || !('IntersectionObserver' in window)) {
    header.classList.remove('is-overlay');
    return;
  }
  header.classList.add('is-overlay');
  const headerHeight = header.offsetHeight;
  observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-overlay', entry.isIntersecting);
  }, { rootMargin: `-${headerHeight}px 0px 0px 0px` });
  observer.observe(hero);
}

export function setActiveNav(key) {
  document.querySelectorAll('.nav-link, .menu-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (key && (key === href || key.startsWith(`${href}/`))) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}
