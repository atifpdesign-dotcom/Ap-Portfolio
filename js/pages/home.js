import { site } from '../content/site.js';
import { projects } from '../content/projects.js';
import { siteImages } from '../content/images.js';
import { esc } from '../utils.js';
import { img } from '../components/media.js';
import { projectCard } from '../components/cards.js';

/* Homepage order is fixed:
   01 IMAGERY → 02 SELECTED WORK → 03 QUOTE → 04 AI VIDEO → 05 EXPLORE → 06 FOOTER */

const workLayout = [
  { d: '1 / -1', t: '1 / -1', ratio: '16/9', ratioM: '4/5', sizes: '100vw' },
  { d: '1 / span 6', t: '1 / span 4', ratio: '4/5' },
  { d: '8 / span 5', t: '5 / span 4', ratio: '4/5', offset: true },
  { d: '1 / span 7', t: '1 / span 4', ratio: '4/3', ratioM: '4/5' },
  { d: '9 / span 4', t: '5 / span 4', ratio: '3/4', ratioM: '4/5', offset: true },
];

const exploreLinks = [
  { label: 'WORK', href: '/projects' },
  { label: 'BLOGS', href: '/blogs' },
  { label: 'DESIGN EXPLORATIONS', href: '/design-explorations' },
  { label: 'JOURNEY', href: '/journey' },
];

function videoSection() {
  const v = site.video;
  return `
<section class="video-section" aria-label="Video">
  <div class="video-frame" data-video-frame>
    ${img(v.poster, { className: 'video-poster', sizes: '100vw' })}
    <video data-video data-src="${esc(v.src)}" muted playsinline loop preload="none" aria-hidden="true"></video>
    <p class="video-label t-label">[REPLACEABLE AI VIDEO]</p>
  </div>
</section>`;
}

export default function home() {
  return {
    seo: site.seo.home,
    headerMode: 'overlay',
    html: `
<section class="hero" data-hero aria-label="Introduction">
  <div class="hero-media" data-img-box>${img(siteImages.hero, { eager: true, sizes: '100vw' })}</div>
  <div class="hero-inner">
    <h1 class="hero-statement t-display">${esc(site.home.heroStatement)}</h1>
  </div>
  <a class="hero-scroll t-label" href="#selected-work">SCROLL<span class="hero-scroll-line" aria-hidden="true"></span></a>
  <p class="hero-sign t-label">${esc(site.name)}<br>${esc(site.role)}</p>
</section>

<section class="section wrap" id="selected-work" aria-labelledby="selected-work-title">
  <div class="section-head">
    <h2 class="t-h2 upper" id="selected-work-title">SELECTED WORK</h2>
    <a class="text-link t-nav" href="/projects">ALL PROJECTS <span class="arrow">→</span></a>
  </div>
  <div class="grid work-grid">
    ${projects.map((p, i) => projectCard(p, workLayout[i] || {})).join('')}
  </div>
</section>

<section class="quote wrap" aria-label="Design philosophy">
  <blockquote><p class="t-display quote-text">${esc(site.home.quote)}</p></blockquote>
</section>

${videoSection()}

<section class="section wrap" aria-labelledby="explore-title">
  <div class="section-head">
    <h2 class="t-h2 upper" id="explore-title">EXPLORE</h2>
  </div>
  <ul class="explore-list">
    ${exploreLinks.map((l) => `<li><a class="explore-link" href="${l.href}"><span class="explore-label">${l.label}</span><span class="arrow" aria-hidden="true">→</span></a></li>`).join('')}
  </ul>
</section>`,
  };
}
