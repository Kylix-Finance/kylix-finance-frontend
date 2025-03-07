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
import FeaturedPartners from "./_parts/FeaturedPartners";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
import WaitingList from "./_parts/WaitingList";

export const metadata: Metadata = mergeMetadata(
  {
    title: "Multi-chain lending for Web3",
    description:
      "A new-gen multi-chain Lending platform for managing over-collateralized loans & aggregating cross-chain Liquidity.",
  },
  "Kylix Finance"
);

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <FeaturedPartners />
      <SmartLending />
      <MarketTrends />
      <SupportedAssetsAndAPY />
      <HowItWorks />
      <SecurityAndAudits />
      <WaitingList />
    </div>
  );
}
