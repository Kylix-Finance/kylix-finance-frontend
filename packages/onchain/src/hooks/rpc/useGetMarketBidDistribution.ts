import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useRpc } from "../useRpc";

interface Params {
  assetId: string | number;
}

export const useGetMarketBidDistribution = ({ assetId }: Params) => {
  const { execute, isApiAvailable } = useRpc(
    "liquidation",
    "getMarketBidDistribution"
  );
  return useQuery({
    queryKey: queryKeys.marketBidDistribution({ assetId }),
    queryFn: isApiAvailable ? async () => execute(Number(assetId)) : skipToken,
  });
};
