"use client";

import { useState } from "react";
import styles from "./TotalCollateralBorrowed.module.scss";
import AreaChartMulti from "~/components/recharts/AreaChartMulti";
import { ButtonGroup } from "~/components/ui/button-group";
import { ButtonGroupTab } from "~/types";
import StatsBar from "~/components/stats-bar";

const tabs: ButtonGroupTab[] = [
  { content: "ALL", value: "all" },
  { content: "M", value: "month" },
  { content: "Y", value: "year" },
];

const TotalCollateralBorrowed = () => {
  const [activeTab, setActiveTab] = useState<ButtonGroupTab["value"]>("all");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StatsBar
          hasDivider={false}
          data={[
            {
              content: "Total Collateral",
              value: "$1,9M",
            },
            {
              content: "Total Borrowed",
              value: "$1,9M",
            },
          ]}
        />
        <div className={styles.tabs}>
          <ButtonGroup
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className={styles.chart}>
        <AreaChartMulti />
      </div>
    </div>
  );
};

export default TotalCollateralBorrowed;
