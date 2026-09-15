/* Entry point */
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initMenu } from './interactions/menu.js';
import { initCursor } from './interactions/cursor.js';
import { initImageFallbacks } from './interactions/reveal.js';
import { startRouter } from './router.js';

document.documentElement.classList.add('js');

document.getElementById('header-root').outerHTML = renderHeader();
document.getElementById('footer-root').outerHTML = renderFooter();

initImageFallbacks();
initMenu();
initCursor();
startRouter();

window.__apReady = true;
