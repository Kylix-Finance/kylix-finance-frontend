"use client";
import ProgressBar from "~/components/ProgressBar";
import { useGetUserLtv } from "~/hooks/chain/useGetUserLtv";

const Ltv = () => {
  const { data } = useGetUserLtv();

  return (
    <ProgressBar
      isLoading={false}
      data={{
        current: Number(data?.currentLtv || 0),
        sale: Number(data?.saleLtv || 50),
        target: Number(data?.liquidationLtv || 100),
      }}
    />
  );
};

export default Ltv;
