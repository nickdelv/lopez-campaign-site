# Component Catalog

Inventory of all reusable UI patterns across the site. For CSS details see `design-system-css.md`.

---

## Global Components (all pages)

### Header

**Fragment:** `components/header.html`
**Styles:** `shared.css`
**Contents:** Announcement bar + sticky navigation with logo

- Logo: "Lisa Lopez" Cormorant wordmark + "For State Representative" sub
- Nav links: Home, About, Get Involved + amber Donate button
- Mobile: hamburger toggle, stacked nav
- Sticky positioning: `top: 0; z-index: 100`

### Footer

**Fragment:** `components/footer.html`
**Styles:** `shared.css`
**Contents:** 4-column footer grid on dark background

- Column 1: Logo + campaign tagline
- Column 2: Site links
- Column 3: Connect (social/contact)
- Column 4: Contact info
- Bottom bar: Legal disclaimer + credit

---

## Shared UI Components

### Section Eyebrow

**Class:** `.section-eyebrow` / `.section-eyebrow--dark`
**Used on:** Every content section header

Line + uppercase label that opens each section. Amber on light backgrounds, white/dim on dark.

### Section Grid

**Class:** `.section-grid`
**Used on:** `.why`, `.early-life`, `.career`, `.now`, `.service-inner`, `.arc-inner`

Standard `1fr 1fr` two-column layout with shared responsive behavior.

### Pull Quote

**Class:** `.pull-quote` / `.pull-quote--light`
**Used on:** `about.html` (early life, select board arc)

Italic blockquote with amber left border. `--light` variant for dark backgrounds.

### Dual CTA

**Class:** `.dual-cta > .cta-volunteer + .cta-donate`
**Used on:** All main pages (`index.html`, `about.html`, `get-involved.html`)

Full-width two-panel action section: volunteer (teal) + donate (amber). Shared component in `shared.css`.

---

## Page-Specific Components

### Hero (`index.html`)

**Classes:** `.hero`, `.hero-photo-col`, `.hero-photo`, `.hero-content`

Full-width 2-column layout with candidate photo on right, headline/body/CTAs on left. Photo scaled 135% from bottom for visual impact.

### Issue Cards (`index.html`)

**Classes:** `.issues-grid`, `.issue-card`, `.issue-card--featured`

4-up card grid on dark teal background. One featured card spans full width with 2-column internal layout. Numbered 01–05.

### Endorsement Cards (`index.html`)

**Classes:** `.endorsements-grid`, `.endorsement-card`

3-up card grid, white cards on linen background. Top border transitions from teal-light to amber on hover.

### Track Record (`index.html`)

**Classes:** `.record-grid`, `.record-item`

3-up stat cards. Large Cormorant numbers, amber label, description body. Centered eyebrow with flanking lines.

### Credential List (`index.html`)

**Classes:** `.cred-item`, `.cred-bar`, `.cred-content`

Vertical list of Lisa's credentials (Education, Career, Public Service, Community, Family). Amber left bar that brightens on hover.

### Page Header — Light (`about.html`)

**Class:** `.page-header`
**File:** `about.css`

2-column header: headline + jump nav on right. Light teal-pale background with amber left strip.

### Page Header — Dark (`get-involved.html`)

**Class:** `.page-header`
**File:** `get-involved.css`

Single-column header with max-width inner. Dark teal background with decorative circle and amber left strip.

### Timeline (`about.html`)

**Classes:** `.timeline`, `.timeline-item`, `.timeline-dot`, `.timeline-line`

Vertical dot-and-line timeline. Dots animate amber on hover. Used in Community Service section.

### Role Items (`about.html`)

**Classes:** `.roles-grid`, `.role-item`, `.role-accent`

Stacked white cards with amber left accent bar. Used in "Where She Stands Now" section.

### Company Callout (`about.html`)

**Class:** `.company-callout`

Highlighted callout card with teal left border. Used for Haemonetics Corporation detail in Career section.

### Ways to Help (`get-involved.html`)

**Classes:** `.ways-grid`, `.way-card`

4-up card grid on linen background, numbered 01–04. Similar structure to issue cards.

### Volunteer Form (`get-involved.html`)

**Classes:** `.volunteer-form`, `.form-row`, `.form-field`, `.checkbox-group`

Multi-field form with custom checkbox styling. Submits via `fetch()` POST to Google Apps Script. Includes form promise box and voter resources panel.
