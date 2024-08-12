"use client";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "~/assets/svgs";
import { List, ListItem, TokenIcon } from "~/components";
import { useParams } from "next/navigation";
import { usePool } from "~/hooks/chain/usePool";
import { formatBigNumbers, formatUnit, useMetadata } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";
import { useAssetPrice } from "~/hooks/chain/useAssetPrice";
import { PRICE_BASE_ASSET_ID } from "@repo/shared";

const PoolDetails = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: lendTokenId });
  const { assetMetaData } = useMetadata(lendTokenId);
  const { assetMetaData: baseAssetMetadata } = useMetadata(PRICE_BASE_ASSET_ID);
  const { assetPrice, formattedPrice } = useAssetPrice({
    assetId: lendTokenId,
  });

  const totalSupply =
    assetMetaData &&
    assetPrice &&
    baseAssetMetadata &&
    formatUnit(
      BigInt(pool?.reserveBalance || 0) * BigInt(assetPrice || 0),
      assetMetaData.decimals + baseAssetMetadata.decimals
    );

  const totalBorrow =
    assetMetaData &&
    assetPrice &&
    baseAssetMetadata &&
    formatUnit(
      BigInt(pool?.borrowedBalance || 0) * BigInt(assetPrice || 0),
      assetMetaData.decimals + baseAssetMetadata.decimals
    );

  const items: Array<ListItem> = [
    {
      label: "Total Supply:",
      value: `$ ${formatBigNumbers(totalSupply || "0", 2)}`,
    },
    {
      label: "Total Borrow:",
      value: `$ ${formatBigNumbers(totalBorrow || "0", 2)}`,
    },
    {
      label: "Liquidation:",
      value: `$ ${formatBigNumbers(pool?.liquidationThreshold || "0", 2)}`,
    },
  ];

  const items2: Array<ListItem> = [
    {
      label: "Supply APY:",
      value: "%1.2",
      kylixValue: "%4",
    },
    {
      label: "Borrow APY:",
      value: "%1.6",
      kylixValue: "%4",
    },
  ];
  return (
    <Box className="flex flex-col gap-4">
      {/* Heading */}
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Link href="/markets">
            <Icons.LeftArrow className="text-black" />
          </Link>
          <Box className="p-1.5 flex gap-2 items-center">
            <TokenIcon symbol={assetMetaData?.symbol} />{" "}
            <Box className="flex flex-col">
              <Typography variant="subtitle2" className="text-primary-800">
                <Skeleton minWidth={20} isLoading={!assetMetaData}>
                  {assetMetaData?.symbol}
                </Skeleton>
              </Typography>
              <Typography variant="caption" className="text-primary-800/50">
                <Skeleton minWidth={20} isLoading={!assetMetaData}>
                  {assetMetaData?.name}
                </Skeleton>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flex items-center text-primary-800 gap-2.5">
          <Typography variant="subtitle2">Price:</Typography>
          <Typography variant="body1">$ {formattedPrice}</Typography>
        </Box>
      </Box>
      {/* Pool status */}
      <Card
        elevation={0}
        variant="outlined"
        className="flex flex-col lg:flex-row justify-between"
      >
        <List items={items} />
        <List items={items2} />
      </Card>
    </Box>
  );
};

export default PoolDetails;
