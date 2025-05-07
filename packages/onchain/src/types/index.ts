export * from "./rpc";
export * from "./query";
type VoidFunction = () => void;
export type Config = {
  dappName: string;
  rpc: string;
};
export type TransactionCallbacks = {
  onReady?: VoidFunction;
  onBroadcast?: VoidFunction;
  onInBlock?: VoidFunction;
  onFinalized?: VoidFunction;
  onSignerRequestSend?: VoidFunction;
  onSignerRequestApproved?: VoidFunction;
};
export interface SupplyParams {
  assetId: string;
}
export interface UseTransactionResult {
  blockNumber: string | undefined;
  txHash: string;
}
