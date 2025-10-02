"use client";
import ProgressBar from "~/components/progress-bar";
import styles from "./Ltv.module.scss";
import { useGetUserLtv } from "@repo/onchain";
import Skeleton from "~/components/skeleton";

const Tvl = () => {
  const { data, isPending } = useGetUserLtv();
  console.log("__________data", data);

  return (
    <div className={styles.container}>
      <div>
        <p>Loan-to-Value</p>
        <div>Percentages</div>
      </div>
      <Skeleton height={10} isLoading={isPending || !data}>
        {data && (
          <ProgressBar
            height={10}
            safe={40}
            value={42}
            warning={60}
            liquidation={80}
          />
        )}
      </Skeleton>
    </div>
  );
};

export default Tvl;
