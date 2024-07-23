import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "../types";
import { baseKey } from "../constants";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { queryKeys } from "@repo/constants";
const useActivateAccount = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, data, ...rest } = useMutation({
    mutationKey: queryKeys.activeAccount,
    mutationFn: async ({ account }: { account: InjectedAccount }) => {
      return { account };
    },
    onSuccess({ account }) {
      queryClient.setQueryData<InjectedAccount>(
        queryKeys.activeAccount,
        account
      );
      queryClient.setQueryData<Status>(queryKeys.status, () => "connected");
    },
  });

  return {
    activateAccount: mutate,
    activateAccountAsync: mutateAsync,
    activeAccount: data?.account,
    ...rest,
  };
};

export { useActivateAccount };
