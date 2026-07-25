import { CONTACT_MESSAGE_TABLE } from "@/constants/validation";
import { USER_ERRORS } from "@/lib/errors";
import { logger } from "@/lib/logger";
import { getSupabaseBrowserClient } from "@/lib/supabase";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/schemas/contact";
import type { ContactSubmitResult } from "@/types/contact";

/**
 * Insert a validated contact enquiry into Supabase `contact_message`.
 *
 * Security:
 * - Re-validates with Zod before insert (never trust UI-only checks)
 * - Uses anon/publishable key + RLS INSERT only (no service_role on the client)
 * - Never returns Supabase/Postgres error details to the UI
 */
export async function submitContact(
  data: ContactFormValues,
): Promise<ContactSubmitResult> {
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return {
      ok: false,
      code: "VALIDATION_ERROR",
      message: USER_ERRORS.VALIDATION,
    };
  }

  const { turnstileToken: _turnstileToken, ...payload } = parsed.data;
  void _turnstileToken;

  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    logger.error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local, then restart `npm run dev`.",
    );
    return {
      ok: false,
      code: "SERVICE_UNAVAILABLE",
      message: USER_ERRORS.SERVICE_UNAVAILABLE,
    };
  }

  try {
    const { error } = await supabase.from(CONTACT_MESSAGE_TABLE).insert({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject,
      message: payload.message,
    });

    if (error) {
      logger.error("Supabase contact insert failed", {
        code: error.code,
        message: error.message,
      });

      if (error.code === "42501" || error.code === "PGRST301") {
        return {
          ok: false,
          code: "SERVICE_UNAVAILABLE",
          message: USER_ERRORS.SERVICE_UNAVAILABLE,
        };
      }

      return {
        ok: false,
        code: "SERVICE_UNAVAILABLE",
        message: USER_ERRORS.SERVICE_UNAVAILABLE,
      };
    }

    return { ok: true };
  } catch (err) {
    logger.error("Contact submit failed", err);
    return {
      ok: false,
      code: "NETWORK_ERROR",
      message: USER_ERRORS.NETWORK,
    };
  }
}
