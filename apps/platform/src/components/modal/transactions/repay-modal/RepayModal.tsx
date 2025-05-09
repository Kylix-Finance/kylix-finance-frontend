import Modal from "~/components/ui/modal/Modal";
import { TransactionStage, VoidFunction } from "~/types";
import Form from "./form/Form";
import {
  parseUnit,
  useAssetPrice,
  useBalance,
  useGetLendingPools,
  usePool,
  useRepay,
  useRepayAll,
} from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import { useState } from "react";
import Loading from "./loading/Loading";
import styles from "./RepayModal.module.scss";
import Detail from "./detail/Detail";
import ViewOnly from "../components/view-only/ViewOnly";

interface Props {
  assetId: number;
  onClose: VoidFunction;
  isViewOnly?: boolean;
  value?: string;
}

const RepayModal = ({
  assetId,
  onClose,
  isViewOnly,
  value: viewOnlyValue,
}: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [stage, setStage] = useState<TransactionStage>("form");
  const { account } = useAccountsStore();

  const {
    mutate: repayMutate,
    isPending: isRepayPending,
    error,
    data: repayData,
  } = useRepay({
    assetId: assetId?.toString(),
  });
  const {
    mutate: repayAllMutate,
    isPending: isRepayAllPending,
    error: repayAllError,
    data: repayAllData,
  } = useRepayAll({
    assetId: assetId?.toString(),
  });

  const {
    data: pool,
    isFetched: isPoolFetched,
    isLoading: isPoolLoading,
  } = useGetLendingPools({ assetId, account: account?.address });

  const { data: otherPoolData } = usePool({ assetId });

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

  const disabled = !balance?.formattedBalance || !finalValue || isLoading;

  const asset = pool?.assets[0];
  const handleClick = () => {
    if (!finalValue || !asset) return;
    repayMutate(
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
  const handleMaxClick = () => {
    if (!finalValue || !asset) return;
    repayAllMutate(
      {
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
      title={stage === "form" ? "You’re repaying" : undefined}
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
                isButtonLoading={isRepayPending}
                assetPrice={assetPrice?.formattedPrice}
                disabled={disabled}
                realBalance={balance?.realBalance}
                maxValue={balance?.formattedBalance}
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
            data={repayData}
          />
        )}
      </div>
    </Modal>
  );
};

export default RepayModal;
