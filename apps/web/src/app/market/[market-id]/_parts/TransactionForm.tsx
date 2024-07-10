import { Card } from "@mui/material";
import TabsManager, { TabType } from "~/components/TabsManager";

const tabItems: Array<TabType> = [
  {
    value: "supply",
    label: "Supply",
    content: <p>Supply</p>,
    disable: true,
  },
  {
    value: "withdraw",
    label: "Withdraw",
    content: <p>Withdraw</p>,
    disable: true,
  },
  {
    value: "borrow",
    label: "Borrow",
    content: <p>Borrow</p>,
    disable: true,
  },
  {
    value: "repay",
    label: "Repay",
    content: <p>Repay</p>,
    disable: true,
  },
];

const TransactionForm = () => {
  return (
    <Card
      elevation={0}
      className="!bg-white border !border-primary-800/20 !p-4 !rounded-lg"
    >
      <TabsManager tabs={tabItems} />
    </Card>
  );
};

export default TransactionForm;
