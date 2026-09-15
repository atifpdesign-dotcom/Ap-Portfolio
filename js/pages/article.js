import { articles } from '../content/articles.js';
import { articleImages } from '../content/images.js';
import { esc, place } from '../utils.js';
import { media, figure } from '../components/media.js';
import { articleCard } from '../components/cards.js';
import notFound from './notFound.js';

export default function article({ slug }) {
  const index = articles.findIndex((a) => a.id === slug);
  if (index === -1) return notFound();
  const a = articles[index];
  const next = articles[(index + 1) % articles.length];
  const im = articleImages[a.id] || {};
  const figs = im.figures || [];
  const paragraphs = (list) => list.map((t) => `<p>${esc(t)}</p>`).join('');

  return {
    seo: { title: `${a.label} | Atif Patel`, description: a.description },
    navKey: '/blogs',
    html: `
<article>
  <header class="wrap article-head">
    <div class="reading">
      <a class="text-link t-nav back-link" href="/blogs"><span class="arrow arrow-back">←</span> BLOG</a>
      <p class="t-label t-meta" style="margin-top:var(--space-4)">${esc(a.label)}</p>
      <p class="t-label" style="margin-top:var(--space-1)">${esc(a.category)} · ${esc(a.date)}</p>
      <h1 class="t-h1">${esc(a.title)}</h1>
      <p class="lead">${esc(a.introduction)}</p>
    </div>
  </header>

  <div class="wrap">
    <div class="grid">
      <div style="${place({ d: '2 / span 10', t: '1 / -1' })}">
        ${media(im.hero, { ratio: '16/9', ratioM: '4/5', eager: true, reveal: false, sizes: '(min-width: 1200px) 85vw, 100vw' })}
      </div>
    </div>
  </div>

  <div class="wrap article-block">
    <div class="reading prose">${paragraphs(a.body)}</div>
  </div>

  <div class="wrap">
    <div class="grid figures">
      <div style="${place({ d: '2 / span 5', t: '1 / span 4' })}">${figure(figs[0], { ratio: '4/5', caption: a.figureCaptions[0] })}</div>
      <div style="${place({ d: '8 / span 4', t: '5 / span 4' })}">${figure(figs[1], { ratio: '1/1', caption: a.figureCaptions[1] })}</div>
    </div>
  </div>

  <div class="wrap article-block">
    <blockquote class="reading pull-quote"><p class="t-h2">${esc(a.pullQuote)}</p></blockquote>
  </div>

  <div class="wrap" style="padding-bottom:var(--space-6)">
    <div class="reading prose">${paragraphs(a.closing)}</div>
  </div>

  <nav class="section wrap" aria-labelledby="next-article-title">
    <h2 class="t-nav section-label" id="next-article-title">NEXT ARTICLE <span class="arrow">→</span></h2>
    <div class="grid">${articleCard(next, { d: '1 / span 6', t: '1 / span 5', ratio: '16/10' })}</div>
  </nav>
</article>`,
  };
}
