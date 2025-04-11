import { Definition } from "../definitions";

type Params = [account: string];
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
export type GetUserLtv = Definition<Params, Response>;
