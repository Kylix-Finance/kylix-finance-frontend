"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { totalValueLocked } from "~/data/charts";
import { getShortMonth } from "~/utils/date";
import { Dot } from "./Dot/Dot";
import Cursor from "./Cursor";
import TooltipContent from "./Tooltip";

export const CustomAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={totalValueLocked}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#56DDB4" stopOpacity="0.3" />
            <stop offset="1" stopColor="#56DDB4" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="timestamp"
          tickFormatter={getShortMonth}
          axisLine={false}
          tickLine={false}
        />
        <Area
          type="monotone"
          dataKey="volume"
          stroke="#56DDB4"
          fillOpacity={1}
          fill="url(#colorVolume)"
          activeDot={<Dot />}
        />
        <Tooltip
          labelFormatter={getShortMonth}
          content={TooltipContent}
          //@ts-expect-error props will be added by rechart
          cursor={<Cursor />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
