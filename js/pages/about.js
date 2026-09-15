import { site } from '../content/site.js';
import { about } from '../content/about.js';
import { aboutImages } from '../content/images.js';
import { esc, place } from '../utils.js';
import { media } from '../components/media.js';

export default function aboutPage() {
  const portrait = aboutImages.portrait || { src: '', label: '[PORTRAIT IMAGE]' };
  return {
    seo: site.seo.about,
    html: `
<section class="about-hero wrap" aria-labelledby="about-title">
  <div class="grid">
    <div class="about-text" style="${place({ d: '1 / span 6', t: '1 / span 4' })}">
      <p class="t-label">${esc(site.name)} &nbsp; <span class="t-meta">${esc(site.role)}</span></p>
      <h1 class="t-display" id="about-title">${esc(about.introduction)}</h1>
      <a class="text-link t-nav" href="/about#more-about-me">MORE ABOUT ME <span class="arrow">→</span></a>
    </div>
    <div style="${place({ d: '8 / -1', t: '5 / -1' })}">
      ${media(portrait, { ratio: '4/5', eager: true, reveal: false, sizes: '(min-width: 768px) 40vw, 100vw' })}
    </div>
  </div>
</section>

<section class="section wrap about-rows" id="more-about-me" aria-label="More about me">
  <div class="grid">
    <h2 class="t-label" style="${place({ d: '1 / span 3', t: '1 / span 2' })}">SHORT BIO</h2>
    <p style="${place({ d: '4 / span 6', t: '3 / -1' })};color:var(--text-2);max-width:60ch">${esc(about.shortBio)}</p>
  </div>
  <div class="grid">
    <h2 class="t-label" style="${place({ d: '1 / span 3', t: '1 / span 2' })}">DESIGN APPROACH</h2>
    <p class="t-h2" style="${place({ d: '4 / -1', t: '3 / -1' })}">${esc(about.designApproach)}</p>
  </div>
  <div class="grid">
    <h2 class="t-label" style="${place({ d: '1 / span 3', t: '1 / span 2' })}">AREAS OF INTEREST</h2>
    <ul class="interest-list t-nav" style="${place({ d: '4 / span 5', t: '3 / -1' })}">
      ${about.areasOfInterest.map((a) => `<li>${esc(a)}</li>`).join('')}
    </ul>
  </div>
</section>`,
  };
}
