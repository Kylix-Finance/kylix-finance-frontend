import { ElementType, ReactNode } from "react";
import styles from "./EmptyState.module.scss";
import clsx from "clsx";
interface Props {
  title: string;
  description: ReactNode;
  action?: ReactNode;
  icon: ElementType;
  hasBorder?: boolean;
}

const EmptyState = ({
  action,
  description,
  title,
  icon: Icon,
  hasBorder,
}: Props) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.container_border]: hasBorder,
      })}
    >
      <Icon className={styles.icon} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.description}>{description}</div>
      </div>
      {action}
    </div>
  );
};

export default EmptyState;
