import { services } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Layanan",
  description: "Mechanical engineering, product development, manufacturing engineering, automation, dan engineering consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Layanan</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Delapan belas disiplin ilmu, satu tim engineering yang bertanggung jawab
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Setiap layanan di bawah ini dikerjakan oleh engineer kami sendiri, dikoordinasikan lewat manufacturing
              network kami ketika produksi fisik dibutuhkan.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" className="pt-0">
        <Container>
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} delay={(i % 6) * 0.04}>
                  <div
                    id={service.slug}
                    className="scroll-mt-24 grid gap-8 rounded-2xl border border-graphite/10 bg-white p-8 dark:border-white/10 dark:bg-graphite-dark md:grid-cols-[auto_1fr_1fr] md:items-start"
                  >
                    <div className="flex items-center gap-3 md:flex-col md:items-start">
                      {Icon && <Icon className="h-8 w-8 text-blueprint dark:text-blueprint-light" />}
                      <h2 className="font-display text-xl font-semibold text-graphite dark:text-white md:mt-3">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sm text-graphite/70 dark:text-white/60">{service.description}</p>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-graphite/70 dark:text-white/60">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
