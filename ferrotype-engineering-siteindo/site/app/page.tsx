import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WorkflowSteps } from "@/components/sections/WorkflowSteps";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Partner Industrial Engineering untuk Perusahaan Manufaktur",
  description:
    "Ferrotype Engineering membantu perusahaan manufaktur menyelesaikan masalah engineering melalui mechanical engineering, automation, manufacturing network, dan engineering consulting.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesGrid limit={9} />
      <WorkflowSteps />
      <IndustriesGrid />
      <PortfolioGrid limit={3} />
      <CaseStudiesGrid limit={2} />
      <InsightsSection />
      <CTASection />
    </>
  );
}
