import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Container, CtaBanner, SectionHeading } from "@/components/ui";
import { focusAreas, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = focusAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Programme" };
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `${site.url}/programs/${area.slug}` },
  };
}

const extraContent: Record<
  string,
  { points: string[]; activities: string[]; outcomes: string[] }
> = {
  "child-welfare": {
    points: [
      "Community meal and nutrition support for underprivileged children",
      "Clothing and essential supplies distribution drives",
      "Child safety awareness with local families and volunteers",
      "Dignity-first outreach that protects childhood",
    ],
    activities: [
      "Seasonal clothing distribution",
      "Nutrition camps and meal programmes",
      "Family counselling and welfare visits",
      "Hygiene kit distribution",
    ],
    outcomes: [
      "Children receive essential clothing and care items",
      "Families feel supported without stigma",
      "Local volunteer networks grow stronger",
    ],
  },
  "child-education": {
    points: [
      "School supplies and learning material support",
      "Encouragement for school enrolment and attendance",
      "Mentorship and basic tutoring where needed",
      "Equal opportunity for rural and underprivileged children",
    ],
    activities: [
      "Stationery and book kits",
      "Learning support sessions",
      "Community awareness on education rights",
      "Motivation meetings with parents",
    ],
    outcomes: [
      "Better school continuity for needy students",
      "Reduced drop-out risk from material shortages",
      "Stronger family commitment to education",
    ],
  },
  "child-health": {
    points: [
      "Nutrition-focused meal programmes",
      "Hygiene and sanitation awareness for families",
      "Guidance to access basic health services",
      "Preventive care messaging for young children",
    ],
    activities: [
      "Healthy meal distribution",
      "Hygiene awareness camps",
      "Health check linkage with local facilities",
      "Parent education sessions",
    ],
    outcomes: [
      "Improved daily nutrition access",
      "Better hygiene habits at home",
      "Faster referral to basic care when needed",
    ],
  },
  "children-sports": {
    points: [
      "Encouraging outdoor play and physical fitness",
      "Building teamwork, discipline, and confidence",
      "Inclusive sports opportunities for rural children",
      "Safe spaces for play and recreation",
    ],
    activities: [
      "Local sports meet participation",
      "Playground and outdoor activity days",
      "Fitness and team-building sessions",
      "Community play festivals",
    ],
    outcomes: [
      "Children gain confidence through play",
      "Healthier daily routines and fitness",
      "Positive peer bonding in communities",
    ],
  },
  "farmers-rights": {
    points: [
      "Advocacy for farmers’ social dignity and rights",
      "Community awareness inspired by Jai Jawan, Jai Kisan",
      "Support for collective farmer voice and solidarity",
      "Engagement on fair treatment and social justice",
    ],
    activities: [
      "Awareness meetings and dialogues",
      "Community organisation support",
      "Public campaigns for farmers’ dignity",
      "Local leadership consultations",
    ],
    outcomes: [
      "Stronger community voice for farmers",
      "Greater awareness of social rights",
      "Improved solidarity across villages",
    ],
  },
  "old-age-welfare": {
    points: [
      "Respectful care and companionship for elders",
      "Welfare outreach for senior citizens in need",
      "Support for dignity, health awareness, and belonging",
      "Intergenerational community bonding",
    ],
    activities: [
      "Elder welfare visits",
      "Health and nutrition awareness",
      "Community support gatherings",
      "Companionship outreach",
    ],
    outcomes: [
      "Reduced isolation among seniors",
      "Practical welfare support delivered with dignity",
      "Younger generations engage in elder care",
    ],
  },
};

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = focusAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const extra = extraContent[slug];
  const others = focusAreas.filter((a) => a.slug !== slug);

  return (
    <>
      <PageHero title={area.title} subtitle={area.short} image={area.image} />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <SectionHeading align="left" title="About This Programme" />
            <p className="-mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {area.longDescription}
            </p>
            <ul className="mt-6 space-y-3">
              {extra?.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#d45f0b] sm:w-auto"
            >
              Support This Cause
            </Link>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl shadow-xl sm:min-h-[320px]">
            <Image
              src={area.image}
              alt={area.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/60 py-12 sm:py-14">
        <Container>
          <SectionHeading title="Key Activities" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {extra?.activities.map((act) => (
              <div
                key={act}
                className="rounded-xl bg-white p-4 text-sm font-semibold text-brand-green shadow-sm ring-1 ring-brand-green/10 sm:p-5"
              >
                {act}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading align="left" title="Programme Goals" />
            <ul className="-mt-4 space-y-3">
              {area.goals.map((goal) => (
                <li
                  key={goal}
                  className="rounded-xl border border-brand-green/10 bg-brand-cream/40 px-4 py-3 text-sm text-muted"
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" title="Expected Outcomes" />
            <ul className="-mt-4 space-y-3">
              {extra?.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="font-bold text-brand-teal">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream/40 py-12 sm:py-14">
        <Container>
          <SectionHeading title="Explore Other Programmes" />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/programs/${o.slug}`}
                className="rounded-full border border-brand-green/20 bg-white px-4 py-2 text-sm font-semibold text-brand-green hover:border-brand-orange hover:text-brand-orange"
              >
                {o.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title={`Support ${area.title}`}
        body="Your contribution helps us continue this programme with care, transparency, and community partnership."
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
      />
    </>
  );
}
