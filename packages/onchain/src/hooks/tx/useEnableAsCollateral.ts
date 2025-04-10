
import {
  useActiveAccount,
} from "../useActiveAccount";
import { queryKeys } from "@repo/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTransaction } from "../useTransaction"
interface MutationFnParams {
  assetId: string;
  onConfirm?: () => void;
}

export const useEnableAsCollateral = () => {
  const { activeAccount } = useActiveAccount();
  const queryClient = useQueryClient();
  const { execute } = useTransaction("lending", "enableAsCollateral")
  return useMutation({
    mutationFn: async (params: MutationFnParams) => {
      const { assetId, onConfirm } = params
      return execute(onConfirm, assetId)
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

