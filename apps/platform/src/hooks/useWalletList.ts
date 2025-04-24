import { queryKeys } from "@repo/shared";
import { useQuery } from "@tanstack/react-query";
import { WALLETS } from "~/constants/wallets";
import { WalletProviderDetails } from "~/types/wallets";

export const useWalletList = () => {
  return useQuery<WalletProviderDetails[]>({
    queryKey: queryKeys.wallets,
    queryFn: async () => {
      const injectedWeb3 = window.injectedWeb3 || {};
      return Object.entries(WALLETS).map(([key, wallet]) => {
        const extension = injectedWeb3[key]
        return {
          ...wallet,
          id: key,
          isInstalled: !!extension,
          extension: extension || undefined,
        }
      })
    },
    meta: {
      excludeFromGlobalInvalidation: true,
    },
  })
};
