/**
 * Content-Security-Policy builder.
 * Every directive is documented for CERT-In / VAPT evidence packs.
 *
 * Policy goals:
 * - No 'unsafe-inline' / 'unsafe-eval' in production scripts
 * - Nonce + strict-dynamic for framework scripts (Next.js)
 * - Same-origin default; no remote image CDNs until explicitly allow-listed
 */

export type CspOptions = {
  nonce: string;
  isDev: boolean;
};

export function buildContentSecurityPolicy({ nonce, isDev }: CspOptions): string {
  const directives: string[] = [
    // Fallback for any fetch / resource type not listed below
    "default-src 'self'",

    /**
     * Scripts: self + per-request nonce + strict-dynamic.
     * 'unsafe-eval' ONLY in development (React refresh / stack reconstruction).
     * Never enable 'unsafe-inline' for scripts in production.
     */
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,

    /**
     * Styles: self + nonce for Next-injected tags.
     * Dev may need 'unsafe-inline' for HMR style injection.
     */
    isDev
      ? "style-src 'self' 'unsafe-inline'"
      : `style-src 'self' 'nonce-${nonce}'`,

    // Images: local assets + blob/data for next/image placeholders only
    "img-src 'self' blob: data:",

    // Fonts: next/font self-hosts — no fonts.googleapis.com
    "font-src 'self'",

    // XHR / fetch — same origin + Supabase REST/Realtime (HTTPS)
    // Turnstile verification endpoint prepared for future bot protection
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://challenges.cloudflare.com",

    // Disallow plugins (Flash, Java, etc.)
    "object-src 'none'",

    // Restrict <base href> hijacking
    "base-uri 'self'",

    // Forms may only post to this origin (Supabase uses fetch, not form POST)
    "form-action 'self'",

    // Clickjacking: no embedding in frames
    "frame-ancestors 'none'",

    // Allow Cloudflare Turnstile iframe when bot protection is enabled later
    "frame-src 'self' https://challenges.cloudflare.com",

    // No workers from foreign origins
    "worker-src 'self' blob:",

    // Block mixed content upgrade on HTTPS deployments
    "upgrade-insecure-requests",

    // Disable legacy Maglev / unexpected child sources
    "child-src 'none'",

    // Manifest for PWA
    "manifest-src 'self'",

    // Media (audio/video) — none currently
    "media-src 'self'",
  ];

  return directives.join("; ").replace(/\s{2,}/g, " ").trim();
}
