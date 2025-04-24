import { useAccountsStore, getWalletExtension } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useConfig } from "./useConfig";

export const useSigner = () => {
  const { connectorId, account } = useAccountsStore();
  const { data: config } = useConfig();
  const enabled = connectorId && account?.address && config;
  return useQuery({
    queryKey: queryKeys.signer({
      account: account?.address || null,
      connectorId,
    }),
    queryFn: enabled
      ? async () => {
          const walletExtension = getWalletExtension(connectorId);
          if (!walletExtension) {
            throw new Error(`No extension found for ${connectorId}`);
          }
          if (typeof walletExtension.enable !== "function") {
            throw new Error(`Extension does not support enable`);
          }
          const injector = await walletExtension.enable(config.dappName);
          return injector.signer;
        }
      : skipToken,
  });
};
