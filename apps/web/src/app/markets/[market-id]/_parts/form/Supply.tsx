"use client";
import { ListItem } from "~/components";
import { Form } from "./Form";
import { useState } from "react";

const items: Array<ListItem> = [
  {
    label: "Available to supply",
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

export const Supply = () => {
  const [value, setValue] = useState("");
  const onclick = () => {};
  return (
    <Form
      items={items}
      decimals={18}
      maxHandler={() => {}}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick,
        status: false,
        content: "Supply",
      }}
    />
  );
};

export default Supply;
