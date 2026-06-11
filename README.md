# Dalon Engineering Company Limited — Website

Marketing website for Dalon Engineering Company Limited (Kampala, Uganda).
Built with [Astro](https://astro.build), styled with plain scoped CSS.
Deployed automatically to **GitHub Pages** on every push to `main`
(see `.github/workflows/deploy.yml`); the same static output also works on
Cloudflare Pages if migrated later.

**Live site:** https://jhnbismark.github.io/dalon-engineering-website/

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Deployment

Push to `main` and GitHub Actions builds and publishes the site to GitHub
Pages. The workflow injects `BASE_PATH`/`SITE_URL` so the site works under the
repository sub-path; internal links go through `src/lib/base.ts` (`withBase()`)
to honour that. Locally the base is `/`, so dev behaves exactly like a root
deployment.

## Launch status

- **Domain:** the site lives at the GitHub Pages URL above. When a custom
  domain (e.g. dalonengineering.com) is registered, add it in the repo's
  Pages settings and update the `SITE_URL` fallback in `astro.config.mjs`
  and the Sitemap URL in `public/robots.txt`.
- **Phone numbers:** +256 789 555 720 / +256 726 368 801 (from the company
  registration forms), in `src/pages/contact.astro` and
  `src/components/Footer.astro`.
- **Contact form:** posts to [FormSubmit](https://formsubmit.co) — already
  activated. Submissions are delivered to ondogajohnbismark@gmail.com via the
  alias endpoint in `src/pages/contact.astro` (the alias hides the raw email
  from spam bots).
- **Email address:** ondogajohnbismark@gmail.com (matches Form 7). When a
  company email exists (e.g. info@dalonengineering.com), update
  `src/pages/contact.astro`, `src/components/Footer.astro`, and
  `src/layouts/Base.astro` (JSON-LD), and re-activate FormSubmit for the new
  address.

## Structure

```
src/
  data/services.ts      # single source of truth for the six services
  layouts/Base.astro    # SEO meta, fonts, header/footer, scroll-reveal script
  components/           # Logo (SVG recreation), Header, Footer
  pages/                # index, about, services, contact, 404
  styles/global.css     # design tokens & shared utilities
```
