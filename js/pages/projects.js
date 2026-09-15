import { site } from '../content/site.js';
import { projects } from '../content/projects.js';
import { projectCard } from '../components/cards.js';

const indexLayout = [
  { d: '1 / span 6', t: '1 / span 4', ratio: '4/5' },
  { d: '8 / span 5', t: '5 / span 4', ratio: '4/5', offset: true },
  { d: '1 / span 5', t: '1 / span 4', ratio: '3/4', ratioM: '4/5' },
  { d: '7 / span 6', t: '5 / span 4', ratio: '4/5', offset: true },
  { d: '1 / span 8', t: '1 / -1', ratio: '16/10', ratioM: '4/5' },
];

export default function projectsPage() {
  return {
    seo: site.seo.projects,
    html: `
<section class="page-head wrap">
  <div class="index-head">
    <h1 class="t-display upper">PROJECTS</h1>
    <span class="t-label t-meta">(${String(projects.length).padStart(2, '0')})</span>
  </div>
</section>
<section class="wrap" style="padding-bottom:var(--space-9)" aria-label="Project list">
  <div class="grid work-grid">
    ${projects.map((p, i) => projectCard(p, indexLayout[i] || { d: 'span 6', t: 'span 4' })).join('')}
  </div>
</section>`,
  };
}
