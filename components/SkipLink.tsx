/**
 * Skip link — first focusable control for keyboard users (WCAG 2.4.1).
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[100] -translate-y-[200%] rounded-md bg-brand-orange px-4 py-2 text-sm font-bold text-white outline outline-2 outline-offset-2 outline-white transition focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
