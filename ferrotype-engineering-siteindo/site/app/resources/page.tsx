import { resources } from "@/lib/data";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { ResourceForm } from "@/components/forms/ResourceForm";
import { FileText } from "lucide-react";

export const metadata = buildMetadata({
  title: "Sumber Daya",
  description: "Checklist dan panduan engineering gratis: checklist gambar, checklist DFMA, panduan tolerance, dan lainnya.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24 pb-14">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Sumber Daya</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Checklist engineering praktis, gratis untuk diunduh
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Checklist yang sama dengan yang dipakai engineer kami sehari-hari — masukkan email Anda untuk menerima panduannya.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-graphite/10 bg-white p-7 dark:border-white/10 dark:bg-graphite-dark">
                  <FileText className="h-7 w-7 text-blueprint dark:text-blueprint-light" />
                  <Badge className="mt-4 w-fit">{r.category}</Badge>
                  <h3 className="mt-3 font-display text-lg font-semibold text-graphite dark:text-white">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-graphite/60 dark:text-white/50">{r.description}</p>
                  <ResourceForm resourceTitle={r.title} resourceSlug={r.slug} className="mt-5" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
