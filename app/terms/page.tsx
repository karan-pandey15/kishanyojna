import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for the official website of ${site.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Please read these terms before using our website or making contributions"
        image="/images/five.jpeg"
      />
      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl space-y-8 text-sm text-muted sm:text-base">
          <SectionHeading
            align="left"
            title="Website Terms"
            subtitle={`Official website of ${site.name}`}
          />
          <p className="-mt-4 leading-relaxed">
            This website is operated by {site.name} for public information,
            programme awareness, and legitimate organisational communication
            including bank / CERT compliance transparency.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Use of Content
            </h2>
            <p className="mt-3 leading-relaxed">
              Text, logos, and images on this site are for informational purposes.
              Unauthorised commercial reuse is not permitted without written
              consent from the organisation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Donations
            </h2>
            <p className="mt-3 leading-relaxed">
              Donations should be made only to the official organisation bank
              account published on the Donate / CERT Audit pages. The organisation
              is not responsible for payments made to unofficial accounts. Always
              request a receipt and verify account details with the central office
              if unsure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Programme Information
            </h2>
            <p className="mt-3 leading-relaxed">
              Programme descriptions explain our motives of work: child welfare,
              child education, child health, children&apos;s sports, farmers&apos;
              social rights, and old-age people welfare. Activities may vary by
              location and available resources.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Accuracy
            </h2>
            <p className="mt-3 leading-relaxed">
              We strive to keep information accurate and updated. For official
              verification, please contact the central office at{" "}
              {site.address.full}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Governing Contact
            </h2>
            <p className="mt-3 leading-relaxed">
              {site.presidentTitle}: {site.president}
              <br />
              Email: {site.email}
              <br />
              Phone: +91 {site.phones[0]} / +91 {site.phones[1]}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
