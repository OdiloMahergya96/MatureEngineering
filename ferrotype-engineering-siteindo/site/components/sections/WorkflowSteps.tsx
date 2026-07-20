import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { title: "Pahami Masalah", desc: "Kami mulai dengan turun langsung atau diskusi jarak jauh, mendengarkan operator dan engineer sebelum mengusulkan apa pun." },
  { title: "Engineering Review", desc: "Root cause analysis, pengecekan feasibility, dan batasan teknis dipetakan sebelum desain dimulai." },
  { title: "Proposal", desc: "Scope, timeline, dan quotation fixed-price yang jelas — tanpa item biaya yang ambigu." },
  { title: "Eksekusi", desc: "Desain, sourcing, dan koordinasi melalui manufacturing network kami dengan checkpoint berkala." },
  { title: "Quality Control", desc: "First-article inspection dan verifikasi dimensi sebelum apa pun dikirim." },
  { title: "Delivery", desc: "Instalasi, commissioning, dan handover dokumentasi ke tim Anda." },
  { title: "After Sales", desc: "Dukungan garansi, training, dan akses langsung ke engineer yang mengerjakannya." },
];

export function WorkflowSteps() {
  return (
    <Section tone="graphite">
      <Container>
        <Reveal className="mb-14 max-w-2xl">
          <p className="spec-label text-white/40">Proses</p>
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Urutan kerja yang disiplin, bukan black box
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-7">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="border-t-2 border-signal/60 pt-4">
              <p className="font-mono text-xs text-white/40">LANGKAH {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
