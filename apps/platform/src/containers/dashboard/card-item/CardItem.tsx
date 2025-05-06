import Skeleton from "~/components/skeleton";
import styles from "./CardItem.module.scss";
import { isValidElement, ReactNode } from "react";

interface Props {
  title: string;
  value: ReactNode;
  subValue?: string;
  hasValue?: boolean;
  hasSubValue?: boolean;
  isPending: boolean;
}

const Item = ({
  title,
  value,
  subValue,
  hasSubValue,
  hasValue = true,
  isPending,
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
            <span className={styles.sub_value}>{subValue}</span>
          </Skeleton>
        )}
      </div>
    </div>
  );
};

export default Item;
