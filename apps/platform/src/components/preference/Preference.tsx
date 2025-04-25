import styles from "./Preference.module.scss";
import ThemeSwitcher from "../theme-switcher";
import Card from "../card";
import { DisconnectButton } from "../modal/wallet-modal";
import { WalletProfile } from "../wallet-profile/WalletProfile";

export const Preference = () => {
  return (
    <Card className={styles.preference}>
      <div className={styles.row}>
        <WalletProfile hasCopy />
      </div>
      <div className={styles.row}>
        <span>Theme</span>
        <ThemeSwitcher />
      </div>
      <DisconnectButton />
    </Card>
  );
};
