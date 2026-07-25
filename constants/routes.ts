/**
 * Canonical public routes for sitemap, nav, and SEO.
 * Keep in sync with `app/` pages.
 */
export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/programs",
  "/programs/child-welfare",
  "/programs/child-education",
  "/programs/child-health",
  "/programs/children-sports",
  "/programs/farmers-rights",
  "/programs/old-age-welfare",
  "/news",
  "/contact",
  "/donate",
  "/privacy",
  "/terms",
] as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[number];
