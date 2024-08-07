"use client";

import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useEffect, useState, useCallback } from "react";
import {
  parseUnit,
  useActiveAccount,
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
  const [isValid, setIsValid] = useState(false);
  const { data: assetMetaData, isLoading } = useMetadata(ASSET_ID);
  const { balance } = useBalance({ assetId: ASSET_ID });
  const { submitSupply, isSubmitting, phase } = useSupply();

  useEffect(() => {
    if (phase) {
      notify({
        type: phase.type,
        message: phase.message,
        title: phase.title,
      });
    }
  }, [phase]);

  useEffect(() => {
    setIsValid(!balance || isLoading || isSubmitting || !assetMetaData);
  }, [assetMetaData, balance, isLoading, isSubmitting]);

  const handleClick = useCallback(() => {
    submitSupply(
      ASSET_ID,
      BigInt(parseUnit(value, Number(assetMetaData?.decimals) || 18))
    );
  }, [value, submitSupply, assetMetaData]);

  const handleMax = useCallback(() => {
    if (balance) {
      setValue(balance.toString());
    }
  }, [balance]);

  return (
    <Form
      items={items}
      decimals={Number(assetMetaData?.decimals) || 18}
      maxHandler={handleMax}
      setValue={setValue}
      value={value}
      disabled={isValid}
      submitButton={{
        onclick: handleClick,
        content: isValid ? "Loading" : "Supply",
      }}
    />
  );
};

export default Supply;
