import { esc } from '../utils.js';
import { resolveImage } from '../content/images.js';

/* <img> with responsive sizes and lazy loading */
export function img(image, { sizes = '100vw', eager = false, decorative = false, className = '' } = {}) {
  const im = resolveImage(image);
  if (!im.src) return '';
  const srcset = im.srcset ? ` srcset="${esc(im.srcset)}" sizes="${esc(sizes)}"` : '';
  const loading = eager ? ' fetchpriority="high"' : ' loading="lazy"';
  const cls = className ? ` class="${esc(className)}"` : '';
  return `<img${cls} src="${esc(im.src)}"${srcset} alt="${decorative ? '' : esc(im.alt)}"${loading} decoding="async">`;
}

/* Image in a proportioned frame. Shows a labelled grey placeholder if missing. */
export function media(image, { ratio = '4/3', ratioM, sizes, eager = false, reveal = true, cursor = false, extraClass = '', inner = '' } = {}) {
  const im = resolveImage(image);
  const style = `--ratio:${ratio}${ratioM ? `;--ratio-m:${ratioM}` : ''}`;
  const classes = ['media', reveal ? 'reveal' : '', im.src ? '' : 'is-missing', extraClass].filter(Boolean).join(' ');
  return `<div class="${classes}" style="${style}" data-img-box data-label="${esc(im.label)}"${cursor ? ' data-cursor="view"' : ''}>${img(image, { sizes, eager })}${inner}</div>`;
}

/* Image with caption underneath */
export function figure(image, { caption, ...opts } = {}) {
  return `<figure class="figure">${media(image, opts)}${caption ? `<figcaption class="t-label t-meta">${esc(caption)}</figcaption>` : ''}</figure>`;
}

/* Two stacked images for Image Reveal Option C (image 02 wipes in on hover) */
export function revealMedia(first, second, opts = {}) {
  const inner = second ? `<div class="card-b" data-img-box aria-hidden="true">${img(second, { sizes: opts.sizes, decorative: true })}</div>` : '';
  return media(first, { ...opts, cursor: true, extraClass: 'card-media', inner });
}
