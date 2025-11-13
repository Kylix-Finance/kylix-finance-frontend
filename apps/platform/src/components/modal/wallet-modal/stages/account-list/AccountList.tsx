import { useAccountsStore } from "@repo/shared";
import styles from "./AccountList.module.scss";
import Item from "./item/Item";
const AccountList = () => {
  const { accounts, account } = useAccountsStore();
  return (
    <div className={styles.container}>
      {accounts &&
        accounts.map((item, index) => (
          <Item
            key={index}
            isActiveAccount={account?.address === item.address}
            account={item}
          />
        ))}
    </div>
  );
};

export default AccountList;
