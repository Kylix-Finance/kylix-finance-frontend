import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import LiquidationTable from "./table";
import { useGetLiquidationMarkets } from "@repo/onchain";
import { useMemo } from "react";
import Cards from "./cards/Cards";
interface Props {
  query: string | null;
}

const Liquidation = ({ query }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  const { data, isLoading, isFetched } = useGetLiquidationMarkets();
  const finalData = useMemo(() => {
    if (!data) return [];
    if (!query) return data;
    return data.filter((item) =>
      item.asset_name.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);
  const isPending = !data && (isLoading || !isFetched);
  const isEmpty = (!data || data.length === 0) && !isLoading && isFetched;
  return (
    <>
      {isDesktop ? (
        <LiquidationTable
          data={finalData}
          isPending={isPending}
          isEmpty={isEmpty}
        />
      ) : (
        <Cards data={finalData} isPending={isPending} isEmpty={isEmpty} />
      )}
    </>
  );
};

export default Liquidation;
