"use client";

import { useEffect } from "react";
import Link from "next/link";
import { logger } from "@/lib/logger";

/**
 * Route error boundary — never render stack traces or internal messages to users.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Route error", error.digest ?? error.message);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-display text-2xl font-bold text-brand-green">
        Something went wrong
      </h1>
      <p className="mt-3 text-sm text-muted">
        Please try again. If the problem continues, contact our office by phone.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border-2 border-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-green"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
