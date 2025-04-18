import clsx from "clsx";
import styles from "./index.module.scss";
interface Params {
  width?: number;
  height?: number;
  borderWidth?: number;
  className?: string;
}
const Spinner = ({ height, width, borderWidth = 3, className }: Params) => {
  return (
    <span
      style={{ width, height, borderWidth }}
      className={clsx(styles.container, className)}
    ></span>
  );
};

export default Spinner;
