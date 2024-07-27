import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "../types";
import { queryKeys } from "../../../shared/src/constants";
import { useAccountStore } from "@repo/shared";
import { InjectedAccount } from "@polkadot/extension-inject/types";

const useDisconnect = () => {
  const queryClient = useQueryClient();
  const { setConnectorId, setAccount } = useAccountStore();
  const { mutate, mutateAsync, ...rest } = useMutation({
    mutationKey: queryKeys.disconnectRequest,
    mutationFn: async () => {
      setConnectorId(null);
      setAccount(null);
      queryClient.setQueryData<InjectedAccount[]>(queryKeys.accounts, []);
      queryClient.setQueryData<Status>(queryKeys.status, "disconnected");
    },
  });

  return { disconnect: mutate, disconnectAsync: mutateAsync, ...rest };
};

export { useDisconnect };
