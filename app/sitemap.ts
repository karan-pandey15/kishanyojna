import type { MetadataRoute } from "next";
import { PUBLIC_ROUTES } from "@/constants/routes";
import { site } from "@/lib/site";

/**
 * Sitemap preparation for SEO / discovery.
 * Update `PUBLIC_ROUTES` when new public pages are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/programs") ? 0.8 : 0.6,
  }));
}
