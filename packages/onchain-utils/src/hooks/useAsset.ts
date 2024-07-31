import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";

export const useAsset = ({ asset }: { asset: string }) => {
  const { data } = useProvider();
  const api = data?.api;
  const enabled = !!api;

  return useQuery({
    queryKey: ["asset"],
    queryFn: enabled
      ? async () => {
          const assetInfo = await api?.query?.tokens?.assets?.(asset);
          return assetInfo?.toHuman() || {};
        }
      : skipToken,
  });
};
