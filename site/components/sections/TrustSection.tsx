import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BadgeCheck, Cpu, Network, ShieldCheck, Zap, Award } from "lucide-react";

const items = [
  { icon: Award, label: "Engineering Experience", value: "15+ Years" },
  { icon: Cpu, label: "Manufacturing Knowledge", value: "Cross-Industry" },
  { icon: Zap, label: "Automation Expertise", value: "PLC to SCADA" },
  { icon: Network, label: "Reliable Network", value: "40+ Partners" },
  { icon: ShieldCheck, label: "Quality Assurance", value: "First-Article Verified" },
  { icon: BadgeCheck, label: "Fast Response", value: "< 24h Review" },
];

export function TrustSection() {
  return (
    <Section tone="surface" className="py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05} className="flex flex-col items-center text-center gap-2">
              <item.icon className="h-6 w-6 text-blueprint dark:text-blueprint-light" />
              <p className="font-display text-sm font-semibold text-graphite dark:text-white">{item.value}</p>
              <p className="text-xs text-graphite/60 dark:text-white/50">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
