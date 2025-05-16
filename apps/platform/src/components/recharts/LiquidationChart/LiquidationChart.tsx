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
import CustomBar from "./Bar";
import TooltipContent from "./Tooltip";
import { useMemo, useState } from "react";
import { ChartItemIndex } from "~/types";
import styles from "./LiquidationChart.module.scss";
import Legend from "~/components/legend";
import {
  formatBigNumbers,
  formatUnit,
  useGetMarketBidDistribution,
} from "@repo/onchain";
import { useParams } from "next/navigation";
import { random } from "lodash-es";
import Loading from "~/components/loaders/loading";
import CardWrapper from "~/components/card-wrapper";

export const LiquidationChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<ChartItemIndex>(null);

  const poolGradientId = "pool-gradient-id";
  const timeGradientId = "time-gradient-id";

  const { id } = useParams<{ id: string }>();

  const { data, isFetched } = useGetMarketBidDistribution({ assetId: id });

  //mock and temporary until second chart API is ready
  const discounts = useMemo(() => {
    if (!data) return [];
    return data[1].map((discount) => ({
      ...discount,
      time: random(2, 8),
    }));
  }, [data]);

  if (!isFetched)
    return (
      <CardWrapper>
        <Loading />
      </CardWrapper>
    );

  return (
    <CardWrapper>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={discounts}
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
            dataKey="discount"
            tickLine={false}
            tickMargin={20}
            tickFormatter={(tick) => `${tick}%`}
            tick={{ fill: "var(--color-white)" }}
          />

          <YAxis
            width={80}
            dataKey="amount"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-neutral-400)" }}
            tickFormatter={(tick) => formatBigNumbers(formatUnit(tick, 6), 2)}
          />

          <Tooltip content={TooltipContent} cursor={false} />

          <Bar
            dataKey="amount"
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
          data={discounts}
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
            width={80}
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
      <div className={styles.legend}>
        <Legend
          items={[
            {
              label: "Pool Value",
              color: "var(--color-primary",
            },
            {
              label: "Time Emptied",
              color: "var(--color-neutral-200)",
            },
          ]}
        />
      </div>
    </CardWrapper>
  );
};
