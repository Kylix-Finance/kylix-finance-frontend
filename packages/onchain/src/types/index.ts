export type Config = {
  dappName: string;
  rpc: string;
};

export interface SupplyParams {
  assetId: string;
}

export interface SupplyMutationFnParams {
  balance: string | bigint;
  onConfirm?: () => void;
}
export interface SimulateSupplyMutationFnPrams
  extends Omit<SupplyMutationFnParams, "onConfirm"> {}
