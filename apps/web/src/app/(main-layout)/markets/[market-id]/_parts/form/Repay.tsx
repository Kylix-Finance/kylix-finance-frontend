"use client";
import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { useParams } from "next/navigation";
import { usePool } from "~/hooks/chain/usePool";
import {
  formatBigNumbers,
  formatUnit,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
import { useRepay } from "~/hooks/chain/useRepay";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";

export const Repay = () => {
  const params = useParams();
  const tokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: tokenId });
  const borrowRate = formatUnit(pool?.borrowRate || 0, 4);

  const [value, setValue] = useState("");
  const { assetMetaData } = useMetadata(tokenId);

  const { mutate, isPending } = useRepay();
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: tokenId,
  });

  const { formattedBalance: formattedBaseAssetBalance } = useBalance({
    assetId: tokenId,
    customDecimals: assetMetaData?.decimals,
    enabled: !!assetMetaData,
  });

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: tokenId, collateralId: Number(tokenId) }
  );
  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

  const onclick = () => {
    if (!assetMetaData) return;
    mutate(
      {
        asset: tokenId,
        balance: parseUnit(value, assetMetaData.decimals),
        collateralAsset: tokenId,
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

  const borrowed = formatUnit(
    borrowAssetData?.borrowed || "0",
    assetMetaData?.decimals
  );
  const max = (
    Math.min(Number(borrowed || 0), Number(formattedBaseAssetBalance || 0)) *
    1.1
  ).toFixed(4);

  const items: Array<ListItem> = [
    {
      label: "Available to repay",
      value: "$" + max,
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Borrow Apy",
      value: "%" + borrowRate,
      kylixValue: "%0",
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Borrowed",
      value: `$${formatBigNumbers(borrowed, 4)}`,
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
      assetId={tokenId}
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
      onMaxClick={() => {
        setValue(max);
      }}
      balance={formattedBalance}
      symbol={assetMetaData?.symbol}
    />
  );
};

export default Repay;
