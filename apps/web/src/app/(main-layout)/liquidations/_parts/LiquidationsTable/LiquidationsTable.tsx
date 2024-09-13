"use client";

import { Button, Typography } from "@mui/material";
import { Asset, KylixChip } from "~/components";
import { useMemo } from "react";
import { Table, TableData } from "@repo/ui";
import Link from "next/link";

const mockedData = [
  {
    id: "1",
    health: "85%",
    collateral: "POL",
    bidDenom: "UST",
    tvl: "10,000,000 UST",
    poolSize: "5,000,000 UST",
    maxDiscount: "12%",
    myBid: "500 UST",
  },
  {
    id: "2",
    health: "70%",
    collateral: "DAI",
    bidDenom: "USDC",
    tvl: "8,000,000 USDC",
    poolSize: "3,000,000 USDC",
    maxDiscount: "8%",
    myBid: "750 USDC",
  },
  {
    id: "3",
    health: "90%",
    collateral: "ETH",
    bidDenom: "DAI",
    tvl: "15,000,000 DAI",
    poolSize: "7,000,000 DAI",
    maxDiscount: "10%",
    myBid: "1000 DAI",
  },
  {
    id: "4",
    health: "65%",
    collateral: "ETH",
    bidDenom: "USDC",
    tvl: "20,000 ETH",
    poolSize: "10,000 ETH",
    maxDiscount: "15%",
    myBid: "1.5 ETH",
  },
  {
    id: "5",
    health: "95%",
    collateral: "BTC",
    bidDenom: "USDT",
    tvl: "50BTC",
    poolSize: "25 BTC",
    maxDiscount: "5%",
    myBid: "0.25 BTC",
  },
];

const placeholderData = Array.from({ length: 5 }).map(() => ({
  health: "",
  collateral: "",
  bidDenom: "",
  tvl: "",
  poolSize: "",
  maxDiscount: "",
  myBid: "",
  id: "",
}));

type MarketsTableUIProps = {
  searchQuery?: string;
};

const LiquidationsTableUI = ({ searchQuery = "" }: MarketsTableUIProps) => {
  const transformedData = useMemo(() => {
    return mockedData
      ?.filter((pool) => {
        if (!searchQuery) return pool;
        const poolName = pool.collateral?.toLowerCase() || "";
        return poolName.includes(searchQuery);
      })
      .map((item) => {
        return {
          health: item.health,
          collateral: item.collateral,
          bidDenom: item.bidDenom,
          tvl: item.tvl,
          poolSize: item.poolSize,
          maxDiscount: item.maxDiscount,
          myBid: item.myBid,
          id: item.id,
        };
      });
  }, [searchQuery]);

  return (
    <Table
      hiddenTHeads={["actions"]}
      headers={{
        health: "Health",
        collateral: "Collateral",
        bidDenom: "Bid Denom",
        tvl: "TVL",
        poolSize: "Pool Size",
        maxDiscount: "Max Discount",
        myBid: "My Bid",

        actions: "Actions",
      }}
      isLoading={!mockedData}
      rowSpacing="11px"
      components={{
        health: (item) => {
          return <Typography variant="subtitle1">{item.health}</Typography>;
        },
        collateral: (item) => {
          return (
            <Asset
              key={item.collateral}
              label={item.collateral}
              helperText={""}
            />
          );
        },
        bidDenom: (item) => {
          return (
            <Asset key={item.bidDenom} label={item.bidDenom} helperText={""} />
          );
        },
        tvl: (item) => {
          return <Typography variant="subtitle1">{item.tvl}</Typography>;
        },
        poolSize: (item) => {
          return <Typography variant="subtitle1">{item.poolSize}</Typography>;
        },
        maxDiscount: (item) => {
          return (
            <Typography variant="subtitle1">{item.maxDiscount}</Typography>
          );
        },
        myBid: (item) => {
          return <Typography variant="subtitle1">{item.myBid}</Typography>;
        },

        actions: (item) => (
          <Link href={`/liquidations/${item.id}`}>
            <Button variant="contained">
              <Typography
                className="text-[#FFF]"
                variant="md"
                fontWeight={600}
                fontFamily={"Poppins"}
              >
                View Market
              </Typography>
            </Button>
          </Link>
        ),
      }}
      data={transformedData || placeholderData}
      defaultSortKey="health"
      tableName="liquidations"
      hasPagination={false}
    />
  );
};

export default LiquidationsTableUI;
