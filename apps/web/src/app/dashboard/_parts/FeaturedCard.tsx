import Image from "next/image";
import { FC } from "react";
import { Icons } from "~/assets/svgs";

interface Props {}

const FeaturedCard = () => {
  return (
    <div className="bg-background-light py-4 px-6 flex-col gap-4 rounded-lg shadow-secondary-box">
      <div className="flex justify-between w-2/3 ">
        <div className="flex flex-col gap-1">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Deposit
          </p>
          <div className="flex gap-1.5 items-end">
            <Image
              src="/kylix-chip.svg"
              width={20}
              height={20}
              alt="Deposit token icon"
            />
            <p className="font-bold text-sm leading-5">Dot</p>
          </div>
        </div>
        <Icons.ArrowRight className="text-primary-500" />
        <div className="flex flex-col gap-1">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Deposit
          </p>
          <div className="flex gap-1.5 items-end">
            <Image
              src="/kylix-chip.svg"
              width={20}
              height={20}
              alt="Deposit token icon"
            />
            <p className="font-bold text-sm leading-5">Dot</p>
          </div>
        </div>
      </div>
      <div className="w-full border bg-primary-500 my-4" />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Available Liquidity
          </p>
          <p className="font-number font-medium text-base leading-6 text-primary-800/90">
            $ 10,200,212
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-[10px] leading-4 text-primary-800/50">
            Interest Rate
          </p>
          <p className="font-number font-medium text-base leading-6 text-primary-800/90">
            8.10 %
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
