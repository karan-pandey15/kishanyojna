import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBanner, SectionHeading } from "@/components/ui";
import { donationImpacts, faqs, focusAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate Now",
  description: `Support ${site.name} programmes for children, farmers, and elders.`,
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate Now"
        subtitle="Your support funds child welfare, education, health, sports, farmers' rights, and elder care"
        image="/images/three.jpeg"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <SectionHeading
              align="left"
              title="Make a Difference"
              subtitle="Every contribution strengthens our six welfare pillars"
            />
            <p className="-mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Contributions to{" "}
              <strong className="text-foreground">{site.name}</strong> help us
              run on-ground programmes for children and communities. Please use
              only the official organisation bank account once details are
              published after bank approval.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {focusAreas.map((a) => (
                <li
                  key={a.slug}
                  className="flex items-start gap-2 rounded-lg bg-brand-cream/60 px-3 py-2 text-sm text-muted"
                >
                  <span className="mt-1 text-brand-orange">●</span>
                  <Link href={`/programs/${a.slug}`} className="hover:text-brand-green hover:underline">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/compliance"
              className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-brand-teal hover:underline"
            >
              View CERT Audit &amp; compliance page →
            </Link>
          </div>

          <div className="rounded-2xl bg-brand-cream p-5 shadow-inner sm:p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-brand-green sm:text-2xl">
              Official Bank Transfer
            </h3>
            <p className="mt-2 text-sm text-muted">
              Bank details will be updated after account approval. Until then,
              contact the office for verified payment instructions.
            </p>
            <dl className="mt-6 space-y-3 text-sm sm:space-y-4">
              <div className="rounded-lg bg-white p-4">
                <dt className="font-semibold text-brand-green">Account Name</dt>
                <dd className="mt-1 text-foreground">{site.name}</dd>
              </div>
              <div className="rounded-lg bg-white p-4">
                <dt className="font-semibold text-brand-green">Bank / IFSC / A/C No.</dt>
                <dd className="mt-1 text-muted">
                  To be published after bank approval — see{" "}
                  <Link href="/compliance" className="text-brand-orange underline">
                    CERT Audit page
                  </Link>
                  .
                </dd>
              </div>
              <div className="rounded-lg bg-white p-4">
                <dt className="font-semibold text-brand-green">Contact for Receipt</dt>
                <dd className="mt-1 break-words">
                  <a href={`mailto:${site.email}`} className="text-brand-teal underline">
                    {site.email}
                  </a>
                  <br />
                  <a href={`tel:+91${site.phones[0]}`}>+91 {site.phones[0]}</a>
                  {" / "}
                  <a href={`tel:+91${site.phones[1]}`}>+91 {site.phones[1]}</a>
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-muted">
              Please share transaction reference by email/WhatsApp for
              acknowledgement and receipt.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/50 py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Where Your Support Goes"
            subtitle="Suggested giving levels — any amount is welcome and valued"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {donationImpacts.map((item) => (
              <article
                key={item.amount}
                className="rounded-2xl border border-brand-green/10 bg-white p-5 text-center shadow-sm"
              >
                <p className="font-display text-2xl font-bold text-brand-orange">
                  {item.amount}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.impact}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/two.jpeg"
              alt="Children receiving nutrition support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              title="Transparent Giving"
              subtitle="Built for community trust and bank-ready clarity"
            />
            <ul className="space-y-3 text-sm text-muted sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                Official organisation name and office address published on site
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                Programme pages explain how funds support each motive of work
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                CERT Audit page prepared for institutional / bank review
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                Receipts issued after verified contribution confirmation
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/40 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="Donation FAQs" />
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-green/10 open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-semibold text-brand-green marker:content-none">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <span className="text-brand-orange transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Need Help Donating?"
        body="Call or email the central office for verified payment instructions and receipts."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/compliance"
        secondaryLabel="CERT Audit"
      />
    </>
  );
}
