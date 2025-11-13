import styles from "./Legend.module.scss";
import ChartLegend from "~/assets/icons/chart-legend.svg";

interface LegendItem {
  label: string;
  color: string;
}

interface LegendProps {
  items: LegendItem[];
}

export const Legend = ({ items }: LegendProps) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div className={styles.legend} key={item.label}>
          <ChartLegend fill={item.color} />
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
