import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import LiquidationTable from "./table";
import { LiquidationMarket } from "@repo/onchain";
import Cards from "./cards/Cards";
interface Props {
  data: LiquidationMarket[];
  isPending: boolean;
  isEmpty: boolean;
}

const Liquidation = ({ data, isEmpty, isPending }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;

  return (
    <>
      {isDesktop ? (
        <LiquidationTable data={data} isPending={isPending} isEmpty={isEmpty} />
      ) : (
        <Cards data={data} isPending={isPending} isEmpty={isEmpty} />
      )}
    </>
  );
};

export default Liquidation;
