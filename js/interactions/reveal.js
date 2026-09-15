import { prefersReducedMotion } from '../utils.js';

let observer;

/* Image reveal (500–700ms mask wipe) as images scroll into view */
export function initReveal(root) {
  const items = root.querySelectorAll('.reveal:not(.is-in)');
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -6% 0px' });
  items.forEach((el) => observer.observe(el));
}

/* If an image can't load, show its labelled grey placeholder instead */
export function initImageFallbacks() {
  document.addEventListener('error', (event) => {
    const el = event.target;
    if (el.tagName !== 'IMG') return;
    el.closest('[data-img-box]')?.classList.add('is-missing');
    if (el.classList.contains('video-poster')) el.classList.add('is-missing');
  }, true);
}
