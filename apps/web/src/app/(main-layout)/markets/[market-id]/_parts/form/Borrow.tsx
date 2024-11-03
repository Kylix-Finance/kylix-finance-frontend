"use client";
import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { useBorrow } from "~/hooks/chain/useBorrow";
import { useParams } from "next/navigation";
import {
  formatBigNumbers,
  formatUnit,
  parseUnit,
  useBalance,
  useMetadata,
} from "@repo/onchain-utils";
import { useQuickBorrow } from "~/hooks/chain/useQuickBorrow";
import { useAssetPrice } from "~/hooks/chain/useAssetPrice";
import { useGetEstimateCollateralAmount } from "~/hooks/chain/useGetEstimateCollateralAmount";
import { useGetAssetWiseBorrowsCollaterals } from "~/hooks/chain/useGetAssetWiseBorrowsCollaterals";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";
import { usePool } from "~/hooks/chain/usePool";
const BASE_ASSET_ID = "1";

export const Borrow = () => {
  const [value, setValue] = useState("");
  const params = useParams();
  const supplyTokenId = params["market-id"] as string;
  const { mutate, isPending } = useQuickBorrow();
  const { assetMetaData: borrowAssetMetaData } = useMetadata(BASE_ASSET_ID);
  const { assetMetaData: supplyAssetMetaData } = useMetadata(supplyTokenId);
  const { formattedBalance: supplyAssetBalance } = useBalance({
    assetId: BASE_ASSET_ID,
  });
  const { balance: borrowAssetBalance } = useBalance({
    assetId: supplyTokenId,
  });

  const { pool } = usePool({ assetId: supplyTokenId });
  const borrowRate = formatUnit(pool?.borrowRate || 0, 4);

  const maxTotalSupply = formatUnit(
    BigInt(pool?.reserveBalance || 0),
    supplyAssetMetaData?.decimals
  );

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: BASE_ASSET_ID, collateralId: Number(supplyTokenId) }
  );

  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

  const onclick = () => {
    if (!value || !borrowAssetMetaData?.decimals || !borrowAssetBalance) return;
    const borrowValue = parseUnit(
      value,
      borrowAssetMetaData?.decimals
    ).toString();

    mutate(
      {
        borrowPoolId: BASE_ASSET_ID.toString(),
        borrowValue,
        supplyPoolId: supplyTokenId,
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
        (!supplyAssetMetaData || !pool
          ? "0"
          : formatBigNumbers(maxTotalSupply, 4)),
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
      value: `$${formatBigNumbers(formatUnit(borrowAssetData?.borrowed || "0", borrowAssetMetaData?.decimals), 4)}`,
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
      assetId={BASE_ASSET_ID}
      items={items}
      decimals={borrowAssetMetaData?.decimals}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick,
        content: "Borrow",
      }}
      isSubmitting={isPending}
      balance={borrowAssetBalance?.toString()}
      symbol={borrowAssetMetaData?.symbol}
      onMaxClick={() => {
        setValue(maxTotalSupply);
      }}
    />
  );
};

export default Borrow;
