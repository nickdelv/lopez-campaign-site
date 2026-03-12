# Lisa Lopez for State Representative

Campaign website for Lisa Lopez, candidate for Massachusetts State Representative in the 6th Norfolk District (Canton, Stoughton, and Avon).

**Live site:** [lopezforrep.com](https://lopezforrep.com)

This is a lightweight, hand-built static site — no framework, no build step, no dependencies. Plain HTML, CSS, and vanilla JS.

---

## Stack

- HTML5 — semantic page structure
- CSS — custom design tokens, shared component library, per-page styles
- Vanilla JS — component injection, mobile nav toggle
- GitHub Pages — hosting and deployment

---

## File Structure

```
/
├── index.html            # Home page
├── about.html            # Candidate biography
├── get-involved.html     # Volunteer sign-up form
├── thank-you.html        # Post-form confirmation
├── 404.html              # Error page
├── CNAME                 # GitHub Pages custom domain
├── robots.txt
├── sitemap.xml
│
├── /components           # Shared HTML fragments (injected at runtime via site.js)
│   ├── header.html       # Announce bar + sticky nav
│   └── footer.html       # Four-column footer
│
├── /css
│   ├── shared.css        # Design tokens, global styles, shared components
│   ├── index.css         # Home page styles
│   ├── about.css         # Biography page styles
│   ├── get-involved.css  # Volunteer form styles
│   └── thank-you.css     # Confirmation page styles
│
├── /js
│   └── site.js           # Component loader, nav behavior
│
├── /assets
│   ├── favicon.svg
│   └── /images
│
└── /docs                 # Project documentation
    ├── project-brief.md
    ├── site-system.md
    ├── design-system-css.md
    └── component-catalog.md
```

---

## Architecture

**CSS loading strategy:** Each page loads `shared.css` first, then its own page-level CSS file. Page CSS can safely override shared styles via the cascade — no specificity hacks needed.

**`shared.css`** holds everything that crosses page boundaries:

- Design tokens (colors, spacing, padding) in `:root`
- Global resets and base typography
- Header and footer styles
- Shared UI components: section eyebrow, section grid, pull quote, buttons, dual CTA

**Page-level CSS** (`index.css`, `about.css`, etc.) handles layout and components unique to each page. Sections that share the standard two-column layout use the shared `.section-grid` class; page CSS provides only the page-specific background, padding, and any deviations.

**`site.js`** fetches `components/header.html` and `components/footer.html` at runtime and injects them into placeholder `div`s on every page. It also handles the mobile nav toggle and active link highlighting.

**Shared fragments** (`/components`) keep the header and footer defined in one place. Any change to nav or footer copy only needs to happen once.

---

## Development

No build step — open any `.html` file directly or serve locally:

```bash
npx serve .
```

---

## Deployment

Hosted on GitHub Pages. Pushes to `main` deploy automatically via the `CNAME` file.

---

## Author

Built by Nick Del Vecchio for the Lisa Lopez for State Representative campaign, 2025–2026.
