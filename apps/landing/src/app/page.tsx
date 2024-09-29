import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_parts/Hero"));
const SmartLending = dynamic(() => import("./_parts/SmartLending"));
const MarketTrends = dynamic(() => import("./_parts/MarketTrends"));
const SupportedAssetsAndAPY = dynamic(
  () => import("./_parts/SupportedAssetsAndAPY")
);
const HowItWorks = dynamic(() => import("./_parts/HowItWorks"));
const SecurityAndAudits = dynamic(() => import("./_parts/SecurityAndAudits"));
const Footer = dynamic(() => import("./_parts/Footer"));

export default function page() {
  return (
    <div>
      <Hero />
      <SmartLending />
      <MarketTrends />
      <SupportedAssetsAndAPY />
      <HowItWorks />
      <SecurityAndAudits />
      <Footer />
    </div>
  );
}
