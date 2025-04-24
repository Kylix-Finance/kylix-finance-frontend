import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys, getWalletExtension, useAccountsStore } from "@repo/shared";
import { useConfig } from "./useConfig";

export const useAccounts = () => {
  const { connectorId } = useAccountsStore();
  const { data: config } = useConfig();

  const enabled = !!connectorId && !!config;

  return useQuery({
    queryKey: queryKeys.accounts,
    queryFn: enabled
      ? async () => {
          const walletExtension = getWalletExtension(connectorId);
          if (!walletExtension)
            throw new Error(
              `Wallet extension not found for connector ID: ${connectorId}`
            );
          if (!walletExtension.enable)
            throw new Error(
              `Wallet extension does not support 'enable' method`
            );

          const connectionRequest = await walletExtension.enable(
            config.dappName
          );
          const accounts = await connectionRequest.accounts.get();
          return accounts;
        }
      : skipToken,
  });
};
