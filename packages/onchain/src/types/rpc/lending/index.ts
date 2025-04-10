import { GetAssetPrice } from "./getAssetPrice";
import { GetAssetWiseBorrowsCollaterals } from "./getAssetWiseBorrowsCollaterals";
import { GetAssetWiseSupplies } from "./getAssetWiseSupplies";
import { GetLendingPools } from "./getLendingPools";
import { GetUserLtv } from "./getUserLtv";

export type Lending = {
    getAssetPrice: GetAssetPrice;
    getAssetWiseBorrowsCollaterals: GetAssetWiseBorrowsCollaterals;
    getAssetWiseSupplies: GetAssetWiseSupplies;
    getLendingPools: GetLendingPools;
    getUserLtv: GetUserLtv;
};
