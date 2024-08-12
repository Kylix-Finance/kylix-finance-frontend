import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { Asset } from "~/types";

type Params = {
  symbol: string;
  size: "32x32" | "64x64" | "128x128";
};

export const useGetAsset = (params: Params) => {
  return useQuery({
    queryKey: queryKeys.token(params.symbol, params.size),
    queryFn: async () => {
      const request = await fetch(
        `/api/assets?symbol=${params.symbol}&size=${params.size}`
      );
      return (await request.json()) as Asset;
    },
  });
};
