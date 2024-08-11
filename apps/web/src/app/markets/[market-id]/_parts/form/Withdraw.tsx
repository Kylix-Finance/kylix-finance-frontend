"use client";
import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { useParams } from "next/navigation";
import { parseUnit, useBalance, useMetadata } from "@repo/onchain-utils";
import { useWithdraw } from "~/hooks/chain/useWithdraw";
import { usePool } from "~/hooks/chain/usePool";

const items: Array<ListItem> = [
  {
    label: "Available to withdraw",
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
    label: "Supplied",
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

export const Withdraw = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const [value, setValue] = useState("");
  const { data: assetMetaData } = useMetadata(lendTokenId);
  const { mutate, isPending } = useWithdraw();
  const { pool } = usePool({
    assetId: lendTokenId,
  });
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: pool?.id,
    customDecimals: assetMetaData?.decimals,
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
  return (
    <Form
      assetId={lendTokenId}
      items={items}
      decimals={Number(assetMetaData?.decimals) || 18}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick: handleClick,
        content: "Withdraw",
      }}
      isSubmitting={isPending}
      isMaxLoading={isBalanceLoading}
      onMaxClick={onMaxClick}
      balance={formattedBalance}
    />
  );
};

export default Withdraw;
