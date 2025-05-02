import { useTransaction } from "../useTransaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAccountsStore } from "@repo/shared";
import { TransactionStatus } from "../../types";

interface MutationFnParams {
  assetId: string;
  options?: TransactionStatus;
}
export const useDisableAsCollateral = () => {
  const { account: activeAccount } = useAccountsStore();
  const { execute } = useTransaction("lending", "disableAsCollateral");
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: MutationFnParams) => {
      const { assetId, options } = params;
      return execute(options, assetId);
    },
    onSuccess: (_, { assetId }) => {
      //FIXME: should be fix after lending pools rpc
      // queryClient.setQueryData<LendingPoolsReturnType>(
      //   queryKeys.lendingPools({ account: activeAccount?.address }),
      //   (prev) => {
      //     if (!prev) return;
      //     const newAssets = prev.assets.map((item) => ({
      //       ...item,
      //       is_collateral: item.id === assetId ? false : item.is_collateral,
      //     }));
      //     return { ...prev, assets: newAssets };
      //   }
      // );
    },
  });
};
