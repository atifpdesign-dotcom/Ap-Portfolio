/* ==========================================================
   DESIGN EXPLORATIONS — the visual laboratory.
   Six empty slots to show the layout. Add or remove entries freely
   (and add matching images in images.js → explorationImages).

   Content types you might use: Material Studies, AI Imagery,
   Furniture Studies, Spatial Sketches, Colour Studies, Photography,
   Objects, Observations, Unfinished Ideas, Experiments.
   ========================================================== */

export const explorationsIntro = '[EDITABLE INTRODUCTION]';

const placeholderExploration = (n) => ({
  id: `exploration-0${n}`,
  number: `0${n}`,
  title: '[EXPLORATION TITLE]',
  type: '[CONTENT TYPE]',
  date: '[DATE]',
  observation: '[OBSERVATION]',
  detail: '[DETAIL / PROCESS NOTES]',
  captions: ['[CAPTION]', '[CAPTION]'],
});

export const explorations = [1, 2, 3, 4, 5, 6].map(placeholderExploration);
