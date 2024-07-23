import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "../types";
import { queryKeys } from "../../../shared/src/constants";
import { useModalStore } from "../stores";
import { getWalletExtension, useAccountStore, Wallet } from "@repo/shared";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { useConfig } from "@repo/onchain-utils";

const useConnect = () => {
  const queryClient = useQueryClient();
  const { config } = useConfig();
  const { setStage } = useModalStore();
  const { setConnectorId } = useAccountStore();

  const { mutate, mutateAsync, ...rest } = useMutation({
    mutationKey: queryKeys.connectionRequest,
    mutationFn: async ({ wallet }: { wallet: Wallet }) => {
      const walletExtension = getWalletExtension(wallet.id);

      if (!walletExtension)
        throw new Error(`No ${wallet.name} extension found`);
      if (!walletExtension.enable)
        throw new Error(`${wallet.name} extension does not support enable`);

      const connectionRequest = await walletExtension.enable(
        config?.dappName || ""
      );
      const accounts = await connectionRequest.accounts.get();

      return { accounts, connector: wallet };
    },
    onSuccess({ accounts, connector }) {
      setStage("accountsList");
      setConnectorId(connector.id);
      queryClient.setQueryData<InjectedAccount[]>(queryKeys.accounts, accounts);
      queryClient.setQueryData<Status>(queryKeys.status, "connecting");
    },
  });

  return { connect: mutate, connectAsync: mutateAsync, ...rest };
};

export { useConnect };
