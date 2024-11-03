import { Chevron } from "./Icons";

export const UserBalance = () => {
  return (
    <div className="flex gap-2 p-2 items-center justify-between bg-[#FFFFFF] min-w-[110px] h-[40px] ">
      <div className="font-medium text-[12px] leading-[14px] text-[#5C5E64] w-full text-right">
        0
      </div>

      <div className="flex justify-between items-center gap-0.5 shrink-0">
        <span className="font-medium text-[12px] leading-[14px] text-[#45A996]">
          KYL
        </span>
        <span>
          <Chevron />
        </span>
      </div>
    </div>
  );
};
