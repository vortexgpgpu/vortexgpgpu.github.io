# Vortex Homepage

A static website for the [Vortex](https://github.com/vortexgpgpu/) open-source RISC-V GPGPU project, built to be deployed on GitHub Pages.

No build step, no dependencies, no framework — plain HTML, CSS, and vanilla JavaScript.

## Structure

```
.
├── index.html              Home
├── publications.html       Publications (filterable by year)
├── news.html               News timeline
├── teams.html              Faculty, members, alumni, sponsors, contributors
├── tutorials.html          Workshop & Tutorial index
│   ├── micro2026.html      Workshop & Tutorial @ MICRO 2026 (upcoming, CFP)
│   ├── micro2025.html      Workshop & Tutorial @ MICRO 2025
│   ├── micro2024.html      Workshop & Tutorial @ MICRO 2024
│   ├── micro2023.html      Tutorial @ MICRO 2023
│   ├── micro2022.html      Tutorial @ MICRO 2022
│   └── micro2021.html      Tutorial @ MICRO 2021
├── blog.html               Blog index
│   ├── blog-64bit.html     64-bit Extension for Vortex
│   └── blog-prefetcher.html  SimX Cache & HW Prefetcher Design
├── community.html          GitHub, mailing list, tutorials, contact
├── 404.html                Not-found page
├── .nojekyll               Serve files as-is (skip Jekyll processing)
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/style.css       All styling
    ├── img/                Logo, favicon, app icon
    └── js/
        ├── data.js         ← All site content lives here
        └── site.js         Header/footer + page rendering
```

## Brand

Colours come from the Vortex logo and match the Georgia Tech palette:

| Token | Value | Use |
| --- | --- | --- |
| `--brand` | `#003057` | Navy — primary: buttons, links, headings accents |
| `--brand-2` | `#0a5183` | Lighter navy — gradient partner |
| `--gold` | `#B3A369` | Tech Gold — accent: active nav, badges, highlights |
| `--gold-soft` | `#F6F2E6` | Gold tint surface |

Layout width is also set there:

| Token | Value | Use |
| --- | --- | --- |
| `--maxw` | `1800px` | Main content width (home, listings) |
| `--maxw-narrow` | `1200px` | Article pages (tutorials, blog posts) |

Change them in one place at the top of `assets/css/style.css`.

Logo files live in `assets/img/` (`vortex-logo.png` is the full lockup; `vortex-mark-64.png` is the header/footer mark; `favicon-32.png` and `apple-touch-icon.png` are generated from it).

## Editing content

**Almost everything is in `assets/js/data.js`.** Pages read from it at load time, so adding a paper or a news item takes one edit in one place.

### Add a publication

The `publications` array mirrors **Table 1 of the Vortex survey** ("The Vortex Open-Source GPU Ecosystem: Users, Publications, and Research Trends"), newest first. A second array, `legacyPublications`, holds related earlier work by the group that is not in Table 1; it renders in its own section at the bottom of the page.

Add an entry at the top of the `publications` array:

```js
{
  title:   "Paper title",
  authors: "First Author, Second Author, Hyesoon Kim",
  venue:   "MICRO",
  year:    2026,
  link:    "https://doi.org/...",      // optional — makes the whole card clickable
  abstract:"...",                       // optional — renders a "Show abstract" toggle
  extra:   [{ label: "Slides", href: "..." }],  // optional extra links
  note:    "Georgia Institute of Technology"    // optional — shown when there is no link
}
```

The year filter buttons on the Publications page are generated automatically.

**Home page selection.** The home page shows the entries flagged `selected: true` (currently the MICRO-54 Vortex paper, Skybox, VOLT, and Ten-Four), oldest-first. Add or move the flag to change what appears there — no other edit needed.

**Team homepages.** A person entry in `faculty` / `members` / `alumni` can carry a `site` field; when present the whole card links to that homepage.

**Clickable cards.** When an entry has a `link`, the entire card becomes clickable and opens the publisher page in a new tab; the title is also a real anchor so it works with the keyboard. Clicks on the "Show abstract" button and on extra links do not trigger navigation. Entries without a `link` render normally but are not clickable.

**Two entries currently have no public link** and show a muted label instead — add a `link` when a URL is available:

- *An Open ISA for SIMT-based General-Purpose Processors* (B. Tine, Ph.D. dissertation, 2024) — available from the Georgia Tech SMARTech repository.
- *A Scalable Multicore RISC-V GPGPU Accelerator for High-End FPGAs* (DAC DIET, 2021).

### Add a news item

Add an entry at the top of the `news` array:

```js
{
  title: "Headline",
  date:  "2026-03-01",
  note:  "One or two sentences.",
  href:  "micro2026.html",   // optional — internal page or external URL
  cta:   "See details"        // optional link label
}
```

News is sorted newest-first automatically from the `date` field, so the position in the array doesn't matter. The four most recent items also appear on the home page.

### Add a team member

Add to `faculty`, `members`, or `alumni`:

```js
{ name: "Name", role: "SW", org: "Georgia Tech", img: "https://...", email: "optional@..." }
```

Moving someone to alumni is a cut-and-paste between arrays.

### Add a contributor term

Add to the top of the `contributors` array:

```js
{ term: "2026 Spring", people: ["Name One", "Name Two"] }
```

### Add a workshop or tutorial

1. Copy `micro2025.html` to `micro2026.html` and edit the content.
2. Add an entry at the top of the `tutorials` array in `data.js` pointing at the new file.

### Add a blog post

1. Copy `blog-64bit.html` to `blog-<slug>.html` and write the post inside `<div class="article-body">`.
2. Add an entry to the `blog` array in `data.js`.

## Deploying to GitHub Pages

### Option A — user/org or project site from a repository root

1. Push these files to the root of a repository (e.g. `vortexgpgpu/vortexgpgpu.github.io`).
2. In the repository, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and folder `/ (root)`.
4. Save. The site publishes in a minute or two.

### Option B — publish from a `/docs` folder

1. Move these files into a `docs/` folder in an existing repository.
2. **Settings → Pages → Deploy from a branch**, select `main` and folder `/docs`.

### Custom domain

To serve at `vortex.cc.gatech.edu`:

1. Create a file named `CNAME` in this directory containing exactly:
   ```
   vortex.cc.gatech.edu
   ```
2. Ask the Georgia Tech network administrators to point a `CNAME` DNS record for `vortex.cc.gatech.edu` at `<org>.github.io`.
3. In **Settings → Pages**, enter the custom domain and enable **Enforce HTTPS** once the certificate is issued.

Also update the `<loc>` URLs in `sitemap.xml` and the `Sitemap:` line in `robots.txt` to the final domain.

## Local preview

Because pages fetch `data.js` as a script, opening `index.html` directly with `file://` works in most browsers. If anything looks empty, serve the folder over HTTP instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- `.nojekyll` is required so GitHub Pages serves the `assets/` directory as-is.
- Several team photos still use the placeholder image inherited from the previous site (`placeholder2.jpg`). Replace the `img` URLs in `data.js` with real headshots before launch.
- Team and sponsor photos are hot-linked to external hosts (imgur, Wikimedia, gatech.edu). For long-term stability, download them into `assets/img/` and update the paths in `data.js`.
- **Sponsors** render a styled text wordmark whenever a tile has no `img`, and `site.js` swaps to the wordmark automatically if a hot-linked logo fails to load — so a broken URL never shows a broken image. AMD, Intel, and NSF currently use the wordmark because their Wikimedia thumbnails no longer resolve; drop real logo files into `assets/img/sponsors/` and add an `img` path to restore the marks.
- All internal links are relative, so the site works from a repository root, a `/docs` folder, or a project subpath.
