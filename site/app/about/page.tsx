import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { ShieldCheck, Target, Users2, Compass } from "lucide-react";

export const metadata = buildMetadata({
  title: "About",
  description: "Ferrotype Engineering is an independent industrial engineering partner for manufacturers across Southeast Asia.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Engineering First", desc: "Every recommendation is grounded in calculation and evidence, not sales targets." },
  { icon: ShieldCheck, title: "Accountability", desc: "One point of contact owns the outcome, from drawing to commissioning." },
  { icon: Users2, title: "Long-Term Partnership", desc: "We measure success by how many years a client keeps calling us back." },
  { icon: Compass, title: "Independent Advice", desc: "We do not sell machines, so our recommendations are not tied to any single vendor." },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">About Ferrotype</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              An engineering partner, not another vendor
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Ferrotype Engineering was founded on a simple observation: manufacturers rarely lack machines — they lack
              independent engineering judgment. Equipment vendors sell equipment. Contractors sell labor hours. We sell
              the engineering thinking that connects a real production problem to the right, cost-effective solution.
            </p>
            <p className="mt-4 text-lg text-graphite/70 dark:text-white/60">
              Today our engineers support automotive, plastic, packaging, food, mining, oil & gas, and power generation
              clients across the region — designing mechanical systems, automating production lines, and managing a
              vetted network of machining, fabrication, and tooling partners so our clients deal with one accountable
              engineering team.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">What We Stand For</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Principles that shape every project
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="rounded-2xl border border-graphite/10 bg-white p-7 dark:border-white/10 dark:bg-graphite-dark">
                <v.icon className="h-6 w-6 text-blueprint dark:text-blueprint-light" />
                <h3 className="mt-4 font-display text-base font-semibold text-graphite dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Timeline</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              How the company grew
            </h2>
          </Reveal>
          <div className="space-y-8 border-l border-graphite/15 pl-8 dark:border-white/15">
            {[
              { year: "2010", text: "Founded as a two-person mechanical design consultancy serving local machine builders." },
              { year: "2014", text: "Expanded into manufacturing engineering and DFMA services for automotive tier-1 suppliers." },
              { year: "2017", text: "Built out the industrial automation and PLC/SCADA practice." },
              { year: "2020", text: "Formalized the manufacturing network across machining, fabrication, and mould partners." },
              { year: "2023", text: "Reached over 40 qualified manufacturing partners spanning six industries." },
            ].map((e) => (
              <Reveal key={e.year} className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-signal" />
                <p className="font-mono text-sm text-blueprint dark:text-blueprint-light">{e.year}</p>
                <p className="mt-1 text-graphite/70 dark:text-white/60">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
