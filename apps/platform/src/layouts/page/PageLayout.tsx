import { ComponentPropsWithRef } from "react";
import styles from "./PageLayout.module.scss";
import clsx from "clsx";
import Header from "~/components/header";
interface Props extends ComponentPropsWithRef<"div"> {
  title: string;
}

const PageLayout = ({ title, children, className, ...rest }: Props) => {
  return (
    <div className={clsx(styles.container, className)} {...rest}>
      <Header />
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
