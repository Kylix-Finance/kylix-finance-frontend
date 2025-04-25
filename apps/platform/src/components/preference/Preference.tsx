import styles from "./Preference.module.scss";
import ThemeSwitcher from "../theme-switcher";
import Card from "../card";
import { WalletProfile } from "../wallet-profile/WalletProfile";
import Row from "./row/Row";
import { Button } from "../ui/button";
import { useAccountsStore } from "@repo/shared";
import { trimWalletAddress } from "~/utils/trimWalletAddress";
import ChevronRight from "~/assets/icons/chevron-right.svg";
export const Preference = () => {
  const { account } = useAccountsStore();
  return (
    <Card className={styles.preference}>
      <WalletProfile hasCopy />
      <Row title="Theme">
        <ThemeSwitcher />
      </Row>
      <Row title="Wallet options">
        <Button variant="ghost" icon={ChevronRight} iconPosition="start">
          {account?.name ||
            (account?.address && trimWalletAddress(account.address)) ||
            "Unnamed Account"}
        </Button>
      </Row>
    </Card>
  );
};
