import { useAssetPrice, useGetLendingPools, useGetUserLtv } from "./rpc";
import { usePool } from "./query";
import { useAccountsStore } from "@repo/shared";
import { formatUnit } from "../utils/formatUnit";

interface Params {
  assetId: string | number;
}

export const useMaxBorrowAmount = ({ assetId }: Params): string => {
  const { data: ltv } = useGetUserLtv();
  const { data: otherPoolData } = usePool({ assetId });
  const { data: assetPrice } = useAssetPrice({ assetId });
  const { account } = useAccountsStore();
  const { data: pool } = useGetLendingPools({
    assetId,
    account: account?.address,
  });

  if (!ltv || !assetPrice || !otherPoolData || !pool?.assets?.[0])
    return "0.0000";

  const allowance = formatUnit(ltv.allowance || "0", 6);
  const decimals = pool.assets[0].asset_decimals;

  const allowanceAmount =
    Number(allowance) / Number(assetPrice.formattedPrice || 1);

  const poolBalance = Number(
    formatUnit(BigInt(otherPoolData.reserveBalance || 0), decimals) || 0
  );

  return Math.min(poolBalance, allowanceAmount).toFixed(4);
};
