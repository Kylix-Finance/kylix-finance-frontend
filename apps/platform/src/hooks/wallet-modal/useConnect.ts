import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@repo/shared";
import { getWalletExtension, useAccountStore, Wallet } from "@repo/shared";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { useConfig } from "@repo/onchain-utils";
import { useModalStore } from "~/stores/modal";

const useConnect = () => {
  const queryClient = useQueryClient();
  const { config } = useConfig();
  const { setStage } = useModalStore();
  const { setConnectorId } = useAccountStore();

  return useMutation({
    mutationFn: async ({ wallet }: { wallet: Wallet }) => {
      const walletExtension = getWalletExtension(wallet.id);
      if (!config) {
        throw new Error("Something went wrong. Please try again later.");

      }
      if (!walletExtension)
        throw new Error(`No ${wallet.name} extension found`);
      if (!walletExtension.enable)
        throw new Error(`${wallet.name} extension does not support enable`);

      const connectionRequest = await walletExtension.enable(
        config.dappName
      );
      const accounts = await connectionRequest.accounts.get();

      return { accounts, connector: wallet };
    },
    onSuccess({ accounts, connector }) {
      setStage("accountsList");
      setConnectorId(connector.id);
      queryClient.setQueryData<InjectedAccount[]>(queryKeys.accounts, accounts);
    },
  });

};

export { useConnect };
