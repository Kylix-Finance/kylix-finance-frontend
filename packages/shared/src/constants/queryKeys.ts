const baseKey = "kylix";

type ID = number | string | undefined;

interface Balance {
  address: string | undefined;
  assetId: ID;
}
interface AssetPrice {
  assetId: ID;
}
interface LendingPools {
  asset?: ID;
  account?: string;
}
interface Pools {
  activeAccount: string | undefined;
}

interface EstimateCollateral {
  borrowAsset: string | undefined;
  borrowAssetAmount: string | undefined;
  collateralAsset: string | undefined;
}
interface LiquidationMarkets {
  account?: string;
}

interface MarketBidDistribution {
  assetId: string;
}

interface RecentLiquidation {
  assetId: string;
}
interface Signer {
  connectorId: string | null;
  account: string | null;
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
  LIQUIDATION_MARKETS: "LIQUIDATION_MARKET",
  MARKET_BID_DISTRIBUTION: "MARKET_BID_DISTRIBUTION",
  ASSET: "ASSET",
  METADATA: "METADATA",
  TOKEN: "TOKEN",
  POOL_DATA: "POOL_DATA",
  SUPPLY: "SUPPLY",
  BORROW: "BORROW",
  REPAY: "REPAY",
  QUICK_BORROW: "QUICK_BORROW",
  WITHDRAW: "WITHDRAW",
  POOLS: "POOLS",
  ASSET_PRICE: "ASSET_PRICE",
  KYLIX_PRICE: "KYLIX_PRICE",
  TOTAL_SUPPLY: "TOTAL_SUPPLY",
  POOLS_DATA: "POOLS_DATA",
  ASSET_WISE_BORROW_COLLATERAL: "ASSET_WISE_BORROW_COLLATERAL",
  ASSET_WISE_SUPPLIES: "ASSET_WISE_SUPPLIES",
  GET_ASSET_PRICE: "GET_ASSET_PRICE",
  GET_USER_LTV: "GET_USER_LTV",
  ESTIMATE_COLLATERAL: "ESTIMATE_COLLATERAL",
  INTEREST_RATE: "INTEREST_RATE",
  PLACE_BID: "PLACE_BID",
  RECENT_LIQUIDATION: "RECENT_LIQUIDATION",
  USER_BIDS: "USER_BIDS",
  SIGNER: "SIGNER",
  WALLETS: "WALLETS"
};
//FIXME: 1d is temporary
type ChartScale = "all" | "month" | "year" | "1d";

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
  signer: ({ account, connectorId }: Signer) => [
    baseKey,
    keys.SIGNER,
    account,
    connectorId,
  ],
  lendingPools: ({ asset, account }: LendingPools = {}) => [
    baseKey,
    keys.LENDING_POOLS,
    asset,
    account,
  ],
  liquidationMarkets: ({ account }: LiquidationMarkets) => [
    baseKey,
    keys.LIQUIDATION_MARKETS,
    account,
  ],
  recentLiquidation: ({ assetId }: RecentLiquidation) => [
    baseKey,
    keys.RECENT_LIQUIDATION,
    assetId,
  ],
  marketBidDistribution: ({ assetId }: MarketBidDistribution) => [
    baseKey,
    keys.MARKET_BID_DISTRIBUTION,
    assetId,
  ],
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
  placeBid: [baseKey, keys.PLACE_BID],
  borrow: [baseKey, keys.BORROW],
  quickBorrow: [baseKey, keys.QUICK_BORROW],
  withdraw: [baseKey, keys.WITHDRAW],
  pools: ({ activeAccount }: Pools) => [baseKey, keys.POOLS, activeAccount],
  kylixPrice: (scale: ChartScale) => [baseKey, keys.KYLIX_PRICE, scale],
  totalSupply: (scale: ChartScale) => [baseKey, keys.TOTAL_SUPPLY, scale],
  poolsData: (assetId: string) => [baseKey, keys.POOLS_DATA, assetId],
  assetWiseBorrowsCollaterals: (
    account: string | undefined,
    poolId?: string | number | undefined
  ) => [baseKey, keys.ASSET_WISE_BORROW_COLLATERAL, account, poolId],
  assetWiseSupplies: (account: string | undefined) => [
    baseKey,
    keys.ASSET_WISE_SUPPLIES,
    account,
  ],
  estimateCollateral: ({
    borrowAsset,
    borrowAssetAmount,
    collateralAsset,
  }: EstimateCollateral) => [
      baseKey,
      keys.ESTIMATE_COLLATERAL,
      borrowAsset,
      borrowAssetAmount,
      collateralAsset,
    ],
  getAssetPrice: (asset: number, base_asset?: number) => [
    baseKey,
    keys.GET_ASSET_PRICE,
    asset,
    base_asset,
  ],
  repay: [baseKey, keys.REPAY],
  userLtv: (account: string | undefined) => [
    baseKey,
    keys.GET_USER_LTV,
    account,
  ],
  interestRate: () => [baseKey, keys.INTEREST_RATE],
  userBids: (activeAccount: string | undefined) => [
    baseKey,
    keys.USER_BIDS,
    activeAccount,
  ],
  wallets: [baseKey, keys.WALLETS]
};
