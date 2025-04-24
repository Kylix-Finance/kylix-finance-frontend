import Avatar from "~/components/avatar";
import styles from "./WalletProfile.module.scss";
import { useAccountsStore } from "@repo/shared";
import { trimWalletAddress } from "~/utils/trimWalletAddress";

export const WalletProfile = () => {
  const { account } = useAccountsStore();
  return (
    <div className={styles.profile}>
      <Avatar />
      {account?.address && trimWalletAddress(account?.address)}
    </div>
  );
};
