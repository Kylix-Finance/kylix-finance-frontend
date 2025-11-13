import { Definition } from "../definitions";

type Params = [account: string];
type AssetInfo = {
  asset_id: number;
  asset_symbol: number[];
  asset_name: number[];
  decimals: number;
  asset_icon: number[];
  balance: string;
  usdt_balance: number;
};

type SuppliedAssetEntry = {
  apy: string;
  supplied: string;
  is_collateral: boolean;
} & AssetInfo;

type Response = [SuppliedAssetEntry[], number];

export type GetAssetWiseSupplies = Definition<Params, Response>;
