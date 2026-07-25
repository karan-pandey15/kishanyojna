"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ToastVariant = "success" | "error" | "info";

export type ToastItem = {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
};

type ToastContextValue = {
  toasts: ToastItem[];
  showToast: (toast: Omit<ToastItem, "id">) => void;
  dismissToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const AUTO_DISMISS_MS = 5500;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `toast-${Date.now()}`;

      setToasts((prev) => [...prev, { ...toast, id }]);

      window.setTimeout(() => {
        dismissToast(id);
      }, AUTO_DISMISS_MS);
    },
    [dismissToast],
  );

  const value = useMemo(
    () => ({ toasts, showToast, dismissToast }),
    [toasts, showToast, dismissToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-4 z-[200] flex flex-col items-center gap-2 px-4 sm:items-end sm:px-6"
      aria-live="polite"
      aria-relevant="additions text"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role={toast.variant === "error" ? "alert" : "status"}
          className={`pointer-events-auto w-full max-w-sm animate-[toast-in_0.35s_ease-out] rounded-xl px-4 py-3 shadow-lg ring-1 ${
            toast.variant === "success"
              ? "bg-brand-green text-white ring-brand-green-deep/30"
              : toast.variant === "error"
                ? "bg-red-700 text-white ring-red-900/30"
                : "bg-white text-foreground ring-brand-green/15"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold">{toast.title}</p>
              {toast.description ? (
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    toast.variant === "info"
                      ? "text-muted"
                      : "text-white/90"
                  }`}
                >
                  {toast.description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              className={`shrink-0 rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                toast.variant === "info"
                  ? "text-muted hover:bg-brand-cream focus-visible:outline-brand-orange"
                  : "text-white/90 hover:bg-white/15 focus-visible:outline-white"
              }`}
              aria-label="Dismiss notification"
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
