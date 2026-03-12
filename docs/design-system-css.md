# Design System — CSS Reference

All tokens and shared components live in `css/shared.css`.

---

## Color Tokens

| Token          | Value     | Usage                                                   |
| -------------- | --------- | ------------------------------------------------------- |
| `--teal`       | `#1a5c5a` | Primary brand color — headlines, buttons, borders       |
| `--teal-mid`   | `#2a7a78` | Hover states, italic text, secondary elements           |
| `--teal-pale`  | `#eaf4f4` | Light section backgrounds, hero                         |
| `--teal-light` | `#c8e0df` | Timeline dots, border accents                           |
| `--amber`      | `#c17d3c` | Accent color — eyebrow lines, donate button, highlights |
| `--linen`      | `#f7f3ee` | Warm light section backgrounds                          |
| `--white`      | `#fdfaf7` | Off-white — cards, form fields                          |
| `--black`      | `#1a1a1a` | Footer background                                       |
| `--text`       | `#2c3e3e` | Primary body text                                       |
| `--text-lt`    | `#5a6e6d` | Secondary body text, captions                           |

---

## Spacing Tokens

All tokens scale down at tablet (≤1024px) and mobile (≤768px) via `:root` overrides in the responsive blocks.

| Token        | Desktop | Tablet | Mobile |
| ------------ | ------- | ------ | ------ |
| `--sp-2xl`   | 96px    | 80px   | 64px   |
| `--sp-xl`    | 80px    | 64px   | 56px   |
| `--sp-lg`    | 64px    | —      | —      |
| `--sp-md`    | 48px    | —      | —      |
| `--sp-sm`    | 32px    | —      | —      |
| `--sp-xs`    | 24px    | —      | —      |
| `--gap-grid` | 80px    | —      | —      |
| `--pad-x`    | 64px    | 40px   | 24px   |

---

## Typography

**Display / Headlines:** Cormorant Garamond (serif)

- Page headline: `clamp(52px, 5.5vw, 84px)` — `.page-header-headline`
- Section headline: `clamp(38px, 3.6vw, 56px)` — `.section-headline`
- Arc headline: `clamp(38px, 3.8vw, 58px)` — `.arc-headline`
- CTA headline: `clamp(34px, 3.2vw, 50px)` — `.cta-headline`

**Body / UI:** DM Sans (sans-serif)

- Body text: 16px / 400 weight / 1.7–1.85 line-height
- Eyebrow labels: 12px / 600 / 0.18em letter-spacing / uppercase
- Buttons: 11.5px / 700 / 0.2em letter-spacing / uppercase

---

## Shared Components

### Section Eyebrow

A labeled section opener: horizontal line + uppercase label text.

```html
<div class="section-eyebrow">
  <div class="section-eyebrow-line"></div>
  <div class="section-eyebrow-text">Label Text</div>
</div>
```

**Modifier for dark backgrounds:**

```html
<div class="section-eyebrow section-eyebrow--dark">...</div>
```

Default: amber line + amber text (light sections).
`--dark` modifier: white/25% line + white/45% text (dark teal sections).

---

### Section Grid

Standard two-column layout used across all content sections.

```html
<section class="[section-name] section-grid">
  <div><!-- column 1 --></div>
  <div><!-- column 2 --></div>
</section>
```

- Desktop: `1fr 1fr`, `gap: 80px`
- Tablet (≤1024px): `gap: 48px`
- Mobile (≤768px): `1fr`, `gap: 40px`

Asymmetric columns (`.bio-teaser` at `1fr 1.1fr`, `.form-section` at `1fr 1.2fr`) are defined in page CSS.

---

### Pull Quote

Italic block quote with amber left border.

```html
<blockquote class="pull-quote">"Quote text here."</blockquote>
```

**Modifier for dark backgrounds:**

```html
<blockquote class="pull-quote pull-quote--light"></blockquote>
```

---

### Buttons

| Class              | Style    | Background                 | Usage                                       |
| ------------------ | -------- | -------------------------- | ------------------------------------------- |
| `.btn-primary`     | Solid    | `--teal`                   | Primary CTA on light sections               |
| `.btn-secondary`   | Outline  | transparent / teal border  | Secondary CTA on light sections             |
| `.btn-ghost`       | Outline  | transparent / white border | CTA on dark sections (thank-you, 404)       |
| `.btn-white`       | Solid    | white                      | CTAs inside dual-CTA panels                 |
| `.btn-white-teal`  | Modifier | —                          | Colors `.btn-white` text teal               |
| `.btn-white-amber` | Modifier | —                          | Colors `.btn-white` text amber              |
| `.btn-submit`      | Solid    | `--teal`                   | Form submit (page-specific, larger padding) |

---

### Dual CTA

Full-width two-panel action section. Appears on every page.

```html
<section class="dual-cta">
  <div class="cta-volunteer">...</div>
  <div class="cta-donate">...</div>
</section>
```

Collapses to single column at tablet (≤1024px).
