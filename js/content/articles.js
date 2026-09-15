/* ==========================================================
   BLOG — four article placeholders.
   The first article is shown as the featured article.
   body: one entry per paragraph.
   ========================================================== */

const placeholderArticle = (n) => ({
  id: `article-0${n}`,
  label: `ARTICLE 0${n}`,
  title: '[ARTICLE TITLE]',
  category: '[CATEGORY]',
  date: '[DATE]',
  description: '[SHORT DESCRIPTION]',
  introduction: '[INTRODUCTION]',
  body: ['[ARTICLE CONTENT]', '[ARTICLE CONTENT]'],
  figureCaptions: ['[IMAGE / DIAGRAM CAPTION]', '[IMAGE / DIAGRAM CAPTION]'],
  pullQuote: '[PULL QUOTE]',
  closing: ['[ARTICLE CONTENT]'],
});

export const articles = [1, 2, 3, 4].map(placeholderArticle);
