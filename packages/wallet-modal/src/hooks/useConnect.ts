import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status, Wallet } from "../types";
import { useReadConfig } from "./useReadConfig";
import { baseKey } from "../constants";
import { connectorQueryKey } from "./useActiveConnector";
import { Accounts } from "@repo/types";
import { queryKeys } from "@repo/constants";

const getWalletExtension = (walletId: string) =>
  window.injectedWeb3?.[walletId];

const useConnect = () => {
  const queryClient = useQueryClient();
  const { data: config } = useReadConfig();

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

      console.log("kkk_____", accounts);
      return { accounts, connector: wallet };
    },
    onSuccess({ accounts, connector }) {
      queryClient.setQueryData<Accounts>(queryKeys.accounts, () => ({
        accounts,
      }));
      queryClient.setQueryData<Status>(queryKeys.status, () => "connecting");
      queryClient.setQueryData<Wallet>(connectorQueryKey, () => connector);
    },
  });

  return { connect: mutate, connectAsync: mutateAsync, ...rest };
};

export { useConnect };
