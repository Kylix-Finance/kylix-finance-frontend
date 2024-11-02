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
const BASE_ASSET_ID = 1;

export const Repay = () => {
  const params = useParams();
  const collateralTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: collateralTokenId });
  const [value, setValue] = useState("");
  const { assetMetaData } = useMetadata(collateralTokenId);
  const { assetMetaData: baseAssetMetadata } = useMetadata(BASE_ASSET_ID);

  const { mutate, isPending } = useRepay();
  const { formattedBalance, isLoading: isBalanceLoading } = useBalance({
    assetId: collateralTokenId,
  });

  const { formattedBalance: formattedBaseAssetBalance } = useBalance({
    assetId: BASE_ASSET_ID,
    customDecimals: baseAssetMetadata?.decimals,
    enabled: !!baseAssetMetadata,
  });

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: BASE_ASSET_ID, collateralId: Number(collateralTokenId) }
  );
  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

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

  const borrowed = formatUnit(
    borrowAssetData?.borrowed || "0",
    baseAssetMetadata?.decimals
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
      value: `${Number(formatUnit(borrowAssetData?.apy || "0", 18)).toFixed(2)} %`,
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
      value: "$ 24",
      kylixValue: "0",
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
      onMaxClick={() => {
        setValue(max);
      }}
      balance={formattedBalance}
      symbol={assetMetaData?.symbol}
    />
  );
};

export default Repay;
