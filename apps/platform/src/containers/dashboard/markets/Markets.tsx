import { useViewportSize } from "@mantine/hooks";
import { BREAKPOINTS } from "~/constants";
import MarketsTable from "./table";
import { useGetLendingPools } from "@repo/onchain";
import { useMemo } from "react";
import Cards from "./cards/Cards";
interface Props {
  query: string | null;
}

const Markets = ({ query }: Props) => {
  const { width } = useViewportSize();
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  const { data, isLoading, isFetched } = useGetLendingPools();
  const finalData = useMemo(() => {
    if (!data?.assets) return [];
    if (!query) return data.assets;
    return data.assets.filter((item) =>
      item.asset.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);
  const isPending = !data && (isLoading || !isFetched);
  const isEmpty =
    (!data || data.assets.length === 0) && !isLoading && isFetched;
  return (
    <>
      {isDesktop ? (
        <MarketsTable
          data={finalData}
          isPending={isPending}
          isEmpty={isEmpty}
        />
      ) : (
        <Cards isPending={isPending} data={finalData} isEmpty={isEmpty} />
      )}
    </>
  );
};

export default Markets;
