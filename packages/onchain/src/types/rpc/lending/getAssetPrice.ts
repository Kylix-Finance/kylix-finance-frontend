import { Definition } from "../definitions";

type Params = [asset: number, base_asset: number | null];
type Response = [price: bigint, decimal: number];
type FormattedResponse = {
  price: bigint;
  decimal: number;
  formattedPrice: string;
};
export type GetAssetPrice = Definition<Params, Response, FormattedResponse>;
