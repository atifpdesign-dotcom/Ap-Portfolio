import { wait, prefersReducedMotion } from './utils.js';
import { initReveal } from './interactions/reveal.js';
import { initVideo } from './interactions/video.js';
import { initTimeline } from './interactions/timeline.js';
import { setHeaderMode, setActiveNav } from './interactions/header.js';

import home from './pages/home.js';
import about from './pages/about.js';
import journey from './pages/journey.js';
import projects from './pages/projects.js';
import projectDetail from './pages/projectDetail.js';
import blogs from './pages/blogs.js';
import article from './pages/article.js';
import explorations from './pages/explorations.js';
import exploration from './pages/exploration.js';
import notFound from './pages/notFound.js';

/* Route map — clean, human-readable URLs */
const routes = [
  { pattern: /^\/$/, page: home },
  { pattern: /^\/about$/, page: about },
  { pattern: /^\/journey$/, page: journey },
  { pattern: /^\/projects$/, page: projects },
  { pattern: /^\/projects\/([\w-]+)$/, page: projectDetail, keys: ['slug'] },
  { pattern: /^\/blogs$/, page: blogs },
  { pattern: /^\/blogs\/([\w-]+)$/, page: article, keys: ['slug'] },
  { pattern: /^\/design-explorations$/, page: explorations },
  { pattern: /^\/design-explorations\/([\w-]+)$/, page: exploration, keys: ['slug'] },
];

const main = document.getElementById('main');
let currentPath = null;

const normalize = (path) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/';

function resolve(path) {
  for (const r of routes) {
    const m = path.match(r.pattern);
    if (m) {
      const params = {};
      (r.keys || []).forEach((k, i) => { params[k] = decodeURIComponent(m[i + 1]); });
      return r.page(params);
    }
  }
  return notFound();
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag); }
  tag.setAttribute('content', content || '');
}

function scrollToHash(hash, smooth) {
  if (!hash) return false;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return false;
  target.scrollIntoView({ behavior: smooth && !prefersReducedMotion() ? 'smooth' : 'auto' });
  return true;
}

async function render({ initial = false, restoreY = null } = {}) {
  const path = normalize(location.pathname);
  const view = resolve(path);
  const animate = !initial && !prefersReducedMotion();

  if (animate) {
    main.classList.add('is-leaving');
    await wait(200);
  }

  main.innerHTML = view.html;
  currentPath = path;

  document.title = view.seo?.title || 'Atif Patel';
  setMeta('description', view.seo?.description);
  setActiveNav(view.navKey || path);
  setHeaderMode(view.headerMode, main);

  initReveal(main);
  initVideo(main);
  initTimeline(main);

  if (restoreY !== null) window.scrollTo(0, restoreY);
  else if (!scrollToHash(location.hash, false)) window.scrollTo(0, 0);

  if (!initial) main.focus({ preventScroll: true });

  if (animate) {
    main.classList.remove('is-leaving');
    main.classList.add('is-entering');
    requestAnimationFrame(() => requestAnimationFrame(() => main.classList.remove('is-entering')));
  }
  window.dispatchEvent(new CustomEvent('ap:navigate', { detail: { path } }));
}

export function navigate(url) {
  const target = new URL(url, location.origin);
  const samePage = normalize(target.pathname) === currentPath;
  history.replaceState({ ...(history.state || {}), y: window.scrollY }, '');
  if (samePage && target.hash) {
    history.pushState({}, '', target.pathname + target.search + target.hash);
    scrollToHash(target.hash, true);
    return;
  }
  if (samePage && target.href === location.href) {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    return;
  }
  history.pushState({}, '', target.pathname + target.search + target.hash);
  render();
}

export function startRouter() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a[href]');
    if (!link || link.target || link.hasAttribute('download')) return;
    const href = link.getAttribute('href');
    if (!href.startsWith('/') || href.startsWith('//')) return;
    e.preventDefault();
    navigate(href);
  });

  window.addEventListener('popstate', (e) => {
    const path = normalize(location.pathname);
    if (path === currentPath) { scrollToHash(location.hash, true) || (!location.hash && window.scrollTo(0, 0)); return; }
    render({ restoreY: e.state && typeof e.state.y === 'number' ? e.state.y : null });
  });

  render({ initial: true });
}
