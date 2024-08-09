import { useProvider } from "./useProvider";
import { useActiveAccount } from "./useActiveAccount";
import { useSigner } from "./useSigner";
import { useBalance } from "./useBalance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supplyTransaction } from "../api/supply";
import { queryKeys } from "@repo/shared";
export const useSupply = () => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();
  const { signer } = useSigner();
  const { balance: getBalance } = useBalance();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.supply,
    mutationFn: (params: { asset: number; balance: string | bigint }) =>
      supplyTransaction(params, {
        api,
        signer,
        getBalance,
        activeAccount: activeAccount?.address,
      }),
    onError: () => {
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: undefined,
        }),
        exact: true,
      });
    },
    onSuccess: (_, { asset }) => {
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: asset,
        }),
        exact: true,
      });
      queryClient.refetchQueries({
        queryKey: queryKeys.balance({
          address: activeAccount?.address,
          assetId: undefined,
        }),
        exact: true,
      });
    },
  });
};
