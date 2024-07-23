import { useQueryClient } from "@tanstack/react-query";
import { queryKeys, useAccountStore } from "@repo/shared";
import { Status } from "../types";

const useSwitchAccount = () => {
  const queryClient = useQueryClient();

  const { setAccount } = useAccountStore();

  const switchAccount = (walletAddress: string) => {
    setAccount(walletAddress);
    queryClient.setQueryData<Status>(queryKeys.status, "connected");
  };

  return switchAccount;
};

export { useSwitchAccount };
