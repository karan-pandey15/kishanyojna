import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy of ${site.name}.`,
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle personal information shared with our organisation"
        image="/images/four.jpeg"
      />
      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-3xl space-y-8 text-sm text-muted sm:text-base">
          <SectionHeading
            align="left"
            title="Our Commitment"
            subtitle={`Last updated for public transparency by ${site.name}`}
          />
          <p className="-mt-4 leading-relaxed">
            {site.name} respects the privacy of donors, volunteers, beneficiaries,
            and visitors. Information shared through contact forms, email, or
            phone is used only for organisational communication, programme
            delivery, receipts, and compliance requirements.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Information We Collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Name, phone number, and email address</li>
              <li>Postal address when provided for correspondence</li>
              <li>Donation transaction references for acknowledgement</li>
              <li>Enquiry details related to programmes or bank verification</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              How We Use Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Responding to enquiries and bank verification requests</li>
              <li>Issuing donation acknowledgements / receipts</li>
              <li>Programme coordination and beneficiary support</li>
              <li>Legal, audit, and regulatory compliance</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Sharing &amp; Retention
            </h2>
            <p className="mt-3 leading-relaxed">
              We do not sell personal data. Information may be shared only with
              authorised persons of the organisation or as required by law, bank
              KYC, or audit processes. We retain information only as long as
              needed for operational and compliance purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Your Choices
            </h2>
            <p className="mt-3 leading-relaxed">
              You may request correction or update of your contact details by
              writing to{" "}
              <a className="break-all text-brand-teal underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              or calling +91 {site.phones[0]} / +91 {site.phones[1]}.
            </p>
          </div>

          <div className="rounded-xl bg-brand-cream/60 p-4 sm:p-5">
            <p className="font-semibold text-brand-green">Central Office</p>
            <p className="mt-1">{site.address.full}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
