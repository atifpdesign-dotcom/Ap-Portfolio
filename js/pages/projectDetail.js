import { site } from '../content/site.js';
import { projects } from '../content/projects.js';
import { projectImages } from '../content/images.js';
import { esc, place } from '../utils.js';
import { media, figure, revealMedia } from '../components/media.js';
import notFound from './notFound.js';

/* Gallery sizes → grid placement */
const gallerySizes = {
  full: { d: '1 / -1', t: '1 / -1', ratio: '16/9', ratioM: '4/5', sizes: '100vw' },
  half: { d: 'span 6', t: 'span 4', ratio: '4/5' },
  wide: { d: 'span 8', t: 'span 5', ratio: '4/3', ratioM: '4/5' },
  narrow: { d: 'span 4', t: 'span 3', ratio: '3/4', ratioM: '4/5' },
  third: { d: 'span 4', t: 'span 4', ratio: '3/4' },
  detail: { d: '4 / span 6', t: '2 / span 6', ratio: '1/1' },
};

function hero(p, im) {
  return `
<section class="p-hero wrap" aria-labelledby="project-title">
  <div class="grid p-hero-grid">
    <div class="p-hero-text" style="${place({ d: '1 / span 4', t: '1 / span 3' })}">
      <a class="text-link t-nav back-link" href="/projects"><span class="arrow arrow-back">←</span> ALL PROJECTS</a>
      <p class="t-label t-meta">${esc(p.number)}</p>
      <h1 class="t-h1 upper" id="project-title">${esc(p.title)}</h1>
      <p class="t-label">${esc(p.category)}</p>
      <p class="p-hero-desc">${esc(p.description)}</p>
      <dl class="facts t-small">
        <dt>YEAR</dt><dd>${esc(p.year)}</dd>
        <dt>LOCATION</dt><dd>${esc(p.location)}</dd>
      </dl>
      <a class="text-link t-nav" href="#project-content">SCROLL <span class="arrow" aria-hidden="true">↓</span></a>
    </div>
    <div style="${place({ d: '6 / -1', t: '4 / -1' })}">
      ${media(im.hero, { ratio: '4/5', eager: true, reveal: false, sizes: '(min-width: 768px) 60vw, 100vw' })}
    </div>
  </div>
</section>`;
}

const blocks = {
  info: (p) => `
<section class="section wrap" aria-labelledby="info-${p.id}">
  <h2 class="t-label section-label" id="info-${p.id}">PROJECT INFORMATION</h2>
  <dl class="info-grid">
    ${[['PROJECT', p.title], ['YEAR', p.year], ['TYPE', p.type], ['LOCATION', p.location], ['ROLE', p.role], ['STATUS', p.status]]
      .map(([k, v]) => `<div><dt class="t-label">${k}</dt><dd>${esc(v)}</dd></div>`).join('')}
  </dl>
</section>`,

  concept: (p, im) => `
<section class="section wrap" aria-labelledby="concept-${p.id}">
  <div class="grid split">
    <div style="${place({ d: '1 / span 5', t: '1 / span 4' })}">
      <h2 class="t-label section-label" id="concept-${p.id}">CONCEPT</h2>
      <p class="t-h2">${esc(p.concept.statement)}</p>
    </div>
    <div style="${place({ d: '7 / -1', t: '5 / -1' })}">
      ${figure(im.concept, { ratio: '4/3', ratioM: '4/5', caption: '[CONCEPT IMAGE]', sizes: '(min-width: 768px) 50vw, 100vw' })}
    </div>
  </div>
  <div class="grid concept-notes">
    ${[['RESEARCH', p.concept.research], ['DESIGN INTENTION', p.concept.intention], ['KEY INFLUENCES', p.concept.influences]]
      .map(([k, v]) => `<div class="note" style="${place({ d: 'span 4', t: 'span 4' })}"><h3 class="t-label">${k}</h3><p>${esc(v)}</p></div>`).join('')}
  </div>
</section>`,

  process: (p, im) => `
<section class="section wrap" aria-labelledby="process-${p.id}">
  <h2 class="t-label section-label" id="process-${p.id}">PROCESS</h2>
  <ol class="grid process-list">
    ${p.process.map((s, i) => `
    <li class="process-step" style="${place({ d: 'span 3', t: 'span 4' })}">
      <div class="step-head">
        <h3 class="t-h3">${esc(s.title)}</h3>
        <span class="t-label t-meta">${String(i + 1).padStart(2, '0')}${i < p.process.length - 1 ? ' →' : ''}</span>
      </div>
      ${figure((im.process || [])[i], { ratio: '3/4', ratioM: '4/5', caption: s.media, sizes: '(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw' })}
      <p class="t-small">${esc(s.note)}</p>
    </li>`).join('')}
  </ol>
</section>`,

  final: (p, im) => `
<section class="section wrap" aria-labelledby="final-${p.id}">
  <h2 class="t-label section-label" id="final-${p.id}">FINAL WORK</h2>
  <div class="grid gallery">
    ${p.gallery.map((g, i) => {
      const s = gallerySizes[g.size] || gallerySizes.half;
      const offset = g.offset ? 'padding-top:var(--space-8);' : '';
      return `<div style="${offset}${place(s)}">${figure((im.gallery || [])[i], { ...s, caption: g.caption })}</div>`;
    }).join('')}
  </div>
</section>`,

  reflection: (p) => `
<section class="section wrap reflection" aria-labelledby="reflection-${p.id}">
  <div class="grid">
    <h2 class="t-label section-label" id="reflection-${p.id}" style="${place({ d: '1 / span 3', t: '1 / span 3' })}">WHAT I TOOK FROM THIS</h2>
    <p class="t-h2" style="${place({ d: '5 / -1', t: '4 / -1' })}">${esc(p.reflection)}</p>
  </div>
</section>`,
};

function nextProject(next) {
  const im = projectImages[next.id] || {};
  const [a, b] = im.card || [];
  return `
<section class="next-section wrap" aria-label="Next project">
  <a class="next-link hover-reveal" href="/projects/${esc(next.id)}">
    <div class="grid">
      <div style="${place({ d: '1 / span 5', t: '1 / span 4' })}">
        <p class="t-nav next-kicker">NEXT PROJECT <span class="arrow">→</span></p>
        <p class="t-display upper">${esc(next.title)}</p>
        <p class="t-label t-meta">${esc(next.number)} &nbsp; ${esc(next.category)}</p>
      </div>
      <div style="${place({ d: '7 / -1', t: '5 / -1' })}">
        ${revealMedia(a, b, { ratio: '16/10', ratioM: '4/3', sizes: '(min-width: 768px) 50vw, 100vw' })}
      </div>
    </div>
  </a>
</section>`;
}

export default function projectDetail({ slug }) {
  const index = projects.findIndex((p) => p.id === slug);
  if (index === -1) return notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const im = projectImages[p.id] || {};
  return {
    seo: { title: `${p.title} | Atif Patel`, description: p.description },
    navKey: '/projects',
    html: `
<article>
  ${hero(p, im)}
  <div id="project-content">
    ${p.sections.map((s) => (blocks[s] ? blocks[s](p, im) : '')).join('')}
  </div>
  ${nextProject(next)}
</article>`,
  };
}
