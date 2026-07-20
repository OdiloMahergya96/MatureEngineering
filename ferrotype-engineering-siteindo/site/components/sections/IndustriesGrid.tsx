import Link from "next/link";
import { industries } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SpecRow } from "@/components/ui/Card";

export function IndustriesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <Section tone="surface">
      <Container>
        {showHeading && (
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Industri</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Dirancang untuk kondisi nyata di sektor Anda
            </h2>
          </Reveal>
        )}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-graphite/10 bg-graphite/10 dark:border-white/10 sm:grid-cols-3">
          {industries.map((industry, i) => (
            <Link key={industry.slug} href={`/industries#${industry.slug}`} className="group bg-canvas p-8 hover:bg-white dark:bg-canvas-dark dark:hover:bg-graphite-dark">
              <Reveal delay={(i % 3) * 0.05}>
                <SpecRow index={i + 1} total={industries.length} label="Sektor" />
                <h3 className="mt-3 font-display text-lg font-semibold text-graphite group-hover:text-blueprint dark:text-white dark:group-hover:text-blueprint-light">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{industry.description}</p>
              </Reveal>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
