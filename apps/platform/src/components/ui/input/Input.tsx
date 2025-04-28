import { ComponentProps, ElementType, useRef } from "react";
import styles from "./Input.module.scss";
interface Props extends ComponentProps<"input"> {
  icon?: ElementType;
}

const Input = ({ icon: Icon, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div className={styles.container} onClick={handleContainerClick}>
      {Icon && (
        <span className={styles.icon}>
          <Icon />
        </span>
      )}
      <input {...rest} ref={inputRef} className={styles.input} />
    </div>
  );
};

export default Input;
