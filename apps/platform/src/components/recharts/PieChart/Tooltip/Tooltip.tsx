import { TooltipProps } from "recharts";
import styles from "./Tooltip.module.scss";

const formatValue = (v?: number | string) => {
  if (v == null) return "-";
  const num = typeof v === "string" ? Number(v) : v;
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const Tooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  const p = payload[0];
  const name = (p?.name as string) ?? (p?.payload as any)?.name ?? "";
  const value = p?.value;

  return (
    <div className={styles.tooltip}>
      <div className={styles.unit}>
        {name}: <span className={styles.value}>{formatValue(value)}</span>
      </div>
    </div>
  );
};
