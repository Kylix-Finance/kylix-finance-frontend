import { ApiPromise } from "@polkadot/api";
import { useActiveAccount, useProvider } from "@repo/onchain-utils";
import { queryKeys } from "@repo/shared";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetBorrowCollaterals = () => {
  const { api } = useProvider();
  const { activeAccount } = useActiveAccount();

  return useQuery({
    queryKey: ["HIIIIIII"],
    queryFn: async () => {
      if (!api) {
        throw new Error("API not connected.");
      }
      if (!activeAccount?.address) {
        throw new Error("No active account detected.");
      }

      const result =
        await api?.call?.lendingPoolApi?.getAssetWiseSupplies?.(activeAccount);
      console.log("_____________RE", api?.call);

      if (!result) {
        throw new Error("Failed to fetch borrow collaterals.");
      }

      return result;
    },
  });
};
