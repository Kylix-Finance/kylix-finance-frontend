"use client";

import { ListItem, notify, TokenIcon } from "~/components";
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
import { Box, Typography } from "@mui/material";
import ValueItemWrapper from "./ValueItemWrapper";
import { useGetAssetWiseSupplies } from "~/hooks/chain/useGetAssetWiseSupplies";

export const Supply = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: lendTokenId });
  const [value, setValue] = useState("");
  const { assetMetaData } = useMetadata(lendTokenId);
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
  const { data: AssetWiseData } = useGetAssetWiseSupplies({
    poolId: lendTokenId,
  });
  console.log("_____PPPPP", AssetWiseData);
  const handleClick = () => {
    mutate(
      {
        asset: lendTokenId,
        balance: parseUnit(value, Number(assetMetaData?.decimals)),
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
      value: (
        <ValueItemWrapper
          value={Number(formattedBalance || 0).toLocaleString()}
          iconName={assetMetaData?.symbol}
          iconHeight={20}
          iconWidth={20}
        />
      ),
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Supply APY",
      value: "6.4 %",
      kylixValue: "%0",
      valueClassName: "!text-[#4E5B72]",
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
      valueClassName: "!text-[#4E5B72]",
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
      valueClassName: "!text-primary-500",
    },
  ];

  return (
    <Form
      assetId={lendTokenId}
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
