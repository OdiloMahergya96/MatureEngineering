import { caseStudies } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Studi Kasus",
  description: "Studi kasus engineering mendalam yang mencakup masalah, pendekatan, dan hasil yang terukur.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Studi Kasus</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Masalah, pendekatan, hasil — tanpa basa-basi
            </h1>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" className="pt-0">
        <Container>
          <div className="space-y-10">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.06}>
                <article id={cs.slug} className="scroll-mt-24 rounded-2xl border border-graphite/10 bg-white p-8 dark:border-white/10 dark:bg-graphite-dark md:p-10">
                  <p className="spec-label">{cs.industry} · {cs.client}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-graphite dark:text-white">{cs.title}</h2>

                  <div className="mt-8 grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="spec-label text-signal">Masalah</p>
                      <p className="mt-2 text-sm text-graphite/70 dark:text-white/60">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="spec-label text-blueprint dark:text-blueprint-light">Pendekatan</p>
                      <p className="mt-2 text-sm text-graphite/70 dark:text-white/60">{cs.approach}</p>
                    </div>
                    <div>
                      <p className="spec-label">Hasil</p>
                      <p className="mt-2 text-sm text-graphite/70 dark:text-white/60">{cs.result}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-8 border-t border-graphite/10 pt-6 dark:border-white/10">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-3xl font-semibold text-signal">{m.value}</p>
                        <p className="text-xs text-graphite/50 dark:text-white/40">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
