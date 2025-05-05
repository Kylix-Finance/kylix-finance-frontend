import ActionHeader from "./action-header/ActionHeader";
import styles from "./Markets.module.scss";
import TotalSuppliedBorrowed from "./total-supplied-borrowed/TotalSuppliedBorrowed";
import TransactionForm from "./transaction-form/TransactionForm";
import Utilization from "./utilization/Utilization";

const Markets = () => {
  return (
    <div className={styles.container}>
      <div className={styles.action_header}>
        <ActionHeader data="" />
      </div>
      <div className={styles.utilization}>
        <Utilization />
      </div>
      <div className={styles.total_supplied_borrowed}>
        <TotalSuppliedBorrowed />
      </div>
      <div className={styles.transaction_form}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Markets;
