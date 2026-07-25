/**
 * Cloudflare Turnstile preparation helpers.
 * Enable by setting NEXT_PUBLIC_TURNSTILE_SITE_KEY and verifying the token
 * server-side (or via a Next.js Route Handler) before accepting inserts.
 *
 * Never put the Turnstile secret key in NEXT_PUBLIC_* variables.
 */

export function isTurnstileEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim());
}

export function getTurnstileSiteKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  return key || undefined;
}
