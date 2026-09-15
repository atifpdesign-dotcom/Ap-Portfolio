import { site } from '../content/site.js';

export const navItems = [
  { label: 'ABOUT', href: '/about' },
  { label: 'JOURNEY', href: '/journey' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'BLOGS', href: '/blogs' },
  { label: 'DESIGN EXPLORATIONS', href: '/design-explorations' },
];

/* Supplied AP logo (dark + light versions of the same asset) */
export function logo() {
  return `<img class="logo-dark" src="/assets/logo/ap-logo-dark.png" alt="" width="308" height="301">`
    + `<img class="logo-light" src="/assets/logo/ap-logo-light.png" alt="" width="308" height="301">`;
}

export function renderHeader() {
  const links = (cls) => navItems.map((i) => `<li><a class="${cls}" href="${i.href}">${i.label}</a></li>`).join('');
  return `
<header class="site-header" data-header>
  <a class="logo" href="/" aria-label="Home">${logo()}</a>
  <nav class="nav" aria-label="Main">
    <ul class="nav-list">${links('nav-link t-nav')}</ul>
  </nav>
  <button class="menu-btn t-nav" type="button" aria-expanded="false" aria-controls="site-menu" data-menu-open>MENU</button>
</header>
<div class="menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Menu" hidden>
  <div class="menu-top">
    <a class="logo" href="/" aria-label="Home">${logo()}</a>
    <button class="menu-close t-nav" type="button" data-menu-close>CLOSE</button>
  </div>
  <nav aria-label="${site.name} menu">
    <ul class="menu-list">${links('menu-link')}</ul>
  </nav>
</div>`;
}
