import * as types from "../types/chain/augment-api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { queryKeys } from "@repo/shared";
import { useConfig } from "./useConfig";
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
          types,
          rpc: {
            lending: {
              getAssetPrice: {
                description: 'Get asset price',
                params: [
                  { name: 'asset', type: 'u32' },
                  { name: 'baseAsset', type: 'u32', isOptional: true }
                ],
                type: '(u128,u32)'
              }
            }
          }
        });
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
