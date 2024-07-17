import { useAccountsStore } from "../stores";

const useSwitchAccount = () => {
  const { setActiveAccount } = useAccountsStore();
  const accounts = useAccountsStore((state) => state.accounts);

  const switchAccount = (walletAddress: string) => {
    const accountExists = accounts?.some(
      (account) => account.address === walletAddress
    );
    if (accountExists) {
      setActiveAccount(walletAddress);
    } else {
      throw new Error("Wallet address not found");
    }
  };

  return switchAccount;
};

export default useSwitchAccount;
