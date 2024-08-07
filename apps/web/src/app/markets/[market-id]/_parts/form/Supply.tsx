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

const ASSET_ID = 1;
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

const useNotifications = (
  isSubmitting: boolean,
  value: string,
  error: string | null
) => {
  useEffect(() => {
    if (isSubmitting) {
      notify({
        type: "information",
        title: "Supplying",
        message: `Supplying ${value} with asset id of ${ASSET_ID}`,
      });
    }
  }, [isSubmitting, value]);

  useEffect(() => {
    if (error) {
      notify({
        type: "error",
        title: "Error",
        message: error?.toString() || "",
      });
    }
  }, [error]);
};

export const Supply = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(false);
  const { data, isLoading } = useMetadata(ASSET_ID);
  const { balance } = useBalance({
    accountAddress: "5DLHrZpgL2MP9VQvvkKPFp4BufMkaS5HxECHL26VPY3jsGkQ",
    assetId: ASSET_ID,
  });
  const { submitSupply, isSubmitting, error } = useSupply();

  useNotifications(isSubmitting, value, error);

  useEffect(() => {
    setStatus(!balance && isSubmitting && !isLoading);
  }, [balance, isLoading, isSubmitting]);

  const handleClick = useCallback(() => {
    submitSupply(ASSET_ID, BigInt(parseUnit(value, 18)));
  }, [value, submitSupply]);

  const handleMax = useCallback(() => {
    if (balance) {
      setValue(balance);
    }
  }, [balance]);

  return (
    <Form
      items={items}
      decimals={Number(data?.decimals) || 18}
      maxHandler={handleMax}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick: handleClick,
        status,
        content: "Supply",
      }}
    />
  );
};

export default Supply;
