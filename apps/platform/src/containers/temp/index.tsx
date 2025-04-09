"use client";
import { useAssetPrice } from "@repo/onchain";

const Temp = () => {
  const { data } = useAssetPrice();
  console.log("__________data", data);

  return <div>index</div>;
};

export default Temp;
