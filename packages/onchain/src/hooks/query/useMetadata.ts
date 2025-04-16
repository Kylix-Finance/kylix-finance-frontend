import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useProvider } from "../useProvider";

export type MetadataResult = {
  deposit: string;
  name: string;
  symbol: string;
  decimals: number;
  isFrozen: boolean;
};
export const useMetadata = (assetId: string) => {
  const { data } = useProvider();
  const enabled = !!data?.api;
  return useQuery({
    queryKey: queryKeys.metadata(assetId || -1),
    queryFn: enabled
      ? async () => {
          const { api } = data;
          const metadata = await api.query.assets.metadata(assetId);
          return metadata.toHuman() as MetadataResult;
        }
      : skipToken,
  });
};
