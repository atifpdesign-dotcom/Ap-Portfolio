import { prefersReducedMotion } from '../utils.js';

/* Journey timeline: previous/next buttons + mouse drag (tablet/desktop) */
export function initTimeline(root) {
  const track = root.querySelector('[data-timeline]');
  if (!track) return;
  const prev = root.querySelector('[data-tl-prev]');
  const next = root.querySelector('[data-tl-next]');
  const step = () => (track.querySelector('.tl-item')?.getBoundingClientRect().width || 300);
  const behavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= max;
  };

  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: behavior() }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: behavior() }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();

  // Keyboard: arrow keys scroll when the timeline is focused
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); track.scrollBy({ left: step(), behavior: behavior() }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: -step(), behavior: behavior() }); }
  });

  // Mouse drag
  let startX = 0, startLeft = 0, dragging = false;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    if (track.scrollWidth <= track.clientWidth) return;
    dragging = true;
    startX = e.clientX;
    startLeft = track.scrollLeft;
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) track.classList.add('is-dragging');
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('is-dragging');
  });
}
