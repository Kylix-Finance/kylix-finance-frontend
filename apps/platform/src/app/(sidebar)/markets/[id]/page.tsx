import { notFound } from "next/navigation";
import Market from "~/containers/market/Market";
import { getLendingPools } from "~/lib/getLendingPools";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  try {
    const exists = await getLendingPools(id);

    if (!exists) {
      notFound();
    }
  } catch (error) {
    console.error("Error in MarketPage:", error);
    notFound();
  }
  return <Market />;
};

export default page;
