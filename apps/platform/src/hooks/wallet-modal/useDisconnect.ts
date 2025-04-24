import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys, useAccountStore } from "@repo/shared";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { useBalanceStore } from "@repo/onchain-utils";

export const useDisconnect = () => {
  const queryClient = useQueryClient();
  const { setConnectorId, setAccount } = useAccountStore();
  const { setBalance } = useBalanceStore();
  return useMutation({
    mutationFn: async () => {
      setConnectorId(null);
      setAccount(null);
      setBalance(null);
      queryClient.setQueryData<InjectedAccount[]>(queryKeys.accounts, []);
    },
  });

};

