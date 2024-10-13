import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_parts/Hero"), {
  ssr: false,
  loading: () => <div className="w-full h-screen" />,
});

import SmartLending from "./_parts/SmartLending";
import MarketTrends from "./_parts/MarketTrends";
import SupportedAssetsAndAPY from "./_parts/SupportedAssetsAndAPY";
import HowItWorks from "./_parts/HowItWorks";
import SecurityAndAudits from "./_parts/SecurityAndAudits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackGround from "~/components/BackGround";
import FeaturedPartners from "./_parts/FeaturedPartners";

export default function page() {
  return (
    <div className="relative w-full h-full">
      <BackGround />
      <Header />
      <Hero />
      <FeaturedPartners />
      <SmartLending />
      <MarketTrends />
      <SupportedAssetsAndAPY />
      <HowItWorks />
      <SecurityAndAudits />
      <Footer />
    </div>
  );
}
