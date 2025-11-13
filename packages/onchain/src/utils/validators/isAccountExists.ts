export const isAccountExists = (account?: string): account is string => {
  if (!account) {
    throw new Error(
      "No active account detected. Please ensure your wallet is connected to the app."
    );
  }
  return true;
};
