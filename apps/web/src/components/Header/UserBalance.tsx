import { fixPrecision, useBalance } from "@repo/onchain-utils";
import { Skeleton } from "@repo/ui";

const UserBalance = () => {
  const { formattedBalance, isPending } = useBalance();

  return (
    <Skeleton height={60} isLoading={isPending} width={100}>
      <div className="flex gap-2 p-2 items-center justify-between bg-[#FFFFFF] dark:bg-[#0D0D0D] min-w-[110px] h-[40px] ">
        <div className="font-medium text-[12px] leading-[14px] text-[#5C5E64] dark:text-primary-100 w-full text-right">
          {fixPrecision(Number(formattedBalance), 2)}
        </div>
        <div className="flex justify-between items-center gap-0.5 shrink-0">
          <span className="font-medium text-[12px] leading-[14px] text-[#45A996] dark:text-primary-100">
            KLX
          </span>
        </div>
      </div>
    </Skeleton>
  );
};
export default UserBalance;
