import { industries } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SpecRow } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industri",
  description: "Dukungan engineering untuk industri automotive, plastic, packaging, food, mining, oil & gas, power plant, dan machine builder.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Industri</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Kami paham bahasa lantai produksi Anda
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Setiap sektor punya mode kegagalan, tekanan regulasi, dan struktur biaya yang berbeda. Engineer kami
              membawa pengalaman spesifik per sektor, bukan template yang generik.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 4) * 0.05}>
                <div id={industry.slug} className="scroll-mt-24 rounded-2xl border border-graphite/10 bg-white p-8 dark:border-white/10 dark:bg-graphite-dark">
                  <SpecRow index={i + 1} total={industries.length} label="Sektor" />
                  <h2 className="mt-3 font-display text-xl font-semibold text-graphite dark:text-white">{industry.name}</h2>
                  <p className="mt-2 text-sm text-graphite/70 dark:text-white/60">{industry.description}</p>
                  <p className="mt-5 spec-label">Tantangan Umum</p>
                  <ul className="mt-2 space-y-1.5">
                    {industry.challenges.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-graphite/60 dark:text-white/50">
                        <span className="h-1 w-1 rounded-full bg-signal" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
