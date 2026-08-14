# Right Key Properties Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive static real-estate website for Right Key Properties at `rightkeyproperties.in`.

**Architecture:** A Vite React application uses `HashRouter` for static hosting, static demo data, centralized configuration, and composable UI components. Pure helper functions handle filtering, WhatsApp links, validation, and metadata with Vitest coverage.

**Tech Stack:** React, Vite, React Router, Tailwind CSS, Lucide React, Vitest, Testing Library, GitHub Actions.

## Global Constraints

- Use warm editorial luxury styling: cream, charcoal, olive, and restrained gold.
- Clearly label all listing and project content as demo content.
- No real contact information, business claims, reviews, awards, statistics, credentials, or partnerships.
- Centralize identity, domain, and contact fields in `src/config/site.js`.
- Support every requested route using `HashRouter`.
- Use the supplied `C:\Users\FT42\Downloads\logo (1).png` as the source brand mark, preserving its proportions in the header/footer and deriving favicon/social variants from it.
- Add SEO assets, a `CNAME` file for `rightkeyproperties.in`, and Pages deployment on push to `main`.

---

### Task 1: Create project setup and contact configuration

**Files:**
- Create: `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/styles/index.css`, `src/config/site.js`, `src/test/site.test.js`, `public/right-key-properties-logo.png`

**Interfaces:**
- Produces `site: { name, domain, phone, whatsAppNumber, email, address, mapsUrl }`.

- [ ] **Step 1: Write the failing test**

```js
import { expect, it } from 'vitest'
import { site } from '../config/site'
it('keeps public configuration in one module', () => {
  expect(site.domain).toBe('https://rightkeyproperties.in')
  expect(site).toHaveProperty('whatsAppNumber')
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/test/site.test.js`

Expected: FAIL because the app and configuration do not exist.

- [ ] **Step 3: Write minimal implementation**

```js
export const site = {
  name: 'Right Key Properties', domain: 'https://rightkeyproperties.in',
  phone: '', whatsAppNumber: '', email: '',
  address: 'Contact details coming soon', mapsUrl: '',
}
```

Configure React, React Router, Tailwind, Lucide, Vitest, and Vite. Copy the supplied logo into `public/right-key-properties-logo.png`, render `<App />` inside `<HashRouter>`, and set Vite base to `/`.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/test/site.test.js`

Expected: PASS with one test.

- [ ] **Step 5: Commit**

Run: `git add package.json vite.config.js tailwind.config.js postcss.config.js index.html src && git commit -m "chore: scaffold React real estate site"`

### Task 2: Add demo property inventory and filtering helpers

**Files:**
- Create: `src/data/properties.json`, `src/lib/properties.js`, `src/test/properties.test.js`

**Interfaces:**
- Produces `filtersFromSearch(search)` and `filterProperties(properties, filters)`.

- [ ] **Step 1: Write the failing test**

```js
import { expect, it } from 'vitest'
import { filterProperties, filtersFromSearch } from '../lib/properties'
const homes = [{ id: 'a', intent: 'buy', location: 'Baner', type: 'Apartment', bhk: '2 BHK', price: 90 }]
it('filters by intent and location', () => expect(filterProperties(homes, { intent: 'buy', location: 'Baner' })).toEqual(homes))
it('reads query state', () => expect(filtersFromSearch('?location=Baner')).toMatchObject({ location: 'Baner' }))
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/test/properties.test.js`

Expected: FAIL because the helper module does not exist.

- [ ] **Step 3: Write minimal implementation**

```js
export const filtersFromSearch = (search) => {
  const params = new URLSearchParams(search)
  return Object.fromEntries(['location', 'type', 'bhk', 'budget'].map((key) => [key, params.get(key) || '']))
}
export const filterProperties = (items, filters) => items.filter((item) =>
  (!filters.intent || item.intent === filters.intent) &&
  (!filters.location || item.location === filters.location) &&
  (!filters.type || item.type === filters.type) &&
  (!filters.bhk || item.bhk === filters.bhk) &&
  (!filters.budget || item.price <= Number(filters.budget)))
