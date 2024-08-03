import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { queryKeys } from "@repo/shared";
export const useAsset = (assetId: number) => {
  const { api } = useProvider();
  const enabled = !!api;

  return useQuery({
    queryKey: queryKeys.asset(assetId),
    queryFn: enabled
      ? async () => {
          const assetsInfo = await api?.query?.assets?.asset?.(assetId);
          return assetsInfo?.toJSON() || {};
        }
      : skipToken,
  });
};
