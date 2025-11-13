import type { DefaultLegendContentProps } from "recharts";

import styles from "./Legend.module.scss";

type LegendEntry = NonNullable<DefaultLegendContentProps["payload"]>[number];

const getLegendKey = (entry: LegendEntry) => {
  if (entry.id !== undefined && entry.id !== null) {
    return String(entry.id);
  }

  if (entry.dataKey !== undefined && entry.dataKey !== null) {
    return String(entry.dataKey);
  }

  return String(entry.value);
};

const PieChartLegend = ({ payload }: DefaultLegendContentProps) => {
  if (!payload?.length) return null;

  return (
    <ul className={styles.list}>
      {payload.map((entry) => (
        <li key={getLegendKey(entry)} className={styles.item}>
          <span
            className={styles.dot}
            style={{ backgroundColor: entry.color ?? "#ffffff" }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default PieChartLegend;
