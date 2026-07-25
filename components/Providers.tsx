"use client";

import { ToastProvider } from "@/components/ui/Toast";
import type { ReactNode } from "react";

/** Client-side providers (toasts, future auth, etc.). */
export default function Providers({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
