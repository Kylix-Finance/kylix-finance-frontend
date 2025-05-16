import { TooltipProps } from "recharts";
import styles from "./Tooltip.module.scss";
import clsx from "clsx";
import { formatBigNumbers, formatUnit } from "@repo/onchain";

export const Tooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload) return null;

  const info = payload[0].payload;

  return (
    <div className={styles.tooltip}>
      <div className={styles.unit}>
        SOL:{" "}
        <div
          className={clsx(styles.badge, styles.sol)}
          style={{ background: info.stroke }}
        ></div>
        <span className={styles.value}>
          {formatBigNumbers(formatUnit(info.amount, 6), 2)}
        </span>
      </div>
      <div className={styles.unit}>
        Discount:{" "}
        <div
          className={clsx(styles.badge, styles.discount)}
          style={{ background: info.stroke }}
        ></div>
        <span className={styles.value}>{info.discount}%</span>
      </div>
      <div className={styles.unit}>
        Emptied: <span className={styles.value}>{info.time}</span>
      </div>
    </div>
  );
};
