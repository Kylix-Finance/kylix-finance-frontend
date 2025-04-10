import { Definition, RPCMethod } from "../definitions";

type Params = [asset: number, base_asset: number];
type Response = {
  allowance: bigint;
  borrowLimit: bigint;
  collateral: bigint;
  currentBorrow: bigint;
  currentLtv: bigint;
  liquidationLtv: bigint;
  liquidationValue: bigint;
  saleLtv: bigint;
};
export type UserLtvSchema = Definition<Params, Response>;
export type GetUserLtv = RPCMethod<UserLtvSchema>;
