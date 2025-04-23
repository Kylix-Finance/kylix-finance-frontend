import styles from "./TotalSupplyBorrow.module.scss";
import { ChartContainer } from "~/components/chart-container";
import { ButtonGroupTab } from "~/types";
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
      defaultTab="all"
    >
      <div></div>
    </ChartContainer>
  );
};

export default TotalSupplyBorrow;
