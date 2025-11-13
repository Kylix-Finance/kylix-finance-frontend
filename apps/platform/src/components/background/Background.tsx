import styles from "./Background.module.css";
import { clsx } from "clsx";

const Background = () => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.blob, styles.blob1)} />
      <div className={clsx(styles.blob, styles.blob2)} />
      <div className={clsx(styles.blob, styles.blob3)} />
      <div className={clsx(styles.blob, styles.blob4)} />
      <div className={clsx(styles.blob, styles.blob5)} />
      <div className={clsx(styles.blob, styles.blob6)} />
    </div>
  );
};

export default Background;
