import { Card } from "@mui/material";
import { TabsManager, TabType } from "~/components";
import { Withdraw, Borrow, Repay, Supply } from "./form";

const tabItems: Array<TabType> = [
  {
    value: "supply",
    label: "Supply",
    content: <Supply />,
    disable: false,
  },
  {
    value: "withdraw",
    label: "Withdraw",
    content: <Withdraw />,
    disable: false,
  },
  {
    value: "borrow",
    label: "Borrow",
    content: <Borrow />,
    disable: false,
  },
  {
    value: "repay",
    label: "Repay",
    content: <Repay />,
    disable: false,
  },
] as const;

const TransactionForm = () => {
  return (
    <Card
      elevation={0}
      className="bg-white border dark:bg-black-500 !border-primary-800/20 !p-4 !rounded-lg"
    >
      <TabsManager tabs={tabItems} />
    </Card>
  );
};

export default TransactionForm;
