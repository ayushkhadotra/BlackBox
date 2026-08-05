# BLACKBOX

A premium, OS-inspired portfolio for a security engineer — built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, Framer Motion, and a JSON-based content system.

## What's here

- **Landing page** — interactive hero, animated background grid, featured projects, recent
  activity, and latest certifications, all pulled from JSON content.
- **Command palette (⌘K / Ctrl+K)** — instant fuzzy search across pages, projects, and external
  links, built on `cmdk`.
- **Project Explorer** — a filesystem-style browser. Categories are animated folders; opening one
  reveals the projects inside.
- **Project pages** — hero, description, gallery, timeline, challenges/lessons, tech stack,
  related projects, and external links, generated per-project from `content/projects/*.json`.
- **Timeline** — a vertical, scroll-revealed timeline of certificates, projects, and milestones.
- **Certificates gallery**, **About**, and **Contact** pages.
- **JSON-based CMS** — add a project without touching code by dropping a new file into
  `content/projects/`. Certificates and timeline events live in `content/certificates.json` and
  `content/timeline.json`.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Adding a project

Create a new file in `content/projects/your-project.json` following the shape in
`src/lib/types.ts` (`Project`). The Explorer and homepage pick it up automatically on next build —
no component code changes required.

## Adding real cover images

Projects currently use generated gradient "cover art" tokens (see
`src/components/ui/cover-art.tsx`) so the repo doesn't depend on any image assets. To use real
screenshots, add images to `/public` and swap `<CoverArt token={...} />` for a Next.js `<Image />`
in `folder.tsx`, the project page, and the homepage.

## Wiring up live GitHub data

`content/projects/*.json` is the source of truth for the Explorer today. To pull live repo data
(stars, languages, latest commits, pinned repos) instead of hand-written JSON:

1. Add a small fetch utility in `src/lib/github.ts` that calls the GitHub REST or GraphQL API
   (a GraphQL query against the `pinnedItems` connection is the standard way to get pinned repos).
2. Call it from the relevant Server Components (`src/app/page.tsx`, `src/app/explorer/page.tsx`)
   at build time, or wrap in `fetch(..., { next: { revalidate: 3600 } })` for periodic refresh.
3. Merge the live stats into your existing `Project` objects, or extend the type.

This is left as JSON for now so the site builds without requiring a GitHub token.

## Custom webfonts

This build intentionally uses system font stacks so it compiles without network access. To use
Inter + JetBrains Mono via `next/font/google`, see the comment at the top of
`src/app/globals.css` and re-enable the import in `src/app/layout.tsx`.

## Deployment

### Vercel (recommended)
Push to a GitHub repo and import it at vercel.com — `vercel.json` is already configured. Zero
extra setup needed; SSG/ISR routes (project pages, category pages) work out of the box.

### GitHub Pages
GitHub Pages only serves static files, so you'll need a static export:

1. In `next.config.js`, add `output: "export"`.
2. Remove or adjust any features that require a Node server (none currently used — this project
   is fully static-export compatible as-is).
3. Push to `main` — `.github/workflows/deploy.yml` builds and publishes `/out` to GitHub Pages.
4. Enable Pages in your repo settings, source: "GitHub Actions."

## Project structure

```
src/
  app/                 route segments (App Router)
    explorer/[category]/
    project/[slug]/
    timeline/ certificates/ about/ contact/
  components/          UI components (Navbar, CommandPalette, Hero, Folder, ...)
    ui/                low-level primitives (Button, CoverArt)
  hooks/               useKeyboardShortcut
  lib/                 types, utils, content readers (the "CMS")
content/
  projects/*.json      one file per project
  certificates.json
  timeline.json
```

## Notes on scope

This is a complete, working foundation covering the architecture, content system, and the
highest-impact interactions from the brief (command palette, animated Explorer, project pages,
timeline, page transitions). A few things are intentionally left as extension points rather than
fully built out, since they depend on assets/services only you have:

- Real project screenshots (currently generated gradient placeholders)
- Live GitHub API integration (see above)
- A resume PDF at `/public/resume.pdf`
- Custom cursor / magnetic-button micro-interactions beyond the hover states already in place

The codebase is structured so each of these is a small, isolated addition.
