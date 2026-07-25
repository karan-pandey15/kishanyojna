import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt — allow public indexing; disallow future private API paths.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
