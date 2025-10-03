"use client";

import type { ResponsiveContainerProps } from "recharts";
import {
  Legend as RechartsLegend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./PieChart.module.scss";
import LegendContent from "./Legend";
export type PieData = {
  name: string;
  value: number;
  fill: string;
};

type PieChartProps = {
  data: PieData[];
  maxWidth?: number | string;
} & Pick<ResponsiveContainerProps, "width" | "height" | "aspect" | "maxHeight">;

export const PieChart = ({
  width = "100%",
  height,
  aspect = 1.4,
  maxHeight,
  maxWidth,
  data,
}: PieChartProps) => {
  return (
    <ResponsiveContainer
      width={width}
      height={height}
      aspect={height ? undefined : aspect}
      maxHeight={maxHeight}
      className={styles.chart}
      style={maxWidth ? { maxWidth, margin: "0 auto" } : undefined}
    >
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius="65%"
          outerRadius="85%"
          paddingAngle={2}
          stroke="#FFFFFF"
          strokeWidth="1"
          isAnimationActive={false}
          legendType="circle"
        />
        <RechartsLegend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          iconType="circle"
          content={LegendContent}
          wrapperStyle={{ color: "#E3E5F0" }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
