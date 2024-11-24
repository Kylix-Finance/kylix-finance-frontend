"use client";
import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  formatBigNumbers,
  formatUnit,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { usePool } from "~/hooks/chain/usePool";
import { useSimpleBorrow } from "~/hooks/chain/useSimpleBorrow";
import { useGetUserLtv } from "~/hooks/chain/useGetUserLtv";
import { useAssetPrice } from "~/hooks/chain/useAssetPrice";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

export const Borrow = () => {
  const [value, setValue] = useState("");
  const params = useParams();
  const tokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: tokenId });
  const { mutate, isPending } = useSimpleBorrow({
    asset: tokenId,
    poolId: pool?.id,
  });
  const { assetMetaData } = useMetadata(tokenId);

  const { formattedPrice } = useAssetPrice({
    assetId: tokenId,
  });
  const { data: lendingPool } = useGetLendingPools({ asset: tokenId });
  const poolDetails = lendingPool?.assets[0];
  const borrowRate = poolDetails?.borrow_apy;

  const { data: ltv } = useGetUserLtv();
  const allowance = ltv?.allowance;

  const allowanceAmount = Number(allowance || 0) / Number(formattedPrice || 1);

  const poolBalance = Number(
    formatUnit(BigInt(pool?.reserveBalance || 0), assetMetaData?.decimals) || 0
  );
  const max = Math.min(poolBalance, allowanceAmount).toFixed(4);

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: tokenId }
  );

  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

  const onclick = () => {
    if (!value || !assetMetaData?.decimals) return;
    const borrowValue = parseUnit(value, assetMetaData?.decimals).toString();

    mutate(
      {
        borrowValue,
      },
      {
        onSuccess: ({ blockNumber }) => {
          setValue("");

          notify({
            type: "success",
            title: "Borrow Successful",
            message: "Transaction completed on block " + blockNumber,
          });
        },
      }
    );
  };

  const items: Array<ListItem> = [
    {
      label: "Available",
      value: !assetMetaData || !pool ? "0" : Number(max).toLocaleString(),
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
      value: `$${formatBigNumbers(formatUnit(borrowAssetData?.borrowed || "0", assetMetaData?.decimals), 4)}`,
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
        content: "Borrow",
      }}
      isSubmitting={isPending}
      balance={Infinity.toString()}
      symbol={assetMetaData?.symbol}
      onMaxClick={() => {
        setValue(max);
      }}
    />
  );
};

export default Borrow;
