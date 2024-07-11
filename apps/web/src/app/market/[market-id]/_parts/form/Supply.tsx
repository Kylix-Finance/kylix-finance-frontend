"use client";
import { Button } from "@mui/material";
import List, { ListItem } from "~/components/List";

const items: Array<ListItem> = [
  {
    label: "Available",
    value: "$100",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Supply APY",
    value: "6.4 %",
    kylixValue: "%4",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Supply",
    value: "$64",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Collateral",
    value: "USDC",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Interest",
    value: "$ 24",
    kylixValue: "12",
    tooltipTitle: "Interest tooltip title.",
    action: {
      title: "Claim",
      onClick: () => {},
    },
    valueClassName: "!text-primary-500",
  },
];

const Supply = () => {
  return (
    <div className="flex flex-col gap-6">
      <List items={items} />
      <Button
        variant="contained"
        className="!capitalize !text-white !text-xs !font-semibold !leading-5 !text-center !rounded !py-2 !px-3"
        size="large"
        disableElevation
      >
        Supply
      </Button>
    </div>
  );
};

export default Supply;
