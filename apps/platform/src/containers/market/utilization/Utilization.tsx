import { useState } from "react";
import { ChartContainer } from "~/components/chart-container";
import UtilizationChart from "~/components/recharts/UtilizationChart";
import { ButtonGroupTab } from "~/types";
const tabs: ButtonGroupTab[] = [
  { content: "1M", value: "1m" as const },
  { content: "6M", value: "6m" as const },
  { content: "1Y", value: "1y" as const },
];
const Utilization = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  return (
    <ChartContainer
      tabs={tabs}
      activeTab={activeTab.toString()}
      onItemClick={() => {}}
      title=""
      value={{
        bigNumStr: "1",
        decimal: 1,
      }}
      hideChildrenOnMobile={false}
      hideContainerStyle={false}
    >
      <UtilizationChart />
    </ChartContainer>
  );
};

export default Utilization;
