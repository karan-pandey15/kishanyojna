import Link from "next/link";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs ${
            light ? "text-brand-saffron" : "text-brand-orange"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${
            light ? "text-white/85" : "text-muted"
          } ${align === "left" ? "mx-0" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

type CtaBannerProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBannerProps) {
  return (
    <section className="bg-brand-green px-4 py-12 text-center text-white sm:px-6 sm:py-14 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
          {body}
        </p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href={primaryHref}
            className="rounded-full bg-brand-orange px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#d45f0b]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="rounded-full border-2 border-white px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-brand-green"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-5 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
