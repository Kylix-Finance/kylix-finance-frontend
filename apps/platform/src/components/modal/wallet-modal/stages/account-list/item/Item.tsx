import { InjectedAccount } from "@polkadot/extension-inject/types";
import styles from "./Item.module.scss";
import { IconButton } from "~/components/ui/icon-button";
import User from "~/assets/icons/user.svg";
import { trimWalletAddress } from "~/utils/trimWalletAddress";
import Copy from "~/assets/icons/copy.svg";
import clsx from "clsx";
import { useAccountsStore } from "@repo/shared";
import { copyTextToClipboard } from "~/utils/copyTextToClipboard";
interface Props {
  account: InjectedAccount;
  isActiveAccount: boolean;
}

const Item = ({ account, isActiveAccount }: Props) => {
  const { switchAccount } = useAccountsStore();
  const handleClick = () => {
    switchAccount(account, null);
  };
  return (
    <div
      onClick={handleClick}
      className={clsx(styles.container, { [styles.active]: isActiveAccount })}
    >
      <div className={styles.left}>
        <IconButton icon={User} noInteractionStyles />
        <div className={styles.information}>
          <p className={styles.account_name}>
            {" "}
            {account.name || "Unnamed Account"}
          </p>
          <p className={styles.account_address}>
            {" "}
            {trimWalletAddress(account.address)}
          </p>
        </div>
      </div>
      <IconButton
        icon={Copy}
        mode="none"
        noPadding
        onClick={() => copyTextToClipboard(account.address)}
      />
    </div>
  );
};

export default Item;
