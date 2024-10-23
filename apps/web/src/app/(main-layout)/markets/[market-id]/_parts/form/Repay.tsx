"use client";
import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { useParams } from "next/navigation";
import { usePool } from "~/hooks/chain/usePool";
import { parseUnit, useBalance, useMetadata } from "@repo/onchain-utils";
import { useRepay } from "~/hooks/chain/useRepay";
const BASE_ASSET_ID = 21;

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

export const Repay = () => {
  const params = useParams();
  const collateralTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: collateralTokenId });
  const [value, setValue] = useState("");
  const { assetMetaData } = useMetadata(collateralTokenId);
  const { mutate, isPending } = useRepay();
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: collateralTokenId,
  });

  const {
    formattedBalance: formattedKTokenBalance,
    isLoading: isFormattedKTokenBalanceLoading,
  } = useBalance({
    assetId: pool?.id,
    customDecimals: assetMetaData?.decimals,
    enabled: !!assetMetaData && !!pool,
  });
  const { assetMetaData: baseAssetMetadata } = useMetadata(BASE_ASSET_ID);
  const onclick = () => {
    if (!baseAssetMetadata) return;
    mutate(
      {
        asset: BASE_ASSET_ID,
        balance: parseUnit(value, baseAssetMetadata.decimals),
        collateralAsset: collateralTokenId,
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
  return (
    <Form
      assetId={collateralTokenId}
      items={items}
      decimals={assetMetaData?.decimals}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick,
        content: "Repay",
      }}
      isSubmitting={isPending}
      isMaxLoading={isBalanceLoading}
      onMaxClick={() => {}}
      balance={formattedBalance}
      symbol={assetMetaData?.symbol}
    />
  );
};

export default Repay;
