import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBanner, SectionHeading } from "@/components/ui";
import { focusAreas, howWeWork, site, whatWeDo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our programmes: child welfare, education, health, sports, farmers' social rights, and old-age welfare.",
  alternates: { canonical: `${site.url}/programs` },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Six pillars of service for children, farmers, and elders"
        image="/images/five.jpeg"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Our Six Motives of Work"
            subtitle="Tap any programme to read goals, activities, and how you can support"
          />
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/programs/${area.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-brand-green/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="font-display text-lg font-bold text-brand-green sm:text-xl">
                    {area.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.short}</p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-brand-orange">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/60 py-12 sm:py-16">
        <Container>
          <SectionHeading title="What We Do" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {whatWeDo.map((item) => (
              <article key={item.title} className="rounded-xl bg-white p-5 shadow-md sm:p-6">
                <h3 className="font-display text-lg font-bold text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="From Need to Action"
            subtitle="Our delivery approach stays practical, local, and accountable"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-brand-green/10 bg-brand-cream/40 p-5"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-brand-orange">
                  {item.step}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Support a Programme"
        body="Choose a cause close to your heart and help us continue on-ground welfare work."
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/contact"
        secondaryLabel="Volunteer / Enquire"
      />
    </>
  );
}
