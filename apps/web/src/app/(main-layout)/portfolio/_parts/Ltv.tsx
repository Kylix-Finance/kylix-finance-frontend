"use client";
import ProgressBar from "~/components/ProgressBar";
import { useGetUserLtv } from "~/hooks/chain/useGetUserLtv";

const Ltv = () => {
  const { data } = useGetUserLtv();
  return (
    <ProgressBar
      isLoading={false}
      data={{
        current: data?.currentLtv,
        sale: data?.saleLtv,
        target: data?.liquidationLtv,
      }}
    />
  );
};

export default Ltv;
