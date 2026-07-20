import { portfolio } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Card, Badge } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function PortfolioGrid({ limit, showHeading = true }: { limit?: number; showHeading?: boolean }) {
  const list = limit ? portfolio.slice(0, limit) : portfolio;

  return (
    <Section tone="canvas">
      <Container>
        {showHeading && (
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Portofolio</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Pilihan pekerjaan engineering kami
            </h2>
          </Reveal>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <Card className="h-full">
                <div className="flex flex-wrap gap-2">
                  <Badge>{item.industry}</Badge>
                  <Badge>{item.service}</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-graphite dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{item.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.scope.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-graphite/50 dark:text-white/40">
                      <span className="h-1 w-1 rounded-full bg-signal" /> {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
