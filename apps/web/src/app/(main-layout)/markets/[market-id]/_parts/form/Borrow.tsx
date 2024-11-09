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

export const Borrow = () => {
  const [value, setValue] = useState("");
  const params = useParams();
  const tokenId = params["market-id"] as string;
  const { mutate, isPending } = useSimpleBorrow();
  const { assetMetaData } = useMetadata(tokenId);

  const { balance: borrowAssetBalance } = useBalance({
    assetId: tokenId,
  });

  const { pool } = usePool({ assetId: tokenId });
  const borrowRate = formatUnit(pool?.borrowRate || 0, 4);

  const maxTotalSupply = formatUnit(
    BigInt(pool?.reserveBalance || 0),
    assetMetaData?.decimals
  );

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: tokenId, collateralId: Number(tokenId) }
  );

  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

  const onclick = () => {
    if (!value || !assetMetaData?.decimals || !borrowAssetBalance) return;
    const borrowValue = parseUnit(value, assetMetaData?.decimals).toString();

    mutate(
      {
        borrowPoolId: tokenId,
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
      label: "Available to borrow",
      value:
        "$" +
        (!assetMetaData || !pool ? "0" : formatBigNumbers(maxTotalSupply, 4)),
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
      balance={borrowAssetBalance?.toString()}
      symbol={assetMetaData?.symbol}
      onMaxClick={() => {
        setValue(maxTotalSupply);
      }}
    />
  );
};

export default Borrow;
