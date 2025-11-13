import clsx from "clsx";
import { ComponentPropsWithRef, ReactNode } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps
  extends Omit<ComponentPropsWithRef<"input">, "className"> {
  label: ReactNode;
  className?: string;
}

const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label className={clsx(styles.container)}>
      <input
        type="checkbox"
        className={clsx(styles.checkbox, className)}
        {...props}
      />
      {label}
    </label>
  );
};

export default Checkbox;
