import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Container, CtaBanner, SectionHeading } from "@/components/ui";
import { focusAreas, howWeWork, site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, our mission, leadership, and focus areas.`,
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Bridging care for children, farmers, and elders across rural India"
        image="/images/homepagelaptopscreen.jpeg"
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container className="max-w-3xl text-center">
          <SectionHeading title="Who We Are?" />
          <p className="text-sm leading-relaxed text-muted sm:text-base md:text-lg">
            <strong className="text-foreground">{site.name}</strong> is a
            social welfare organisation established to serve communities through
            child welfare, child education, child health, children&apos;s sports,
            farmers&apos; social rights, and old-age people welfare.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base md:text-lg">
            Guided by National President{" "}
            <strong className="text-foreground">{site.president}</strong>, our
            team works with local stakeholders to build a sustainable and
            compassionate future for rural families.
          </p>
          <p className="mt-5 font-display text-lg text-brand-teal sm:text-xl">
            {site.hindiName}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange sm:text-sm">
            {site.slogans.left} · {site.slogans.right}
          </p>
        </Container>
      </section>

      <section className="bg-brand-cream/50 py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Our Story & Commitment"
            subtitle="From field outreach to institutional transparency"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
              <h3 className="font-display text-xl font-bold text-brand-green sm:text-2xl">
                What Drives Us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Rural families often face layered challenges — children without
                reliable nutrition or schooling, farmers seeking social dignity,
                and elders needing care. We respond with practical programmes
                that respect local culture and deliver visible support.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Our work is rooted in the spirit of{" "}
                <strong className="text-foreground">Jai Jawan, Jai Kisan</strong>{" "}
                — honouring those who protect and those who feed the nation,
                while nurturing the next generation.
              </p>
            </div>
            <div className="relative min-h-[240px] overflow-hidden rounded-2xl shadow-md sm:min-h-[300px]">
              <Image
                src="/images/one.jpeg"
                alt="Community with children"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20">
        <Image
          src="/images/one.jpeg"
          alt="Children and volunteers during community outreach"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-teal/90" />
        <Container className="relative z-10 max-w-5xl">
          <SectionHeading light title="Our Core Focus Areas" />
          <ul className="space-y-3 text-white">
            {focusAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/programs/${area.slug}`}
                  className="block rounded-xl bg-white/10 px-3 py-3 text-sm leading-relaxed backdrop-blur-sm transition hover:bg-white/15 sm:px-4 sm:text-base"
                >
                  <strong>{area.title}:</strong> {area.short}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading title="How We Serve" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <div key={item.step} className="rounded-xl border border-brand-green/10 p-5">
                <p className="text-xs font-bold text-brand-orange">{item.step}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/50 py-12 sm:py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
            <h3 className="font-display text-xl font-bold text-brand-green sm:text-2xl">
              Leadership
            </h3>
            <p className="mt-4 text-sm text-muted sm:text-base">
              <span className="font-semibold text-foreground">
                {site.presidentTitle}:
              </span>{" "}
              {site.president}
            </p>
            <p className="mt-3 text-sm text-muted">Central Office: {site.address.full}</p>
            <p className="mt-2 text-sm text-muted">
              Email:{" "}
              <a className="break-all text-brand-teal underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">
              Phone: +91 {site.phones[0]} / +91 {site.phones[1]}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-md sm:p-8">
            <h3 className="font-display text-xl font-bold text-brand-green sm:text-2xl">
              Why We Exist
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We bridge the gap between need and opportunity — ensuring children
              receive care and schooling, farmers receive social support, and
              elders live with dignity.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {values.map((v) => (
                <li key={v.title} className="flex gap-2">
                  <span className="text-brand-orange">●</span>
                  <span>
                    <strong className="text-foreground">{v.title}:</strong> {v.body}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-brand-orange hover:underline"
            >
              Support our work →
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Partner With Our Mission"
        body="Support programmes for children, farmers, and elders — or contact us for institutional verification."
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/contact"
        secondaryLabel="Contact Office"
      />
    </>
  );
}
