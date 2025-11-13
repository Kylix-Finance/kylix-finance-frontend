import { useMemo } from "react";
import clsx from "clsx";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  safe: number;
  warning: number;
  liquidation: number;
  value: number;
  height?: number;
}

type SegmentType = "safe" | "warning" | "liquidation";
const SEGMENTS: SegmentType[] = ["safe", "warning", "liquidation"];
export const ProgressBar = ({
  safe,
  warning,
  liquidation,
  value,
  height = 20,
}: ProgressBarProps) => {
  const segments = useMemo(() => {
    const values = [
      Number(safe) || 0,
      Number(warning) || 0,
      Number(liquidation) || 0,
    ];
    const total = values.reduce((sum, val) => sum + val, 0) || 1;

    return SEGMENTS.map((type, index) => ({
      type,
      percentage: (values[index] / total) * 100,
    }));
  }, [safe, warning, liquidation]);

  const normalizedValue = useMemo(
    () => Math.max(0, Math.min(100, Number(value) || 0)),
    [value]
  );

  const activeSegment = useMemo(() => {
    const safeEnd = segments[0].percentage;
    const warningEnd = safeEnd + segments[1].percentage;

    if (value > warningEnd) return "liquidation";
    if (value > safeEnd) return "warning";
    return "safe";
  }, [segments, value]);

  return (
    <div
      className={styles.container}
      style={{
        height,
      }}
    >
      <div
        className={clsx(styles.fill, styles[`fill_${activeSegment}`])}
        style={{ width: `${normalizedValue}%`, height }}
      />
      {segments.map(({ type, percentage }) => (
        <div
          key={type}
          className={clsx(styles.segment, styles[type])}
          style={{ width: `${percentage}%`, height }}
        />
      ))}
    </div>
  );
};
