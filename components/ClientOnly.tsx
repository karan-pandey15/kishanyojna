"use client";

import { useSyncExternalStore, type ReactNode } from "react";

type ClientOnlyProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

/** Subscribe is a no-op — client snapshot is always `true` after hydration. */
function subscribe() {
  return () => {};
}

function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

/**
 * Renders children only after client hydration.
 * Prevents mismatches when browser extensions inject DOM into SSR markup
 * (Sider quick-compose, Grammarly, ColorZilla `cz-shortcut-listen`, etc.).
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const mounted = useHasMounted();
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
