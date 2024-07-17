import { useAccountsStore } from "../stores";
import { useWalletConnectionRequest } from "./useWalletConnectionRequest";
import { Wallet } from "../types";

export const useConnect = (dappName: string) => {
  const { accounts, activeAccount } = useAccountsStore();
  const { request } = useWalletConnectionRequest(dappName);

  return {
    accounts,
    currentAccount: activeAccount,
    connectWallet: (wallet: Wallet) => request(wallet),
  };
};
