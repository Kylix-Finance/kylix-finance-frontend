import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import LiquidationTable from "./table";
import { LiquidationMarket } from "@repo/onchain";
import Cards from "./cards/Cards";
import { useRouter } from "next/navigation";
interface Props {
  data: LiquidationMarket[];
  isPending: boolean;
  isEmpty: boolean;
}

const Liquidation = ({ data, isEmpty, isPending }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
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
