import GasPump from "~/assets/icons/gas-pump.svg";
import LogoDot from "~/assets/svgs/logo-dot.svg";
import Info from "~/assets/icons/info.svg";
import ArrowRight from "~/assets/icons/arrow-right.svg";
import { ExpandableCard } from "~/components/expandable-card";
import { Status } from "~/components/ui/status";
import { motion, AnimatePresence } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import styles from "./Detail.module.scss";
import { LandingPool } from "@repo/onchain";
interface Props {
  enable: boolean;
  asset: LandingPool | undefined;
}
const Detail = ({ enable, asset }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {enable && (
        <motion.span {...framerProps} variants={fadeInOutAnimation}>
          <ExpandableCard
            data={[
              [
                {
                  title: {
                    value: `$0.25`,
                    icon: GasPump,
                  },
                  content: (
                    <p className={styles.gas_container}>
                      <span className={styles.logo}>
                        <LogoDot />
                      </span>
                      <span className={styles.price}>0.025 KYL</span>
                    </p>
                  ),
                },
                {
                  title: {
                    value: "Borrow APY",
                  },
                  content: <p>{asset?.borrow_apy}</p>,
                },
                {
                  title: {
                    value: "Interest",
                  },
                  content: (
                    <p className={styles.interest}>
                      <span>+12 KYL</span>
                      <span className={styles.interest_usdt}>($24.55)</span>
                    </p>
                  ),
                },
              ],
              [
                {
                  title: {
                    value: "LTV Status",
                  },
                  content: (
                    <div className={styles.ltv}>
                      <Status
                        variant="warning"
                        content="64.9%"
                        icon={Info}
                        size="small"
                        rounded
                      />
                      <ArrowRight
                        width={24}
                        height={24}
                        className={styles.arrow}
                      />
                      <Status
                        size="small"
                        content="44.9%"
                        icon={Info}
                        rounded
                      />
                    </div>
                  ),
                },
                {
                  title: {
                    value: "Borrow limit",
                  },
                  content: (
                    <div className={styles.ltv}>
                      <p>$0.01</p>
                      <ArrowRight
                        width={24}
                        height={24}
                        className={styles.arrow}
                      />
                      <p>$6,20</p>
                    </div>
                  ),
                },
              ],
              [
                {
                  title: {
                    value: "Daily earning",
                  },
                  content: (
                    <div className={styles.ltv}>
                      <p>$0.01</p>
                      <ArrowRight
                        width={24}
                        height={24}
                        className={styles.arrow}
                      />
                      <p>$6,20</p>
                    </div>
                  ),
                },
                {
                  title: {
                    value: `Borrow balance (${asset?.asset_symbol})`,
                  },
                  content: (
                    <div className={styles.ltv}>
                      <p>0</p>
                      <ArrowRight
                        width={24}
                        height={24}
                        className={styles.arrow}
                      />
                      <p>8,276.21</p>
                    </div>
                  ),
                },
              ],
            ]}
          />
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default Detail;
