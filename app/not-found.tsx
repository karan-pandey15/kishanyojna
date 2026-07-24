import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-brand-green">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
