import { skipToken, useQuery } from "@tanstack/react-query";
import { useProvider } from "./useProvider";
import { queryKeys } from "@repo/shared";

export type MetadataResult = {
  deposit: string;
  name: string;
  symbol: string;
  decimals: number;
  isFrozen: boolean;
};

const useMetadata = (assetId?: number | string) => {
  const { api } = useProvider();
  const enabled = !!api && !!assetId;

  const { data, ...rest } = useQuery<MetadataResult>({
    queryKey: queryKeys.metadata(assetId || -1),
    queryFn: enabled
      ? async () => {
          const metadata = await api?.query?.assets?.metadata?.(assetId);
          return metadata?.toHuman() as MetadataResult;
        }
      : skipToken,
    refetchIntervalInBackground: true,
    refetchInterval: 30,
    refetchOnWindowFocus: "always",
    refetchOnMount: "always",
  });

  const assetMetaData = data
    ? {
        ...data,
        decimals: Number(data.decimals),
      }
    : undefined;

  return {
    ...rest,
    assetMetaData,
  };
};

export { useMetadata };
