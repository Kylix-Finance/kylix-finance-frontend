import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useProvider } from "../useProvider";
export const useAsset = (assetId: number) => {
  const { data } = useProvider();
  const enabled = !!data?.api && !!assetId;
  return useQuery({
    queryKey: queryKeys.asset(assetId),
    queryFn: enabled ? async () => {
      const { api } = data
      const assetsInfo = await api.query.assets.asset(assetId);
      return assetsInfo.toJSON();
    } : skipToken,
  });
};
