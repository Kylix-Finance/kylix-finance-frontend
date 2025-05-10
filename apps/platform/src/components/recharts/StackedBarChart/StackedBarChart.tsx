"use client";

import { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import { getShortMonth } from "~/utils/date";
import { totalBorrowSupply } from "~/data/charts";
import { useDownsample } from "~/hooks/useDownsample";
import { ChartItemIndex } from "~/types";
import TooltipContent from "./Tooltip";
import CustomBar from "./Bar";

export const StackedBarChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<ChartItemIndex>(null);

  const datasets = useDownsample(totalBorrowSupply, 35);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={datasets}
        margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
        barSize={14}
      >
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tickLine={false}
          tickMargin={20}
          tickFormatter={getShortMonth}
        />
        <Tooltip content={TooltipContent} cursor={false} />

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
