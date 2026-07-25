export type {
  ContactFieldName,
  ContactFormInput,
  ContactFormValues,
} from "@/schemas/contact";

/** Discriminated result from `submitContact`. */
export type ContactSubmitResult =
  | { ok: true }
  | {
      ok: false;
      /** Machine code for logging — never shown raw to users */
      code:
        | "VALIDATION_ERROR"
        | "NETWORK_ERROR"
        | "SERVICE_UNAVAILABLE"
        | "RATE_LIMITED"
        | "UNKNOWN";
      message: string;
    };

export type FormStatus = "idle" | "submitting" | "success" | "error";
