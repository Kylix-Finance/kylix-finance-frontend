import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import LiquidationTable from "./table";
import { useGetLiquidationMarkets } from "@repo/onchain";
import { useMemo } from "react";
interface Props {
  query: string | null;
}

const Liquidation = ({ query }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width > BREAKPOINTS.DESKTOP;
  const { data, isLoading, isFetched } = useGetLiquidationMarkets();
  const finalData = useMemo(() => {
    if (!data) return [];
    if (!query) return data;
    return data.filter((item) =>
      item.asset_name.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);
  return (
    <>
      {isDesktop ? (
        <LiquidationTable
          data={finalData}
          isFetched={isFetched}
          isLoading={isLoading}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Liquidation;
