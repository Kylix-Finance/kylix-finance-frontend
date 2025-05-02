import { skipToken, useQuery } from "@tanstack/react-query";
import { PRICE_BASE_ASSET_ID, queryKeys } from "@repo/shared";
import { useRpc } from "../useRpc";

interface Params {
  assetId: number;
  base_asset: number | null;
}

export const useAssetPrice = ({
  assetId,
  base_asset = PRICE_BASE_ASSET_ID,
}: Params) => {
  const { execute, isApiAvailable } = useRpc("lending", "getAssetPrice");

  const enabled = isApiAvailable;
  return useQuery({
    queryKey: queryKeys.assetPrice({ assetId }),
    queryFn: enabled ? () => execute(assetId, base_asset) : skipToken,
  });
};
