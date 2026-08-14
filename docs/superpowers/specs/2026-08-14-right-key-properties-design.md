# Right Key Properties Website Design

## Purpose

Build a production-ready, static real-estate website for Right Key Properties, focused on buying, selling, renting, and investment assistance across Pune West. The first release uses clearly labelled demo inventory and no backend.

## Chosen Direction

Use a single Vite + React application with React Router, Tailwind CSS, Lucide icons, and reusable data-driven UI components. Host the production build on GitHub Pages at `https://rightkeyproperties.in`.

The visual language is warm editorial luxury: cream surfaces, charcoal typography, olive accents, restrained gold details, generous whitespace, and large property imagery.

## Architecture

- `src/config/site.js` is the only source for business identity, domain, and contact placeholders.
- `src/data/properties.json` holds 12 demo property records; every listing is visibly marked as demo/sample content.
- Reusable property components compose the home, Buy, Rent, and individual property views.
- Project data uses the same static, frontend-only pattern.
- The router uses hash routing so every requested route works on GitHub Pages without server-side rewrites.
- Query-string filters preserve selected location, property type, BHK, and budget while navigating among listings.

## Routes

- `/` Home: premium hero, search, featured listings, Pune West locations, assistance services, seller CTA.
- `/buy` and `/rent`: filterable listing grids, with shareable query parameters.
- `/property/:id`: image gallery, facts, amenities, description, enquiry actions.
- `/sell`: seller lead form with local validation and no network submission.
- `/projects` and `/projects/:id`: demo project discovery and details.
- `/about`: transparent description of the service offering with no invented credentials or statistics.
- `/contact`: contact placeholder content, map link placeholder, and locally validated enquiry form.

## Interaction and Contact Rules

- WhatsApp message links include the property name, location, and a user enquiry. The destination number comes only from `site.js`.
- Phone and email links read their values only from `site.js`.
- Placeholder contact values must be obviously labelled and must not resemble genuine business contact information.
- Forms validate required name, contact, and enquiry fields and show a local confirmation only; no lead data leaves the browser.
- On mobile, navigation moves into a hamburger menu and persistent Call/WhatsApp actions remain reachable.

## SEO and Deployment

- Provide route titles, descriptions, canonical URLs, Open Graph defaults, meaningful image alt text, favicon, `robots.txt`, and `sitemap.xml`.
- The home title is `Right Key Properties | Buy, Sell & Rent Property in Pune`.
- The home description is `Right Key Properties helps you discover residential, commercial and investment properties in Pune, with a focus on Pune West.`
- The GitHub Actions workflow runs on pushes to `main`, installs dependencies with `npm ci`, builds Vite, and deploys the resulting static site to GitHub Pages.
- Include `public/CNAME` containing `rightkeyproperties.in`.

## Testing and Verification

- Unit tests cover property filtering, query handling, WhatsApp link generation, and form validation.
- Verify responsive layouts at mobile and desktop breakpoints, each requested route, navigation, filter behavior, WhatsApp links, and the Pages workflow configuration.
- Run a production build and address all build errors before delivery.

## Scope Boundaries

- No backend, CMS, contact submission endpoint, authentication, payment feature, fake contact details, reviews, awards, certifications, statistics, or developer partnerships.
- Images and listing/project details are illustrative demo content only.
