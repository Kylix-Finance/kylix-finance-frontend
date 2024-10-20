export const getWalletExtension = (walletId: string) =>
  window.injectedWeb3?.[walletId];

export const decodeArrayToString = (arr: number[]) =>
  String.fromCharCode(...arr);
