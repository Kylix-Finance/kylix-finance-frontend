import { ComponentPropsWithRef } from "react";
import styles from "./PageLayout.module.scss";
import clsx from "clsx";
interface Props extends ComponentPropsWithRef<"div"> {
  title: string;
}

const PageLayout = ({ title, children, className, ...rest }: Props) => {
  return (
    <div className={clsx(styles.container, className)} {...rest}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
