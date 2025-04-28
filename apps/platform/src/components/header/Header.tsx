import styles from "./Header.module.scss";
import { IconButton } from "../ui/icon-button";
import Bell from "~/assets/icons/bell.svg";
import { Button } from "../ui/button";
import WalletProfile from "../wallet-profile";
import { PopoverPanel } from "../popover-panel/PopoverPanel";
import Preference from "../preference";
import { useAccountsStore } from "@repo/shared";
import { ConnectButton } from "../modal/wallet-modal";
import { useMounted } from "@mantine/hooks";
import { Skeleton } from "../skeleton";
export const Header = () => {
  const isMounted = useMounted();
  const { account } = useAccountsStore();
  return (
    <header className={styles.header}>
      <Button>Claim &lt; 0.12</Button>
      <IconButton icon={Bell} />
      {isMounted ? (
        <>
          {account?.address ? (
            <PopoverPanel target={<WalletProfile />} panel={<Preference />} />
          ) : (
            <ConnectButton />
          )}
        </>
      ) : (
        <Skeleton width={180} height={44} isLoading />
      )}
    </header>
  );
};
