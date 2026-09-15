import { prefersReducedMotion } from '../utils.js';

/* Contextual "VIEW" cursor — appears only over project imagery,
   only on devices with a mouse. The native cursor is used everywhere else. */
export function initCursor() {
  let el = document.querySelector('.cursor');
  if (!el) {
    el = document.createElement('div');
    el.className = 'cursor';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<span class="cursor-ring">VIEW</span>';
    document.body.appendChild(el);
  }
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!el) return;

  let x = 0, y = 0, cx = 0, cy = 0, active = false, frame = null;

  const paint = () => { el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`; };
  const loop = () => {
    cx += (x - cx) * 0.3;
    cy += (y - cy) * 0.3;
    paint();
    frame = Math.abs(x - cx) + Math.abs(y - cy) > 0.2 ? requestAnimationFrame(loop) : null;
  };
  const setActive = (value) => {
    if (value === active) return;
    active = value;
    if (active) { cx = x; cy = y; paint(); }
    el.classList.toggle('is-active', active);
  };

  document.addEventListener('pointermove', (e) => {
    if (!finePointer.matches || e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    setActive(Boolean(e.target.closest && e.target.closest('[data-cursor="view"]')));
    if (!active) return;
    if (prefersReducedMotion()) { cx = x; cy = y; paint(); }
    else if (!frame) frame = requestAnimationFrame(loop);
  }, { passive: true });

  document.documentElement.addEventListener('pointerleave', () => setActive(false));
  window.addEventListener('ap:navigate', () => setActive(false));
}
