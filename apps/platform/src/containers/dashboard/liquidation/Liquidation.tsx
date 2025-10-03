import LiquidationTable from "./table";
import { LiquidationMarket } from "@repo/onchain";
import Cards from "./cards/Cards";
import { useRouter } from "next/navigation";
import { useIsDesktop } from "~/hooks/useIsDesktop";
interface Props {
  data: LiquidationMarket[];
  isPending: boolean;
  isEmpty: boolean;
}

const Liquidation = ({ data, isEmpty, isPending }: Props) => {
  const isDesktop = useIsDesktop();
  const router = useRouter();
  const handleViewMarketClick = (id: number) => {
    router.push(`/liquidations/${id}`);
  };
  return (
    <>
      {isDesktop ? (
        <LiquidationTable
          data={data}
          isPending={isPending}
          isEmpty={isEmpty}
          onViewMarketClick={handleViewMarketClick}
        />
      ) : (
        <Cards
          data={data}
          isPending={isPending}
          isEmpty={isEmpty}
          onViewMarketClick={handleViewMarketClick}
        />
      )}
    </>
  );
};

export default Liquidation;
