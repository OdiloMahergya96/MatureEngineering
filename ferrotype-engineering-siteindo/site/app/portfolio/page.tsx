import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portofolio",
  description: "Proyek engineering pilihan di industri automotive, plastic, packaging, food, mining, dan oil & gas.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Portofolio</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Pekerjaan engineering di berbagai lantai produksi
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Contoh sebagian proyek kami — detail klien lengkap akan dibagikan di bawah NDA saat sesi konsultasi.
            </p>
          </Reveal>
        </Container>
      </Section>
      <PortfolioGrid showHeading={false} />
      <CTASection />
    </>
  );
}
