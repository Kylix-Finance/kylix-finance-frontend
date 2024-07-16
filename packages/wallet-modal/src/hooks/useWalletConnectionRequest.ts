import { InjectedAccount } from "@polkadot/extension-inject/types";
import { STATUS } from "../constants";
import { useAccountsStore, useStatusStore } from "../stores";
import { Wallet } from "../types";

const request = async (
  wallet: Wallet,
  dappName: string,
  setStatus: (status: STATUS) => void,
  setAccounts: (account: InjectedAccount[] | undefined) => void
): Promise<InjectedAccount[] | undefined> => {
  try {
    setStatus(STATUS.CONNECTING);
    const walletExtension =
      window.injectedWeb3 && window.injectedWeb3[wallet.id];

    if (!walletExtension) {
      throw new Error(`No ${wallet.name} extension found`);
    }

    const connectionRequest = await walletExtension.enable!(dappName);
    const accounts = await connectionRequest.accounts.get();
    setAccounts(accounts);
    setStatus(STATUS.CONNECTED);
    return accounts;
  } catch (error) {
    console.error(`Failed to connect to ${wallet.name}`, error);
    setStatus(STATUS.ERROR);
    return undefined;
  }
};

export const useWalletConnectionRequest = () => {
  const { setStatus } = useStatusStore();
  const { setAccounts } = useAccountsStore();
  const requestHandler = async (wallet: Wallet, dappName: string) => {
    return request(wallet, dappName, setStatus, setAccounts);
  };
  return {
    request: requestHandler,
  };
};
