"use client";
import {
  useAssetPrice,
  useGetAssetWiseBorrowsCollaterals,
  useGetAssetWiseSupplies,
  useGetLendingPools,
  useGetLiquidationMarkets,
  useGetUserBids,
} from "@repo/onchain";
import { useTranslations } from "next-intl";
const Temp = () => {
  // const { data } = useAssetPrice({ assetId: 20 });
  const t = useTranslations("Dashboard");
  // const { data } = useGetAssetWiseBorrowsCollaterals({
  //   account: "5GW47HUptFYtiMKN3M7Su5WgCAM4UwLiWVYoBMPx3zYqZE8j",
  // });
  // const { data } = useGetLendingPools({
  //   account: "5GW47HUptFYtiMKN3M7Su5WgCAM4UwLiWVYoBMPx3zYqZE8j",
  // });
  // const { data } = useGetLiquidationMarkets({
  //   account: "5GW47HUptFYtiMKN3M7Su5WgCAM4UwLiWVYoBMPx3zYqZE8j",
  // });
  const { data } = useGetUserBids({
    account: "5GW47HUptFYtiMKN3M7Su5WgCAM4UwLiWVYoBMPx3zYqZE8j",
    assetId: 21,
  });
  console.log("__________data", data);

  return <div>{t("test")}</div>;
};

export default Temp;