```

Add exactly 12 `isDemo: true` records, spanning Baner, Balewadi, Wakad, Hinjewadi, Tathawade, Punawale, Mahalunge, and Bavdhan. Each record includes image URLs, name, location, intent, type, BHK, area, numeric price, formatted price, amenities, description, and gallery.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/test/properties.test.js`

Expected: PASS with two tests.

- [ ] **Step 5: Commit**

Run: `git add src/data/properties.json src/lib/properties.js src/test/properties.test.js && git commit -m "feat: add demo property inventory and filters"`

### Task 3: Build reusable listing, action, and enquiry interfaces

**Files:**
- Create: `src/lib/contact.js`, `src/lib/validation.js`, `src/components/PropertyCard.jsx`, `src/components/PropertyGrid.jsx`, `src/components/PropertyFilters.jsx`, `src/components/PropertyGallery.jsx`, `src/components/PropertyDetails.jsx`, `src/components/WhatsAppButton.jsx`, `src/components/CallButton.jsx`, `src/components/EnquiryForm.jsx`, `src/test/contact.test.js`, `src/test/validation.test.js`

**Interfaces:**
- Produces `createWhatsAppHref(property, message)` and `validateEnquiry(values)`.

- [ ] **Step 1: Write failing tests**

```js
import { expect, it } from 'vitest'
import { createWhatsAppHref } from '../lib/contact'
import { validateEnquiry } from '../lib/validation'
it('includes listing identity in enquiry links', () => expect(decodeURIComponent(createWhatsAppHref({ name: 'Demo Home', location: 'Baner' }, 'Please contact me'))).toContain('Baner'))
it('requires all three enquiry fields', () => expect(validateEnquiry({ name: '', contact: '', message: '' })).toHaveProperty('message'))
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test -- src/test/contact.test.js src/test/validation.test.js`

Expected: FAIL because these helpers do not exist.

- [ ] **Step 3: Write minimal implementation**

```js
import { site } from '../config/site'
export const createWhatsAppHref = (property, message = '') => site.whatsAppNumber
  ? `https://wa.me/${site.whatsAppNumber}?text=${encodeURIComponent(`Hello ${site.name}, I am interested in ${property.name} in ${property.location}. ${message}`)}`
  : '#contact'
export const validateEnquiry = ({ name, contact, message }) => ({
  ...(name.trim() ? {} : { name: 'Please enter your name' }),
  ...(contact.trim() ? {} : { contact: 'Please enter a phone number or email' }),
  ...(message.trim() ? {} : { message: 'Please enter your enquiry' }),
})
```

Implement each named reusable component. Cards show an image with alt text, demo label, facts, details link, and contact action. Use semantic controls, local form errors, and a local success confirmation only.

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npm test -- src/test/contact.test.js src/test/validation.test.js`

Expected: PASS with two tests.

- [ ] **Step 5: Commit**

Run: `git add src/lib src/components src/test/contact.test.js src/test/validation.test.js && git commit -m "feat: add property enquiry components"`

### Task 4: Compose all pages, mobile navigation, and route SEO

**Files:**
- Create: `src/components/Header.jsx`, `src/components/Footer.jsx`, `src/components/Seo.jsx`, `src/components/MobileActions.jsx`, `src/data/projects.js`, `src/pages/HomePage.jsx`, `src/pages/ListingPage.jsx`, `src/pages/PropertyPage.jsx`, `src/pages/SellPage.jsx`, `src/pages/ProjectsPage.jsx`, `src/pages/ProjectPage.jsx`, `src/pages/AboutPage.jsx`, `src/pages/ContactPage.jsx`, `src/pages/NotFoundPage.jsx`, `src/test/seo.test.js`
- Modify: `src/App.jsx`, `src/styles/index.css`

