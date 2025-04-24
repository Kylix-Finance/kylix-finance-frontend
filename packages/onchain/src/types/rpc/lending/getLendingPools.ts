import { Definition } from "../definitions";

type Params = [asset: string | null, account: string | null];

interface PoolTotals {
  total_supply: bigint;
  total_borrow: bigint;
}
interface Pool {
  id: number;
  asset_id: number;
  asset: number[];
  asset_decimals: number;
  asset_icon: number[];
  asset_symbol: number[];
  collateral_q: string;
  utilization: string;
  borrow_apy: string;
  borrow_apy_s: string;
  supply_apy: string;
  supply_apy_s: string;
  is_activated: boolean;
  user_asset_balance: bigint | null;
  is_collateral: boolean | null;
  total_pool_borrow: bigint;
  total_pool_supply: bigint;
  user_supplied_balance: bigint | null;
}

type Response = [Pool[], PoolTotals];
export type GetLendingPools = Definition<Params, Response>;
