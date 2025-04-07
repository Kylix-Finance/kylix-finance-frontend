import { InjectedWindowProvider } from "@polkadot/extension-inject/types";

export const getWalletExtension = (walletId: string) =>
  window?.injectedWeb3?.[walletId] as InjectedWindowProvider;

export const decodeArrayToString = (arr: number[]) =>
  String.fromCharCode(...arr);

export const minBigInt = (a: bigint, b: bigint): bigint => (a < b ? a : b);
