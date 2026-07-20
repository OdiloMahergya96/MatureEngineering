import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="canvas" className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="spec-label mb-4">Error 404</p>
        <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
          Gambar ini tidak ditemukan
        </h1>
        <p className="mt-4 text-graphite/60 dark:text-white/50">
          Halaman yang Anda cari mungkin sudah dipindahkan atau tidak pernah ada. Yuk kembali ke jalur yang benar.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Kembali ke Beranda</Button>
          <Button href="/contact" variant="outline">Hubungi Kami</Button>
        </div>
      </Container>
    </Section>
  );
}
