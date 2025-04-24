import { useWalletList } from "~/hooks/wallet-modal/useWalletList";
import styles from "./WalletList.module.scss";
import Item from "./item/Item";
const WalletList = () => {
  const { data } = useWalletList();
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {data && data.map((item, index) => <Item key={index} {...item} />)}
      </div>
      <p className={styles.policy}>
        By connecting a wallet, you agree to Kylix Finanace’s Terms of Service
        and consent to its Privacy Policies
      </p>
    </div>
  );
};

export default WalletList;
