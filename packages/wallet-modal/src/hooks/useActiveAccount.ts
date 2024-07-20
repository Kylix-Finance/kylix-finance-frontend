import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "../types";
import { baseKey } from "../constants";
import { statusQueryKey } from "./useStatus";
import { InjectedAccount } from "@polkadot/extension-inject/types";

const useActivateAccount = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, data, ...rest } = useMutation({
    mutationKey: [baseKey, "activate-account"],
    mutationFn: async ({ account }: { account: InjectedAccount }) => {
      return { account };
    },
    onSuccess({ account }) {
      queryClient.setQueryData<InjectedAccount>(
        [baseKey, "active-account"],
        () => account
      );
      queryClient.setQueryData<Status>(statusQueryKey, () => "connected");
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
