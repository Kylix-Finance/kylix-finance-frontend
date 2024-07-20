import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Accounts, Status, Wallet } from "../types";
import { useReadConfig } from "./useReadConfig";
import { baseKey } from "../constants";

const getWalletExtension = (walletId: string) => {
  return window.injectedWeb3 && window.injectedWeb3[walletId];
};

export const useConnect = () => {
  const queryClient = useQueryClient();
  const { data: config } = useReadConfig();

  const { mutate, mutateAsync, ...rest } = useMutation({
    mutationKey: [baseKey, "connection-request"],
    mutationFn: async ({ wallet }: { wallet: Wallet }) => {
      const walletExtension = getWalletExtension(wallet.id);
      if (!walletExtension) {
        throw new Error(`No ${wallet.name} extension found`);
      }

      if (!walletExtension.enable) {
        throw new Error(`${wallet.name} extension does not support enable`);
      }

      const connectionRequest = await walletExtension.enable(
        config?.dappName || ""
      );
      const accounts = await connectionRequest.accounts.get();

      return {
        accounts,
      };
    },
    onSuccess({ accounts }) {
      queryClient.setQueryData<Accounts>([baseKey, "accounts"], () => ({
        accounts,
      }));
      queryClient.setQueryData<Status>([baseKey, "status"], () => "connecting");
    },
  });

  return { connect: mutate, connectAsync: mutateAsync, ...rest };
};
