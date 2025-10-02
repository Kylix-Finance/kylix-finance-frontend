import ProgressBar from "~/components/progress-bar";
import styles from "./Tvl.module.scss";

const Tvl = () => {
  return (
    <div className={styles.container}>
      <ProgressBar
        height={10}
        safe={42}
        value={70}
        warning={63}
        liquidation={72}
      />
    </div>
  );
};

export default Tvl;
