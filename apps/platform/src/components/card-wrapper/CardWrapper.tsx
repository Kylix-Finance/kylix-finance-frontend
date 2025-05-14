import { ComponentProps } from "react";
import styles from "./CardWrapper.module.scss";
interface Props extends Omit<ComponentProps<"div">, "className"> {}

const CardWrapper = ({ children, ...rest }: Props) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
};

export default CardWrapper;
