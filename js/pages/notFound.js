import { site } from '../content/site.js';

export default function notFound() {
  return {
    seo: site.seo.notFound,
    html: `
<section class="page-head wrap not-found">
  <p class="t-label t-meta">404</p>
  <h1 class="t-display upper" style="margin-block:var(--space-3)">PAGE NOT FOUND</h1>
  <a class="text-link t-nav" href="/">BACK TO HOME <span class="arrow">→</span></a>
</section>`,
  };
}