**Interfaces:**
- Produces every requested route and `pageMeta(pathname)`.

- [ ] **Step 1: Write the failing metadata test**

```js
import { expect, it } from 'vitest'
import { pageMeta } from '../components/Seo'
it('uses the required home metadata', () => expect(pageMeta('/')).toEqual(expect.objectContaining({
  title: 'Right Key Properties | Buy, Sell & Rent Property in Pune',
  description: 'Right Key Properties helps you discover residential, commercial and investment properties in Pune, with a focus on Pune West.',
})))
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/test/seo.test.js`

Expected: FAIL because `Seo.jsx` does not exist.

- [ ] **Step 3: Write minimal implementation**

```jsx
<Routes>
  <Route path="/" element={<HomePage />} /><Route path="/buy" element={<ListingPage intent="buy" />} />
  <Route path="/rent" element={<ListingPage intent="rent" />} /><Route path="/property/:id" element={<PropertyPage />} />
  <Route path="/sell" element={<SellPage />} /><Route path="/projects" element={<ProjectsPage />} />
  <Route path="/projects/:id" element={<ProjectPage />} /><Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} />
</Routes>
```

Build the home hero, search controls, featured properties, eight location cards, four assistance cards, and seller CTA. Add responsive header/menu/footer, desktop and mobile grids, sticky mobile actions, data-backed Buy/Rent/project pages, and title/canonical/description/Open Graph tags.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/test/seo.test.js`

Expected: PASS with one test.

- [ ] **Step 5: Commit**

Run: `git add src/App.jsx src/components src/data/projects.js src/pages src/styles src/test/seo.test.js && git commit -m "feat: add responsive real estate pages"`

### Task 5: Add static SEO files and GitHub Pages automation

**Files:**
- Create: `public/CNAME`, `public/robots.txt`, `public/sitemap.xml`, `public/favicon.svg`, `.github/workflows/deploy.yml`, `src/test/deployment.test.js`

**Interfaces:**
- Produces a Pages workflow targeting `dist/` with Node 20 and deployment on `main`.

- [ ] **Step 1: Write the failing deployment test**

```js
import { expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
it('declares the custom domain', () => expect(readFileSync('public/CNAME', 'utf8').trim()).toBe('rightkeyproperties.in'))
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/test/deployment.test.js`

Expected: FAIL because the public custom-domain file does not exist.

- [ ] **Step 3: Write minimal implementation**

```yaml
on: { push: { branches: [main] }, workflow_dispatch: {} }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
      - uses: actions/deploy-pages@v4
```

Write CNAME, an indexable robots file, sitemap entries for every static route, and a branded SVG favicon.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/test/deployment.test.js`

Expected: PASS with one test.

- [ ] **Step 5: Commit**

Run: `git add public .github/workflows/deploy.yml src/test/deployment.test.js && git commit -m "ci: deploy website to GitHub Pages"`

### Task 6: Verify production behavior

**Files:**
- Modify: only files that fail the following checks.

- [ ] **Step 1: Run all tests**

Run: `npm test -- --run`

Expected: PASS with all test files.

- [ ] **Step 2: Run a production build**

Run: `npm run build`

Expected: Vite exits 0 and writes `dist/`.

- [ ] **Step 3: Check interactions at desktop and mobile widths**

Run: `npm run dev -- --host 127.0.0.1`

Expected: all requested hash routes load; search, navigation, enquiry actions, sticky contact actions, and filters work at 1440px and 390px.

- [ ] **Step 4: Verify delivery configuration**

Run: `rg "wa.me|tel:|rightkeyproperties.in|deploy-pages|branches: \[main\]" src public .github/workflows/deploy.yml`

Expected: shared contact helpers, custom domain files, and deployment trigger are present.

- [ ] **Step 5: Commit corrections if verification requires them**

Run: `git add -A && git commit -m "fix: verify production website readiness"`
