/**
 * Shared validation limits — keep frontend and Supabase checks aligned.
 * CERT/VAPT: never rely on HTML maxLength alone.
 */
export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  phone: { length: 10 },
  subject: { min: 5, max: 120 },
  message: { min: 20, max: 1000 },
} as const;

/** Indian mobile: exactly 10 digits, starting 6–9 (TRAI numbering plan). */
export const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

/**
 * Name: Unicode letters and spaces only (no digits, punctuation, or emoji).
 */
export const PERSON_NAME_REGEX = /^[\p{L} ]+$/u;

/** Supabase table used by the contact form (RLS INSERT for anon). */
export const CONTACT_MESSAGE_TABLE = "contact_message" as const;
