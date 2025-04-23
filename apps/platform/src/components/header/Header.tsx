import Avatar from "~/components/avatar";
import styles from "./Header.module.scss";
import { IconButton } from "../ui/icon-button";
import Bell from "~/assets/icons/bell";
import { Button } from "../ui/button";
import WalletProfile from "../wallet-profile";
import { PopoverPanel } from "../popover-panel/PopoverPanel";
import Preference from "../preference";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button>Claim &lt; 0.12</Button>
      <IconButton icon={Bell} />
      <PopoverPanel target={<WalletProfile />} panel={<Preference />} />
    </header>
  );
};
