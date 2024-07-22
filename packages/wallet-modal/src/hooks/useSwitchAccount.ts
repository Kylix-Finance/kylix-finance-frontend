import { useQueryClient } from "@tanstack/react-query";
import { baseKey } from "../constants";
import { InjectedAccount } from "@polkadot/extension-inject/types";
import { useActivateAccount } from "./useActiveAccount";

const useSwitchAccount = () => {
  const queryClient = useQueryClient();
  const { activateAccount } = useActivateAccount();

  const switchAccount = (walletAddress: string) => {
    const accounts = queryClient.getQueryData<InjectedAccount[]>([
      baseKey,
      "accounts",
    ]);

    if (!accounts) {
      throw new Error("No accounts exist.");
    }

    const accountExists = accounts.find(
      (account) => account.address === walletAddress
    );

    if (!accountExists) {
      throw new Error(`No account found with address ${walletAddress}.`);
    }

    activateAccount({ account: accountExists });
  };

  return switchAccount;
};

export { useSwitchAccount };
