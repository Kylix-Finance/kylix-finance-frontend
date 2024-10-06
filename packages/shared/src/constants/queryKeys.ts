import { Signer } from "@polkadot/api/types";

const baseKey = "kylix";

interface Balance {
  address: string | undefined;
  assetId: number | string | undefined;
}
interface AssetPrice {
  assetId: number | string | undefined;
}
interface Pools {
  activeAccount: string | undefined;
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
  SUPPLY: "SUPPLY",
  BORROW: "BORROW",
  QUICK_BORROW: "QUICK_BORROW",
  WITHDRAW: "WITHDRAW",
  POOLS: "POOLS",
  ASSET_PRICE: "ASSET_PRICE",
  KYLIX_PRICE: "KYLIX_PRICE",
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
  assetPrice: ({ assetId }: AssetPrice) => [baseKey, keys.ASSET_PRICE, assetId],
  token: (symbol: string, size: string) => [baseKey, keys.TOKEN, symbol, size],
  poolData: (assetId: string | number) => [baseKey, keys.POOL_DATA, assetId],
  supply: [baseKey, keys.SUPPLY],
  borrow: [baseKey, keys.BORROW],
  quickBorrow: [baseKey, keys.QUICK_BORROW],
  withdraw: [baseKey, keys.WITHDRAW],
  pools: ({ activeAccount }: Pools) => [baseKey, keys.POOLS, activeAccount],
  kylixPrice: ({
    endDate,
    startDate,
  }: {
    startDate: string;
    endDate: string;
  }) => [baseKey, keys.KYLIX_PRICE, startDate, endDate],
};
