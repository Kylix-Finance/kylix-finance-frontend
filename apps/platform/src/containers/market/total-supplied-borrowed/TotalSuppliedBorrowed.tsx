"use client";

import StackedBarChart from "~/components/recharts/StackedBarChart";
import styles from "./TotalSuppliedBorrowed.module.scss";
import { ChartContainer } from "~/components/chart-container";
import { ButtonGroupTab } from "~/types";
import { useState } from "react";
const tabs: ButtonGroupTab[] = [
  { content: "1M", value: "1m" as const },
  { content: "6M", value: "6m" as const },
  { content: "1Y", value: "1y" as const },
];
const TotalSuppliedBorrowed = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  return (
    <ChartContainer
      tabs={tabs}
      activeTab={activeTab.toString()}
      onItemClick={() => {}}
      title="Total Supplied & Borrowed"
      value={{
        bigNumStr: "190000",
        decimal: 1,
        prefix: "$",
      }}
      hideChildrenOnMobile={false}
      hideContainerStyle={false}
    >
      <div className={styles.container}>
        <StackedBarChart />
      </div>
    </ChartContainer>
  );
};

export default TotalSuppliedBorrowed;
