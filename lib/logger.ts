/**
 * Safe logger — never write PII or secrets to console in production.
 * CERT/VAPT: production builds must not leak stack traces or payload data.
 */
const isDev = process.env.NODE_ENV === "development";

export const logger = {
  dev(...args: unknown[]) {
    if (isDev) {
      console.info("[dev]", ...args);
    }
  },
  error(message: string, _detail?: unknown) {
    if (isDev) {
      console.error("[error]", message, _detail);
    }
    // Production: swallow detail — surface only generic UI messages
  },
};
