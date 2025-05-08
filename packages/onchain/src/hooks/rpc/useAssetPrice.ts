import { skipToken, useQuery } from "@tanstack/react-query";
import { PRICE_BASE_ASSET_ID, queryKeys } from "@repo/shared";
import { useRpc } from "../useRpc";
import { formatUnit } from "../../utils";
import { GetAssetPrice } from "../../types/rpc/lending/getAssetPrice";
interface Params {
  assetId: number | string;
  base_asset?: number | null;
}
export const useAssetPrice = ({
  assetId,
  base_asset = PRICE_BASE_ASSET_ID,
}: Params) => {
  const { execute, isApiAvailable } = useRpc("lending", "getAssetPrice");

  const enabled = isApiAvailable;
  return useQuery<GetAssetPrice["formattedResponse"] | undefined>({
    queryKey: queryKeys.assetPrice({ assetId }),
    queryFn: enabled
      ? async () => {
          const response = await execute(+assetId, base_asset);
          if (!response) return undefined;
          return {
            price: response[0],
            decimal: response[1],
            formattedPrice: formatUnit(response[0], response[1]),
          };
        }
      : skipToken,
  });
};
