/**
 * Production security headers expected in CERT-In empanelled VAPT reviews.
 * Applied via next.config.ts `headers()`. CSP with nonce is applied in proxy.ts.
 */

export type SecurityHeader = { key: string; value: string };

export function getStaticSecurityHeaders(): SecurityHeader[] {
  return [
    // Clickjacking defence (CSP frame-ancestors is primary; this is legacy fallback)
    { key: "X-Frame-Options", value: "DENY" },

    // Prevent MIME sniffing (XSS via wrong Content-Type)
    { key: "X-Content-Type-Options", value: "nosniff" },

    // Limit referrer leakage to HTTPS peers; strip path on cross-origin
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },

    // Disable powerful browser features not required by this site
    {
      key: "Permissions-Policy",
      value:
        "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()",
    },

    // Force HTTPS for 2 years + preload eligibility (effective only over TLS)
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },

    // Isolate browsing context — mitigates XS-Leaks / Spectre-style cross-origin attacks
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },

    // Resources are same-origin only unless explicitly CORP-tagged otherwise
    { key: "Cross-Origin-Resource-Policy", value: "same-origin" },

    // Require CORP on cross-origin subresources (all assets are same-origin today)
    { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },

    // Disable legacy XSS auditor side-effects; CSP is the real control
    { key: "X-XSS-Protection", value: "0" },

    // Reduce information disclosure
    { key: "X-DNS-Prefetch-Control", value: "off" },

    // Disallow Adobe cross-domain policy files
    { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  ];
}
