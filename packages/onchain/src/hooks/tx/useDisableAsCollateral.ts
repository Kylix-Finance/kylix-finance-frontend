import { useActiveAccount } from "../useActiveAccount";
import { useTransaction } from "../useTransaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
interface MutationFnParams {
  assetId: string;
  onConfirm?: () => void;
}
export const useDisableAsCollateral = () => {
  const { activeAccount } = useActiveAccount();
  const { execute } = useTransaction("lending", "disableAsCollateral");
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: MutationFnParams) => {
      const { assetId, onConfirm } = params;
      return execute(onConfirm, assetId);
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
