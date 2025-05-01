import styles from "./Preference.module.scss";
import Card from "../card";
import { WalletProfile } from "../wallet-profile/WalletProfile";
import Row from "./row/Row";
import { Button } from "../ui/button";
import { useAccountsStore } from "@repo/shared";
import { trimWalletAddress } from "~/utils/trimWalletAddress";
import ChevronRight from "~/assets/icons/chevron-right.svg";
import { DisconnectButton } from "../modal/wallet-modal";
export const Preference = () => {
  const { account, setStage } = useAccountsStore();
  return (
    <Card className={styles.preference}>
      <WalletProfile hasCopy />
      <Row title="Wallet options">
        <Button
          variant="ghost"
          icon={ChevronRight}
          iconPosition="start"
          onClick={() => setStage("accountsList")}
        >
          {account?.name ||
            (account?.address && trimWalletAddress(account.address)) ||
            "Unnamed Account"}
        </Button>
      </Row>
      <Row>
        <DisconnectButton />
      </Row>
    </Card>
  );
};
