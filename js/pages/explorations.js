import { site } from '../content/site.js';
import { explorations, explorationsIntro } from '../content/explorations.js';
import { esc } from '../utils.js';
import { explorationCard } from '../components/cards.js';

/* Irregular grid — the pattern repeats if more entries are added */
const pattern = [
  { d: '1 / span 5', t: '1 / span 4', ratio: '4/5' },
  { d: '7 / span 6', t: '5 / span 4', ratio: '4/3', offset: true },
  { d: '2 / span 4', t: '1 / span 4', ratio: '1/1' },
  { d: '8 / span 4', t: '5 / span 4', ratio: '3/4', offset: true },
  { d: '1 / span 7', t: '1 / span 4', ratio: '16/10' },
  { d: '9 / span 4', t: '5 / span 4', ratio: '4/5', offset: true },
];

export default function explorationsPage() {
  return {
    seo: site.seo.explorations,
    html: `
<section class="page-head wrap">
  <h1 class="t-display upper">DESIGN EXPLORATIONS</h1>
  <p class="page-intro">${esc(explorationsIntro)}</p>
</section>
<section class="wrap" style="padding-bottom:var(--space-9)" aria-label="Exploration archive">
  <ul class="grid ex-grid">
    ${explorations.map((e, i) => explorationCard(e, pattern[i % pattern.length])).join('')}
  </ul>
</section>`,
  };
}
