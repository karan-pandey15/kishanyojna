import { z } from "zod";
import {
  CONTACT_LIMITS,
  INDIAN_MOBILE_REGEX,
  PERSON_NAME_REGEX,
} from "@/constants/validation";
import {
  hardCap,
  normalizePhoneDigits,
  normalizeText,
} from "@/utils/normalize-input";

/**
 * Contact form Zod schema — shared by React Hook Form and Supabase submit path.
 *
 * Security notes (CERT-In / OWASP):
 * - Never trust client HTML `required` / `maxLength` alone
 * - Normalise before validate (trim, collapse spaces, strip invisible Unicode)
 * - Cap lengths to mitigate payload abuse
 */

const nameSchema = z
  .string()
  .transform((v) => hardCap(normalizeText(v), CONTACT_LIMITS.name.max))
  .pipe(
    z
      .string()
      .min(CONTACT_LIMITS.name.min, {
        message: `Name must be at least ${CONTACT_LIMITS.name.min} characters.`,
      })
      .max(CONTACT_LIMITS.name.max, {
        message: `Name must be at most ${CONTACT_LIMITS.name.max} characters.`,
      })
      .regex(PERSON_NAME_REGEX, {
        message: "Name may only contain letters and spaces.",
      }),
  );

const emailSchema = z
  .string()
  .transform((v) =>
    hardCap(normalizeText(v).toLowerCase(), CONTACT_LIMITS.email.max),
  )
  .pipe(
    z
      .email({ message: "Enter a valid email address." })
      .max(CONTACT_LIMITS.email.max, {
        message: `Email must be at most ${CONTACT_LIMITS.email.max} characters.`,
      }),
  );

const phoneSchema = z
  .string()
  .transform((v) => normalizePhoneDigits(v))
  .pipe(
    z
      .string()
      .length(CONTACT_LIMITS.phone.length, {
        message: "Phone must be exactly 10 digits.",
      })
      .regex(INDIAN_MOBILE_REGEX, {
        message: "Enter a valid 10-digit Indian mobile number.",
      }),
  );

const subjectSchema = z
  .string()
  .transform((v) => hardCap(normalizeText(v), CONTACT_LIMITS.subject.max))
  .pipe(
    z
      .string()
      .min(CONTACT_LIMITS.subject.min, {
        message: `Subject must be at least ${CONTACT_LIMITS.subject.min} characters.`,
      })
      .max(CONTACT_LIMITS.subject.max, {
        message: `Subject must be at most ${CONTACT_LIMITS.subject.max} characters.`,
      }),
  );

const messageSchema = z
  .string()
  .transform((v) => hardCap(normalizeText(v), CONTACT_LIMITS.message.max))
  .pipe(
    z
      .string()
      .min(CONTACT_LIMITS.message.min, {
        message: `Message must be at least ${CONTACT_LIMITS.message.min} characters.`,
      })
      .max(CONTACT_LIMITS.message.max, {
        message: `Message must be at most ${CONTACT_LIMITS.message.max} characters.`,
      }),
  );

/**
 * Validated, normalised contact payload for Supabase `contact_message` inserts.
 *
 * Optional Turnstile token field is reserved for future Cloudflare Turnstile
 * integration — ignored by Zod until the widget is enabled.
 */
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  subject: subjectSchema,
  message: messageSchema,
  /** Future: Cloudflare Turnstile response token (server-verified). */
  turnstileToken: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Raw form state before Zod normalisation (React Hook Form default values). */
export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  turnstileToken?: string;
};

export const CONTACT_FIELD_ORDER = [
  "name",
  "email",
  "phone",
  "subject",
  "message",
] as const;

export type ContactFieldName = (typeof CONTACT_FIELD_ORDER)[number];

export const emptyContactForm = (): ContactFormInput => ({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  turnstileToken: "",
});
