import Modal from "~/components/ui/modal/Modal";
import { TransactionStage, VoidFunction } from "~/types";
import Form from "./form/Form";
import {
  parseUnit,
  useAssetPrice,
  useBalance,
  useGetLendingPools,
  useSupply,
} from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import { useState } from "react";
import Loading from "./loading/Loading";
import styles from "./SupplyModal.module.scss";
import Detail from "./detail/Detail";
import ViewOnly from "../components/view-only/ViewOnly";

interface Props {
  assetId: number;
  onClose: VoidFunction;
  isViewOnly?: boolean;
  value?: string;
}

const SupplyModal = ({
  assetId,
  onClose,
  isViewOnly,
  value: viewOnlyValue,
}: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [stage, setStage] = useState<TransactionStage>("form");
  const { account } = useAccountsStore();

  const {
    mutate: supplyMutate,
    isPending: isSupplyPending,
    error,
    data: supplyData,
  } = useSupply({
    assetId: assetId?.toString(),
  });

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
  });
  const isLoading =
    (!pool && isPoolFetched && isPoolLoading) ||
    (!balance && isBalanceFetched && isBalanceLoading) ||
    (!assetPrice && isAssetPriceLoading && !isAssetPriceFetched);
  const finalValue = isViewOnly ? viewOnlyValue : value;

  const disabled = !balance?.realBalance || !finalValue || isLoading;

  const asset = pool?.assets[0];
  const handleClick = () => {
    if (!finalValue || !asset) return;
    supplyMutate(
      {
        balance: parseUnit(finalValue, asset.asset_decimals),
        options: {
          onBroadcast: () => setStage("broadcast"),
          onFinalized: () => setStage("finalized"),
          onInBlock: () => setStage("in_block"),
          onReady: () => setStage("ready"),
          onSignerRequestSend: () => setStage("wallet"),
        },
      },
      {
        onError: () => {
          setStage("error");
        },
      }
    );
  };

  return (
    <Modal
      isOpen={!!assetId}
      onClose={onClose}
      title={stage === "form" ? "You’re supplying" : undefined}
    >
      <div className={styles.container}>
        {stage === "form" ? (
          <div className={styles.content}>
            {isViewOnly ? (
              <ViewOnly
                assetPrice={assetPrice?.formattedPrice}
                assetSymbol={asset?.asset_symbol}
                disabled={disabled}
                isLoading={isLoading}
                onClick={handleClick}
                value={finalValue}
              />
            ) : (
              <Form
                isLoading={isLoading}
                value={value}
                onInputChange={setValue}
                asset={asset}
                formattedBalance={balance?.formattedBalance}
                onButtonClick={handleClick}
                isButtonLoading={isSupplyPending}
                assetPrice={assetPrice?.formattedPrice}
                disabled={disabled}
                realBalance={balance?.realBalance}
              />
            )}
            <Detail asset={asset} enable={!!finalValue} />
          </div>
        ) : (
          <Loading
            stage={stage}
            value={value}
            symbol={asset?.asset_symbol}
            error={error}
            data={supplyData}
          />
        )}
      </div>
    </Modal>
  );
};

export default SupplyModal;
