import { Hero } from "../components/Hero";
import { ProblemSection } from "../components/ProblemSection";
import { PromoterPain } from "../components/PromoterPain";
import { Marquee } from "../components/Marquee";
import { ComplianceGap } from "../components/ComplianceGap";
import { Differentiator } from "../components/Differentiator";
import { SevenPillars } from "../components/SevenPillars";
import { BusinessModel } from "../components/BusinessModel";
import { OurClients } from "../components/OurClients";
import { StrategicAdvantage } from "../components/StrategicAdvantage";
import { Organisation } from "../components/Organisation";
import { TheResult } from "../components/TheResult";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export default function Landing() {
  return (
    <main className="relative" data-testid="landing-page">
      <Hero />
      <ProblemSection />
      <PromoterPain />
      <Marquee variant="light" />
      <ComplianceGap />
      <Differentiator />
      <SevenPillars />
      <BusinessModel />
      <OurClients />
      <StrategicAdvantage />
      <Organisation />
      <TheResult />
      <CTASection />
      <Footer />
    </main>
  );
}
