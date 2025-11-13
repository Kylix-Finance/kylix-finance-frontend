"use client";
import ProgressBar from "~/components/progress-bar";
import styles from "./Ltv.module.scss";
import { useGetUserLtv, formatUnit, formatBigNumbers } from "@repo/onchain";
import Skeleton from "~/components/skeleton";
import { Status } from "~/components/ui/status";

const Tvl = () => {
  const { data, isPending } = useGetUserLtv();
  const currentLTV = Number(formatUnit(data?.current_ltv || 0, 4));
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title}>Loan-to-Value</p>
        <div className={styles.borders}>
          <Skeleton isLoading={isPending} width={70} height={25}>
            <Status variant="success" content="25% (Safe)" />
          </Skeleton>
          <Skeleton isLoading={isPending} width={70} height={25}>
            <Status variant="warning" content="50% (Warning)" />
          </Skeleton>
          <Skeleton isLoading={isPending} width={70} height={25}>
            <Status
              variant="error"
              content={`${formatBigNumbers(formatUnit(data?.liquidation_ltv || 0, 4), 2)}% (Liquidation)`}
            />
          </Skeleton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.current_container}>
          <Skeleton isLoading={isPending} height={30} width={100}>
            <span className={styles.current_value}>
              {formatBigNumbers(currentLTV.toString(), 2)}%
            </span>
          </Skeleton>
          <Skeleton isLoading={isPending} width={80} height={25}>
            <Status
              variant={
                currentLTV >= 50
                  ? "error"
                  : currentLTV >= 25
                    ? "warning"
                    : "success"
              }
              content={
                currentLTV >= 50
                  ? "Liquidation Risk"
                  : currentLTV >= 25
                    ? "Warning"
                    : "Safe"
              }
            />
          </Skeleton>
        </div>
        <Skeleton height={10} isLoading={isPending || !data}>
          {data && (
            <ProgressBar
              height={10}
              safe={25}
              value={currentLTV}
              warning={50}
              liquidation={Number(formatUnit(data.liquidation_ltv, 4))}
            />
          )}
        </Skeleton>
        <Skeleton isLoading={isPending} width="80%" height={20}>
          <p className={styles.description}>
            Current liquidation threshold:{" "}
            {formatBigNumbers(formatUnit(data?.liquidation_ltv || 0, 4), 2)}%
          </p>
        </Skeleton>
      </div>
    </div>
  );
};

export default Tvl;
