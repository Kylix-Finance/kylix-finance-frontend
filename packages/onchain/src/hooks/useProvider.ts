import * as types from "../types/chain/augment-api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { queryKeys } from "@repo/shared";
import { useConfig } from "./useConfig";
import '@polkadot/api/types';
import "../types/lending"
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
              // Fully define RPC methods with their signatures
              getAssetPrice: {
                description: 'Get the price of an asset',
                params: [
                  { name: 'asset', type: 'u32' },
                  { name: 'baseAsset', type: 'u32' }
                ],
                type: 'Option<Tuple<(u128, u32)>>'
              },
              getAssetWiseBorrowsCollaterals: {
                description: 'Get borrows and collaterals for an account',
                params: [
                  { name: 'account', type: 'AccountId' }
                ],
                type: 'AssetWiseBorrowsCollaterals'
              },
              getAssetWiseSupplies: {
                description: 'Get supplies for an account',
                params: [
                  { name: 'account', type: 'AccountId' }
                ],
                type: 'AssetWiseSupplies'
              },
              getEstimateCollateralAmount: {
                description: 'Estimate collateral amount',
                params: [
                  // Add appropriate parameters based on your implementation
                ],
                type: 'Option<u128>'
              },
              getLendingPools: {
                description: 'Get lending pools',
                params: [
                  { name: 'asset', type: 'Option<u32>' },
                  { name: 'account', type: 'Option<AccountId>' }
                ],
                type: 'LendingPoolTuple'
              },
              getUserLtv: {
                description: 'Get user LTV',
                params: [
                  { name: 'account', type: 'AccountId' }
                ],
                type: 'Option<u128>'
              }
            },
            liquidation: {
              getLiquidationMarkets: {
                description: 'Get liquidation markets',
                params: [],
                type: 'Vec<LiquidationMarket>'
              },
              getMarketBidDistribution: {
                description: 'Get market bid distribution',
                params: [
                  { name: 'market', type: 'u32' }
                ],
                type: 'Vec<BidDistribution>'
              },
              getUserBids: {
                description: 'Get user bids',
                params: [
                  { name: 'account', type: 'AccountId' }
                ],
                type: 'Vec<UserBid>'
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
