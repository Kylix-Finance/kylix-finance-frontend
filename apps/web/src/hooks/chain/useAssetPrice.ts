import { skipToken, useQuery } from "@tanstack/react-query";
import {
  LendingLendingPool,
  PRICE_BASE_ASSET_ID,
  queryKeys,
} from "@repo/shared";
import { useProvider } from "@repo/onchain-utils";

interface Props {
  assetId: number | string;
}

export const useAssetPrice = ({ assetId }: Props) => {
  const { api } = useProvider();

  const disabled = !!api;
  const { data, ...rest } = useQuery<number>({
    queryKey: queryKeys.assetPrice({ assetId }),
    queryFn: disabled
      ? async () => {
          const assetPrice = await api?.query.lending?.assetPrices?.([
            assetId,
            PRICE_BASE_ASSET_ID,
          ]);

          return assetPrice?.toJSON() as number;
        }
      : skipToken,
  });

  return { assetPrice: data, ...rest };
};
