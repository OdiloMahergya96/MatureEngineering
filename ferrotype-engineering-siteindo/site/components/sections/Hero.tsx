import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-graphite/10 dark:border-white/10">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <Container className="relative py-28 md:py-36">
        <div className="max-w-3xl">
          <p className="spec-label mb-6">REV 04 — Industrial Engineering Partner</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-graphite dark:text-ink-dark md:text-6xl">
            Merekayasa <span className="text-blueprint dark:text-blueprint-light">Sistem Industri</span> yang Lebih Baik
          </h1>
          <p className="mt-6 max-w-xl text-lg text-graphite/70 dark:text-white/60">
            Kami membantu perusahaan manufaktur menyelesaikan masalah engineering melalui mechanical engineering,
            automation, manufacturing network yang terpercaya, dan engineering consulting yang independen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Minta Penawaran</Button>
            <Button href="/contact#consultation" variant="outline" size="lg">Jadwalkan Konsultasi</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
