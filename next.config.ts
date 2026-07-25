import type { NextConfig } from "next";
import path from "path";
import { getStaticSecurityHeaders } from "./lib/security/headers";

const projectRoot = path.resolve(__dirname);

/**
 * Production security configuration for CERT-In / VAPT readiness.
 *
 * Content-Security-Policy (nonce-based, no unsafe-inline/eval in prod) is applied
 * in `proxy.ts` via `lib/security/csp.ts` — required so Next.js can attach nonces
 * to framework scripts. Other headers below are set globally here.
 *
 * Images: only local `/public` assets — no remotePatterns until a CDN is approved.
 */
const nextConfig: NextConfig = {
  // Prevent Next from picking a parent lockfile as root
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },

  // Subresource Integrity hashes on scripts (experimental) — complements CSP
  experimental: {
    sri: {
      algorithm: "sha256",
    },
  },

  // Refuse remote images by default (open-redirect / SSRF-style img abuse)
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  poweredByHeader: false,

  async headers() {
    const securityHeaders = getStaticSecurityHeaders();

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
