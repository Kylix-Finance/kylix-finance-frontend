import { WsProvider } from "@polkadot/api";
import { LendingPoolsResponse, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";

export const useGetLendingPools = () => {
  const { provider } = useProvider();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.lendingPools,
    queryFn: provider ? () => getLendingPool({ provider }) : skipToken,
  });

  const lendingPool = data?.[0];
  const totalBorrow = data?.[1].total_borrow;
  const totalSupply = data?.[1].total_supply;

  return {
    lendingPool,
    totalBorrow,
    totalSupply,
    isLoading,
  };
};

export const getLendingPool = ({ provider }: { provider: WsProvider }) => {
  return provider.send<LendingPoolsResponse>("getLendingPools", []);
};
