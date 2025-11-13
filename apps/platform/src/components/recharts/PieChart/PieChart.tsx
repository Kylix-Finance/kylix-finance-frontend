"use client";

import type { ResponsiveContainerProps } from "recharts";
import {
  Legend as RechartsLegend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./PieChart.module.scss";
import LegendContent from "./Legend";
import TooltipContent from "./Tooltip";
export type PieData = {
  name: string;
  value: number;
  fill: string;
};

export type PieChartProps = {
  data: PieData[];
  maxWidth?: number | string;
} & Pick<ResponsiveContainerProps, "width" | "height" | "aspect" | "maxHeight">;

export const PieChart = ({
  width = "100%",
  maxHeight,
  maxWidth,
  data,
}: PieChartProps) => {
  const containerStyle = maxWidth ? { maxWidth, margin: "0 auto" } : undefined;
  const chartData = Array.isArray(data)
    ? data.filter((d) => Number.isFinite(d.value))
    : [];
  const hasValidData = chartData.length > 0;

  return (
    <ResponsiveContainer
      width={width}
      height={300}
      maxHeight={maxHeight}
      className={styles.chart}
      style={containerStyle}
    >
      <RechartsPieChart>
        <Pie
          data={chartData}
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
        {hasValidData && <Tooltip content={TooltipContent} cursor={false} />}
        {hasValidData && (
          <RechartsLegend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="circle"
            content={LegendContent}
            wrapperStyle={{ color: "#E3E5F0" }}
          />
        )}
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
