/* ==========================================================
   PROJECTS — exactly five, in this order.
   Replace anything in [SQUARE BRACKETS].

   sections: which blocks appear on the project page, and in what order.
             Available: 'info', 'concept', 'process', 'final', 'reflection'
             Remove or reorder freely for each project.
   gallery:  the final-work layout. Each item uses the matching image in
             images.js (gallery[0], gallery[1] ...). Sizes:
             'full' | 'half' | 'wide' (2/3) | 'narrow' (1/3) | 'third' | 'detail'
   ========================================================== */

const placeholderConcept = {
  statement: '[CONCEPT STATEMENT]',
  research: '[RESEARCH]',
  intention: '[DESIGN INTENTION]',
  influences: '[KEY INFLUENCES]',
};

const step = (title, media) => ({ title, media, note: '[PROCESS NOTE]' });

export const projects = [
  {
    id: 'sip-society',
    number: '01',
    title: 'SIP SOCIETY',
    year: '[YEAR]',
    category: '[CATEGORY]',
    type: '[TYPE]',
    location: '[LOCATION]',
    role: '[ROLE]',
    status: '[STATUS]',
    description: '[SHORT DESCRIPTION]',
    concept: { ...placeholderConcept },
    process: [
      step('RESEARCH', '[SKETCHES]'),
      step('IDEATION', '[DIAGRAMS]'),
      step('DEVELOPMENT', '[PLANS]'),
      step('RESOLUTION', '[3D MODELS]'),
    ],
    gallery: [
      { size: 'full', caption: '[CAPTION]' },
      { size: 'half', caption: '[CAPTION]' },
      { size: 'half', caption: '[CAPTION]', offset: true },
      { size: 'detail', caption: '[CAPTION]' },
    ],
    reflection: '[EDITABLE PROJECT REFLECTION]',
    sections: ['info', 'concept', 'process', 'final', 'reflection'],
  },
  {
    id: 'residential-tba',
    number: '02',
    title: 'RESIDENTIAL TBA',
    year: '[YEAR]',
    category: '[CATEGORY]',
    type: '[TYPE]',
    location: '[LOCATION]',
    role: '[ROLE]',
    status: '[STATUS]',
    description: '[SHORT DESCRIPTION]',
    concept: { ...placeholderConcept },
    process: [
      step('RESEARCH', '[MATERIAL STUDIES]'),
      step('IDEATION', '[SKETCHES]'),
      step('DEVELOPMENT', '[TECHNICAL DRAWINGS]'),
      step('RESOLUTION', '[3D MODELS]'),
    ],
    gallery: [
      { size: 'wide', caption: '[CAPTION]' },
      { size: 'narrow', caption: '[CAPTION]' },
      { size: 'full', caption: '[CAPTION]' },
      { size: 'half', caption: '[CAPTION]' },
      { size: 'half', caption: '[CAPTION]' },
    ],
    reflection: '[EDITABLE PROJECT REFLECTION]',
    sections: ['info', 'concept', 'process', 'final', 'reflection'],
  },
  {
    id: 'the-circle',
    number: '03',
    title: 'THE CIRCLE',
    year: '[YEAR]',
    category: '[CATEGORY]',
    type: '[TYPE]',
    location: '[LOCATION]',
    role: '[ROLE]',
    status: '[STATUS]',
    description: '[SHORT DESCRIPTION]',
    concept: { ...placeholderConcept },
    process: [
      step('RESEARCH', '[DIAGRAMS]'),
      step('IDEATION', '[AI EXPLORATIONS]'),
      step('DEVELOPMENT', '[PLANS]'),
      step('RESOLUTION', '[ITERATIONS]'),
    ],
    gallery: [
      { size: 'full', caption: '[CAPTION]' },
      { size: 'third', caption: '[CAPTION]' },
      { size: 'third', caption: '[CAPTION]' },
      { size: 'third', caption: '[CAPTION]' },
    ],
    reflection: '[EDITABLE PROJECT REFLECTION]',
    sections: ['info', 'concept', 'process', 'final', 'reflection'],
  },
  {
    id: 'canwest',
    number: '04',
    title: 'CANWEST',
    year: '[YEAR]',
    category: '[CATEGORY]',
    type: '[TYPE]',
    location: '[LOCATION]',
    role: '[ROLE]',
    status: '[STATUS]',
    description: '[SHORT DESCRIPTION]',
    concept: { ...placeholderConcept },
    process: [
      step('RESEARCH', '[SITE ANALYSIS]'),
      step('IDEATION', '[SKETCHES]'),
      step('DEVELOPMENT', '[TECHNICAL DRAWINGS]'),
      step('RESOLUTION', '[3D MODELS]'),
    ],
    gallery: [
      { size: 'half', caption: '[CAPTION]' },
      { size: 'half', caption: '[CAPTION]' },
      { size: 'full', caption: '[CAPTION]' },
      { size: 'wide', caption: '[CAPTION]' },
      { size: 'narrow', caption: '[CAPTION]' },
    ],
    reflection: '[EDITABLE PROJECT REFLECTION]',
    sections: ['info', 'concept', 'process', 'final', 'reflection'],
  },
  {
    id: 'verdant-villa',
    number: '05',
    title: 'VERDANT VILLA',
    year: '[YEAR]',
    category: '[CATEGORY]',
    type: '[TYPE]',
    location: '[LOCATION]',
    role: '[ROLE]',
    status: '[STATUS]',
    description: '[SHORT DESCRIPTION]',
    concept: { ...placeholderConcept },
    process: [
      step('RESEARCH', '[MATERIAL STUDIES]'),
      step('IDEATION', '[AI EXPLORATIONS]'),
      step('DEVELOPMENT', '[PLANS]'),
      step('RESOLUTION', '[ITERATIONS]'),
    ],
    gallery: [
      { size: 'full', caption: '[CAPTION]' },
      { size: 'half', caption: '[CAPTION]', offset: true },
      { size: 'half', caption: '[CAPTION]' },
      { size: 'full', caption: '[CAPTION]' },
    ],
    reflection: '[EDITABLE PROJECT REFLECTION]',
    sections: ['info', 'concept', 'process', 'final', 'reflection'],
  },
];
