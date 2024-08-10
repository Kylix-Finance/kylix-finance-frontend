"use client";

import { ListItem, notify } from "~/components";
import { Form } from "./Form";
import { useState } from "react";
import { parseUnit, useBalance, useMetadata } from "@repo/onchain-utils";
import { useSupply } from "~/hooks/chain/useSupply";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const items: Array<ListItem> = [
  {
    label: "Available to supply",
    value: "$100",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Supply APY",
    value: "6.4 %",
    kylixValue: "%4",
    valueClassName: "!text-[#4E5B72]",
  },
  {
    label: "Supply",
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

export const Supply = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const [value, setValue] = useState("");
  const { data: assetMetaData, isLoading } = useMetadata(lendTokenId);
  const { mutate, isPending } = useSupply();
  const { formattedBalance } = useBalance({
    assetId: lendTokenId,
  });

  const handleClick = () => {
    mutate(
      {
        asset: lendTokenId,
        balance: parseUnit(value, Number(assetMetaData?.decimals) || 18),
      },
      {
        onSuccess: ({ blockNumber }) => {
          notify({
            type: "success",
            title: "Success",
            message: "Transaction completed on block " + blockNumber,
          });
        },
      }
    );
  };

  const isValid = isLoading || isPending || !assetMetaData;
  return (
    <Form
      assetId={lendTokenId}
      items={items}
      decimals={Number(assetMetaData?.decimals) || 18}
      maxHandler={() => {
        formattedBalance && setValue(formattedBalance);
      }}
      setValue={setValue}
      value={value}
      disabled={isValid}
      submitButton={{
        onclick: handleClick,
        content: "Supply",
      }}
      isSubmitting={isPending}
    />
  );
};

export default Supply;
