import { Container, Section } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Ferrotype Engineering collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section tone="canvas" className="pt-24">
      <Container className="max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-display">
        <h1>Privacy Policy</h1>
        <p>Last updated: January 2026</p>
        <p>
          {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what
          information we collect through this website and how it is used.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, such as your name, company, email, phone number, and project
          details submitted through our contact and resource download forms. We also collect standard analytics data
          such as pages visited and general location.
        </p>
        <h2>How We Use Information</h2>
        <p>
          We use submitted information to respond to inquiries, provide requested resources, and improve our
          services. We do not sell personal information to third parties.
        </p>
        <h2>Data Retention</h2>
        <p>We retain inquiry data for as long as necessary to respond to your request and maintain business records, consistent with applicable law.</p>
        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information by contacting {siteConfig.email}.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be directed to {siteConfig.email}.</p>
      </Container>
    </Section>
  );
}
