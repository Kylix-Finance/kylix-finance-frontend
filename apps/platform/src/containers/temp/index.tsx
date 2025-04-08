"use client";
import { useGetLiquidationMarkets } from "@repo/onchain";

const Temp = () => {
  const { data } = useGetLiquidationMarkets();
  console.log("__________data", data);

  return <div>index</div>;
};

export default Temp;
