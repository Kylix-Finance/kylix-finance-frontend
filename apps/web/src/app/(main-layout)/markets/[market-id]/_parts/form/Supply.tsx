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
import ValueItemWrapper from "./ValueItemWrapper";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

export const Supply = () => {
  const params = useParams();
  const tokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: tokenId });
  const [value, setValue] = useState("");
  const { assetMetaData } = useMetadata(tokenId);
  const { mutate, isPending } = useSupply({ asset: tokenId });
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: tokenId,
  });

  const { data: lendingPool } = useGetLendingPools({ asset: tokenId });
  const poolDetails = lendingPool?.assets[0];
  const supplyRate = poolDetails?.supply_apy;

  const { formattedBalance: formattedKTokenBalance } = useBalance({
    assetId: pool?.id,
    customDecimals: assetMetaData?.decimals,
    enabled: !!assetMetaData && !!pool,
  });
  const handleClick = () => {
    mutate(
      {
        balance: parseUnit(value, Number(assetMetaData?.decimals)),
        onConfirm: () => {
          setValue("");
        },
      },
      {
        onSuccess: ({ blockNumber }) => {
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
      label: "Available",
      value: (
        <ValueItemWrapper
          value={Number(formattedBalance || 0).toLocaleString()}
          iconName={assetMetaData?.symbol}
          iconHeight={20}
          iconWidth={20}
        />
      ),
      valueClassName: "text-[#4E5B72] dark:text-primary-100",
    },
    {
      label: "Supply APY",
      value: supplyRate,
      kylixValue: "%0",
      valueClassName: "text-[#4E5B72] dark:text-primary-100",
    },
    {
      label: "Supplied",
      value: (
        <ValueItemWrapper
          value={Number(formattedKTokenBalance || 0).toLocaleString()}
          iconName={assetMetaData?.symbol}
          iconHeight={20}
          iconWidth={20}
        />
      ),
      valueClassName: "text-[#4E5B72] dark:text-primary-100",
    },
    {
      label: "Interest",
      value: "$0",
      kylixValue: "0",
      tooltipTitle: "Interest tooltip title.",
      action: {
        title: "Claim",
        onClick: () => {},
        disabled: true,
      },
      valueClassName: "text-primary-500",
    },
  ];

  return (
    <Form
      assetId={tokenId}
      items={items}
      decimals={assetMetaData?.decimals}
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
      symbol={assetMetaData?.symbol}
    />
  );
};

export default Supply;
