import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CERT Audit & Bank Compliance",
  description:
    "Organisation identity, compliance information, and bank verification details for Bhartiya Kisan Union (Umakanth).",
};

const checklist = [
  "Organisation full legal / operating name clearly displayed",
  "Registered / central office address with PIN code",
  "Authorised contact persons and phone numbers",
  "Official email address for correspondence",
  "Leadership / National President details",
  "Clear statement of objectives and welfare activities",
  "Programme pages describing use of funds",
  "Donation / contribution page with bank details section",
  "Privacy Policy and Terms of Use",
  "Contact page for public grievance / communication",
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        title="CERT Audit & Bank Compliance"
        subtitle="Transparent organisation information prepared for bank account verification and institutional review"
        image="/images/one.jpeg"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-5 md:px-6">
          <div className="rounded-2xl border border-brand-green/15 bg-brand-cream/40 p-4 sm:p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-sm">
              For Bank / Institutional Use
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-green sm:text-3xl">
              Organisation Identity Certificate (Website Declaration)
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              This page publishes verified public information about{" "}
              <strong className="text-foreground">{site.name}</strong> to
              support bank KYC, account opening, and CERT / compliance style
              audits. Details below match our letterhead and official
              communications.
            </p>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-brand-green/20 shadow-md sm:aspect-[21/9]">
              <Image
                src="/images/letterhead.png"
                alt={`${site.name} official letterhead`}
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-brand-green/10">
              <h3 className="font-display text-xl font-bold">Legal Identity</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-brand-green">Name</dt>
                  <dd className="text-muted">{site.name}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-green">Hindi Name</dt>
                  <dd className="text-muted">{site.hindiName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-green">
                    {site.presidentTitle}
                  </dt>
                  <dd className="text-muted">{site.president}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-green">Slogan</dt>
                  <dd className="text-muted">
                    {site.slogans.left} / {site.slogans.right}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-brand-green/10">
              <h3 className="font-display text-xl font-bold">
                Central Office &amp; Contact
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-brand-green">Address</dt>
                  <dd className="text-muted">{site.address.full}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-green">Email</dt>
                  <dd className="text-muted">
                    <a href={`mailto:${site.email}`} className="text-brand-teal underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-green">Phone</dt>
                  <dd className="text-muted">
                    +91 {site.phones[0]} / +91 {site.phones[1]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-brand-green p-6 text-white md:p-8">
            <h3 className="font-display text-2xl font-bold">
              Objects / Motives of Work
            </h3>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-white/95">
              <li>Child Welfare</li>
              <li>Child Education</li>
              <li>Child Health</li>
              <li>Children Sports</li>
              <li>Farmers Social Rights</li>
              <li>Old Age People Welfare</li>
            </ol>
            <p className="mt-5 text-sm text-white/85">
              All contributions received in the organisation account are intended
              solely for the above charitable and social welfare purposes.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-bold text-brand-green">
              Website Completeness Checklist (Bank Review)
            </h3>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-brand-orange/50 bg-orange-50 p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-brand-orange">
              Bank Account Details (for official use)
            </h3>
            <p className="mt-3 text-sm text-muted">
              Publish account details only after the bank account is opened /
              approved. Placeholder fields below are ready for your official
              banking information:
            </p>
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-foreground">Account Name</dt>
                <dd className="text-muted">{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Bank Name</dt>
                <dd className="text-muted">[To be filled after approval]</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Account Number</dt>
                <dd className="text-muted">[To be filled after approval]</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">IFSC Code</dt>
                <dd className="text-muted">[To be filled after approval]</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Branch</dt>
                <dd className="text-muted">[To be filled after approval]</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Account Type</dt>
                <dd className="text-muted">Current / Savings (NGO / Trust)</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-muted">
              Note: Do not accept cash donations without proper receipts. Keep
              registration certificates, PAN, and resolution copies ready for
              bank officers.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Donation Page
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-green"
            >
              Contact Office
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-brand-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-teal"
            >
              About Organisation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
