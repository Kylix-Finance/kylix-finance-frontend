import { useAccountStore } from "@repo/shared";
import { useAccounts } from "./useAccounts";

export const useActiveAccount = () => {
  const { account: storedAccountAddress } = useAccountStore();
  const { data: accounts, ...accountsQueryData } = useAccounts();

  const activeAccount =
    storedAccountAddress && accounts
      ? accounts.find((account) => account.address === storedAccountAddress)
      : undefined;

  return {
    activeAccount,
    ...accountsQueryData,
  };
};
