"use client";
import {
  useAssetPrice,
  useGetAssetWiseBorrowsCollaterals,
  useGetAssetWiseSupplies,
  useGetLendingPools,
  useGetLiquidationMarkets,
  useGetUserBids,
} from "@repo/onchain";
import AreaChart, { DataPoint } from "~/components/charts/AreaChart";
import { useTranslations } from "next-intl";
import StackedBarChart from "~/components/charts/StackedBarChart";
// const generateData = (): DataPoint[] => {
//   const data: DataPoint[] = [];
//   const now = new Date();

//   for (let i = 90; i >= 0; i--) {
//     const date = new Date(now);
//     date.setDate(now.getDate() - i);

//     const usdt = 10 + Math.random() * 40 + Math.sin(i / 5) * 10;
//     const dot = 50 + Math.random() * 40 + Math.sin(i / 5) * 10;

//     data.push({ date, usdt, dot });
//   }

//   return data;
// };
const mockData = [
  { date: new Date(2023, 0, 1), borrow: 100, supply: 600 }, // January 1
  { date: new Date(2023, 0, 2), borrow: 110, supply: 590 }, // January 2
  { date: new Date(2023, 0, 3), borrow: 120, supply: 580 }, // January 3
  { date: new Date(2023, 0, 4), borrow: 130, supply: 570 }, // January 4
  { date: new Date(2023, 0, 5), borrow: 140, supply: 560 }, // January 5
  { date: new Date(2023, 0, 6), borrow: 150, supply: 550 }, // January 6
  { date: new Date(2023, 0, 7), borrow: 160, supply: 540 }, // January 7
  { date: new Date(2023, 0, 8), borrow: 170, supply: 530 }, // January 8
  { date: new Date(2023, 0, 9), borrow: 180, supply: 520 }, // January 9
  { date: new Date(2023, 0, 10), borrow: 190, supply: 510 }, // January 10
  { date: new Date(2023, 0, 11), borrow: 200, supply: 500 }, // January 11
  { date: new Date(2023, 0, 12), borrow: 210, supply: 490 }, // January 12
  { date: new Date(2023, 0, 13), borrow: 220, supply: 480 }, // January 13
  { date: new Date(2023, 0, 14), borrow: 230, supply: 470 }, // January 14
  { date: new Date(2023, 0, 15), borrow: 240, supply: 460 }, // January 15
  { date: new Date(2023, 0, 16), borrow: 250, supply: 450 }, // January 16
  { date: new Date(2023, 0, 17), borrow: 260, supply: 440 }, // January 17
  { date: new Date(2023, 0, 18), borrow: 270, supply: 430 }, // January 18
  { date: new Date(2023, 0, 19), borrow: 280, supply: 420 }, // January 19
  { date: new Date(2023, 0, 20), borrow: 290, supply: 410 }, // January 20
  { date: new Date(2023, 0, 21), borrow: 300, supply: 400 }, // January 21
  { date: new Date(2023, 0, 22), borrow: 310, supply: 390 }, // January 22
  { date: new Date(2023, 0, 23), borrow: 320, supply: 380 }, // January 23
  { date: new Date(2023, 0, 24), borrow: 330, supply: 370 }, // January 24
  { date: new Date(2023, 0, 25), borrow: 340, supply: 360 }, // January 25
  { date: new Date(2023, 0, 26), borrow: 350, supply: 350 }, // January 26
  { date: new Date(2023, 0, 27), borrow: 360, supply: 340 }, // January 27
  { date: new Date(2023, 0, 28), borrow: 370, supply: 330 }, // January 28
  { date: new Date(2023, 0, 29), borrow: 380, supply: 320 }, // January 29
  { date: new Date(2023, 0, 30), borrow: 390, supply: 310 }, // January 30
];

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
      {/* <AreaChart
        dataset={[
          {
            data: generateData(),
            color: "blue",
          },
        ]}
      /> */}
      <StackedBarChart width={800} height={400} dataset={mockData} />
    </div>
  );
};

export default Temp;
