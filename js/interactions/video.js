import { prefersReducedMotion } from '../utils.js';

/* Homepage video: muted, autoplay when visible, never blocks the page.
   Falls back to the poster image if the file is missing or autoplay is blocked. */
export function initVideo(root) {
  const video = root.querySelector('[data-video]');
  if (!video) return;
  const frame = video.closest('[data-video-frame]');
  const fallback = () => frame.classList.add('is-fallback');
  const src = video.dataset.src;
  if (!src) { fallback(); return; }

  video.muted = true;

  const load = () => {
    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    source.addEventListener('error', fallback);
    video.appendChild(source);
    video.addEventListener('error', fallback);
    video.load();
    if (!prefersReducedMotion()) {
      const attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(() => { /* autoplay blocked — poster stays visible */ });
    }
  };

  if (!('IntersectionObserver' in window)) { load(); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); load(); }
  }, { rootMargin: '300px 0px' });
  io.observe(frame);
}
