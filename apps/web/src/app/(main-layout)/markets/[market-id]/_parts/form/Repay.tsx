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
const BASE_ASSET_ID = 21;

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

  const {
    formattedBalance: formattedKTokenBalance,
    isLoading: isFormattedKTokenBalanceLoading,
  } = useBalance({
    assetId: collateralTokenId,
    customDecimals: assetMetaData?.decimals,
    enabled: !!assetMetaData,
  });

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: 21 }
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

  const items: Array<ListItem> = [
    {
      label: "Available to repay",
      value: "$" + formatBigNumbers(formattedKTokenBalance || "0", 4),
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Borrow Apy",
      value: `${Number(formatUnit(borrowAssetData?.apy || "0", 18)).toFixed(2)} %`,
      kylixValue: "%4",
      valueClassName: "!text-[#4E5B72]",
    },
    {
      label: "Borrowed",
      value: `$${formatBigNumbers(formatUnit(borrowAssetData?.borrowed || "0", baseAssetMetadata?.decimals), 4)}`,
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
        setValue(formattedKTokenBalance || "0");
      }}
      balance={formattedBalance}
      symbol={assetMetaData?.symbol}
    />
  );
};

export default Repay;
