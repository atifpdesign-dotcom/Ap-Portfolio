import { esc, place } from '../utils.js';
import { revealMedia, media } from './media.js';
import { projectImages, articleImages, explorationImages } from '../content/images.js';

/* PROJECT CARD — Image Reveal Option C */
export function projectCard(p, o = {}) {
  const im = projectImages[p.id] || {};
  const [a, b] = im.card || [];
  const classes = ['card', o.offset ? 'is-offset' : ''].filter(Boolean).join(' ');
  return `
<article class="${classes}" style="${place(o)}">
  <a class="card-link hover-reveal" href="/projects/${esc(p.id)}">
    ${revealMedia(a, b, { ratio: o.ratio || '4/5', ratioM: o.ratioM, sizes: o.sizes || '(min-width: 768px) 50vw, 100vw' })}
    <div class="card-meta">
      <span class="card-num t-label">${esc(p.number)}</span>
      <div class="card-text">
        <h3 class="card-title t-h3">${esc(p.title)}</h3>
        <ul class="card-facts t-small t-meta">
          <li>${esc(p.year)}</li><li>${esc(p.category)}</li><li>${esc(p.location)}</li><li>${esc(p.role)}</li>
        </ul>
        <p class="card-desc t-small">${esc(p.description)}</p>
      </div>
      <span class="card-cta t-nav" aria-hidden="true">VIEW PROJECT <span class="arrow">→</span></span>
    </div>
  </a>
</article>`;
}

/* ARTICLE CARD */
export function articleCard(a, o = {}) {
  const im = articleImages[a.id] || {};
  return `
<article class="article-card" style="${place(o)}">
  <a href="/blogs/${esc(a.id)}" class="card-link">
    ${media(im.hero, { ratio: o.ratio || '4/3', sizes: '(min-width: 768px) 50vw, 100vw' })}
    <div class="stack-sm">
      <p class="t-label t-meta">${esc(a.label)}</p>
      <p class="t-label">${esc(a.category)} · ${esc(a.date)}</p>
      <h3 class="t-h3 article-card-title">${esc(a.title)}</h3>
      <p class="t-small">${esc(a.description)}</p>
      <span class="text-link t-nav">READ ARTICLE <span class="arrow">→</span></span>
    </div>
  </a>
</article>`;
}

/* EXPLORATION CARD */
export function explorationCard(e, o = {}) {
  const im = explorationImages[e.id] || {};
  const classes = ['ex-card', o.offset ? 'is-offset' : ''].filter(Boolean).join(' ');
  return `
<li class="${classes}" style="${place(o)}">
  <a href="/design-explorations/${esc(e.id)}" class="card-link hover-reveal">
    ${media(im.main, { ratio: o.ratio || '4/5', ratioM: '4/5', sizes: '(min-width: 768px) 50vw, 100vw', cursor: true })}
    <div class="stack-sm card-text">
      <div class="ex-card-row t-label"><span>${esc(e.number)}</span><span class="t-meta">${esc(e.type)}</span></div>
      <h2 class="t-h3">${esc(e.title)}</h2>
    </div>
  </a>
</li>`;
}
