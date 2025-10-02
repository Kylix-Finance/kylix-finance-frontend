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
          <Status variant="success" content="25% (Safe)" />
          <Status variant="warning" content="75% (Warning)" />
          <Status
            variant="error"
            content={`${Number(data?.liquidation_ltv || 0)}% (Liquidation)`}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.current_container}>
          <span className={styles.current_value}>
            {Number(data?.current_ltv || 0)}%
          </span>
          <Status variant="success" content="Safe" />
        </div>
        <Skeleton height={10} isLoading={isPending || !data}>
          {data && (
            <ProgressBar
              height={10}
              safe={25}
              value={Number(data.current_ltv)}
              warning={75}
              liquidation={Number(data.liquidation_ltv)}
            />
          )}
        </Skeleton>
        <p className={styles.description}>
          Current liquidation threshold: {Number(data?.liquidation_ltv || 0)}%
        </p>
      </div>
    </div>
  );
};

export default Tvl;
