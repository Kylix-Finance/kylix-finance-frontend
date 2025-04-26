import { ChartContainer } from "~/components/chart-container";
import { ButtonGroupTab } from "~/types";
import { Skeleton } from "~/components/skeleton";
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
      <Skeleton isLoading width={400} height={400}>
        <div></div>
      </Skeleton>
    </ChartContainer>
  );
};

export default TotalLocked;
