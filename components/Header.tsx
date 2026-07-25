"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/lib/site";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Our Work" },
  { href: "/programs/child-welfare", label: "Child Welfare" },
  { href: "/programs/child-education", label: "Education" },
  { href: "/programs/child-health", label: "Child Health" },
  { href: "/programs/children-sports", label: "Sports" },
  { href: "/programs/farmers-rights", label: "Farmers Rights" },
  { href: "/programs/old-age-welfare", label: "Old Age Welfare" },
  { href: "/contact", label: "Contact Us" },
] as const;

const secondaryLinks = [
  { href: "/news", label: "News & Events" },
  { href: "/donate", label: "Donate" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkClass(active: boolean) {
  return `whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide transition-colors xl:text-[12px] ${
    active
      ? "text-brand-orange underline decoration-2 underline-offset-4"
      : "text-brand-orange/90 hover:text-brand-green"
  }`;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close drawer when the route changes (React-recommended render adjustment)
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-brand-green text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-3 py-2 text-[10px] leading-relaxed sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 sm:text-xs md:px-6">
          <p className="line-clamp-2 sm:line-clamp-none">{site.address.full}</p>
          <p className="shrink-0">
            Call:{" "}
            <a className="underline-offset-2 hover:underline" href={`tel:+91${site.phones[0]}`}>
              +91 {site.phones[0]}
            </a>
            <span className="mx-1">·</span>
            <a className="underline-offset-2 hover:underline" href={`tel:+91${site.phones[1]}`}>
              +91 {site.phones[1]}
            </a>
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-brand-green/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-6">
          <div className="min-w-0 flex-1 lg:flex-none">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden min-w-0 flex-1 flex-col gap-2 lg:flex" aria-label="Main">
            <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(isActive(pathname, link.href))}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Centered secondary row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(isActive(pathname, link.href))}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/donate"
              className="hidden rounded-full bg-brand-orange px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d45f0b] sm:inline-flex xl:px-5 xl:text-xs"
            >
              Donate Now
            </Link>

            {/* Mobile hamburger — right side */}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-green/25 bg-brand-cream text-brand-green transition hover:bg-brand-green hover:text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-sidebar"
              onClick={() => setOpen(true)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/45 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />

      {/* Right sidebar drawer */}
      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal={open}
        className={`fixed top-0 right-0 z-70 flex h-full w-[min(88vw,320px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-brand-green/10 bg-brand-green px-4 py-4 text-white">
          <div>
            <p className="font-display text-sm font-bold leading-tight">
              Bhartiya Kisan Union
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-brand-saffron">
              (Umakanth)
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            Main Menu
          </p>
          <ul className="space-y-1">
            {primaryLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-brand-orange text-white"
                        : "text-brand-green hover:bg-brand-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mb-2 mt-5 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            Quick Links
          </p>
          <ul className="space-y-1">
            {secondaryLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-brand-teal text-white"
                        : "text-brand-green hover:bg-brand-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md"
          >
            Donate Now
          </Link>

          <div className="mt-6 rounded-xl bg-brand-cream px-3 py-4 text-xs text-muted">
            <p className="font-semibold text-brand-green">Call Us</p>
            <a className="mt-1 block" href={`tel:+91${site.phones[0]}`}>
              +91 {site.phones[0]}
            </a>
            <a className="block" href={`tel:+91${site.phones[1]}`}>
              +91 {site.phones[1]}
            </a>
            <a className="mt-2 block break-all text-brand-teal" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </nav>
      </aside>
    </header>
  );
}
