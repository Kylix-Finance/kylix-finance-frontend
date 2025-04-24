import { RefObject, useRef } from "react";
import styles from "./TotalSupplyBorrow.module.scss";
import { ChartContainer } from "~/components/chart-container";
// import StackedBarChart from "~/components/charts/StackedBarChart";
import { useTotalSupplyBorrow } from "~/hooks/api/useTotalSupplyBorrow";
import { ButtonGroupTab } from "~/types";
import { useResizeObserver } from "@mantine/hooks";
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
  const { data } = useTotalSupplyBorrow("1d");
  const [ref, rect] = useResizeObserver({
    box: "border-box",
  });

  return (
    <ChartContainer
      title="Total Value Locked"
      tabs={tabs}
      value={{ bigNumStr: "100", decimal: 2 }}
      onItemClick={() => {}}
      defaultTab="all"
    >
      <div ref={ref}>
        {/* <StackedBarChart data={data} width={rect.width} height={800} /> */}
      </div>
    </ChartContainer>
  );
};

export default TotalSupplyBorrow;
