import { ApiPromise, WsProvider } from "@polkadot/api";
import * as types from "@repo/onchain/src/types/chain/augment-api";
import { ENV } from "~/config/env";

export const getLendingPools = async (assetId: string | number) => {
  try {
    const provider = new WsProvider(ENV.RPC_ENDPOINT);

    const api = await ApiPromise.create({
      provider,
      types,
      noInitWarn: true,
    });

    const response = await api.rpc("lending_getLendingPools", +assetId, null);

    await api.disconnect();

    if (!response || !Array.isArray(response)) return false;

    const [pools] = response;
    return Boolean(pools && Array.isArray(pools) && pools.length > 0);
  } catch (error) {
    console.error("Error getting lending pools:", error);
    return undefined;
  }
};
