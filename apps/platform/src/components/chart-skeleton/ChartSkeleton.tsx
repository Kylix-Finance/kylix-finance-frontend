import { ReactNode } from "react";
import styles from "./ChartSkeleton.module.scss";
import { Skeleton } from "../skeleton";

interface Props {
  isLoading?: boolean;
  children?: ReactNode;
}
const heights = [105, 130, 191, 163, 250, 283];

const ChartSkeleton = ({ children, isLoading }: Props) => {
  if (isLoading)
    return (
      <div className={styles.wrapper}>
        {heights.map((height, index) => (
          <Skeleton
            key={index}
            containerClassName={styles.container}
            width={45}
            height={height}
            isLoading
          />
        ))}
      </div>
    );

  return children;
};

export default ChartSkeleton;
