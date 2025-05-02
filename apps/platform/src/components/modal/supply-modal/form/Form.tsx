import InputNumber from "~/components/inputs/input-number";
import GasPump from "~/assets/icons/gas-pump.svg";
import LogoDot from "~/assets/svgs/logo-dot.svg";
import Info from "~/assets/icons/info.svg";
import ArrowRight from "~/assets/icons/arrow-right.svg";
import { Button } from "~/components/ui/button";
import { ExpandableCard } from "~/components/expandable-card";
import { Status } from "~/components/ui/status";
import { motion, AnimatePresence } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
import styles from "./Form.module.scss";
import { formatUnit, LandingPool } from "@repo/onchain";
interface Props {
  value: string | undefined;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  asset: LandingPool | undefined;
  formattedBalance: string | undefined;
  onButtonClick: () => void;
  isButtonLoading: boolean;
  assetPrice: string | undefined;
  assetDecimal: number | undefined;
}

const Form = ({
  value,
  isLoading,
  onInputChange,
  asset,
  formattedBalance,
  onButtonClick,
  isButtonLoading,
  assetPrice,
  assetDecimal,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          label="Supply"
          placeholder="0"
          onMaxClick={() => {}}
          showMaxButton
          selectedToken={asset?.asset_symbol}
          value={value}
          availableAmount={formattedBalance}
          onChange={onInputChange}
          decimals={asset?.asset_decimals}
          price={assetPrice && formatUnit(assetPrice, assetDecimal)}
        />
        <Button
          disabled={!value || isLoading}
          size="large"
          fullWidth
          onClick={onButtonClick}
          isLoading={isButtonLoading}
        >
          {value ? "Supply" : "Enter an amount"}
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {value && (
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
                      value: "Supply APY",
                    },
                    content: <p>{asset?.supply_apy}</p>,
                  },
                  {
                    title: {
                      value: "Collateralization",
                    },
                    content: (
                      <p className={styles.collateralization}>Enabled</p>
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
                      value: `Supply balance (${asset?.asset_symbol})`,
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
    </div>
  );
};

export default Form;
