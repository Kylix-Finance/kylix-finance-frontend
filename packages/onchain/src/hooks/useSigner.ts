import { useAccountStore, getWalletExtension } from "@repo/shared";
import { skipToken, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { useConfig } from "./useConfig";

export const useSigner = () => {
  const { connectorId, account } = useAccountStore();
  const { data: config } = useConfig();
  const enabled = connectorId && account && config;
  return useQuery({
    queryKey: queryKeys.signer({ account, connectorId }),
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
