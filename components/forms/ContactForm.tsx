"use client";

import ClientOnly from "@/components/ClientOnly";
import { CONTACT_LIMITS } from "@/constants/validation";
import { useContactForm } from "@/hooks/useContactForm";
import { SecureInput, SecureTextarea } from "@/components/forms/FormField";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { ContactFormSkeleton } from "@/components/ui/Skeleton";
import { getTurnstileSiteKey } from "@/lib/turnstile";

/**
 * Public export — mounts only on the client so browser extensions that inject
 * nodes into textareas (Sider, Grammarly, etc.) cannot break SSR hydration.
 */
export default function ContactForm() {
  return (
    <ClientOnly fallback={<ContactFormSkeleton />}>
      <ContactFormFields />
    </ClientOnly>
  );
}

function ContactFormFields() {
  const {
    registerField,
    phoneRegister,
    onSubmit,
    onBlurNormalize,
    errors,
    isSubmitting,
    showSuccess,
    rootError,
  } = useContactForm();

  // Reserved for future Cloudflare Turnstile widget mount
  const turnstileSiteKey = getTurnstileSiteKey();

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={onSubmit}
      noValidate
      aria-busy={isSubmitting}
      aria-describedby="contact-form-status"
    >
      <SecureInput
        id="name"
        label="Full Name"
        type="text"
        required
        autoComplete="name"
        inputMode="text"
        maxLength={CONTACT_LIMITS.name.max}
        disabled={isSubmitting}
        error={errors.name?.message}
        {...registerField("name")}
      />

      <SecureInput
        id="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        maxLength={CONTACT_LIMITS.email.max}
        disabled={isSubmitting}
        error={errors.email?.message}
        {...registerField("email")}
      />

      <SecureInput
        id="phone"
        label="Phone"
        type="tel"
        required
        autoComplete="tel-national"
        inputMode="numeric"
        maxLength={CONTACT_LIMITS.phone.length}
        disabled={isSubmitting}
        error={errors.phone?.message}
        hint="10-digit Indian mobile number"
        {...phoneRegister}
        onBlur={(e) => {
          phoneRegister.onBlur(e);
          onBlurNormalize("phone");
        }}
      />

      <SecureInput
        id="subject"
        label="Subject"
        type="text"
        required
        autoComplete="off"
        maxLength={CONTACT_LIMITS.subject.max}
        disabled={isSubmitting}
        error={errors.subject?.message}
        {...registerField("subject")}
      />

      <SecureTextarea
        id="message"
        label="Message"
        required
        rows={5}
        maxLength={CONTACT_LIMITS.message.max}
        disabled={isSubmitting}
        error={errors.message?.message}
        {...registerField("message")}
      />

      {/* Future Cloudflare Turnstile slot — enable via NEXT_PUBLIC_TURNSTILE_SITE_KEY */}
      {turnstileSiteKey ? (
        <div
          id="cf-turnstile-slot"
          className="min-h-[65px]"
          data-sitekey={turnstileSiteKey}
          aria-label="Security verification"
        />
      ) : null}

      <div
        id="contact-form-status"
        role="status"
        aria-live="polite"
        className="min-h-[1.25rem]"
      >
        {showSuccess && !isSubmitting && !rootError ? (
          <p className="animate-[fade-in_0.4s_ease-out] rounded-lg bg-brand-green/10 px-3 py-2 text-sm font-semibold text-brand-green">
            Thank you! Your message was sent successfully.
          </p>
        ) : null}
        {rootError ? (
          <p className="animate-[fade-in_0.4s_ease-out] rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {rootError}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#d45f0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner className="h-4 w-4" />
            <span>Sending…</span>
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>
    </form>
  );
}
