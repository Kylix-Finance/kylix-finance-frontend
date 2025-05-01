import Modal from "~/components/ui/modal/Modal";
import { VoidFunction } from "~/types";
import styles from "./SupplyModal.module.scss";
import InputNumber from "~/components/inputs/input-number";
import GasPump from "~/assets/icons/gas-pump.svg";
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
interface Props {
  assetId: number;
  onClose: VoidFunction;
}

const SupplyModal = ({ assetId, onClose }: Props) => {
  const { account } = useAccountsStore();
  const [value, setValue] = useState<string | undefined>(undefined);
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
    assetId: 21,
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
  const { mutate } = useSupply({ assetId: assetId?.toString() });
  const handleClick = () => {
    if (!value) return;
    mutate({
      balance: value,
      onConfirm: () => {},
    });
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
            onChange={(value) => setValue(value)}
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
                  value: "$0.45",
                  icon: GasPump,
                },
                content: <p>0.045KYL</p>,
              },
              {
                title: {
                  value: "Supply APY",
                },
                content: <p>12.5%</p>,
              },
            ],
            [
              {
                title: {
                  value: "Borrow APY",
                },
                content: <p>99%</p>,
              },
              {
                title: {
                  value: "Collateral Factor",
                },
                content: <p>75%</p>,
              },
            ],
            [
              {
                title: {
                  value: "Borrow APY",
                },
                content: <p>99%</p>,
              },
              {
                title: {
                  value: "Collateral Factor",
                },
                content: <p>75%</p>,
              },
            ],
          ]}
        />
      </div>
    </Modal>
  );
};

export default SupplyModal;
