"use client";
import { ListItem } from "~/components";
import { Form } from "./Form";

const items: Array<ListItem> = [
  {
    label: "Available to repay",
    value: "$100",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Borrow Apy",
    value: "6.4 %",
    kylixValue: "%4",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Borrowed",
    value: "$64",
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

export const Repay = () => <Form items={items} />;

export default Repay;
