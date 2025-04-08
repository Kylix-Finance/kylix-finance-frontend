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
                description: 'Get the price of an asset',
                params: [
                  {
                    name: 'assetId',
                    type: 'u32' // Adjust type as needed
                  }
                ],
                type: 'Option<Balance>' // Adjust return type as needed
              },
              getAssetWiseBorrowsCollaterals: {
                description: 'Get asset-wise borrows and collaterals',
                params: [],
                type: 'Vec<AssetBorrowCollateral>' // Define this type in your types
              },
              getAssetWiseSupplies: {
                description: 'Get asset-wise supplies',
                params: [],
                type: 'Vec<AssetSupply>' // Define this type in your types
              },
              getEstimateCollateralAmount: {
                description: 'Get estimate collateral amount',
                params: [
                  {
                    name: 'params',
                    type: 'EstimateCollateralParams' // Define this type in your types
                  }
                ],
                type: 'Option<Balance>' // Adjust return type as needed
              },
              getLendingPools: {
                description: 'Get lending pools',
                params: [],
                type: 'Vec<LendingPool>' // Define this type in your types
              },
              getUserLtv: {
                description: 'Get user loan-to-value ratio',
                params: [
                  {
                    name: 'accountId',
                    type: 'AccountId' // Use your chain's AccountId type
                  }
                ],
                type: 'Option<Permill>' // Or another appropriate type
              }
            },
            liquidation: {}
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
