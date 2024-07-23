import { skipToken, useQuery } from "@tanstack/react-query";
import { useAccountStore } from "../../../shared/src";
import { queryKeys, getWalletExtension } from "@repo/shared/";
import { useConfig } from "./useConfig";

export const useAccounts = () => {
  const { connectorId } = useAccountStore();
  const { config } = useConfig();

  const enabled = !!connectorId && !!config;

  const { data, ...rest } = useQuery({
    queryKey: queryKeys.accounts,
    queryFn: enabled
      ? async () => {
          const walletExtension = getWalletExtension(connectorId);

          if (!walletExtension) throw new Error(`No extension found`);
          if (!walletExtension.enable)
            throw new Error(`extension does not support enable`);

          const connectionRequest = await walletExtension.enable(
            config.dappName
          );
          const accounts = await connectionRequest.accounts.get();
          return accounts;
        }
      : skipToken,
  });

  return { ...rest, accounts: data };
};
