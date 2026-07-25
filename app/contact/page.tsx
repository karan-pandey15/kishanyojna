import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { faqs, focusAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} central office in Mainpuri, Uttar Pradesh.`,
  alternates: {
    canonical: `${site.url}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${site.shortName}`,
    description: `Contact ${site.name} central office in Mainpuri, Uttar Pradesh.`,
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach our central office for programmes, donations, and bank verification queries"
        image="/images/two.jpeg"
        alt="Community health and outreach"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-2xl bg-brand-green p-5 text-white sm:p-6 md:p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">Central Office</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
                {site.address.full}
              </p>
              <p className="mt-4 text-sm text-brand-saffron">{site.hindiName}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/80">
                {site.slogans.left} · {site.slogans.right}
              </p>
            </div>

            <div className="rounded-2xl border border-brand-green/15 p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold text-brand-green sm:text-xl">
                Leadership
              </h3>
              <p className="mt-3 text-sm text-muted">
                <strong className="text-foreground">{site.presidentTitle}</strong>
                <br />
                {site.president}
              </p>
            </div>

            <div className="rounded-2xl border border-brand-green/15 p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold text-brand-green sm:text-xl">
                Phone &amp; Email
              </h3>
              <div className="mt-3 space-y-2 text-sm text-muted">
                <a
                  className="block rounded-lg bg-brand-cream/70 px-3 py-2 hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  href={`tel:+91${site.phones[0]}`}
                >
                  +91 {site.phones[0]}
                </a>
                <a
                  className="block rounded-lg bg-brand-cream/70 px-3 py-2 hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  href={`tel:+91${site.phones[1]}`}
                >
                  +91 {site.phones[1]}
                </a>
                <a
                  className="block break-all rounded-lg bg-brand-cream/70 px-3 py-2 text-brand-teal underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-green/15 p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold text-brand-green sm:text-xl">
                Enquire About
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted sm:text-sm">
                {focusAreas.map((a) => (
                  <li key={a.slug} className="rounded-md bg-brand-cream/50 px-2 py-1.5">
                    {a.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-brand-cream/70 p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-brand-green sm:text-2xl">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-muted">
              For bank documentation requests, mention
              &quot;Bank Verification&quot; in your subject.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/40 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title="Quick Answers" />
          <div className="space-y-3">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-green/10 sm:p-5"
              >
                <h3 className="font-semibold text-brand-green">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
