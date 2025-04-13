"use client";
import {
  useAssetPrice,
  useGetAssetWiseBorrowsCollaterals,
  useGetAssetWiseSupplies,
  useGetLendingPools,
  useGetLiquidationMarkets,
  useGetUserBids,
} from "@repo/onchain";
import AreaChart from "~/components/charts/AreaChart";
import { useTranslations } from "next-intl";
const generateData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const now = new Date();

  for (let i = 90; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);

    const usdt = 10 + Math.random() * 40 + Math.sin(i / 5) * 10;
    const dot = 50 + Math.random() * 40 + Math.sin(i / 5) * 10;

    data.push({ date, usdt, dot });
  }

  return data;
};
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
  // const { data } = useGetUserBids({
  //   account: "5GW47HUptFYtiMKN3M7Su5WgCAM4UwLiWVYoBMPx3zYqZE8j",
  //   assetId: 21,
  // });
  // console.log("__________data", data);

  return (
    <div>
      <AreaChart
        dataset={[
          {
            data: generateData(),
            color: "red",
          },
          {
            data: generateData(),
            color: "blue",
          },
        ]}
      />
    </div>
  );
};

export default Temp;
