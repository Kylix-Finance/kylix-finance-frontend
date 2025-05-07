import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { useAccountsStore } from "@repo/shared";
import { TransactionCallbacks } from "../../types";

interface MutationFnParams {
  assetId: string;
  options?: TransactionCallbacks;
}

export const useEnableAsCollateral = () => {
  const { account } = useAccountsStore();
  const queryClient = useQueryClient();
  const { execute } = useTransaction("lending", "enableAsCollateral");
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { assetId, options } = params;
      return execute(options, assetId);
    },
    onSuccess: (_, { assetId }) => {
      //FIXME: should be fix after lending pools rpc
      // queryClient.setQueryData<any>(
      //   queryKeys.lendingPools({ account: activeAccount?.address }),
      //   (prev) => {
      //     if (!prev) return;
      //     const newAssets = prev.assets.map((item) => ({
      //       ...item,
      //       is_collateral: item.id === assetId ? true : item.is_collateral,
      //     }));
      //     return { ...prev, assets: newAssets };
      //   }
      // );
    },
  });
};
