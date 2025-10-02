"use client";
import ProgressBar from "~/components/progress-bar";
import styles from "./Ltv.module.scss";
import { useGetUserLtv } from "@repo/onchain";
import Skeleton from "~/components/skeleton";
import { Status } from "~/components/ui/status";
const Tvl = () => {
  const { data, isPending } = useGetUserLtv();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Loan-to-Value</p>
        <div className={styles.borders}>
          <Status variant="success" content="42% (Safe)" />
          <Status variant="warning" content="62% (Warning)" />
          <Status variant="error" content="72% (Liquidation)" />
        </div>
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
