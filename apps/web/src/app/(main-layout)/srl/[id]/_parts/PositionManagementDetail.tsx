import { Box, Button, Card } from "@mui/material";
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
    <Card variant="outlined" className="flex flex-col gap-6 flex-[0.5] w-full">
      <List items={items} />
      <Button variant="contained" size="large">
        Quick Barrow
      </Button>
    </Card>
  );
};

export default PositionManagementDetail;
