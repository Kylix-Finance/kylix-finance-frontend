import { WsProvider } from "@polkadot/api";
import { useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

interface UseGetAssetPrice {
  asset: number;
  base_asset?: number;
}

export const useGetAssetPrice = ({ asset, base_asset }: UseGetAssetPrice) => {
  const { provider } = useProvider();

  return useQuery({
    queryKey: queryKeys.getAssetPrice(asset, base_asset),
    queryFn: provider
      ? () => getAssetPrice(provider, { asset, base_asset })
      : skipToken,
  });
};

export const getAssetPrice = (
  provider: WsProvider,
  { asset, base_asset }: UseGetAssetPrice
) => {
  return provider.send<number>("getAssetPrice", [asset, base_asset]);
};
