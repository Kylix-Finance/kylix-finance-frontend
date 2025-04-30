import { Skeleton } from "~/components/skeleton";
import styles from "./Item.module.scss";

interface Props {
  title: string;
  value: string;
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
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.value_container}>
        {hasValue && (
          <Skeleton
            rounded
            isLoading={isPending}
            width={80}
            height={16}
            className={styles.value}
          >
            <span className={styles.value}>{value}</span>
          </Skeleton>
        )}
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
