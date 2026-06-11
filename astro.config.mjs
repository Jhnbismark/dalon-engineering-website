// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH / SITE_URL are injected by the GitHub Pages workflow so the site
// builds correctly under a project sub-path. Locally they're unset, so the
// site serves from "/" exactly as in development. Swap SITE_URL's fallback
// for the custom domain once one is registered.
export default defineConfig({
  site: process.env.SITE_URL || 'https://jhnbismark.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [sitemap()],
});
