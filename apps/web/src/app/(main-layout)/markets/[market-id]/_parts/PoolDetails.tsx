"use client";
import { Box, Card, Typography } from "@mui/material";
import Link from "next/link";
import { Icons } from "~/assets/svgs";
import { List, ListItem, TokenIcon } from "~/components";
import { useParams } from "next/navigation";
import { usePool } from "~/hooks/chain/usePool";
import { formatBigNumbers, formatUnit, useMetadata } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";
import { useAssetPrice } from "~/hooks/chain/useAssetPrice";
import ValueItemWrapper from "./form/ValueItemWrapper";
import { useGetLendingPools } from "~/hooks/chain/useGetLendingPools";

const PoolDetails = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: lendTokenId });
  const { data: lendingPool } = useGetLendingPools({ asset: lendTokenId });
  const poolDetails = lendingPool?.assets[0];
  const borrowRate = poolDetails?.borrow_apy;
  const supplyRate = poolDetails?.supply_apy;

  const { assetMetaData } = useMetadata(lendTokenId);
  const { formattedPrice } = useAssetPrice({
    assetId: lendTokenId,
  });
  const totalSupply =
    assetMetaData &&
    formatUnit(BigInt(pool?.reserveBalance || 0), assetMetaData.decimals);
  const totalBorrow =
    assetMetaData &&
    formatUnit(BigInt(pool?.borrowedBalance || 0), assetMetaData.decimals);

  const items: Array<ListItem> = [
    {
      label: "Total Supply:",
      value: (
        <ValueItemWrapper
          value={formatBigNumbers(totalSupply || "0", 2)}
          iconName={assetMetaData?.symbol}
          iconWidth={20}
          iconHeight={20}
        />
      ),
    },
    {
      label: "Total Borrow:",
      value: (
        <ValueItemWrapper
          value={formatBigNumbers(totalBorrow || "0", 2)}
          iconName={assetMetaData?.symbol}
          iconWidth={20}
          iconHeight={20}
        />
      ),
    },
    // {
    //   label: "Liquidation:",
    //   value: (
    //     <ValueItemWrapper
    //       value={formatBigNumbers(pool?.liquidationThreshold || "0", 2)}
    //       iconName={assetMetaData?.symbol}
    //       iconWidth={20}
    //       iconHeight={20}
    //     />
    //   ),
    // },
  ];

  const items2: Array<ListItem> = [
    {
      label: "Supply APY:",
      value: supplyRate,
      kylixValue: "%0",
    },
    {
      label: "Borrow APY:",
      value: borrowRate,
      kylixValue: "%0",
    },
  ];
  return (
    <Box className="flex flex-col gap-4">
      {/* Heading */}
      <Box className="flex items-center justify-between dark:bg-black-500  rounded-lg px-6 py-3">
        <Box className="flex items-center">
          <Link href="/markets">
            <Icons.LeftArrow className="text-black dark:text-primary-100" />
          </Link>
          <Box className="p-1.5 flex gap-2 items-center">
            <TokenIcon symbol={assetMetaData?.symbol} />{" "}
            <Box className="flex flex-col">
              <Typography
                variant="subtitle2"
                className="text-primary-800 dark:text-primary-100"
              >
                <Skeleton minWidth={20} isLoading={!assetMetaData}>
                  {assetMetaData?.name}
                </Skeleton>
              </Typography>
              <Typography
                variant="caption"
                className="text-primary-800/50 dark:text-primary-200"
              >
                <Skeleton minWidth={20} isLoading={!assetMetaData}>
                  {assetMetaData?.symbol}
                </Skeleton>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flex items-center text-primary-800 gap-2.5 ">
          <Typography variant="subtitle2" className="dark:text-primary-100">
            Price:
          </Typography>
          <Typography variant="body1" className="dark:text-primary-100">
            $ {formattedPrice}
          </Typography>
        </Box>
      </Box>
      {/* Pool status */}
      <Card
        elevation={0}
        variant="outlined"
        className="flex flex-col lg:flex-row justify-between dark:bg-black-500"
      >
        <List items={items} />
        <List items={items2} />
      </Card>
    </Box>
  );
};

export default PoolDetails;
