export type Config = {
  dappName: string;
  rpc: string;
};
export type TransactionStatus = {
  onReady?: () => void;
  onBroadcast?: () => void;
  onInBlock?: () => void;
  onFinalized?: () => void;
};
export interface SupplyParams {
  assetId: string;
}
export interface UseTransactionResult {
  blockNumber: string | undefined;
  txHash: string;
}
