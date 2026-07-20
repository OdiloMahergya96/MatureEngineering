import { faqItems } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Ferrotype Engineering's services, pricing, and process.",
  path: "/faq",
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">FAQ</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Common questions, answered directly
            </h1>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" className="pt-0">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqItems} />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
