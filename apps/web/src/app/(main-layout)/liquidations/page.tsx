import { Metadata } from "next";
import { Card } from "~/components";
import { mergeMetadata } from "@repo/shared";
import LiquidationsTable from "./_parts/LiquidationsTable";
import Header from "./_parts/Header";
import { Suspense } from "react";

export const metadata: Metadata = mergeMetadata({
  title: "Liquidations Markets",
});
//FIXME: Suspense is temporary
const Page = () => {
  return (
    <Card rightComponent={<Header />}>
      <Suspense>
        <LiquidationsTable />
      </Suspense>
    </Card>
  );
};

export default Page;
