import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Status } from "../types";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { queryKeys } from "../../../shared/src/constants";
import { useAccountStore } from "@repo/shared";
const useActivateAccount = () => {
  const queryClient = useQueryClient();
  const { setAccount } = useAccountStore();

  const { mutate, mutateAsync, data, ...rest } = useMutation({
    mutationKey: queryKeys.activeAccount,
    mutationFn: async ({ account }: { account: InjectedAccount }) => {
      return { account };
    },
    onSuccess({ account }) {
      setAccount({
        address: account.address,
        connectorId: "subwallet-js",
      });

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
