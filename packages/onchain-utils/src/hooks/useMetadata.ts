import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { queryKeys } from "@repo/shared";

type MetadataResult = {
  deposit: string;
  name: string;
  symbol: string;
  decimals: string;
  isFrozen: boolean;
};

const useMetadata = (assetId: number) => {
  const { data } = useProvider();
  const api = data?.api;
  const enabled = !!api;

  return useQuery({
    queryKey: queryKeys.metadata(assetId),
    queryFn: enabled
      ? async () => {
          const metadata = await api?.query?.assets?.metadata?.(assetId);
          return metadata?.toHuman() as MetadataResult;
        }
      : skipToken,
  });
};
export { useMetadata };
