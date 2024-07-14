//@ts-expect-error ts error
import {
  InjectedAccount,
  InjectedWindowProvider,
} from "@polkadot/extension-inject/types";
import { useStatusStore } from "../stores";
import { STATUS } from "../constants";

declare global {
  interface Window {
    injectedWeb3: {
      [key: string]: InjectedWindowProvider;
    };
  }
}

export interface Wallet {
  name: string;
  id: string;
  image: string;
}

const connect = async (
  wallet: Wallet,
  origin: string,
  setStatus: (status: STATUS) => void
): Promise<InjectedAccount["address"] | undefined> => {
  try {
    setStatus(STATUS.CONNECTING);
    const walletExtension =
      window.injectedWeb3 && window.injectedWeb3[wallet.id];

    if (!walletExtension) {
      throw new Error(`No ${wallet.name} extension found`);
    }

    const accounts = await walletExtension.enable!(origin).then((ext) =>
      ext.accounts.get()
    );
    setStatus(STATUS.CONNECTED);
    return accounts[0]?.address;
  } catch (error) {
    console.error(`Failed to connect to ${wallet.name}`, error);
    setStatus(STATUS.ERROR);
    return undefined;
  }
};

export const useConnect = (origin: string) => {
  const { setStatus, status } = useStatusStore();
  console.log("STATUS", status);
  const connectWallet = async (wallet: Wallet) => {
    return await connect(wallet, origin, setStatus);
  };

  return {
    connect: connectWallet,
  };
};
