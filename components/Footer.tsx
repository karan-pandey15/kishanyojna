import Link from "next/link";
import Logo from "./Logo";
import { focusAreas, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-green-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-5 sm:py-12 md:grid-cols-2 md:px-6 md:py-14 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-xl bg-white/95 p-3 text-foreground">
            <Logo compact />
          </div>
          <p className="text-sm leading-relaxed text-white/85">{site.hindiName}</p>
          <p className="text-sm leading-relaxed text-white/80">
            Working for child welfare, education, health, sports, farmers&apos;
            social rights, and old-age people welfare.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg text-white sm:mb-4">Our Work</h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-white/85 sm:block sm:space-y-2">
            {focusAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/programs/${area.slug}`} className="hover:text-brand-saffron">
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg text-white sm:mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <Link href="/about" className="hover:text-brand-saffron">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-brand-saffron">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-brand-saffron">
                News &amp; Events
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand-saffron">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand-saffron">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg text-white sm:mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li>
              <span className="block font-semibold text-white">
                {site.presidentTitle}
              </span>
              {site.president}
            </li>
            <li className="leading-relaxed">{site.address.full}</li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-brand-saffron">
                {site.email}
              </a>
            </li>
            <li className="space-y-1">
              <a href={`tel:+91${site.phones[0]}`} className="block hover:text-brand-saffron">
                +91 {site.phones[0]}
              </a>
              <a href={`tel:+91${site.phones[1]}`} className="block hover:text-brand-saffron">
                +91 {site.phones[1]}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-xs text-white/70 sm:px-5 md:flex-row md:items-center md:justify-between md:px-6 md:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em] text-brand-saffron sm:tracking-[0.2em]">
            {site.slogans.left} · {site.slogans.right}
          </p>
        </div>
      </div>
    </footer>
  );
}
