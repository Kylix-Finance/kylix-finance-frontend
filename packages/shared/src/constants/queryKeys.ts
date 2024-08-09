const baseKey = "kylix";

interface Balance {
  address: string | undefined;
  assetId: number | string | undefined;
}

const keys = {
  BALANCE: "BALANCE",
  ACCOUNTS: "ACCOUNTS",
  ACTIVE_ACCOUNT: "ACTIVE_ACCOUNT",
  CONNECTION_REQUEST: "CONNECTION_REQUEST",
  CONFIG: "CONFIG",
  STATUS: "STATUS",
  CONNECTOR: "CONNECTOR",
  DISCONNECT_REQUEST: "DISCONNECT_REQUEST",
  OPTIONS: "OPTIONS",
  PROVIDER: "PROVIDER",
  LENDING_POOLS: "LENDING_POOLS",
  ASSET: "ASSET",
  METADATA: "METADATA",
  TOKEN: "TOKEN",
  POOL_DATA: "POOL_DATA",
};

export const queryKeys = {
  accounts: [baseKey, keys.ACCOUNTS],
  activeAccount: [baseKey, keys.ACTIVE_ACCOUNT],
  connectionRequest: [baseKey, keys.CONNECTION_REQUEST],
  config: [baseKey, keys.CONFIG],
  status: [baseKey, keys.STATUS],
  connector: [baseKey, keys.CONNECTOR],
  disconnectRequest: [baseKey, keys.DISCONNECT_REQUEST],
  options: [baseKey, keys.OPTIONS],
  provider: [baseKey, keys.PROVIDER],
  lendingPools: [baseKey, keys.LENDING_POOLS],
  asset: (assetId: number) => [baseKey, keys.ASSET, assetId],
  metadata: (assetId: number | string) => [baseKey, keys.METADATA, assetId],
  balance: ({ address, assetId }: Balance) => [
    baseKey,
    keys.BALANCE,
    address,
    assetId,
  ],
  token: (symbol: string, size: string) => [baseKey, keys.TOKEN, symbol, size],
  poolData: (assetId: string | number) => [baseKey, assetId],
};
