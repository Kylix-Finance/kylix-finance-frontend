import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import MarketsTable from "./table";
import { useGetLendingPools } from "@repo/onchain";
import { useMemo } from "react";
interface Props {
  query: string | null;
}

const Markets = ({ query }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width > BREAKPOINTS.DESKTOP;
  const { data, isLoading, isFetched } = useGetLendingPools();
  const finalData = useMemo(() => {
    if (!data?.assets) return [];
    if (!query) return data.assets;
    return data.assets.filter((item) =>
      item.asset.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);
  return (
    <>
      {isDesktop ? (
        <MarketsTable
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

export default Markets;
