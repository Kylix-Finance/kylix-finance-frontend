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
import styles from "./UtilizationChart.module.scss";
import { Switch } from "~/components/ui/switch";
import Legend from "~/components/legend";
import StatsBar from "~/components/stats-bar";
import CardWrapper from "~/components/card-wrapper";
import { ButtonGroupTab } from "~/types";
import { ButtonGroup } from "~/components/ui/button-group";

const tabs: ButtonGroupTab[] = [
  { content: "1M", value: "1m" as const },
  { content: "6M", value: "6m" as const },
  { content: "1Y", value: "1y" as const },
];

export const UtilizationChart = () => {
  const [showReferenceLine, setShowReferenceLine] = useState(true);

  const [isLogScale, setIsLogScale] = useState(false);

  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const logScaleHandler = () => {
    setIsLogScale((prev) => !prev);
  };

  return (
    <CardWrapper className={styles.container}>
      <h2 className={styles.title}>Details</h2>
      <div className={styles.header}>
        <StatsBar
          hasDivider={false}
          data={[
            {
              content: "Borrow APR",
              value: "5.20%",
            },
            {
              content: "Earn APR",
              value: "2.06%",
            },
            {
              content: "Utilization Rate",
              value: "82.06%",
            },
          ]}
        />
        <div className={styles.toggle}>
          <span className={styles.toggle_text}>Logarithmic Scale</span>
          <Switch
            name="scale"
            checked={isLogScale}
            onChange={logScaleHandler}
          />
        </div>
      </div>
      <div>
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
            <YAxis
              width={36}
              axisLine={false}
              tickLine={false}
              scale={isLogScale ? "log" : "auto"}
              domain={
                isLogScale
                  ? [(dataMin: number) => Math.max(dataMin, 0.1), "auto"]
                  : [0, "auto"]
              }
            />

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
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <Legend
          items={[
            {
              label: "Supply APY",
              color: "var(--color-chart-supply)",
            },
            {
              label: "Borrow APY",
              color: "var(--color-chart-borrow)",
            },
            {
              label: "Utilization Rate",
              color: "var(--color-chart-utilization)",
            },
          ]}
        />
      </div>
      <div className={styles.scale}>
        <ButtonGroup
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </CardWrapper>
  );
};
