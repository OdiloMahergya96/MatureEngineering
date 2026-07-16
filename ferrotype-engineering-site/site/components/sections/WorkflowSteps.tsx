import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { title: "Understand Problem", desc: "We start on-site or on-call, listening to operators and engineers before proposing anything." },
  { title: "Engineering Review", desc: "Root cause analysis, feasibility checks, and technical constraints are mapped before design begins." },
  { title: "Proposal", desc: "A clear scope, timeline, and fixed-price quotation — no ambiguous line items." },
  { title: "Execution", desc: "Design, sourcing, and coordination through our manufacturing network with regular checkpoints." },
  { title: "Quality Control", desc: "First-article inspection and dimensional verification before anything ships." },
  { title: "Delivery", desc: "Installation, commissioning, and documentation handover to your team." },
  { title: "After Sales", desc: "Warranty support, training, and a direct line to the engineers who built it." },
];

export function WorkflowSteps() {
  return (
    <Section tone="graphite">
      <Container>
        <Reveal className="mb-14 max-w-2xl">
          <p className="spec-label text-white/40">Process</p>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            A disciplined sequence, not a black box
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-7">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="border-t-2 border-signal/60 pt-4">
              <p className="font-mono text-xs text-white/40">STEP {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
