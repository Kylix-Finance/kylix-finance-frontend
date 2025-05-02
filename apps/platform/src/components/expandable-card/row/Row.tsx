import styles from "./Row.module.scss";
import { IconButton } from "~/components/ui/icon-button";
import { Tooltip } from "~/components/ui/tooltip";
import { ExpandableCardItem } from "~/types";
import Info from "~/assets/icons/info.svg";
const Row = ({ title, content }: ExpandableCardItem) => {
  return (
    <div className={styles.container}>
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
        <div className={styles.title_container}>
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
      {content}
    </div>
  );
};

export default Row;
