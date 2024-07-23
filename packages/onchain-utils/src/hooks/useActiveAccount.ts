import { useAccountStore } from "@repo/shared";
import { useAccounts } from "./useAccounts";

export const useActiveAccount = () => {
  const { account: storedAccount } = useAccountStore();
  const { accounts, ...rest } = useAccounts();

  const activeAccount = accounts?.find(
    (account) => account.address === storedAccount?.address
  );

  return { ...rest, activeAccount };
};
