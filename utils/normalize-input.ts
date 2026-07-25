/**
 * Input normalisation for XSS / injection / Unicode abuse hardening.
 * Frontend sanitisation is defence-in-depth — backend must re-apply the same rules.
 */

/** Zero-width, bidi overrides, BOM, and other invisible / formatting chars. */
const INVISIBLE_UNICODE =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\u00AD]/g;

/** Emoji & symbol pictographs (overflow / paste attacks). */
const EMOJI_AND_PICTOGRAPHS =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}]/gu;

/**
 * Strip dangerous / invisible Unicode, collapse whitespace, trim.
 * NFC normalisation prevents homoglyph / composed-char tricks.
 */
export function normalizeText(raw: unknown): string {
  if (typeof raw !== "string") return "";

  return raw
    .normalize("NFC")
    .replace(INVISIBLE_UNICODE, "")
    .replace(EMOJI_AND_PICTOGRAPHS, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Digits only — for phone fields after paste of +91 / spaces / dashes. */
export function normalizePhoneDigits(raw: unknown): string {
  const text = typeof raw === "string" ? raw : "";
  const digits = text.replace(/\D/g, "");
  // Strip leading 91 country code if user pasted +91XXXXXXXXXX (12 digits)
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  // Strip leading 0 from 0XXXXXXXXXX
  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }
  return digits.slice(0, 10);
}

/** Soft truncate before schema validation to stop megabyte paste DoS on the client. */
export function hardCap(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}
