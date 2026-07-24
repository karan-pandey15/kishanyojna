import Image from "next/image";
import Link from "next/link";
import { CtaBanner, Container, SectionHeading } from "@/components/ui";
import {
  focusAreas,
  howWeWork,
  impactStats,
  site,
  values,
  whatWeDo,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden sm:min-h-[85vh] md:min-h-[88vh]">
        <Image
          src="/images/one.jpeg"
          alt="Community outreach with children"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/92 via-brand-green-deep/75 to-brand-teal/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,106,18,0.2),transparent_45%)]" />

        <Container className="relative z-10 flex min-h-[78vh] flex-col justify-center py-16 sm:min-h-[85vh] sm:py-20 md:min-h-[88vh]">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200 sm:mb-3 sm:text-sm md:text-base">
            Welcome to {site.shortName}
          </p>
          <h1 className="max-w-4xl font-display text-[1.85rem] font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Join Us In Nurturing Children, Farmers &amp; Elders
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 sm:mt-6 sm:text-base md:text-lg">
            {site.name} is dedicated to child welfare, education, health,
            sports, farmers&apos; social rights, and old-age people welfare —
            building dignity across generations in rural India.
          </p>
          <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-brand-orange px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#d45f0b]"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-brand-green"
            >
              Know About Us
            </Link>
          </div>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-saffron sm:mt-10 sm:text-xs">
            {site.slogans.left} · {site.slogans.right}
          </p>
        </Container>
      </section>

      <section className="border-b border-brand-green/10 bg-white">
        <Container className="grid grid-cols-2 gap-4 py-8 sm:gap-6 md:grid-cols-4 md:py-10">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-brand-green sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-muted sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-orange sm:text-xs">
              About Us
            </p>
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
              Welcome to{" "}
              <span className="text-brand-teal">Bhartiya Kisan</span> Union
              (Umakanth)
            </h2>
            <p className="mt-3 text-lg font-semibold text-foreground sm:text-xl">
              Empowering Children, Farmers &amp; Communities
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We believe every child deserves care, education, health, and play;
              every farmer deserves social dignity and rights; and every elder
              deserves respect and support. Beyond agriculture, we are committed
              to child welfare programmes and compassionate community service.
            </p>
            <div className="mt-6 h-px bg-brand-green/15" />
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full bg-[#e8b86d] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-saffron"
            >
              Read More
            </Link>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:order-2">
            <Image
              src="/images/homepagelaptopscreen.jpeg"
              alt="Family receiving community support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-teal text-white py-12 sm:py-16 md:py-20">
        <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
                To support children, farmers, and elders by advancing child
                welfare, education, health, sports, farmers&apos; social rights,
                and old-age people welfare — creating sustainable, healthy
                communities.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
                Our Vision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
                A future where every child learns and thrives, every farmer is
                treated with dignity, women and families live with health and
                respect, and animals and elders are cared for with compassion.
              </p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl md:max-h-[520px] md:w-[90%] md:justify-self-end">
            <Image
              src="/images/three.jpeg"
              alt="Child receiving clothing support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20">
        <Image src="/images/four.jpeg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-brand-teal/88" />
        <Container className="relative z-10 max-w-5xl">
          <SectionHeading
            light
            title="Our Core Focus Areas"
            subtitle="Six motives of work guiding every programme we run"
          />
          <ul className="space-y-3 text-white sm:space-y-4">
            {focusAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/programs/${area.slug}`}
                  className="group block rounded-xl bg-white/10 px-3 py-3 backdrop-blur-sm transition hover:bg-white/15 sm:px-4 sm:py-3.5"
                >
                  <span className="font-bold group-hover:underline">{area.title}:</span>{" "}
                  <span className="text-sm text-white/95 sm:text-base">{area.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-cream/60 py-12 sm:py-16 md:py-20">
        <Container>
          <SectionHeading
            title="What We Do"
            subtitle="Practical programmes that turn compassion into community action"
          />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {whatWeDo.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-white p-5 shadow-md ring-1 ring-brand-green/5 sm:p-6"
              >
                <h3 className="font-display text-lg font-bold text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <SectionHeading
            title="How We Work"
            subtitle="A simple, accountable process from need to delivery"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-brand-green/10 bg-brand-cream/40 p-5 sm:p-6"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-brand-orange">
                  {item.step}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/40 py-12 sm:py-16">
        <Container>
          <SectionHeading title="Our Values" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article key={v.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-brand-green/10">
                <h3 className="font-display text-lg font-bold text-brand-teal">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            { img: "/images/two.jpeg", label: "Child Health & Nutrition" },
            { img: "/images/five.jpeg", label: "Children & Community Care" },
            { img: "/images/homepagelaptopscreen.jpeg", label: "Family & Social Support" },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/85 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-display text-base font-bold text-white sm:text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Support Our Mission"
        body="Your contribution helps children, farmers, and elders. For bank account verification and CERT audit documentation, visit our compliance page."
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/compliance"
        secondaryLabel="CERT Audit Info"
      />
    </>
  );
}
