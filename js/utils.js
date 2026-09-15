/* Small shared helpers */

export const esc = (value = '') =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Grid placement → inline custom properties (see css/layout.css) */
export function place({ d, t, m } = {}) {
  return [d && `--d:${d}`, t && `--t:${t}`, m && `--m:${m}`].filter(Boolean).join(';');
}

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
