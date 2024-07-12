import { Box, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "~/assets/svgs";
import { List, ListItem } from "~/components";

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
  return (
    <Box className="flex flex-col gap-4">
      {/* Heading */}
      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <Link href="/market">
            <Icons.LeftArrow className="text-black" />
          </Link>
          <Box className="p-1.5 flex gap-2 items-center">
            <Image
              src="/kylix-chip.svg"
              alt="Coin icon"
              width={24}
              height={24}
            />
            <Box className="flex flex-col">
              <p className="font-bold text-sm leading-5 tracking-[-2%] text-primary-800">
                USDC
              </p>
              <p className="font-normal text-[10px] leading-3 tracking-[-2%] text-primary-800/50">
                USD coin
              </p>
            </Box>
          </Box>
        </Box>
        <div className="flex items-center text-primary-800 font-bold gap-2.5">
          <p className=" text-sm leading-5">Price:</p>
          <p className="font-number">$ 1.01</p>
        </div>
      </Box>
      {/* Pool status */}
      <Card
        elevation={0}
        className="!bg-white border !border-primary-800/20 !p-4 !rounded-lg flex flex-col lg:flex-row justify-between"
      >
        <List items={items} />
        <List items={items2} />
      </Card>
    </Box>
  );
};

export default PoolDetails;
