import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudiesGrid({ limit, showHeading = true }: { limit?: number; showHeading?: boolean }) {
  const list = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <Section tone="surface">
      <Container>
        {showHeading && (
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Studi Kasus</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Masalah yang terselesaikan, lengkap dengan angka buktinya
            </h2>
          </Reveal>
        )}
        <div className="space-y-6">
          {list.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.06}>
              <Link
                href={`/case-studies#${cs.slug}`}
                className="group grid gap-6 rounded-2xl border border-graphite/10 bg-white p-8 dark:border-white/10 dark:bg-graphite-dark md:grid-cols-[2fr_1fr]"
              >
                <div>
                  <p className="spec-label">{cs.industry} · {cs.client}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-graphite group-hover:text-blueprint dark:text-white dark:group-hover:text-blueprint-light">
                    {cs.title}
                  </h3>
                  <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{cs.problem}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blueprint dark:text-blueprint-light">
                    Baca studi kasus <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-4 border-t border-graphite/10 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0 dark:border-white/10">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-2xl font-semibold text-signal">{m.value}</p>
                      <p className="text-xs text-graphite/50 dark:text-white/40">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
