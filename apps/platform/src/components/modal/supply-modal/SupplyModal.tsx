import Modal from "~/components/ui/modal/Modal";
import { VoidFunction } from "~/types";
import styles from "./SupplyModal.module.scss";
import InputNumber from "~/components/inputs/input-number";
import GasPump from "~/assets/icons/gas-pump.svg";
import LogoDot from "~/assets/svgs/logo-dot.svg";
import {
  formatUnit,
  useAssetPrice,
  useBalance,
  useGetLendingPools,
  useSupply,
  useSimulateSupply,
} from "@repo/onchain";
import { ENV } from "~/config/env";
import { useAccountsStore } from "@repo/shared";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { ExpandableCard } from "~/components/expandable-card";
interface Props {
  assetId: number;
  onClose: VoidFunction;
}

const SupplyModal = ({ assetId, onClose }: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const { account } = useAccountsStore();
  const { mutate: simulateSupplyMutate, data: gasFee } = useSimulateSupply({
    assetId: assetId.toString(),
  });

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
  const {
    data: kylixAssetPrice,
    isLoading: isKylixAssetPricePriceLoading,
    isFetched: isKylixAssetPriceFetched,
  } = useAssetPrice({
    assetId: ENV.BASE_ASSET,
    base_asset: ENV.BASE_ASSET,
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
    simulateSupplyMutate({ balance: newValue });
  };
  console.log("__________kylixAssetPrice", kylixAssetPrice);

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
                content: <p className={styles.collateralization}>Enabled</p>,
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
            [],
          ]}
        />
      </div>
    </Modal>
  );
};

export default SupplyModal;
