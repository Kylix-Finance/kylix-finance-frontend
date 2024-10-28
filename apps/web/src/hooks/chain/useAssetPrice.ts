import { skipToken, useQuery } from "@tanstack/react-query";
import {
  LendingLendingPool,
  PRICE_BASE_ASSET_ID,
  queryKeys,
} from "@repo/shared";
import { formatUnit, useMetadata, useProvider } from "@repo/onchain-utils";

interface Props {
  assetId: number | string;
}

export const useAssetPrice = ({ assetId }: Props) => {
  const { api } = useProvider();
  const { assetMetaData: baseAssetMetadata, isLoading } =
    useMetadata(PRICE_BASE_ASSET_ID);
  const enabled = !!api && !isLoading;
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.assetPrice({ assetId }),
    queryFn: enabled
      ? async () => {
          const assetPrice = await api?.query.lending?.assetPrices?.([
            assetId,
            PRICE_BASE_ASSET_ID,
          ]);
          const price = assetPrice?.toJSON() as number;
          const formattedPrice = formatUnit(
            BigInt(price),
            baseAssetMetadata?.decimals
          );
          return { price, formattedPrice };
        }
      : skipToken,
  });

  return {
    assetPrice: data?.price,
    formattedPrice: data?.formattedPrice,
    ...rest,
  };
};
