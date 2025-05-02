import Modal from "~/components/ui/modal/Modal";
import { VoidFunction } from "~/types";
import styles from "./SupplyModal.module.scss";
import InputNumber from "~/components/inputs/input-number";
import GasPump from "~/assets/icons/gas-pump.svg";
import LogoDot from "~/assets/svgs/logo-dot.svg";
import Info from "~/assets/icons/info.svg";
import ArrowRight from "~/assets/icons/arrow-right.svg";

import {
  formatUnit,
  useAssetPrice,
  useBalance,
  useGetLendingPools,
  useSupply,
} from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { ExpandableCard } from "~/components/expandable-card";
import { Status } from "~/components/ui/status";
import { motion, AnimatePresence } from "motion/react";
import { fadeInOutAnimation, framerProps } from "~/animations/variants";
interface Props {
  assetId: number;
  onClose: VoidFunction;
}

const SupplyModal = ({ assetId, onClose }: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const { account } = useAccountsStore();

  const { mutate: supplyMutate } = useSupply({ assetId: assetId?.toString() });

  const {
    data: pool,
    isFetched: isPoolFetched,
    isLoading: isPoolLoading,
  } = useGetLendingPools({ assetId, account: account?.address });
  const {
    data: balance,
    isFetched: isBalanceFetched,
    isLoading: isBalanceLoading,
  } = useBalance({
    assetId: assetId.toString(),
    accountAddress: account?.address,
  });
  const {
    data: assetPrice,
    isLoading: isAssetPriceLoading,
    isFetched: isAssetPriceFetched,
  } = useAssetPrice({
    assetId,
    base_asset: null,
  });
  useEffect(() => {
    if (!assetId || !account) {
      onClose();
    }
  }, [account, assetId, onClose]);
  const isLoading =
    (!pool && isPoolFetched && isPoolLoading) ||
    (!balance && isBalanceFetched && isBalanceLoading) ||
    (!assetPrice && isAssetPriceLoading && !isAssetPriceFetched);

  const asset = pool?.assets[0];
  const handleClick = () => {
    if (!value) return;
    supplyMutate({
      balance: value,
      onConfirm: () => {},
    });
  };

  const onInputValueChange = async (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal isOpen={!!assetId} onClose={onClose} title="You’re supplying">
      <div className={styles.container}>
        <div className={styles.content}>
          <InputNumber
            label="Supply"
            placeholder="0"
            onMaxClick={() => {}}
            showMaxButton
            selectedToken={asset?.asset_symbol}
            value={value}
            availableAmount={balance?.formattedBalance}
            onChange={onInputValueChange}
            decimals={asset?.asset_decimals}
            price={
              assetPrice && formatUnit(assetPrice[0].toString(), assetPrice[1])
            }
          />
          <Button
            disabled={!value || isLoading}
            size="large"
            fullWidth
            onClick={handleClick}
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
    </Modal>
  );
};

export default SupplyModal;
