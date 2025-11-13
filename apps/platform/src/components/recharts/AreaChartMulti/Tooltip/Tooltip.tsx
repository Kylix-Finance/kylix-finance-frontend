import { TooltipProps } from "recharts";
import styles from "./Tooltip.module.scss";

const formatValue = (v?: number | string) => {
  if (v == null) return "-";
  const num = typeof v === "string" ? Number(v) : v;
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const Tooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  const [p0, p1] = payload;
  let totalCollateral: number | string | undefined;
  let totalBorrowed: number | string | undefined;

  if (p0?.dataKey === "borrow") {
    totalBorrowed = p0.value;
    totalCollateral = p1?.value;
  } else if (p0?.dataKey === "collateral") {
    totalCollateral = p0.value;
    totalBorrowed = p1?.value;
  } else if (p1?.dataKey === "borrow") {
    totalBorrowed = p1.value;
    totalCollateral = p0?.value;
  } else {
    totalCollateral = p1?.value;
    totalBorrowed = p0?.value;
  }

  return (
    <div className={styles.tooltip}>
      <div className={styles.unit}>
        Total Borrowed:{" "}
        <span className={styles.value}>{formatValue(totalBorrowed)}</span>
      </div>
      <div className={styles.unit}>
        Total Collateral:{" "}
        <span className={styles.value}>{formatValue(totalCollateral)}</span>
      </div>
    </div>
  );
};
