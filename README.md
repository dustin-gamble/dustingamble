# dustingamble.com

Writing-led personal site for Dustin Gamble, built as a static Astro project and deployable on GitHub Pages.

## Stack

- Astro (static output)
- Markdown content in `/content`
- JSON content indexes for ordering/featured control

## Local development

```bash
cd "/Users/dustingamble/Documents/New project/dustingamble"
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
```

Build output goes to `dist/`.

## Deploy to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy.yml`.

1. Push to `main`.
2. In GitHub repo settings, ensure Pages source is **GitHub Actions**.
3. The workflow builds Astro and deploys `dist/` automatically.

## Custom domain

- Domain file: `public/CNAME`
- Current value: `dustingamble.com`

DNS setup (at registrar):

- `A` records for apex `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `AAAA` records for apex `@`:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`
- `CNAME` for `www`:
  - `dustin-gamble.github.io`

After DNS propagation, enable HTTPS in GitHub Pages settings.

## Where to edit content

### Writing

- Index/order/featured flags: `content/writing/index.json`
- Essays: `content/writing/*.md`

Each writing file uses frontmatter:

```yaml
title: "..."
date: "YYYY-MM-DD"
summary: "..."
tags: ["..."]
draft: false
```

### Projects

- Index/order/featured flags: `content/projects/index.json`
- Project pages: `content/projects/*.md`

Each project file uses the same required frontmatter:

```yaml
title: "..."
date: "YYYY-MM-DD"
summary: "..."
tags: ["..."]
draft: false
```

## Site structure

- `src/pages/index.astro` -> Home (writing-led)
- `src/pages/writing/` -> Writing index and essay pages
- `src/pages/projects/` -> Projects index and detail pages
- `src/pages/about.astro` -> About (short + expandable long bio)
- `src/pages/resume.astro` -> HTML resume
- `src/pages/contact.astro` -> Contact links + mailto form
- `src/pages/rss.xml.ts` -> RSS feed
- `src/pages/sitemap.xml.ts` -> Dynamic sitemap
- `public/robots.txt` -> robots rules

## Notes

- Keep proprietary program details out of public markdown content.
- Replace all `TODO` placeholders for links, email, LinkedIn, and approved references.
