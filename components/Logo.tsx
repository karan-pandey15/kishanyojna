import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export default function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Bhartiya Kisan Union (Umakanth) — Home"
      className="group flex min-w-0 items-center gap-2 no-underline sm:gap-3"
    >
      <div
        className={`relative shrink-0 overflow-hidden rounded-full border-[3px] border-brand-saffron bg-brand-green-deep shadow-md ${
          compact ? "h-11 w-11" : "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
        }`}
        aria-hidden
      >
        <div className="absolute inset-[3px] rounded-full border border-white/40" />
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#2f8f5b,transparent_55%),linear-gradient(160deg,#0b3d24,#14532d_55%,#0f766e)]">
          <svg viewBox="0 0 64 64" className="h-[70%] w-[70%] text-white">
            <circle cx="32" cy="22" r="9" fill="#f3d7a4" />
            <path d="M18 52c2-12 10-18 14-18s12 6 14 18" fill="#c2410c" />
            <path
              d="M24 18c2-8 8-10 8-10s6 2 8 10c-3-2-6-3-8-3s-5 1-8 3z"
              fill="#1a1a1a"
            />
            <path
              d="M20 48c4-6 10-8 12-8s8 2 12 8"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-sm font-bold leading-tight text-brand-green sm:text-base md:text-lg">
          Bhartiya Kisan Union
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange sm:text-[11px]">
          (Umakanth)
        </p>
        <p className="mt-0.5 hidden text-[10px] leading-snug text-muted sm:block">
          Jai Jawan · Jai Kisan — Child &amp; Farmer Welfare
        </p>
      </div>
    </Link>
  );
}
