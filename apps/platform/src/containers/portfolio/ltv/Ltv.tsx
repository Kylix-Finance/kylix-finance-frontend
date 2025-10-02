"use client";
import ProgressBar from "~/components/progress-bar";
import styles from "./Ltv.module.scss";
import { useGetUserLtv, formatUnit, formatBigNumbers } from "@repo/onchain";
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
          <Status variant="warning" content="50% (Warning)" />
          <Status
            variant="error"
            content={`${formatBigNumbers(formatUnit(data?.liquidation_ltv || 0, 4), 2)}% (Liquidation)`}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.current_container}>
          <span className={styles.current_value}>
            {Number(data?.current_ltv || 0)}%
          </span>
          <Status
            variant={
              Number(formatUnit(data?.current_ltv || 0, 4)) >= 50
                ? "error"
                : Number(formatUnit(data?.current_ltv || 0, 4)) >= 25
                  ? "warning"
                  : "success"
            }
            content={
              Number(formatUnit(data?.current_ltv || 0, 4)) >= 50
                ? "Liquidation Risk"
                : Number(formatUnit(data?.current_ltv || 0, 4)) >= 25
                  ? "Warning"
                  : "Safe"
            }
          />
        </div>
        <Skeleton height={10} isLoading={isPending || !data}>
          {data && (
            <ProgressBar
              height={10}
              safe={25}
              value={Number(formatUnit(data.current_ltv, 4))}
              warning={50}
              liquidation={Number(formatUnit(data.liquidation_ltv, 4))}
            />
          )}
        </Skeleton>
        <p className={styles.description}>
          Current liquidation threshold:{" "}
          {formatBigNumbers(formatUnit(data?.liquidation_ltv || 0, 4), 2)}%
        </p>
      </div>
    </div>
  );
};

export default Tvl;
