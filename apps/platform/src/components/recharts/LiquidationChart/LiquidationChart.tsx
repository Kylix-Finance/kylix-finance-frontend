"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { liquidations } from "~/data/charts";
import CustomBar from "./Bar";
import TooltipContent from "./Tooltip";
import { useState } from "react";
import { ChartItemIndex } from "~/types";

export const LiquidationChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<ChartItemIndex>(null);

  const poolGradientId = "pool-gradient-id";
  const timeGradientId = "time-gradient-id";

  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={liquidations}
          margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
          barSize={48}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="var(--color-chart-grid)"
            strokeDasharray="3 3"
          />
          <defs>
            <linearGradient
              id={poolGradientId}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--color-primary)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="var(--color-primary)"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="percentage"
            tickLine={false}
            tickMargin={20}
            tickFormatter={(tick) => `${tick}%`}
            tick={{ fill: "var(--color-white)" }}
          />

          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-neutral-400)" }}
          />

          <Tooltip content={TooltipContent} cursor={false} />

          <Bar
            dataKey="value"
            stroke="var(--color-primary)"
            shape={
              //@ts-expect-error props will be added by rechart
              <CustomBar
                gradientId={poolGradientId}
                borderColor="var(--color-primary)"
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={100} style={{ marginTop: 10 }}>
        <BarChart
          data={liquidations}
          margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
          barSize={48}
        >
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="var(--color-chart-grid)"
            strokeDasharray="3 3"
          />
          <defs>
            <linearGradient
              id={timeGradientId}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--color-neutral-400)"
                stopOpacity="0.05"
              />
              <stop
                offset="100%"
                stopColor="var(--color-neutral-400)"
                stopOpacity="0.3"
              />
            </linearGradient>
          </defs>

          <Tooltip content={TooltipContent} cursor={false} />

          <YAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-neutral-400)" }}
            reversed
          />

          <Bar
            dataKey="time"
            stroke="var(--color-neutral-400)"
            shape={
              //@ts-expect-error props will be added by rechart
              <CustomBar
                gradientId={timeGradientId}
                borderColor="var(--color-neutral-400)"
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
