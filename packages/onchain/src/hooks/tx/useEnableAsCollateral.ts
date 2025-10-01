import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction";
import { queryKeys, useAccountsStore } from "@repo/shared";
import { TransactionCallbacks } from "../../types";
import { UseGetAssetWiseSupplies } from "../rpc";

interface MutationFnParams {
  assetId: string | number;
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
      queryClient.setQueryData<UseGetAssetWiseSupplies["data"]>(
        queryKeys.assetWiseBorrowsCollaterals(account?.address),
        (prev) => {
          if (!prev) return;
          const newAssets = prev.suppliedAssets.map((item) => ({
            ...item,
            is_collateral: item.assetId === assetId ? true : item.isCollateral,
          }));
          return { ...prev, assets: newAssets };
        }
      );
    },
  });
};
