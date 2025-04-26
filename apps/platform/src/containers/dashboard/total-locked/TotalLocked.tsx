import { ChartContainer } from "~/components/chart-container";
import { ButtonGroupTab } from "~/types";
import { ChartSkeleton } from "~/components/chart-skeleton";
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
const TotalLocked = () => {
  return (
    <ChartContainer
      title="Total Value Locked"
      tabs={tabs}
      value={{ bigNumStr: "100", decimal: 2 }}
      onItemClick={() => {}}
      defaultTab="all"
    >
      <ChartSkeleton isLoading>
        <div></div>
      </ChartSkeleton>
    </ChartContainer>
  );
};

export default TotalLocked;
