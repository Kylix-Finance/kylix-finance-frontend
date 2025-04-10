import { Definition } from "../definitions";

type Params = {
    asset: number
}
type Response = {
    currentBorrow: number;
    currentLtv: number;
    borrowLimit: number;
    saleLtv: string;
    liquidationValue: number;
    liquidationLtv: string;
    allowance: number;
    collateral: number;
}
export type GetAssetPrice = Definition<Params, Response>