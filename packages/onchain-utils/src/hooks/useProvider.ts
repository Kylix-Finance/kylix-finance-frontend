import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { queryKeys } from "@repo/shared";
import { Options } from "../types";

const useProvider = () => {
  const queryClient = useQueryClient();
  const params = queryClient.getQueryData<Options>(queryKeys.options);

  const result = useQuery({
    queryKey: queryKeys.provider,
    enabled: !!params,
    queryFn: async () => {
      const provider = new WsProvider(params?.provider.url);
      const apiInstance = await ApiPromise.create({ provider });
      return {
        api: apiInstance,
        provider,
      };
    },
  });

  return result;
};

export { useProvider };
