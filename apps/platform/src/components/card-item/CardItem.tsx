import Skeleton from "~/components/skeleton";
import styles from "./CardItem.module.scss";
import { isValidElement, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  value: ReactNode;
  subValue?: string;
  hasValue?: boolean;
  hasSubValue?: boolean;
  isPending: boolean;
  subValueClassName?: string;
}

const Item = ({
  title,
  value,
  subValue,
  hasSubValue,
  hasValue = true,
  isPending,
  subValueClassName,
}: Props) => {
  const isReactElement = isValidElement(value);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.value_container}>
        <span className={styles.value}>
          {hasValue &&
            (isReactElement ? (
              value
            ) : (
              <Skeleton rounded isLoading={isPending} width={80} height={16}>
                <span>{value}</span>
              </Skeleton>
            ))}
        </span>
        {hasSubValue && (
          <Skeleton
            isLoading={isPending}
            width={40}
            height={16}
            rounded
            className={styles.sub_value}
          >
            <span className={clsx(styles.sub_value, subValueClassName)}>
              {subValue}
            </span>
          </Skeleton>
        )}
      </div>
    </div>
  );
};

export default Item;
