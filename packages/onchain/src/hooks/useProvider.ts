import * as types from "../types/chain/augment-api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { queryKeys } from "@repo/shared";
import { useConfig } from "./useConfig";
import '@polkadot/api/types';
import { RPC } from "../types/rpc"
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
        });
        (api.rpc.lending as RPC["lending"]).getUserLtv()
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
