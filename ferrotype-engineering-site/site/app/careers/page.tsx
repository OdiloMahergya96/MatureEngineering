import Link from "next/link";
import { jobOpenings } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Join Ferrotype Engineering's mechanical, controls, manufacturing, and project engineering teams.",
  path: "/careers",
});

const perks = [
  "Direct exposure to multi-industry engineering problems",
  "Structured mentorship from senior engineers",
  "Applied training budget for certifications and courses",
  "A team that documents its work, not tribal knowledge",
];

export default function CareersPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Careers</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Build your engineering career on real problems
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Our engineers work across industries in a single year — something rarely possible inside a single OEM
              or plant.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <p className="spec-label mb-4">Why Join</p>
              <ul className="space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-graphite/70 dark:text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="space-y-4">
              {jobOpenings.map((job, i) => (
                <Reveal key={job.slug} delay={i * 0.05}>
                  <div className="rounded-2xl border border-graphite/10 bg-white p-6 dark:border-white/10 dark:bg-graphite-dark">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-lg font-semibold text-graphite dark:text-white">{job.title}</h2>
                        <div className="mt-2 flex flex-wrap gap-4 text-xs text-graphite/50 dark:text-white/40">
                          <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {job.department} · {job.type}</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                        </div>
                        <p className="mt-3 text-sm text-graphite/60 dark:text-white/50">{job.summary}</p>
                      </div>
                      <Button href={`/contact?position=${job.slug}`} variant="outline" size="sm">
                        Apply <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
              <p className="text-sm text-graphite/50 dark:text-white/40">
                Don&apos;t see a fit?{" "}
                <Link href="/contact" className="text-blueprint underline dark:text-blueprint-light">
                  Send an open application
                </Link>.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
