import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Request an engineering quotation or book a consultation with Ferrotype Engineering.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section tone="canvas" className="pt-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="spec-label mb-3">Contact</p>
            <h1 id="consultation" className="scroll-mt-24 font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Let&apos;s discuss your engineering problem
            </h1>
            <p className="mt-4 text-graphite/70 dark:text-white/60">
              Tell us about the problem you&apos;re trying to solve. An engineer — not a sales rep — will review your
              request and respond within 24 hours.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-graphite/70 dark:text-white/60">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-blueprint dark:text-blueprint-light" /> {siteConfig.email}</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-blueprint dark:text-blueprint-light" /> {siteConfig.phone}</li>
              <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-blueprint dark:text-blueprint-light" /> {siteConfig.whatsapp} (WhatsApp)</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-blueprint dark:text-blueprint-light" /> {siteConfig.address}</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
