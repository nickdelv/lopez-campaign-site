# Site System — How It's Built

## Overview

Hand-built static site. No framework, no build step, no package manager. Deployed to GitHub Pages.

## CSS Architecture

Each page loads two stylesheets in order:

```html
<link rel="stylesheet" href="css/shared.css?v=1.1" />
<link rel="stylesheet" href="css/[page].css?v=1.1" />
```

The cascade does the work: shared styles load first, page CSS overrides what it needs to. No CSS modules, no scoping — just the natural cascade.

**`shared.css`** — the single source of truth for:

- Design tokens (`--teal`, `--amber`, `--sp-2xl`, `--pad-x`, etc.)
- Global reset and base type
- Header and footer styles (loaded on every page)
- Shared UI: `.section-eyebrow`, `.section-grid`, `.pull-quote`, `.btn-*`, `.dual-cta`

**Page CSS files** — contain only what's unique to that page:

- Section backgrounds and padding
- Page header layout
- Page-specific component styles
- Breakpoint overrides not covered by shared rules

## JS Architecture

`js/site.js` runs on every page and does three things:

1. **Component injection** — fetches `components/header.html` and `components/footer.html` and inserts them into `#site-header` and `#site-footer` divs
2. **Mobile nav toggle** — wires up the hamburger button, open/close animation
3. **Active nav link** — compares `window.location.pathname` to each nav link and applies `.active` class to the matching one

No dependencies. No libraries.

## Component System

Shared page chrome lives in `/components`:

| File          | Contents                            | Injected into            |
| ------------- | ----------------------------------- | ------------------------ |
| `header.html` | Announce bar + sticky nav with logo | `<div id="site-header">` |
| `footer.html` | 4-column footer grid + legal copy   | `<div id="site-footer">` |

To update the nav or footer, edit the fragment in `/components`. Changes apply to all pages on next load.

## Form Handling

`get-involved.html` submits via `fetch()` POST to a Google Apps Script endpoint. On success (or failure — we redirect either way), the user is sent to `thank-you.html`. No server-side code, no session, no database.

## Cache Busting

Asset URLs include `?v=1.1` query strings for cache invalidation:

```html
<link rel="stylesheet" href="css/shared.css?v=1.1" />
<script src="js/site.js?v=1.1"></script>
```

Increment the version number on any release where you want to force a cache refresh.

## Deployment

1. Push to `main` on GitHub
2. GitHub Pages serves the repo root automatically
3. `CNAME` file maps the custom domain `lopezforrep.com`

No CI, no preview environments. What's on `main` is what's live.
