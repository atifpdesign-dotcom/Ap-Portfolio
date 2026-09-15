import { site } from '../content/site.js';
import { esc } from '../utils.js';
import { logo } from './header.js';

function contactValue(item) {
  const v = (item.value || '').trim();
  if (!v) return `<span class="contact-value">${esc(item.placeholder)}</span>`;
  if (item.type === 'email') return `<a class="text-link contact-value" href="mailto:${esc(v)}">${esc(v)}</a>`;
  if (item.type === 'phone') return `<a class="text-link contact-value" href="tel:${esc(v.replace(/[^+\d]/g, ''))}">${esc(v)}</a>`;
  const shown = v.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  return `<a class="text-link contact-value" href="${esc(v)}" target="_blank" rel="noopener noreferrer">${esc(shown)} <span class="arrow" aria-hidden="true">↗</span></a>`;
}

export function renderFooter() {
  return `
<footer class="site-footer" id="contact">
  <div class="grid footer-grid">
    <div style="--d:1 / span 6;--t:1 / span 4">
      <a class="logo" href="/" aria-label="Home">${logo()}</a>
      <p class="t-h1 footer-statement">${esc(site.footer.closingStatement)}</p>
    </div>
    <div style="--d:8 / -1;--t:5 / -1">
      <h2 class="t-label" style="margin-bottom:var(--space-2)">CONTACT</h2>
      <ul class="contact-list t-small">
        ${site.contact.map((c) => `<li><span class="t-label">${esc(c.label)}</span>${contactValue(c)}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="footer-bottom t-label">
    <span>© ${esc(site.footer.copyright)}</span>
    <span>${esc(site.name)}</span>
  </div>
</footer>`;
}
