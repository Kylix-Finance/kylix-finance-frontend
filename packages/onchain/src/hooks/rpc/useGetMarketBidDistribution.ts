import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useRpc } from "../useRpc";

interface Params {
  assetId: string;
}

export const useGetMarketBidDistribution = ({ assetId }: Params) => {
  const { execute, isApiAvailable } = useRpc(
    "liquidation",
    "getMarketBidDistribution"
  );
  const enabled = isApiAvailable;
  return useQuery({
    queryKey: queryKeys.marketBidDistribution({ assetId }),
    queryFn: enabled
      ? async () => {
          const response = await execute(assetId);
          if (!response) return null;
          const [metaData, discountDistributions] = response;
          const transformedDiscounts = discountDistributions.map(
            (discount) => ({
              ...discount,
              amount: BigInt(discount.amount),
            })
          );

          return [metaData, transformedDiscounts] as const;
        }
      : skipToken,
  });
};
