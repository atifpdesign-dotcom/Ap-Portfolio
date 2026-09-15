import { site } from '../content/site.js';
import { journey, journeyIntro, whatsNext } from '../content/journey.js';
import { journeyImages } from '../content/images.js';
import { esc, place } from '../utils.js';
import { media } from '../components/media.js';

export default function journeyPage() {
  return {
    seo: site.seo.journey,
    html: `
<section class="page-head wrap">
  <h1 class="t-display upper">JOURNEY</h1>
  <p class="page-intro">${esc(journeyIntro)}</p>
</section>

<section aria-labelledby="timeline-title" data-timeline-section>
  <h2 class="visually-hidden" id="timeline-title">Timeline</h2>
  <div class="journey-controls wrap">
    <button class="text-link t-nav" type="button" data-tl-prev><span class="arrow arrow-back">←</span> PREVIOUS</button>
    <button class="text-link t-nav" type="button" data-tl-next>NEXT <span class="arrow">→</span></button>
  </div>
  <ol class="timeline" data-timeline tabindex="0" aria-label="Journey timeline">
    ${journey.map((j, i) => `
    <li class="tl-item">
      <span class="tl-year t-h3">${esc(j.year)}</span>
      <div class="tl-body">
        ${media(journeyImages[i], { ratio: '4/5', sizes: '(min-width: 768px) 380px, 100vw' })}
        <h3 class="t-h3">${esc(j.title)}</h3>
        <p class="t-small">${esc(j.description)}</p>
      </div>
    </li>`).join('')}
  </ol>
</section>

<section class="section wrap whats-next" aria-labelledby="whats-next-title">
  <div class="grid">
    <h2 class="t-h1 upper" id="whats-next-title" style="${place({ d: '1 / span 5', t: '1 / span 4' })}">WHAT'S NEXT?</h2>
    <p class="t-h2" style="${place({ d: '7 / -1', t: '5 / -1' })}">${esc(whatsNext)}</p>
  </div>
</section>`,
  };
}
