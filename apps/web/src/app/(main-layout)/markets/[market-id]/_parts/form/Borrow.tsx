"use client";
import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { useBorrow } from "~/hooks/chain/useBorrow";
import { useParams } from "next/navigation";
import { parseUnit, useBalance, useMetadata } from "@repo/onchain-utils";
import { BASE_ASSET_ID } from "@repo/shared";
import { useQuickBorrow } from "~/hooks/chain/useQuickBorrow";

const items: Array<ListItem> = [
  {
    label: "Available to borrow",
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

export const Borrow = () => {
  const [value, setValue] = useState("");
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const { mutate, isPending } = useQuickBorrow();
  const { assetMetaData: baseAssetMetaData } = useMetadata(BASE_ASSET_ID);
  const { assetMetaData: assetIdMetaData } = useMetadata(lendTokenId);

  const { balance: assetBalance } = useBalance({ assetId: lendTokenId });
  const { balance: baseAssetBalance } = useBalance({ assetId: BASE_ASSET_ID });
  const onclick = () => {
    if (!assetBalance || !value || !baseAssetMetaData?.decimals) return;
    const borrowValue = parseUnit(
      value,
      baseAssetMetaData?.decimals
    ).toString();
    const supplyValue = assetBalance.toString();
    console.log("_______________CC", borrowValue, supplyValue);

    // mutate(
    //   {
    //     borrowPoolId: BASE_ASSET_ID.toString(),
    //     borrowValue,
    //     supplyPoolId: lendTokenId,
    //     supplyValue: assetBalance.toString(),
    //   },
    //   {
    //     onSuccess: ({ blockNumber }) => {
    //       setValue("");

    //       notify({
    //         type: "success",
    //         title: "Borrow Successful",
    //         message: "Transaction completed on block " + blockNumber,
    //       });
    //     },
    //   }
    // );
  };
  return (
    <Form
      assetId={BASE_ASSET_ID}
      items={items}
      decimals={baseAssetMetaData?.decimals}
      setValue={setValue}
      value={value}
      submitButton={{
        onclick,
        content: "Borrow",
      }}
      isSubmitting={isPending}
      balance={baseAssetBalance?.toString()}
      symbol={baseAssetMetaData?.symbol}
      onMaxClick={() => {}}
    />
  );
};

export default Borrow;
