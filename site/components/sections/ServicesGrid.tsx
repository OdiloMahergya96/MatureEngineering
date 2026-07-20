import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { Container, Section } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGrid({ limit, showHeading = true }: { limit?: number; showHeading?: boolean }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <Section tone="canvas">
      <Container>
        {showHeading && (
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Capabilities</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              End-to-end engineering, from concept to production line
            </h2>
          </Reveal>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <Link href={`/services#${service.slug}`}>
                  <Card className="group h-full">
                    {Icon && <Icon className="h-7 w-7 text-blueprint dark:text-blueprint-light" />}
                    <h3 className="mt-5 font-display text-lg font-semibold text-graphite dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{service.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blueprint group-hover:gap-2 transition-all dark:text-blueprint-light">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
