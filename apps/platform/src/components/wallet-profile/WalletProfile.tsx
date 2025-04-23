import Avatar from "~/components/avatar";
import styles from "./WalletProfile.module.scss";

export const WalletProfile = () => {
  return (
    <div className={styles.profile}>
      <Avatar />
      <span>0x2c9d....220Ce</span>
    </div>
  );
};
