import { Metadata } from "next";
import { mergeMetadata } from "~/config/metadata";

export const metadata: Metadata = mergeMetadata({
  title: "Liquidations Markets",
});

const Page = () => {
  return <div>Liquidations Markets</div>;
};

export default Page;
