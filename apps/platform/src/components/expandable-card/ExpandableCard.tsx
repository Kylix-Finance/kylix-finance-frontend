import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExpandableCardItem } from "~/types";
import styles from "./ExpandableCard.module.scss";
import ChevronDown from "~/assets/icons/chevron-down.svg";
import Row from "./row/Row";
import {
  collapsableFadeInOutVariants,
  framerProps,
} from "~/animations/variants";

interface Props {
  data: ExpandableCardItem[][];
}

const ExpandableCard = ({ data }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const firstSection = data.length > 0 ? data[0] : [];
  const collapsibleSections = data.slice(1);

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className={styles.header_content}>
          <p>Show {isExpanded ? "less" : "more"}</p>
          <ChevronDown
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className={styles.content}>
        {firstSection.length > 0 && (
          <div className={styles.section}>
            {firstSection.map((row, rowIndex) => (
              <Row {...row} key={rowIndex} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && collapsibleSections.length > 0 && (
          <motion.div
            {...framerProps}
            variants={collapsableFadeInOutVariants}
            transition={{ duration: 0.2, ease: "linear" }}
            className={styles.content}
          >
            {collapsibleSections.map((section, index) => (
              <Fragment key={index}>
                {index <= collapsibleSections.length - 1 && (
                  <div className={styles.divider} />
                )}{" "}
                <div className={styles.section}>
                  {section.map((row, rowIndex) => (
                    <Row {...row} key={rowIndex} />
                  ))}
                </div>
              </Fragment>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCard;
