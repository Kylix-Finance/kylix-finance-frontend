import User from "~/assets/icons/user.svg";
import styles from "./Avatar.module.scss";
import { IconButton } from "../ui/icon-button";
import { trimWalletAddress } from "~/utils/trimWalletAddress";

type AvatarProps = {
  size?: "large" | "small";
  hasBadge?: boolean;
  account?: string;
};

export const Avatar = ({ size = "small", hasBadge, account }: AvatarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar} data-size={size}>
        <IconButton icon={User} />
        {hasBadge && <div className={styles.badge} />}
      </div>
      {account && (
        <p className={styles.account}>{trimWalletAddress(account)}</p>
      )}
    </div>
  );
};
