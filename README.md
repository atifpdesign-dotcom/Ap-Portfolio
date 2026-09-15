# AP Portfolio — Website

A complete portfolio website for Atif Patel. It uses plain HTML, CSS and JavaScript, so there is **no "build" step**: Vercel simply puts these files online as they are.

---

## 1. Put it online with Vercel

You need two free accounts: **GitHub** (stores the files) and **Vercel** (shows them as a website).

1. Unzip this folder on your computer.
2. Go to **github.com** and sign in. Click **New repository**, name it (for example `ap-portfolio`), and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in **everything inside** the `ap-portfolio` folder (not the folder itself), then click **Commit changes**.
4. Go to **vercel.com**, sign in with GitHub, and click **Add New → Project**.
5. Pick the `ap-portfolio` repository and click **Import**.
6. Leave the settings as they are:
   - Framework Preset: **Other**
   - Build Command: *(empty)*
   - Output Directory: *(empty)*
7. Click **Deploy**. After about a minute, Vercel gives you a link to your live website.

**Making changes later:** edit or re-upload a file on GitHub and Vercel updates the site automatically within a minute.

**Your own domain name (optional):** in Vercel, open the project, then **Settings → Domains**.

---

## 2. Preview on your own computer (optional)

This step isn't needed for Vercel. If you have Python installed, open a terminal in this folder and run:

```
python3 local-server.py
```

Then open **http://localhost:8000** in your browser.

Double-clicking `index.html` won't work, because the pages need a small local server.

---

## 3. Where to change things

All text and images live in **`js/content/`**. You never need to touch the design files.
Anything in `[SQUARE BRACKETS]` is a placeholder waiting for your content.

| What you want to change | File | What to edit |
|---|---|---|
| **Logo** | `assets/logo/` | Replace `ap-logo-dark.png` (for light backgrounds) and `ap-logo-light.png` (for dark backgrounds). Keep the same names. PNG with a transparent background. |
| **Hero statement, homepage quote** | `js/content/site.js` | `heroStatement`, `quote` |
| **Name / title shown on the site** | `js/content/site.js` | `name`, `role` |
| **Project information** (year, category, type, location, role, status, description) | `js/content/projects.js` | Each project's block |
| **Project concept, process, reflection** | `js/content/projects.js` | `concept`, `process`, `reflection` |
| **Which sections a project shows, and their order** | `js/content/projects.js` | `sections` |
| **Final-work gallery layout** | `js/content/projects.js` | `gallery` (sizes: full, half, wide, narrow, third, detail) |
| **All images** (hero, projects, blog, explorations, journey, portrait) | `js/content/images.js` | See the note at the top of that file |
| **Blog articles** | `js/content/articles.js` | Title, category, date, introduction, paragraphs, pull quote |
| **Design Explorations** | `js/content/explorations.js` | Entries and introduction |
| **Journey timeline** | `js/content/journey.js` | Year, title, description, and the "What's next?" statement |
| **About page** | `js/content/about.js` | Introduction, short bio, design approach, areas of interest |
| **Contact details** (email, phone, LinkedIn, Instagram, Behance) | `js/content/site.js` | Fill in `value` for each; it becomes a working link automatically |
| **Closing statement, copyright** | `js/content/site.js` | `footer` |
| **Homepage video** | `assets/video/` | Add your file named exactly `home-ai-video.mp4` |
| **Browser tab titles, search descriptions** | `js/content/site.js` | `seo` |
| **Link preview image and text** (when the site is shared) | `index.html` | The `og:` lines near the top |

### Replacing a stock image with your own

1. Put your image in `assets/images/`, for example `project-01-image-01.jpg`.
2. In `js/content/images.js`, find the matching line and swap the `stock(...)` part for the path in quotes:

```js
// before
card: [stock(5863513, 'Project 01 image 01'), stock(5490972, 'Project 01 image 02')],
// after
card: ['/assets/images/project-01-image-01.jpg', '/assets/images/project-01-image-02.jpg'],
```

The temporary images come from Pexels, which is free to use and needs no credit. They only demonstrate the layout and should all be replaced.

---

## 4. Pages

| Page | Address |
|---|---|
| Home | `/` |
| About | `/about` |
| Journey | `/journey` |
| Projects | `/projects` |
| Project pages | `/projects/sip-society`, `/projects/residential-tba`, `/projects/the-circle`, `/projects/canwest`, `/projects/verdant-villa` |
| Blog | `/blogs`, and articles at `/blogs/article-01` to `/blogs/article-04` |
| Design Explorations | `/design-explorations`, and entries at `/design-explorations/exploration-01` to `-06` |

---

## 5. Folder map

```
ap-portfolio/
├── index.html              the single page shell
├── vercel.json             tells Vercel to send every address to index.html
├── local-server.py         optional local preview
├── assets/
│   ├── logo/               AP logo (dark + light)
│   ├── images/             your images go here
│   └── video/              home-ai-video.mp4 goes here
├── css/
│   ├── variables.css       colours, fonts, spacing, grid, motion (design tokens)
│   ├── base.css            resets, focus states, page transition
│   ├── typography.css
│   ├── layout.css          12 / 8 / 4 column grid
│   ├── components.css      header, menu, cursor, cards, footer
│   ├── pages.css           page-specific layouts
│   └── responsive.css      tablet + desktop adjustments
└── js/
    ├── main.js             starts everything
    ├── router.js           page addresses
    ├── content/            ← ALL YOUR TEXT AND IMAGES
    ├── components/         header, footer, cards, images
    ├── pages/              one file per page type
    └── interactions/       menu, cursor, reveal, video, timeline
```
