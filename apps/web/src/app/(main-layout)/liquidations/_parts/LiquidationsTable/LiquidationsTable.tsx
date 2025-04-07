"use client";

import { Box, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import { Table } from "@repo/ui";
import Link from "next/link";
import { Icons } from "~/assets/svgs";
import { useGetLiquidationMarkets } from "~/hooks/chain/useGetLiquidationMarkets";
import { formatBigNumbers, formatUnit } from "@repo/onchain-utils";
const getHealthColors = (health: number): [string, string, string] => {
  if (health >= 70) {
    return ["#45A996", "#45A996", "#45A996"];
  } else if (health >= 30) {
    return ["#A67B9766", "#A67B9766", "#5C5E641A"];
  } else {
    return ["#F07979", "#5C5E641A", "#5C5E641A"];
  }
};

type MarketsTableUIProps = {
  searchQuery?: string;
};

const LiquidationsTableUI = ({ searchQuery = "" }: MarketsTableUIProps) => {
  const { data, isLoading, isFetched } = useGetLiquidationMarkets();

  const transformedData = useMemo(() => {
    return data
      ?.filter((pool) => {
        if (!searchQuery) return pool;
        const poolName = pool.assetName?.toLowerCase() || "";
        return poolName.includes(searchQuery);
      })
      .map((item) => {
        return {
          health: item.health,
          name: item.assetName,
          symbol: item.assetSymbol,
          tvl: formatBigNumbers(
            formatUnit(item.tvl.toString(), item.assetDecimals),
            4
          ),
          poolSize: formatBigNumbers(
            formatUnit(item.poolSize.toString(), item.assetDecimals),
            4
          ),
          maxDiscount: item.maxDiscount,
          myBid: item.userBid
            ? formatUnit(item.userBid?.toString(), item.bidDecimal)
            : "-",
          id: item.assetId,
        };
      });
  }, [searchQuery, data]);

  return (
    <Table
      components={{
        health: (item) => {
          const [first, second, third] = getHealthColors(item.health);
          return (
            <Box className="flex flex-col w-full justify-center items-center">
              <Icons.Health className="h-2" style={{ color: third }} />
              <Icons.Health className="h-2" style={{ color: second }} />
              <Icons.Health className="h-2" style={{ color: first }} />
            </Box>
          );
        },
        name: (item) => {
          return (
            <Typography
              className="pl-4 dark:text-black-100"
              variant="subtitle1"
            >
              {item.symbol}
            </Typography>
          );
        },
        tvl: (item) => {
          return (
            <Typography
              className="pl-4 dark:text-black-100"
              variant="subtitle1"
            >
              {item.tvl}
            </Typography>
          );
        },
        poolSize: (item) => {
          return (
            <Typography
              className="pl-4 dark:text-black-100"
              variant="subtitle1"
            >
              {item.poolSize}
            </Typography>
          );
        },
        maxDiscount: (item) => {
          return (
            <Typography
              className="pl-4 dark:text-black-100"
              variant="subtitle1"
            >
              {item.maxDiscount}
            </Typography>
          );
        },
        myBid: (item) => {
          return (
            <Typography
              className="pl-4 dark:text-black-100"
              variant="subtitle1"
            >
              {item.myBid}
            </Typography>
          );
        },

        actions: (item) => (
          <Link href={`/liquidations/${item.id}`}>
            <Button variant="contained">
              <Typography
                className="text-[#FFF]"
                fontWeight={600}
                variant="body3"
              >
                View Market
              </Typography>
            </Button>
          </Link>
        ),
      }}
      data={transformedData || []}
      defaultSortKey="health"
      hasPagination={false}
      headers={{
        health: "Health",
        name: "Name",
        tvl: "TVL",
        poolSize: "Pool Size",
        maxDiscount: "Max Discount",
        myBid: "My Bid",
        actions: "Actions",
      }}
      hiddenTHeads={["actions"]}
      isFetched={isFetched}
      isLoading={isLoading}
      placeholderLength={6}
      rowSpacing="11px"
      tableName="liquidations"
    />
  );
};

export default LiquidationsTableUI;
