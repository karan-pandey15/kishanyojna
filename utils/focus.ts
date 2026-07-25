/**
 * Focus the first invalid control for keyboard / screen-reader UX (WCAG 2.1 AA).
 */
export function focusFirstInvalid(
  fieldOrder: readonly string[],
  errors: Partial<Record<string, string>>,
): void {
  if (typeof document === "undefined") return;

  for (const name of fieldOrder) {
    if (!errors[name]) continue;
    const el = document.getElementById(name);
    if (el instanceof HTMLElement) {
      el.focus();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }
}
