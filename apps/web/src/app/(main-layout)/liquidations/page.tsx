import { Metadata } from "next";
import { Card } from "~/components";
import { mergeMetadata } from "~/config/metadata";
import LiquidationsTable from "./_parts/LiquidationsTable";
import Header from "./_parts/Header";

export const metadata: Metadata = mergeMetadata({
  title: "Liquidations Markets",
});

const Page = () => {
  return (
    <Card rightComponent={<Header />}>
      <LiquidationsTable />
    </Card>
  );
};

export default Page;
