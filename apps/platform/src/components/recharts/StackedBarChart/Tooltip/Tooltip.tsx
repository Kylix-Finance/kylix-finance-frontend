import { TooltipProps } from "recharts";
import styles from "./Tooltip.module.scss";

export const Tooltip = ({
  active,
  payload,
  label,
  ...props
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.tooltip}>
      <div className={styles.unit}>
        Borrow:{" "}
        <div
          className={styles.badge}
          style={{ background: payload[0].stroke }}
        ></div>
        <span className={styles.value}>$1.94$</span>
      </div>
      <div className={styles.unit}>
        Supply:{" "}
        <div
          className={styles.badge}
          style={{ background: payload[1].stroke }}
        ></div>
        <span className={styles.value}>$46.89M</span>
      </div>
    </div>
  );
};
