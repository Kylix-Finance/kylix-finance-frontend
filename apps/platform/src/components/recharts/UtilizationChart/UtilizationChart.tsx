import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { utilization } from "~/data/charts";
import Cursor from "./Cursor";
import Dot from "./Dot";
import { getShortMonth } from "~/utils/date";
import styles from "./UtilizationChart.module.scss";

export const UtilizationChart = () => {
  const [showReferenceLine, setShowReferenceLine] = useState(true);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={utilization}
        margin={{ top: 10, right: 8, bottom: 0, left: 0 }}
        onMouseMove={() => setShowReferenceLine(false)}
        onMouseLeave={() => setShowReferenceLine(true)}
      >
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="var(--color-chart-grid)"
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="timestamp"
          axisLine={true}
          tickLine={false}
          stroke="var(--color-chart-bottom)"
          tick={{ fill: "var(--color-white)" }}
          tickFormatter={getShortMonth}
          padding={{ left: 50, right: 50 }}
          tickMargin={8}
          height={30}
        />
        <YAxis axisLine={false} tickLine={false} />

        <Tooltip
          content={() => null}
          //@ts-expect-error props will be added by rechart
          cursor={<Cursor />}
        />

        <defs>
          {/* Supply shadow */}
          <filter
            id="supplyShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="4"
              floodColor="var(--color-chart-supply)"
              floodOpacity="0.6"
            />
          </filter>

          {/* Borrow shadow */}
          <filter
            id="borrowShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="4"
              floodColor="var(--color-chart-borrow)"
              floodOpacity="0.6"
            />
          </filter>
        </defs>

        <Line
          dataKey="supply"
          stroke="var(--color-chart-supply)"
          filter="url(#supplyShadow)"
          strokeWidth={2}
          dot={<Dot length={utilization.length} />}
          activeDot={<Dot length={utilization.length} isActiveDot />}
        />
        <Line
          dataKey="borrow"
          stroke="var(--color-chart-borrow)"
          filter="url(#borrowShadow)"
          strokeWidth={2}
          dot={<Dot length={utilization.length} />}
          activeDot={<Dot length={utilization.length} isActiveDot />}
        />

        <ReferenceLine
          x={1623110400}
          stroke="var(--color-chart-utilization)"
          strokeDasharray="2 4"
          ifOverflow="extendDomain"
          strokeOpacity={showReferenceLine ? 1 : 0}
        />

        <Legend
          verticalAlign="bottom"
          align="center"
          payload={[
            {
              value: "Supply APY",
              type: "line",
              id: "supply",
              color: "var(--color-chart-supply)",
            },
            {
              value: "Borrow APY",
              type: "line",
              id: "borrow",
              color: "var(--color-chart-borrow)",
            },
            {
              value: "Utilization Rate",
              type: "line",
              id: "utilization",
              color: "var(--color-chart-utilization)",
            },
          ]}
          wrapperStyle={{ paddingTop: 12 }}
          formatter={(value) => <span className={styles.legend}>{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
