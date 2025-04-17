import { skipToken, useQuery } from "@tanstack/react-query";
import {
  LendingLendingPool,
  PRICE_BASE_ASSET_ID,
  queryKeys,
} from "@repo/shared";
import { formatUnit, useMetadata, useProvider } from "@repo/onchain-utils";

interface Props {
  assetId: number | string;
  baseId?: number | string;
}

export const useAssetPrice = ({
  assetId,
  baseId = PRICE_BASE_ASSET_ID,
}: Props) => {
  const { api, provider } = useProvider();
  const enabled = !!api && !!provider;
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.assetPrice({ assetId }),
    queryFn: enabled
      ? async () => {
          const assetPrice = await provider.send<[number, number]>(
            "lending_getAssetPrice",
            [Number(assetId), baseId]
          );
          const price = assetPrice[0];
          const formattedPrice = formatUnit(BigInt(price), assetPrice[1]);
          console.log("______________assetPrice", {
            assetPrice,
            formattedPrice,
          });

          return { price, formattedPrice };
        }
      : skipToken,
  });

  return {
    // assetPrice: data?.price,
    formattedPrice: data?.formattedPrice,
    ...rest,
  };
};
