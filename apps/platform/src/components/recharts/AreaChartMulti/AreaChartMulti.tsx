"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { totalValueLocked } from "~/data/charts";
import { getShortMonth } from "~/utils/date";
import { Dot } from "./Dot/Dot";
import Cursor from "./Cursor";
import TooltipContent from "./Tooltip";
import Legend from "~/components/legend";
import styles from "./AreaChartMulti.module.scss";

export const AreaChartMulti = () => {
  const data = totalValueLocked.map((d) => ({
    timestamp: d.timestamp,
    borrow: d.volume,
    collateral: Math.round(d.volume * 1.4),
  }));

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="areaSupply" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="var(--color-chart-borrow)" stopOpacity="0.3" />
              <stop
                offset="1"
                stopColor="var(--color-chart-borrow)"
                stopOpacity="0.05"
              />
            </linearGradient>
            <linearGradient id="areaPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop
                offset="1"
                stopColor="var(--color-primary)"
                stopOpacity="0.05"
              />
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
            dataKey="borrow"
            stroke="var(--color-chart-borrow)"
            fillOpacity={1}
            fill="url(#areaSupply)"
            activeDot={<Dot />}
          />
          <Area
            type="monotone"
            dataKey="collateral"
            stroke="var(--color-primary)"
            fillOpacity={1}
            fill="url(#areaPrimary)"
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

      <div className={styles.legend}>
        <Legend
          items={[
            { label: "Total Borrowed", color: "var(--color-chart-borrow)" },
            { label: "Total Collateral", color: "var(--color-primary)" },
          ]}
        />
      </div>
    </div>
  );
};
