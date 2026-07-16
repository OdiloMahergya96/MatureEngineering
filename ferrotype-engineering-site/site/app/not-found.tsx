import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="canvas" className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <p className="spec-label mb-4">Error 404</p>
        <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
          This drawing doesn&apos;t exist
        </h1>
        <p className="mt-4 text-graphite/60 dark:text-white/50">
          The page you&apos;re looking for may have moved or never existed. Let&apos;s get you back on the right path.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </Container>
    </Section>
  );
}
