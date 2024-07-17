import { InjectedAccount } from "@polkadot/extension-inject/types";
import { STATUS } from "../constants";
import { useAccountsStore, useStatusStore } from "../stores";
import { Wallet } from "../types";

const getWalletExtension = (walletId: string) => {
  return window.injectedWeb3 && window.injectedWeb3[walletId];
};

const connectToWallet = async (
  wallet: Wallet,
  dappName: string
): Promise<InjectedAccount[]> => {
  const walletExtension = getWalletExtension(wallet.id);
  if (!walletExtension) {
    throw new Error(`No ${wallet.name} extension found`);
  }

  if (!walletExtension.enable) {
    throw new Error(`${wallet.name} extension does not support enable`);
  }

  const connectionRequest = await walletExtension.enable(dappName);
  const accounts = await connectionRequest.accounts.get();
  return accounts;
};

const request = async (
  wallet: Wallet,
  dappName: string,
  setStatus: (status: STATUS) => void,
  setAccounts: (accounts: InjectedAccount[] | undefined) => void
): Promise<InjectedAccount[] | undefined> => {
  try {
    setStatus(STATUS.CONNECTING);
    const accounts = await connectToWallet(wallet, dappName);
    setAccounts(accounts);
    setStatus(STATUS.CONNECTED);
    return accounts;
  } catch (error) {
    console.error(`Failed to connect to ${wallet.name}`, error);
    setStatus(STATUS.ERROR);
    setAccounts(undefined);
    return undefined;
  }
};

export const useWalletConnectionRequest = (dappName: string) => {
  const { setStatus } = useStatusStore();
  const { setAccounts } = useAccountsStore();

  const requestHandler = async (wallet: Wallet) => {
    return request(wallet, dappName, setStatus, setAccounts);
  };

  return { request: requestHandler };
};
