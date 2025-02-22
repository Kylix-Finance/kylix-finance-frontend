"use client";

import { Box, Button, Typography } from "@mui/material";
import { Asset, KylixChip } from "~/components";
import { useMemo } from "react";
import { Table, TableData } from "@repo/ui";
import Link from "next/link";
import { Icons } from "~/assets/svgs";
import { useGetLiquidationMarkets } from "~/hooks/chain/useGetLiquidationMarkets";
import { formatBigNumbers, formatUnit, parseUnit } from "@repo/onchain-utils";
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
          tvl: formatBigNumbers(
            formatUnit(item.tvl.toString(), item.decimal),
            4
          ),
          poolSize: formatBigNumbers(
            formatUnit(item.poolSize.toString(), item.decimal),
            4
          ),
          maxDiscount: item.maxDiscount,
          myBid: item.userBid
            ? formatUnit(item.userBid?.toString(), item.decimal)
            : "-",
          id: item.assetId,
        };
      });
  }, [searchQuery, data]);

  return (
    <Table
      isFetched={isFetched}
      isLoading={isLoading}
      placeholderLength={6}
      hiddenTHeads={["actions"]}
      headers={{
        health: "Health",
        name: "Name",
        tvl: "TVL",
        poolSize: "Pool Size",
        maxDiscount: "Max Discount",
        myBid: "My Bid",
        actions: "Actions",
      }}
      rowSpacing="11px"
      components={{
        health: (item) => {
          const [first, second, third] = getHealthColors(item.health);
          return (
            <Box className="flex flex-col gap-0.5 w-full justify-center items-center">
              <Icons.Health style={{ color: third }} />
              <Icons.Health style={{ color: second }} />
              <Icons.Health style={{ color: first }} />
            </Box>
          );
        },
        name: (item) => {
          return (
            <Typography
              variant="subtitle1"
              className="pl-4 dark:text-black-100"
            >
              {item.name}
            </Typography>
          );
        },
        tvl: (item) => {
          return (
            <Typography
              variant="subtitle1"
              className="pl-4 dark:text-black-100"
            >
              {item.tvl}
            </Typography>
          );
        },
        poolSize: (item) => {
          return (
            <Typography
              variant="subtitle1"
              className="pl-4 dark:text-black-100"
            >
              {item.poolSize}
            </Typography>
          );
        },
        maxDiscount: (item) => {
          return (
            <Typography
              variant="subtitle1"
              className="pl-4 dark:text-black-100"
            >
              {item.maxDiscount}
            </Typography>
          );
        },
        myBid: (item) => {
          return (
            <Typography
              variant="subtitle1"
              className="pl-4 dark:text-black-100"
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
                variant="body3"
                fontWeight={600}
              >
                View Market
              </Typography>
            </Button>
          </Link>
        ),
      }}
      data={transformedData || []}
      defaultSortKey="health"
      tableName="liquidations"
      hasPagination={false}
    />
  );
};

export default LiquidationsTableUI;
