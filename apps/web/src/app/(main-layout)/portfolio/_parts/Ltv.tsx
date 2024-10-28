"use client";
import ProgressBar from "~/components/ProgressBar";
import { useGetUserLtv } from "~/hooks/chain/useGetUserLtv";

const Ltv = () => {
  const { data } = useGetUserLtv();

  return (
    <ProgressBar
      isLoading={false}
      data={{
        current: Number(data?.currentLtv),
        sale: Number(data?.saleLtv),
        target: Number(data?.liquidationLtv),
      }}
    />
  );
};

export default Ltv;
