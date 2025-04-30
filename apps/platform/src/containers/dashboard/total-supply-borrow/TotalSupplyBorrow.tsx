import { ChartContainer } from "~/components/chart-container";
import { ButtonGroupTab } from "~/types";
import StackedBarChart from "~/components/recharts/StackedBarChart";
const tabs: ButtonGroupTab[] = [
  {
    content: "ALL",
    value: "all",
  },
  {
    content: "M",
    value: "month",
  },
  {
    content: "Y",
    value: "year",
  },
];
const TotalSupplyBorrow = () => {
  return (
    <ChartContainer
      title="Total Value Locked"
      tabs={tabs}
      value={{ bigNumStr: "100", decimal: 2 }}
      onItemClick={() => {}}
      activeTab="all"
    >
      <StackedBarChart />
    </ChartContainer>
  );
};

export default TotalSupplyBorrow;
