import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { queryKeys } from "@repo/shared";

export type MetadataResult = {
  deposit: string;
  name: string;
  symbol: string;
  decimals: string;
  isFrozen: boolean;
};

const useMetadata = (assetId?: number | string) => {
  const { api } = useProvider();
  const enabled = !!api && !!assetId;

  return useQuery({
    queryKey: queryKeys.metadata(assetId || -1),
    queryFn: enabled
      ? async () => {
          const metadata = await api?.query?.assets?.metadata?.(assetId);
          return metadata?.toHuman() as MetadataResult;
        }
      : skipToken,
  });
};
export { useMetadata };
