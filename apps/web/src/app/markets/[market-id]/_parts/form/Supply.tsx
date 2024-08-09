"use client";

import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useEffect, useState, useCallback } from "react";
import {
  parseUnit,
  useBalance,
  useMetadata,
  useSupply,
} from "@repo/onchain-utils";

const ASSET_ID = 8;
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
  const [error, setError] = useState<string | null>(null);
  const { data: assetMetaData, isLoading } = useMetadata(ASSET_ID);
  const { submitSupply, isSubmitting, phase } = useSupply();
  const [buttonContent, setButtonContent] = useState("Supply");

  useEffect(() => {
    if (phase) {
      notify({
        type: phase.type,
        message: phase.message,
        title: phase.title,
      });
      if (phase.type === "success" || phase.type === "error") {
        setValue("");
      }
      if (phase.type === "success" || phase.type === "error") {
        setValue("");
        setButtonContent("Supply");
      }
    }
  }, [phase]);

  useEffect(() => {
    if (isLoading) {
      setButtonContent("Loading...");
    } else if (isSubmitting) {
      setButtonContent("Supplying...");
    } else {
      setButtonContent("Supply");
    }
  }, [isLoading, isSubmitting]);

  const handleClick = useCallback(() => {
    submitSupply(
      ASSET_ID,
      parseUnit(value, Number(assetMetaData?.decimals) || 18)
    );
  }, [value, submitSupply, assetMetaData?.decimals]);

  const isValid = isLoading || isSubmitting || !assetMetaData;
  return (
    <Form
      assetId={ASSET_ID}
      items={items}
      decimals={Number(assetMetaData?.decimals) || 18}
      maxHandler={() => {}}
      setValue={setValue}
      value={value}
      disabled={isValid}
      error={error}
      submitButton={{
        onclick: handleClick,
        content: buttonContent,
      }}
    />
  );
};

export default Supply;
