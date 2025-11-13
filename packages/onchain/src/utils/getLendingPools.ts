import { callRPC } from "./callRPC";

export const getLendingPools = async (assetId: string | number) => {
  try {
    const response = await callRPC("lending_getLendingPools", +assetId, null);

    if (!response || !Array.isArray(response)) return false;

    const [pools] = response;
    return Boolean(pools && Array.isArray(pools) && pools.length > 0);
  } catch (error) {
    console.error("Error getting lending pools:", error);
    return undefined;
  }
};
