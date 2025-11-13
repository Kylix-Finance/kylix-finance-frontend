import GasPump from "~/assets/icons/gas-pump.svg";
import LogoDot from "~/assets/svgs/logo-dot.svg";
import ArrowRight from "~/assets/icons/arrow-right.svg";
import { ExpandableCard } from "~/components/expandable-card";
import { motion, AnimatePresence } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import styles from "./Detail.module.scss";
import { LandingPool } from "@repo/onchain";
import { LinkButton } from "~/components/ui/link-button";
interface Props {
  enable: boolean;
  asset: LandingPool | undefined;
  discount: number | undefined;
}
const Detail = ({ enable, asset, discount }: Props) => {
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
                    value: "Discount",
                  },
                  content: (
                    <p className={styles.interest}>
                      <span>{discount}%</span>
                    </p>
                  ),
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
              ],
            ]}
          />
          <div className={styles.alert}>
            <p>
              These tokens come from liquidated positions where borrowers
              couldn't maintain their required collateral ratio. You can
              purchase them at a discount from their market value.
            </p>
            <LinkButton href="/">Learn more</LinkButton>
          </div>
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default Detail;
