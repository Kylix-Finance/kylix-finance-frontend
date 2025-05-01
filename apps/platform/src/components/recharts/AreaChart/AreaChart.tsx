"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  DotProps,
} from "recharts";
import { totalValueLocked } from "~/data/charts";
import styles from "./AreaChart.module.scss";
import { CursorProps } from "~/types";
import { getShortMonth } from "~/utils/date";

const CustomDot = (props: DotProps) => {
  const { cx, cy } = props;
  if (cx == null || cy == null) return null;
  return (
    <svg
      x={cx - 8}
      y={cy - 8}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.25}
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill="#56DDB4"
      />
      <path
        d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z"
        fill="#56DDB4"
        stroke="#1E1E1E"
        strokeOpacity={0.5}
      />
    </svg>
  );
};

const CustomCursor = ({ points, width, height }: CursorProps) => {
  const x = points?.[0]?.x ?? 0;

  return (
    <>
      <line
        x1={x}
        x2={x}
        y1={0}
        y2={height}
        stroke="var(--color-neutral-400)"
        strokeWidth={0.5}
        strokeDasharray="3 3"
      />

      <rect
        x={x}
        y={0}
        width="100%"
        height="calc(100% - 30px)"
        fill="rgba(0,0,0,0.4)"
        pointerEvents="none"
        // className={styles.rect}
      />
    </>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;

  // const { value: ts } = label as unknown as { value: number };
  // const volume = payload[0].value;

  return (
    <div className={styles.tooltip}>
      <div className={styles.unit}>
        DOT: <span className={styles.value}>$1.94$</span>
      </div>
      <div className={styles.unit}>
        USDT: <span className={styles.value}>$46.89M</span>
      </div>
    </div>
  );
};

export const CustomAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={totalValueLocked}
        // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
        <YAxis tick={false} axisLine={false} />
        <Area
          type="monotone"
          dataKey="volume"
          stroke="#56DDB4"
          fillOpacity={1}
          fill="url(#colorVolume)"
          activeDot={<CustomDot />}
        />
        <Tooltip
          labelFormatter={getShortMonth}
          content={CustomTooltip}
          //@ts-expect-error props will be added by rechart
          cursor={<CustomCursor />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
