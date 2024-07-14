import { useState } from "react";
import { InjectedWindowProvider } from "../types";
interface Wallet {
  name: string;
  id: string;
  extensionName: string;
}

const wallets: Wallet[] = [
  { name: "Fearless Wallet", id: "fearless", extensionName: "fearless-wallet" },
  {
    name: "SubWallet - Polkadot Wallet",
    id: "subwallet",
    extensionName: "subwallet-js",
  },
  {
    name: "Talisman - Ethereum and Polkadot Wallet",
    id: "talisman",
    extensionName: "talisman",
  },
  { name: "Enkrypt Crypto Wallet", id: "enkrypt", extensionName: "enkrypt" },
];
export const useConnect = async (wallet: Wallet) => {
  const [accounts, setAccounts] = useState<
    {
      name: string;
      address: string;
    }[]
  >([]);
  const [selectedWallet, setSelectedWallet] = useState<string>("");

  try {
    setSelectedWallet(wallet.name);
    const extensions = (window as any).injectedWeb3;

    const walletExtension: InjectedWindowProvider =
      extensions[wallet.extensionName];

    if (!walletExtension) {
      console.error(`No ${wallet.name} extension found`);
      return;
    }
    console.log(walletExtension.enable);

    const wall = await (await walletExtension.enable("my-dapp")).accounts.get();

    setAccounts((prev) => [
      ...prev,
      ...wall.map((i) => ({
        address: i.address ?? "",
        name: i.name ?? "",
      })),
    ]);
  } catch (error) {
    console.error(`Failed to connect to ${wallet.name}`, error);
  }
};
