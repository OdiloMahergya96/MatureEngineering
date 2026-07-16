import { Container, Section } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of Ferrotype Engineering's website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section tone="canvas" className="pt-24">
      <Container className="max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-display">
        <h1>Terms of Service</h1>
        <p>Last updated: January 2026</p>
        <p>
          These terms govern your use of the {siteConfig.name} website. By using this site, you agree to these
          terms.
        </p>
        <h2>Use of Website Content</h2>
        <p>
          Content on this website, including text, graphics, and downloadable resources, is provided for informational
          purposes and may not be reproduced for commercial purposes without written permission.
        </p>
        <h2>Engineering Services</h2>
        <p>
          Descriptions of services on this website are general in nature. Specific project scope, pricing, and
          deliverables are defined in a separate written proposal or agreement prior to any engagement.
        </p>
        <h2>No Warranty</h2>
        <p>This website is provided &quot;as is&quot; without warranties of any kind regarding accuracy or availability.</p>
        <h2>Limitation of Liability</h2>
        <p>{siteConfig.name} is not liable for any indirect or consequential damages arising from use of this website.</p>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the Republic of Indonesia.</p>
        <h2>Contact</h2>
        <p>Questions about these terms can be directed to {siteConfig.email}.</p>
      </Container>
    </Section>
  );
}
