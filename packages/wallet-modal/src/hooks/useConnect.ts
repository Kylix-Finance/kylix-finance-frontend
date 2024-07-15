import { Wallet } from "../types";
import { useWalletConnectionRequest } from "./useWalletConnectionRequest";

export const useConnect = (dappName: string) => {
  const { request } = useWalletConnectionRequest()
  const handler = (wallet: Wallet) => {
    return request(wallet, dappName)
  }
  return {
    connect: handler
  };
};
