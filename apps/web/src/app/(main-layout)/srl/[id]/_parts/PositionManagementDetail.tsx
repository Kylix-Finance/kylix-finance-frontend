import { Button, Card } from "@mui/material";
import { List, ListItem } from "~/components";

const items: ListItem[] = [
  {
    label: "Current interest rate",
    value: "%25",
    valueClassName: "!text-primary-500",
  },
  {
    label: "Negative interest rate",
    value: " - %15",
  },
  {
    label: "Estimated total repayment in",
    value: "36 days",
    valueClassName: "text-[#EA8E3A]",
  },
];

const PositionManagementDetail = () => {
  return (
    <Card
      className="flex flex-col gap-6 flex-[0.5] w-full dark:bg-black-500"
      variant="outlined"
    >
      <List items={items} />
      <Button size="large" variant="contained">
        Create SR Loan
      </Button>
    </Card>
  );
};

export default PositionManagementDetail;
