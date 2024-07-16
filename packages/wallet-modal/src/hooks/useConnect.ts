import { useAccountsStore } from "../stores";

export const useConnect = () => {
  const { accounts, activeAccount } = useAccountsStore();
  return {
    accounts,
    currentAccount: activeAccount,
  };
};
