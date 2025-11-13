import styles from "./Row.module.scss";
import { IconButton } from "~/components/ui/icon-button";
import { Tooltip } from "~/components/ui/tooltip";
import { ExpandableCardItem } from "~/types";
import Info from "~/assets/icons/info.svg";
import clsx from "clsx";
import Skeleton from "~/components/skeleton";
const Row = ({
  title,
  content,
  isContentLoading: isLoading,
}: ExpandableCardItem) => {
  return (
    <div className={styles.container}>
      <Skeleton isLoading={title.isLoading} width={80} height={20}>
        <div className={styles.left}>
          {title.icon && (
            <IconButton
              icon={title.icon}
              mode="none"
              noInteractionStyles
              noPadding
              className={styles.icon}
            />
          )}
          <div className={clsx(styles.title_container, title.className)}>
            <p>{title.value}</p>
            {title.tooltipContent && (
              <Tooltip content={title.tooltipContent}>
                <IconButton
                  icon={Info}
                  noPadding
                  mode="none"
                  noInteractionStyles
                />
              </Tooltip>
            )}
          </div>
        </div>
      </Skeleton>
      <Skeleton isLoading={isLoading} width={80} height={20} rounded>
        {content}
      </Skeleton>
    </div>
  );
};

export default Row;
