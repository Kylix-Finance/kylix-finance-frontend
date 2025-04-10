import * as types from "../types/chain/augment-api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { queryKeys } from "@repo/shared";
import { useConfig } from "./useConfig";
import '@polkadot/api/types';
export const useProvider = () => {
  const { data: config } = useConfig();
  const rpc = config?.rpc;
  return useQuery({
    queryKey: queryKeys.provider,
    queryFn: rpc
      ? async () => {
        const provider = new WsProvider(rpc);

        const api = await ApiPromise.create({
          provider,
          types
        })
        return {
          api,
          provider,
        };

      }
      : skipToken,
    meta: {
      excludeFromGlobalInvalidation: true,
    },
  });
};
