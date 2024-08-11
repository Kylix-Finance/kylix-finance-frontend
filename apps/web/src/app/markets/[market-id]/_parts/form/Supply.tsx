"use client";

import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import {
  formatUnit,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
import { useSupply } from "~/hooks/chain/useSupply";
import { useParams } from "next/navigation";
import { usePool } from "~/hooks/chain/usePool";

export const Supply = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: lendTokenId });
  const [value, setValue] = useState("");
  const { data: assetMetaData } = useMetadata(lendTokenId);
  const { mutate, isPending } = useSupply();
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: lendTokenId,
  });
  const {
    formattedBalance: formattedKTokenBalance,
    isLoading: isFormattedKTokenBalanceLoading,
  } = useBalance({
    assetId: pool?.id,
    customDecimals: assetMetaData?.decimals,
    enabled: !!assetMetaData && !!pool,
  });

  const handleClick = () => {
    mutate(
      {
        asset: lendTokenId,
        balance: parseUnit(value, Number(assetMetaData?.decimals) || 18),
      },
      {
        onSuccess: ({ blockNumber }) => {
          setValue("");
          notify({
            type: "success",
            title: "Success",
            message: "Transaction completed on block " + blockNumber,
          });
        },
      }
    );
  };

  const onMaxClick = () => formattedBalance && setValue(formattedBalance);

  const items: Array<ListItem> = [
    {
      label: "Available to supply",
      value: "$" + Number(formattedBalance || 0).toLocaleString(),
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Supply APY",
      value: "6.4 %",
      kylixValue: "%4",
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Supplied",
      value: "$" + Number(formattedKTokenBalance || 0).toLocaleString(),
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

  return (
    <Form
      assetId={lendTokenId}
      items={items}
      decimals={Number(assetMetaData?.decimals) || 18}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick: handleClick,
        content: "Supply",
      }}
      isSubmitting={isPending}
      isMaxLoading={isBalanceLoading}
      onMaxClick={onMaxClick}
      balance={formattedBalance}
    />
  );
};

export default Supply;
