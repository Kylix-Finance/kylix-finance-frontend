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
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
export const metadata: Metadata = mergeMetadata({
  title: {
    default: "Kylix",
    template: "%s | Kylix",
  },
  description:
    "Kylix Finance addresses the gaps in the current DeFi landscape on Polkadot by providing a comprehensive on-chain lending solution. ",
});

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
