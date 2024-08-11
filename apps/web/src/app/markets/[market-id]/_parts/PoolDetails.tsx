"use client";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "~/assets/svgs";
import { List, ListItem, TokenIcon } from "~/components";
import { useParams } from "next/navigation";
import { usePool } from "~/hooks/chain/usePool";
import { useMetadata } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";

const items: Array<ListItem> = [
  {
    label: "Total Supply:",
    value: "$ 1,800,140",
  },
  {
    label: "Total Borrow:",
    value: "$ 1,400,321",
  },
  {
    label: "Liquidation:",
    value: "$ 102 M",
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

const PoolDetails = () => {
  const params = useParams();
  const lendTokenId = params["market-id"] as string;
  const { pool } = usePool({ assetId: lendTokenId });
  const { data: assetMetaData } = useMetadata(lendTokenId);

  return (
    <Box className="flex flex-col gap-4">
      {/* Heading */}
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Link href="/markets">
            <Icons.LeftArrow className="text-black" />
          </Link>
          <Box className="p-1.5 flex gap-2 items-center">
            <TokenIcon symbol="BTC" />{" "}
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
          <Typography variant="body1">$ 1.01</Typography>
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
