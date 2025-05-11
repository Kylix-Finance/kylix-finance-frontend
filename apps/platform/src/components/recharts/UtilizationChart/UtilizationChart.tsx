import { useState } from "react";
import {
  CartesianGrid,
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
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tickLine={false}
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

        <Line
          dataKey="supply"
          stroke="var(--color-chart-supply)"
          strokeWidth={2}
          dot={<Dot length={utilization.length} />}
          activeDot={<Dot length={utilization.length} isActiveDot />}
        />
        <Line
          dataKey="borrow"
          stroke="var(--color-chart-borrow)"
          strokeWidth={2}
          dot={<Dot length={utilization.length} />}
          activeDot={<Dot length={utilization.length} isActiveDot />}
        />

        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="var(--color-chart-grid)"
          strokeDasharray="3 3"
        />

        <ReferenceLine
          x={1623110400}
          stroke="var(--color-chart-utilization)"
          strokeDasharray="2 4"
          ifOverflow="extendDomain"
          strokeOpacity={showReferenceLine ? 1 : 0}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
