import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description: "Selected engineering projects across automotive, plastic, packaging, food, mining, and oil & gas industries.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Portfolio</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Engineering work across the plant floor
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              A representative sample of projects — full client details are shared under NDA during a consultation.
            </p>
          </Reveal>
        </Container>
      </Section>
      <PortfolioGrid showHeading={false} />
      <CTASection />
    </>
  );
}
