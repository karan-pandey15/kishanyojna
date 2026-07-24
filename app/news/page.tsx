import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBanner, SectionHeading } from "@/components/ui";
import { newsEvents, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Events",
  description: `Latest community programmes and events from ${site.name}.`,
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Updates from our field programmes and community initiatives"
        image="/images/five.jpeg"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Latest From the Field"
            subtitle="Stories of child welfare, education, health, sports, farmers’ rights, and elder care"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((event) => (
              <article
                key={event.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-brand-green/10"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
                      {event.category}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      {event.date}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold text-brand-green sm:text-xl">
                    {event.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {event.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/50 py-12 sm:py-16">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            title="Want to Join an Event?"
            subtitle="Volunteers, donors, and community partners are welcome. Contact the central office to participate in upcoming outreach programmes."
          />
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-deep"
          >
            Contact for Volunteering
          </Link>
        </Container>
      </section>

      <CtaBanner
        title="Support the Next Outreach"
        body="Your donation helps us continue clothing drives, nutrition support, education kits, and elder care visits."
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/programs"
        secondaryLabel="Our Work"
      />
    </>
  );
}
