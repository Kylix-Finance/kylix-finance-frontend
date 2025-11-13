import { ApiPromise, WsProvider } from "@polkadot/api";
import * as types from "../types/chain/augment-api";

interface RPCConfig {
  rpcEndpoint?: string;
  noInitWarn?: boolean;
  reuseConnection?: boolean;
}

type RPCState = {
  api: ApiPromise | null;
  reuseConnection: boolean;
};

// Create a state container using closure
const createRPCState = (): RPCState => ({
  api: null,
  reuseConnection: false,
});

// Singleton state
const state = createRPCState();

// Initialize API instance
const initializeAPI = async (config?: RPCConfig): Promise<ApiPromise> => {
  if (state.api) {
    return state.api;
  }

  const provider = new WsProvider(
    config?.rpcEndpoint || process.env.NEXT_PUBLIC_RPC_ENDPOINT
  );
  state.api = await ApiPromise.create({
    provider,
    types,
    noInitWarn: config?.noInitWarn ?? true,
  });

  return state.api;
};

// Handle connection management
export const setConnectionReuse = (reuse: boolean) => {
  state.reuseConnection = reuse;
  if (!reuse && state.api) {
    state.api.disconnect();
    state.api = null;
  }
};

// Cleanup function
export const disconnect = async () => {
  if (state.api) {
    await state.api.disconnect();
    state.api = null;
  }
};

// Main RPC call function
export const callRPC = async <T = any>(
  method: string,
  ...params: any[]
): Promise<T | undefined> => {
  try {
    const api = await initializeAPI();
    const response = await api.rpc(method, ...params);

    if (!state.reuseConnection) {
      await disconnect();
    }

    return response as T;
  } catch (error) {
    console.error(`Error calling RPC method ${method}:`, error);
    return undefined;
  }
};
