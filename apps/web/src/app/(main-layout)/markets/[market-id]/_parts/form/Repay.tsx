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
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { useSimpleRepay } from "~/hooks/chain/useSimpleRepay";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

export const Repay = () => {
  const params = useParams();
  const tokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: tokenId });
  const { data: lendingPool } = useGetLendingPools({ asset: tokenId });
  const poolDetails = lendingPool?.assets[0];
  const borrowRate = poolDetails?.borrow_apy;

  const [value, setValue] = useState("");
  const { assetMetaData } = useMetadata(tokenId);

  const { mutate, isPending } = useSimpleRepay({
    asset: tokenId,
    poolId: pool?.id,
  });
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: tokenId,
  });

  const { formattedBalance: formattedBaseAssetBalance } = useBalance({
    assetId: tokenId,
    customDecimals: assetMetaData?.decimals,
    enabled: !!assetMetaData,
  });

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: tokenId }
  );
  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

  const onclick = () => {
    if (!assetMetaData) return;
    mutate(
      {
        balance: parseUnit(value, assetMetaData.decimals),
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
  const max = Math.min(
    Number(borrowed || 0) * 1.02,
    Number(formattedBaseAssetBalance || 0)
  ).toFixed(4);

  const items: Array<ListItem> = [
    {
      label: "Available",
      value: max,
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Borrow Apy",
      value: borrowRate,
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
