import { explorations } from '../content/explorations.js';
import { explorationImages } from '../content/images.js';
import { esc, place } from '../utils.js';
import { media, figure, revealMedia } from '../components/media.js';
import notFound from './notFound.js';

export default function exploration({ slug }) {
  const index = explorations.findIndex((e) => e.id === slug);
  if (index === -1) return notFound();
  const e = explorations[index];
  const next = explorations[(index + 1) % explorations.length];
  const im = explorationImages[e.id] || {};
  const nim = explorationImages[next.id] || {};
  const details = im.details || [];

  return {
    seo: { title: `Exploration ${e.number} | Atif Patel`, description: e.observation },
    navKey: '/design-explorations',
    html: `
<article>
  <section class="ex-hero wrap" aria-labelledby="ex-title">
    <a class="text-link t-nav back-link" href="/design-explorations"><span class="arrow arrow-back">←</span> DESIGN EXPLORATIONS</a>
    <div class="grid">
      <div style="${place({ d: '1 / span 8', t: '1 / span 5' })}">
        ${media(im.main, { ratio: '4/3', ratioM: '4/5', eager: true, reveal: false, sizes: '(min-width: 768px) 65vw, 100vw' })}
      </div>
      <div class="stack-sm" style="${place({ d: '10 / -1', t: '6 / -1' })}">
        <p class="t-label t-meta">${esc(e.number)}</p>
        <p class="t-label">${esc(e.type)}</p>
        <h1 class="t-h2" id="ex-title">${esc(e.title)}</h1>
        <p class="t-small t-meta">${esc(e.date)}</p>
      </div>
    </div>
  </section>

  <section class="section wrap" aria-labelledby="obs-title">
    <div class="grid">
      <h2 class="t-label section-label" id="obs-title" style="${place({ d: '1 / span 3', t: '1 / span 2' })}">OBSERVATION</h2>
      <p class="t-h2" style="${place({ d: '4 / -1', t: '3 / -1' })}">${esc(e.observation)}</p>
    </div>
  </section>

  <section class="wrap" aria-labelledby="detail-title">
    <h2 class="t-label section-label" id="detail-title">DETAIL / PROCESS</h2>
    <div class="grid ex-detail">
      <div style="${place({ d: '1 / span 5', t: '1 / span 4' })}">${figure(details[0], { ratio: '3/4', caption: e.captions[0] })}</div>
      <div style="${place({ d: '7 / span 6', t: '5 / span 4' })}">
        ${figure(details[1], { ratio: '4/3', caption: e.captions[1] })}
        <p style="margin-top:var(--space-4);max-width:40ch;color:var(--text-2)">${esc(e.detail)}</p>
      </div>
    </div>
  </section>

  <section class="next-section wrap" aria-label="Next exploration">
    <a class="next-link hover-reveal" href="/design-explorations/${esc(next.id)}">
      <div class="grid">
        <div style="${place({ d: '1 / span 5', t: '1 / span 4' })}">
          <p class="t-nav next-kicker">NEXT EXPLORATION <span class="arrow">→</span></p>
          <p class="t-h1" style="margin-block:var(--space-2)">${esc(next.title)}</p>
          <p class="t-label t-meta">${esc(next.number)} &nbsp; ${esc(next.type)}</p>
        </div>
        <div style="${place({ d: '8 / -1', t: '5 / -1' })}">
          ${revealMedia(nim.main, (nim.details || [])[0], { ratio: '16/10', sizes: '(min-width: 768px) 45vw, 100vw' })}
        </div>
      </div>
    </a>
  </section>
</article>`,
  };
}
