"use client";

import { CSSProperties, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  BarProps,
  TooltipProps,
} from "recharts";
import styles from "./StackedBarChart.module.scss";
import { getShortMonth } from "~/utils/date";
import { totalBorrowSupply } from "~/data/charts";
import { useDownsample } from "~/hooks/useDownsample";

type HoveredIndex = number | string | bigint | null | undefined;

interface CustomBarProps extends BarProps {
  borderRadius?: CSSProperties["borderRadius"];
  gradient: string;
  borderColor: string;
  hoveredIndex: HoveredIndex;
  setHoveredIndex: React.Dispatch<React.SetStateAction<HoveredIndex>>;
}

const CustomBar = ({
  x,
  y,
  width,
  height,
  index,
  hoveredIndex,
  setHoveredIndex,
  gradient,
  borderColor,
  borderRadius,
}: CustomBarProps) => {
  const isActive = hoveredIndex === null || hoveredIndex === index;

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        pointerEvents: "all",
        opacity: isActive ? 1 : 0.4,
        transition: "opacity 0.2s ease",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={styles.bar}
        style={{
          background: gradient,
          borderColor,
          borderRadius,
        }}
      />
    </foreignObject>
  );
};

const CustomTooltip = ({
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

export const StackedBarChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<HoveredIndex>(null);

  const datasets = useDownsample(totalBorrowSupply, 25);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={datasets}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        barSize={14}
      >
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tickLine={false}
          tickMargin={20}
          tickFormatter={getShortMonth}
        />
        <YAxis tick={false} axisLine={false} />

        <Tooltip content={CustomTooltip} cursor={false} />

        <Bar
          dataKey="bottom"
          stackId="stack"
          stroke="var(--color-chart-supply)"
          shape={
            //@ts-expect-error props will be added by rechart
            <CustomBar
              borderRadius="0 0 4px 4px"
              gradient="var(--color-gradient-linear-supply)"
              borderColor="var(--color-chart-supply)"
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          }
        />

        <Bar
          dataKey="top"
          stackId="stack"
          stroke="var(--color-chart-borrow)"
          shape={
            //@ts-expect-error props will be added by rechart
            <CustomBar
              borderRadius="4px 4px 0 0"
              gradient="var(--color-gradient-linear-borrow)"
              borderColor="var(--color-chart-borrow)"
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
