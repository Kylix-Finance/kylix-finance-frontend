import { Definition } from "../definitions";


type Params = {
    asset: number;
    base_asset: number
}

type Response = {
    currentBorrow: bigint;
    currentLtv: bigint;
    borrowLimit: bigint;
    saleLtv: bigint;
    liquidationValue: bigint;
    liquidationLtv: bigint;
    allowance: bigint;
    collateral: bigint;
}
export type GetUserLtv = Definition<Params, Response>