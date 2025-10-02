import { Definition } from "../definitions";

type Params = [account: string];
type Response = {
  current_borrow: bigint;
  current_ltv: bigint;
  borrow_limit: bigint;
  sale_ltv: bigint;
  liquidation_value: bigint;
  liquidation_ltv: bigint;
  allowance: bigint;
  collateral: bigint;
  decimals: number;
};
export type GetUserLtv = Definition<Params, Response>;
