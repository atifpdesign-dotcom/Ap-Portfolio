import { site } from '../content/site.js';
import { articles } from '../content/articles.js';
import { articleImages } from '../content/images.js';
import { esc, place } from '../utils.js';
import { media } from '../components/media.js';
import { articleCard } from '../components/cards.js';

export default function blogs() {
  const [featured, ...archive] = articles;
  const fim = articleImages[featured.id] || {};
  return {
    seo: site.seo.blogs,
    html: `
<section class="page-head wrap">
  <h1 class="t-display upper">BLOG</h1>
</section>

<section class="wrap" aria-labelledby="featured-title">
  <h2 class="t-label section-label" id="featured-title">FEATURED ARTICLE</h2>
  <a class="featured-link" href="/blogs/${esc(featured.id)}">
    <div class="grid">
      <div style="${place({ d: '1 / span 7', t: '1 / span 5' })}">
        ${media(fim.hero, { ratio: '4/3', ratioM: '4/5', eager: true, reveal: false, sizes: '(min-width: 768px) 60vw, 100vw' })}
      </div>
      <div style="${place({ d: '9 / -1', t: '6 / -1' })}">
        <p class="t-label t-meta">${esc(featured.label)}</p>
        <p class="t-label" style="margin-top:var(--space-1)">${esc(featured.category)} · ${esc(featured.date)}</p>
        <p class="t-h1">${esc(featured.title)}</p>
        <p class="t-small">${esc(featured.description)}</p>
        <span class="text-link t-nav" style="margin-top:var(--space-3)">READ ARTICLE <span class="arrow">→</span></span>
      </div>
    </div>
  </a>
</section>

<section class="section wrap" aria-labelledby="archive-title">
  <h2 class="t-label section-label" id="archive-title">ARTICLE ARCHIVE</h2>
  <div class="grid archive">
    ${archive.map((a) => articleCard(a, { d: 'span 6', t: 'span 4' })).join('')}
  </div>
</section>`,
  };
}
