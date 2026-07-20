import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <Section tone="graphite" className="border-t border-white/10">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="spec-label text-white/40 mb-3">Mulai Sekarang</p>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Butuh dukungan engineering? Yuk diskusi.
            </h2>
            <p className="mt-3 max-w-xl text-white/50">
              Ceritakan masalah yang Anda hadapi, bukan sekadar proyeknya — tim engineer kami akan mereview dan
              merespons dalam 24 jam.
            </p>
          </div>
          <div className="flex shrink-0 gap-4">
            <Button href="/contact" size="lg">Minta Penawaran</Button>
            <Button href="/contact#consultation" variant="outline" size="lg" className="border-white/30 text-white hover:border-signal hover:text-signal">
              Jadwalkan Konsultasi
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
