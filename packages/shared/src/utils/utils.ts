export const getWalletExtension = (walletId: string) =>
  window.injectedWeb3?.[walletId];
