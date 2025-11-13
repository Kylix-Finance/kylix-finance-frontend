import ScrollableContainer from "../scrollable-container";
import Skeleton from "../skeleton";
import styles from "./StatsBar.module.scss";
export interface Data {
  content?: string;
  value?: string;
}

interface Props {
  data: Data[];
  isLoading?: boolean;
  hasDivider?: boolean;
}

const StatsBar = ({ data, isLoading, hasDivider = true }: Props) => {
  return (
    <ScrollableContainer>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.container}
          data-has-divider={hasDivider}
        >
          <div className={styles.label}>{item.content}</div>
          <Skeleton isLoading={isLoading} height="24px" rounded>
            <div className={styles.content}>{item.value}</div>
          </Skeleton>
        </div>
      ))}
    </ScrollableContainer>
  );
};

export default StatsBar;
