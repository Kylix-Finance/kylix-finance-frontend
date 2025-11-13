import { TooltipProps } from "recharts";
import styles from "./Tooltip.module.scss";

export const Tooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  // const { value: ts } = label as unknown as { value: number };
  // const volume = payload[0].value;

  return (
    <div className={styles.tooltip}>
      <div className={styles.unit}>
        DOT: <span className={styles.value}>$1.94$</span>
      </div>
      <div className={styles.unit}>
        USDT: <span className={styles.value}>$46.89M</span>
      </div>
    </div>
  );
};
