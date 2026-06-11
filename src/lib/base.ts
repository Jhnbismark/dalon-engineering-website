/**
 * withBase() — prefix a site-absolute path with Astro's configured base.
 *
 * GitHub Pages project sites are served from a sub-path
 * (e.g. /dalon-engineering-website/), so a hard-coded "/about/" would 404.
 * Run every site-absolute asset/link through this helper instead.
 *
 * It is a no-op when the base is "/" (local dev, custom domain), so the same
 * code works everywhere. External URLs, mailto:, tel:, and #anchors pass
 * through untouched.
 */
const base = import.meta.env.BASE_URL; // e.g. "/" or "/dalon-engineering-website/"

export function withBase(path: string): string {
  if (!path.startsWith('/')) return path; // leave http(s):, mailto:, tel:, #, relative
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return trimmed + path; // "/" -> "" so root stays "/foo"; "/repo/" -> "/repo/foo"
}
