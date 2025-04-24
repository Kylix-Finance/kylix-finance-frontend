import styles from "./Header.module.scss";
import { IconButton } from "../ui/icon-button";
import Bell from "~/assets/icons/bell.svg";
import { Button } from "../ui/button";
import WalletProfile from "../wallet-profile";
import { PopoverPanel } from "../popover-panel/PopoverPanel";
import Preference from "../preference";
import { useAccountsStore } from "@repo/shared";
import { ConnectButton } from "../modal/wallet-modal";

export const Header = () => {
  const { account } = useAccountsStore();
  return (
    <header className={styles.header}>
      <Button>Claim &lt; 0.12</Button>
      <IconButton icon={Bell} />
      {account?.address ? (
        <PopoverPanel target={<WalletProfile />} panel={<Preference />} />
      ) : (
        <ConnectButton />
      )}
    </header>
  );
};
