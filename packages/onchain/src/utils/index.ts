import { ApiPromise, WsProvider } from "@polkadot/api";

export const getMetadata = async (
  endpoint: string = "wss://test-dashboard.kylix.finance"
) => {
  let provider: WsProvider | null = null;
  let api: ApiPromise | null = null;

  try {
    provider = new WsProvider(endpoint);
    api = await ApiPromise.create({ provider });
    const metadata = await api.rpc.state.getMetadata();
    return metadata.toHex();
  } catch (error) {
    console.error("Failed to get metadata:", error);
    throw error;
  } finally {
    if (api) {
      await api.disconnect();
    }
  }
};
