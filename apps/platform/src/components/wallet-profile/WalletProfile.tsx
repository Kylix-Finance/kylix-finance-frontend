import Avatar from "~/components/avatar";
import styles from "./WalletProfile.module.scss";
import { useAccountsStore } from "@repo/shared";
import { IconButton } from "../ui/icon-button";
import Copy from "~/assets/icons/copy.svg";
import { copyTextToClipboard } from "~/utils/copyTextToClipboard";
interface Props {
  hasCopy?: boolean;
}
export const WalletProfile = ({ hasCopy }: Props) => {
  const { account } = useAccountsStore();
  const handleCopy = () => {
    if (account?.address) {
      copyTextToClipboard(account.address);
    }
  };
  return (
    <div className={styles.profile}>
      <Avatar account={account?.address} />
      {hasCopy && (
        <IconButton
          icon={Copy}
          noInteractionStyles
          noPadding
          mode="none"
          onClick={handleCopy}
        />
      )}
    </div>
  );
};
