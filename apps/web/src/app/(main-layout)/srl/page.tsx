import { Box, Typography } from "@mui/material";
import React from "react";
import { Icons } from "~/assets/svgs";
import { Heading } from "./_parts/Heading";
import ProgressBar from "~/components/ProgressBar";
import { PositionsTable } from "./_parts/PositionsTable";
import { Card } from "~/components";
import { Connector } from "./_parts/Connector";
type Item = {
  iconName: keyof typeof Icons;
  title: string;
  description: string;
};

const arr: Item[] = [
  {
    iconName: "Staking1",
    title: "Deposit",
    description:
      "Create a new self repaying loan and deposit one of the supported collateral assets",
  },
  {
    iconName: "Staking2",
    title: "Convert interest-bearing token",
    description:
      "Convert your deposit into a interest bearing token directly on our LST partner Acala through an integrated seamless process",
  },
  {
    iconName: "Staking3",
    title: "Borrow and enjoy negative interest",
    description:
      "Borrow token and enjoy your loan with negative interest rates , getting repaid through time.",
  },
];

export default function Page() {
  return (
    <Box className="flex flex-col gap-[16px]">
      <Card title="SRL Position Management">
        <Box className="flex flex-col gap-[16px]">
          <Box />

          <Heading />

          <Box>
            <ProgressBar />
          </Box>
        </Box>
      </Card>

      <Card title="My self-repaying loan positions">
        <PositionsTable />
      </Card>

      <Card
      // title="Borrow with no rate!"
      // subTitle="How self repaying loan works"
      // icon={Icons.Alpha}
      // hasIconBackground={false}
      >
        <div className="flex flex-col gap-7">
          <div className="flex gap-6 items-center">
            <Icons.Alpha />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Borrow with no rate!</h3>
              <p className="text-lg font-light">How self repaying loan works</p>
            </div>
          </div>
          <Box className="flex flex-row justify-center">
            {arr.map((item, index) => {
              const Icon = Icons[item.iconName];

              const indexForConnectors = [0, 1];

              return (
                <>
                  <Box className="flex flex-col gap-[10px] w-[214px]">
                    <Box className="flex flex-col gap-[30px]">
                      <Icon />
                      <Typography className="!text-[20px] !text-transparent text-center !bg-clip-text !bg-gradient-to-r !from-[#FFDA8C] !via-[#E6007A] !to-black/20 !font-[700] !leading-[24px] !tracking-[-0.02em]">
                        {item.title}
                      </Typography>
                    </Box>

                    <Typography className="!text-[14px] text-center !text-[#3B434299] !font-[400] !leading-[20px]">
                      {item.description}
                    </Typography>
                  </Box>

                  {indexForConnectors.includes(index) && (
                    <Box className="flex flex-col justify-center h-[214px]">
                      <Connector />
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </div>
      </Card>
    </Box>
  );
}
