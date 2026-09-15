/* ==========================================================
   ALL IMAGES LIVE HERE.

   Right now every image is a TEMPORARY stock photo from Pexels
   (free to use, no credit required). They only show the layout.

   TO USE YOUR OWN IMAGE:
   1. Put the file in  /assets/images/   (e.g. project-01-image-01.jpg)
   2. Replace the stock(...) call with the file path in quotes:
        before:  stock(5863513, 'Project 01 image 01')
        after:   '/assets/images/project-01-image-01.jpg'
   Optional: add alt text with  { src: '/assets/images/x.jpg', alt: 'Describe the image' }
   ========================================================== */

const PEXELS_WIDTHS = [640, 1024, 1600, 2400];

function stock(id, label) {
  const base = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb`;
  return {
    src: `${base}&w=1600`,
    srcset: PEXELS_WIDTHS.map((w) => `${base}&w=${w} ${w}w`).join(', '),
    alt: `[ALT TEXT — ${label}]`,
    label: `[${label.toUpperCase()}]`,
  };
}

/* Turns a string path or an object into { src, srcset, alt, label } */
export function resolveImage(image) {
  if (!image) return { src: '', alt: '', label: '[IMAGE]' };
  if (typeof image === 'string') return { src: image, alt: '[ALT TEXT]', label: '[IMAGE]' };
  return { alt: '[ALT TEXT]', label: '[IMAGE]', ...image };
}

/* ---------- HOMEPAGE ---------- */
export const siteImages = {
  hero: stock(18820283, 'Hero image'),                 // suggested file: hero-placeholder.jpg
  videoPoster: stock(30836855, 'Video poster image'),  // suggested file: home-video-poster.jpg
};

/* ---------- PROJECTS ----------
   card:    [image 01 shown by default, image 02 revealed on hover]
   hero:    top of the project page
   concept: concept image
   process: 4 images — research, ideation, development, resolution
   gallery: final work images (layout is set in projects.js)          */
export const projectImages = {
  'sip-society': {
    card: [stock(5863513, 'Project 01 image 01'), stock(5490972, 'Project 01 image 02')],
    hero: stock(5863513, 'Project 01 hero'),
    concept: stock(15015344, 'Project 01 concept'),
    process: [
      stock(16202290, 'Project 01 process 01'),
      stock(10974994, 'Project 01 process 02'),
      stock(6033463, 'Project 01 process 03'),
      stock(11806033, 'Project 01 process 04'),
    ],
    gallery: [
      stock(5490972, 'Project 01 final 01'),
      stock(13722884, 'Project 01 final 02'),
      stock(18311941, 'Project 01 final 03'),
      stock(10974994, 'Project 01 final 04'),
    ],
  },
  'residential-tba': {
    card: [stock(29012619, 'Project 02 image 01'), stock(8089172, 'Project 02 image 02')],
    hero: stock(29012619, 'Project 02 hero'),
    concept: stock(28609810, 'Project 02 concept'),
    process: [
      stock(276746, 'Project 02 process 01'),
      stock(13722891, 'Project 02 process 02'),
      stock(6297086, 'Project 02 process 03'),
      stock(38975400, 'Project 02 process 04'),
    ],
    gallery: [
      stock(8089172, 'Project 02 final 01'),
      stock(27164969, 'Project 02 final 02'),
      stock(38975400, 'Project 02 final 03'),
      stock(276746, 'Project 02 final 04'),
      stock(28609810, 'Project 02 final 05'),
    ],
  },
  'the-circle': {
    card: [stock(37172472, 'Project 03 image 01'), stock(18153913, 'Project 03 image 02')],
    hero: stock(37172472, 'Project 03 hero'),
    concept: stock(16628710, 'Project 03 concept'),
    process: [
      stock(31347867, 'Project 03 process 01'),
      stock(11023941, 'Project 03 process 02'),
      stock(934331, 'Project 03 process 03'),
      stock(38927384, 'Project 03 process 04'),
    ],
    gallery: [
      stock(18153913, 'Project 03 final 01'),
      stock(38927384, 'Project 03 final 02'),
      stock(16628710, 'Project 03 final 03'),
      stock(31347867, 'Project 03 final 04'),
    ],
  },
  canwest: {
    card: [stock(11875898, 'Project 04 image 01'), stock(13073718, 'Project 04 image 02')],
    hero: stock(11875898, 'Project 04 hero'),
    concept: stock(3137047, 'Project 04 concept'),
    process: [
      stock(29832028, 'Project 04 process 01'),
      stock(5738970, 'Project 04 process 02'),
      stock(38587948, 'Project 04 process 03'),
      stock(14338863, 'Project 04 process 04'),
    ],
    gallery: [
      stock(13073718, 'Project 04 final 01'),
      stock(14338863, 'Project 04 final 02'),
      stock(38587948, 'Project 04 final 03'),
      stock(3137047, 'Project 04 final 04'),
      stock(29832028, 'Project 04 final 05'),
    ],
  },
  'verdant-villa': {
    card: [stock(280239, 'Project 05 image 01'), stock(19916712, 'Project 05 image 02')],
    hero: stock(280239, 'Project 05 hero'),
    concept: stock(33685861, 'Project 05 concept'),
    process: [
      stock(968440, 'Project 05 process 01'),
      stock(18289606, 'Project 05 process 02'),
      stock(33685863, 'Project 05 process 03'),
      stock(31735033, 'Project 05 process 04'),
    ],
    gallery: [
      stock(19916712, 'Project 05 final 01'),
      stock(33685863, 'Project 05 final 02'),
      stock(33685861, 'Project 05 final 03'),
      stock(31735033, 'Project 05 final 04'),
    ],
  },
};

/* ---------- BLOG ---------- */
export const articleImages = {
  'article-01': { hero: stock(1784543, 'Article 01 image'), figures: [stock(5685251, 'Article 01 figure 01'), stock(10621903, 'Article 01 figure 02')] },
  'article-02': { hero: stock(20719975, 'Article 02 image'), figures: [stock(7718474, 'Article 02 figure 01'), stock(808822, 'Article 02 figure 02')] },
  'article-03': { hero: stock(19072359, 'Article 03 image'), figures: [stock(16202290, 'Article 03 figure 01'), stock(968440, 'Article 03 figure 02')] },
  'article-04': { hero: stock(7718474, 'Article 04 image'), figures: [stock(18289606, 'Article 04 figure 01'), stock(5685251, 'Article 04 figure 02')] },
};

/* ---------- DESIGN EXPLORATIONS ---------- */
export const explorationImages = {
  'exploration-01': { main: stock(16202290, 'Exploration 01 image'), details: [stock(968440, 'Exploration 01 detail 01'), stock(5685251, 'Exploration 01 detail 02')] },
  'exploration-02': { main: stock(10621903, 'Exploration 02 image'), details: [stock(7718474, 'Exploration 02 detail 01'), stock(18820283, 'Exploration 02 detail 02')] },
  'exploration-03': { main: stock(18289606, 'Exploration 03 image'), details: [stock(968440, 'Exploration 03 detail 01'), stock(31735033, 'Exploration 03 detail 02')] },
  'exploration-04': { main: stock(5685251, 'Exploration 04 image'), details: [stock(13705213, 'Exploration 04 detail 01'), stock(16202290, 'Exploration 04 detail 02')] },
  'exploration-05': { main: stock(808822, 'Exploration 05 image'), details: [stock(30836855, 'Exploration 05 detail 01'), stock(20719975, 'Exploration 05 detail 02')] },
  'exploration-06': { main: stock(7718474, 'Exploration 06 image'), details: [stock(10621903, 'Exploration 06 detail 01'), stock(19072359, 'Exploration 06 detail 02')] },
};

/* ---------- JOURNEY ---------- */
export const journeyImages = [
  stock(934331, 'Journey 01 image'),
  stock(20719975, 'Journey 02 image'),
  stock(31735033, 'Journey 03 image'),
  stock(808822, 'Journey 04 image'),
  stock(13705213, 'Journey 05 image'),
];

/* ---------- ABOUT ----------
   No stock photo is used for your portrait (a stranger's face would be misleading).
   Add yours:  portrait: '/assets/images/portrait.jpg'                                */
export const aboutImages = {
  portrait: null,
};
