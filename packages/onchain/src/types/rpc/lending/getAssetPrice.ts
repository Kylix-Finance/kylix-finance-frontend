import { Definition } from "../definitions";

type Params = [asset: number, base_asset: number | null];
type Response = [price: bigint, decimal: number];
export type GetAssetPrice = Definition<Params, Response>;
