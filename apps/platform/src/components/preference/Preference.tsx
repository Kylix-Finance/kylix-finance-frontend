import Copy from "~/assets/icons/copy.svg";
import Avatar from "../avatar";
import styles from "./Preference.module.scss";
import ThemeSwitcher from "../theme-switcher";
import { Button } from "../ui/button";
import WalletProfile from "../wallet-profile";
import Card from "../card";
import { DisconnectButton } from "../modal/wallet-modal";

export const Preference = () => {
  return (
    <Card className={styles.preference}>
      <div className={styles.row}>
        <WalletProfile />
        <Copy className={styles.copy} />
      </div>
      <div className={styles.row}>
        <span>Theme</span>
        <ThemeSwitcher />
      </div>
      <DisconnectButton />
    </Card>
  );
};
