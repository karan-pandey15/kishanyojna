/**
 * User-facing error catalogue — never expose internals, stack traces, or SQL/API codes.
 */
export const USER_ERRORS = {
  VALIDATION: "Please correct the highlighted fields and try again.",
  NETWORK:
    "We could not reach the server. Please check your connection and try again.",
  SERVICE_UNAVAILABLE:
    "Your message could not be sent right now. Please try again later or call our office.",
  RATE_LIMIT: "Too many attempts. Please wait a moment and try again.",
  GENERIC: "Something went wrong. Please try again later.",
} as const;

export type UserErrorKey = keyof typeof USER_ERRORS;
