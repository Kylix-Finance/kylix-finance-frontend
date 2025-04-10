import { skipToken, useQuery } from "@tanstack/react-query";
import { PRICE_BASE_ASSET_ID, queryKeys } from "@repo/shared";
import { useProvider } from "../useProvider";
import { formatUnit } from "../../utils/formatUnit";

// interface Props {
//   assetId: number | string;
//   baseId?: number | string;
// }

export const useAssetPrice = () => {
  const { data: provider } = useProvider();
  const enabled = !!provider?.api;
  return useQuery({
    queryKey: queryKeys.assetPrice({ assetId: 1 }),
    queryFn: enabled
      ? async () => {
        // const assetPrice = await provider.send<[number, number]>(
        //   "lending_getAssetPrice",
        //   [Number(assetId), baseId]
        // );
        // const { api } = provider
        // const response = await api.rpc
        // const price = response[0]
        // const formattedPrice = formatUnit(BigInt(price), assetPrice[1]);
        return {}
      }
      : skipToken,
  });
};
