# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page Dutch fundraising site for Jesse Bodde, who runs marathons for KiKa
(childhood cancer research). New York 2024 and Berlijn 2025 are finished; Chicago
on 11 oktober 2026 is the live campaign. The page's one job is donations — every
other section exists to earn that click.

Deployed at https://github.com/jessebodde10/renvoorkika → Vercel.

## Critical: two copies of this project exist

- `C:\Users\Gebruiker\Documents\Claude folders\Test Kika pagina` — **the real one**, has git
- `C:\Users\Gebruiker\Documents\Test Kika pagina` — an orphaned copy with no git

Edits made in the second folder are invisible to git, the dev server, and Vercel.
Verify with `git rev-parse --show-toplevel` before editing if there is any doubt.

## Commands

```bash
npm run dev      # dev server on :3000 (or use the kika-dev config in .claude/launch.json)
npm run build    # production build
npm run lint     # eslint
```

**`npm run build` does not typecheck or lint.** `next.config.mjs` sets both
`typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds`, so a green build
says nothing about type safety. To actually typecheck:

```bash
npx tsc --noEmit --ignoreDeprecations 6.0
```

The `--ignoreDeprecations` flag is required (`target: ES5` is deprecated in this
TypeScript version). One pre-existing error about `./globals.css` having no type
declarations is expected and unrelated to app code.

After deleting or renaming a component, the webpack dev cache goes stale and
throws `ReferenceError`/`Failed to read source code`. Stop the server,
`rm -rf .next`, restart. Running `npm run build` while the dev server is up also
corrupts its cache the same way.

## Dependency setup — do not "fix" this

`package-lock.json` is deliberately gitignored and `vercel.json` installs with
`--legacy-peer-deps`. This works around peer-dependency conflicts in the current
Next/React combination. Committing a lockfile or removing that install command
has previously broken the Vercel build.

## Architecture

`src/app/page.tsx` composes the whole site as a flat list of section components
in visual order. There is one route. Sections are ordinary server components
unless they need interactivity; the client components are `NavBar` (scroll
state), `MobileNav`, `ScrollToTop`, `AnimatedCounter`, `PhotoGallery` (lightbox)
and `MarathonRoute` (scroll-triggered line fill).

`src/config/site.ts` is the single source of truth for values that appear in
multiple places:

- `DONATE_URL` — the Supporta campaign link, used by six CTAs. Never inline it;
  it was previously hardcoded in seven files and a URL change would have left
  dead CTAs behind.
- `KIKA_URL`
- `SECTIONS` — drives both `NavBar` and `Footer`. Each entry's `id` must match a
  section's `id` attribute, and carries a `short` label (navbar) and `long` label
  (footer). Adding a section means adding it here, not writing new links.

Race data is intentionally modelled per-section rather than centrally, because
each section needs a different shape: `MarathonRoute.LEGS` (city/date/done),
`ImpactDashboard.PAST_RACES` (amounts), `SponsorsSection.SPONSOR_GROUPS`
(sponsors per city). Keep derived values derived — the route's progress line and
etappe numbers compute from `LEGS`, and the "Tot nu toe" badge comes from an
optional `badge` field rather than a city-name comparison.

### Typography

Two faces, wired in `layout.tsx` and `tailwind.config.ts`:

- `font-sans` → Outfit, body copy
- `font-display` → Bebas Neue condensed, used for headings, city names and money
  figures for a race-poster/scoreboard feel

**Bebas Neue ships a single weight (400) and only uppercase glyphs.** Never put
`font-bold`, `font-semibold` or `font-extrabold` on a `font-display` element —
the browser then synthesizes a fake bold that looks smeared. Size and colour
carry the hierarchy instead.

Orange (`kika-orange`) is reserved for the donation action and the live Chicago
leg. Finished races use muted white. Spreading orange everywhere flattens the
hierarchy.

### Motion

`globals.css` honours `prefers-reduced-motion` globally by completing animations
instantly rather than removing them, and it force-zeroes `animation-delay`
because the hero staggers its lines with inline delays and would otherwise sit
blank for over a second. JavaScript-driven motion cannot be caught by CSS, so
`AnimatedCounter` and `ScrollToTop` check `prefersReducedMotion()` from
`src/lib/motion.ts`. Any new JS-driven animation must do the same.

### Images

`public/` is what gets served; the root `Foto/` folder is just the original
source files. An image referenced from a component must exist in `public/` **and
be committed** — an untracked file works locally and 404s in production.

## Copy conventions

Dutch throughout, informal register: "je"/"jij", never "u". Month names
lowercase ("11 oktober 2026"). No em dashes — this has been asked for
repeatedly; use a period or comma instead. Keep the voice personal and concrete
(specific dates, amounts, cities) rather than broad charity language.

## Deploying

Commit and push to `main`; Vercel builds automatically. There is no PR flow and
no test suite. Verify changes in the browser preview before pushing, since the
build will not catch type errors.
