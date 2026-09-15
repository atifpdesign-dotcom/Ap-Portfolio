/* ==========================================================
   SITE-WIDE TEXT, CONTACT DETAILS, VIDEO AND SEO
   Replace anything in [SQUARE BRACKETS] with your own words.
   ========================================================== */
import { siteImages } from './images.js';

export const site = {
  name: 'ATIF PATEL',
  role: 'INTERIOR DESIGNER',

  home: {
    heroStatement: '[EDITABLE HERO STATEMENT]',
    quote: '[EDITABLE DESIGN PHILOSOPHY / QUOTE]',
  },

  /* Homepage video. Put your file at /assets/video/home-ai-video.mp4
     Until it exists, the poster image is shown instead. */
  video: {
    src: '/assets/video/home-ai-video.mp4',
    poster: siteImages.videoPoster,
  },

  footer: {
    closingStatement: '[EDITABLE CLOSING STATEMENT]',
    copyright: '[COPYRIGHT]',
  },

  /* CONTACT — leave value empty to show the placeholder.
     Fill value in to make it a working link, e.g.
       email:     value: 'name@example.com'
       phone:     value: '+91 00000 00000'
       linkedin:  value: 'https://www.linkedin.com/in/your-handle'  */
  contact: [
    { label: 'EMAIL', type: 'email', value: '', placeholder: '[EMAIL]' },
    { label: 'PHONE', type: 'phone', value: '', placeholder: '[PHONE]' },
    { label: 'LINKEDIN', type: 'url', value: '', placeholder: '[LINKEDIN]' },
    { label: 'INSTAGRAM', type: 'url', value: '', placeholder: '[INSTAGRAM]' },
    { label: 'BEHANCE', type: 'url', value: '', placeholder: '[BEHANCE]' },
  ],

  /* SEO — page titles (browser tab) and search descriptions */
  seo: {
    home: { title: 'Atif Patel', description: '[PAGE META DESCRIPTION]' },
    about: { title: 'About | Atif Patel', description: '[PAGE META DESCRIPTION]' },
    journey: { title: 'Journey | Atif Patel', description: '[PAGE META DESCRIPTION]' },
    projects: { title: 'Projects | Atif Patel', description: '[PAGE META DESCRIPTION]' },
    blogs: { title: 'Blog | Atif Patel', description: '[PAGE META DESCRIPTION]' },
    explorations: { title: 'Design Explorations | Atif Patel', description: '[PAGE META DESCRIPTION]' },
    notFound: { title: 'Page not found | Atif Patel', description: '' },
  },
};
