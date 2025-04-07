import { Box, Typography } from "@mui/material";
import React from "react";
import { Icons } from "~/assets/svgs";
import { Heading } from "./_parts/Heading";
import ProgressBar from "~/components/ProgressBar";
import { PositionsTable } from "./_parts/PositionsTable";
import { Card } from "~/components";
import { Connector } from "./_parts/Connector";
import { Staking1, Staking2, Staking3 } from "~/assets/imgs";
import Image, { StaticImageData } from "next/image";
type Item = {
  iconName: StaticImageData;
  title: string;
  description: string;
};

const arr: Item[] = [
  {
    description:
      "Create a new self repaying loan and deposit one of the supported collateral assets",
    iconName: Staking1,
    title: "Deposit",
  },
  {
    description:
      "Convert your deposit into a interest bearing token directly on our LST partner Acala through an integrated seamless process",
    iconName: Staking2,
    title: "Convert interest-bearing token",
  },
  {
    description:
      "Borrow token and enjoy your loan with negative interest rates , getting repaid through time.",
    iconName: Staking3,
    title: "Borrow and enjoy negative interest",
  },
];

export default function Page() {
  // return (
  //   <ErrorPage
  //     code={-1}
  //     title="Under Development"
  //     description="This page is currently under development. Please check back later!"
  //   />
  // );
  return (
    <Box className="flex flex-col gap-[16px]">
      <Card title="SRL Position Management">
        <Box className="flex flex-col gap-[16px]">
          <Box />

          <Heading />

          <Box>
            <ProgressBar data={{}} isLoading={false} />
          </Box>
        </Box>
      </Card>

      <Card title="My self-repaying loan positions">
        <PositionsTable />
      </Card>

      <Card
      // title="Borrow with no rate!"
      // subTitle="How self repaying loan works"
      // icon={Icons.StellaSwap}
      // hasIconBackground={false}
      >
        <div className="flex flex-col gap-7">
          <div className="flex gap-6 items-center">
            <Icons.StellaSwap />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100">
                Borrow with no rate!
              </h3>
              <p className="text-lg font-light dark:text-primary-100">
                How self repaying loan works
              </p>
            </div>
          </div>
          <Box className="flex flex-row justify-center">
            {arr.map((item, index) => {
              const indexForConnectors = [0, 1];

              return (
                <>
                  <Box className="flex flex-col gap-[10px] w-[214px]">
                    <Box className="flex flex-col gap-[30px]">
                      <Image
                        alt={item.title}
                        height={214}
                        src={item.iconName.src}
                        width={215}
                      />
                      <Typography className="!text-[20px] !text-transparent text-center !bg-clip-text !bg-gradient-to-r !from-[#FFDA8C] !via-[#E6007A] !to-black/20 !font-[700] !leading-[24px] !tracking-[-0.02em]">
                        {item.title}
                      </Typography>
                    </Box>

                    <Typography className="!text-[14px] text-center dark:text-primary-100 !font-[400] !leading-[20px]">
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
