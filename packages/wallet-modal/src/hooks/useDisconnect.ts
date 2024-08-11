import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "../types";
import { queryKeys } from "../../../shared/src/constants";
import { useAccountStore } from "@repo/shared";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { useBalanceStore } from "@repo/onchain-utils";

const useDisconnect = () => {
  const queryClient = useQueryClient();
  const { setConnectorId, setAccount } = useAccountStore();
  const { setBalance } = useBalanceStore();
  const { mutate, mutateAsync, ...rest } = useMutation({
    mutationKey: queryKeys.disconnectRequest,
    mutationFn: async () => {
      setConnectorId(null);
      setAccount(null);
      setBalance(null);
      queryClient.setQueryData<InjectedAccount[]>(queryKeys.accounts, []);
      queryClient.setQueryData<Status>(queryKeys.status, "disconnected");
      queryClient.refetchQueries({
        queryKey: queryKeys.pools,
      });
    },
  });

  return { disconnect: mutate, disconnectAsync: mutateAsync, ...rest };
};

export { useDisconnect };
