import Modal from "~/components/ui/modal/Modal";
import { TransactionStage, VoidFunction } from "~/types";
import Form from "./form/Form";
import {
  formatUnit,
  parseUnit,
  useAssetPrice,
  useBalance,
  useGetAssetWiseBorrowsCollaterals,
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
import { TOTAL_BLOCKS_IN_YEAR } from "~/constants";

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

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: assetId }
  );

  const {
    data: assetPrice,
    isLoading: isAssetPriceLoading,
    isFetched: isAssetPriceFetched,
  } = useAssetPrice({
    assetId,
  });

  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];
  const borrowed = formatUnit(
    borrowAssetData?.borrowed || "0",
    pool?.assets[0].asset_decimals
  );

  const { data: otherPoolData } = usePool({ assetId });
  otherPoolData?.borrowRate;
  const {
    data: balance,
    isFetched: isBalanceFetched,
    isLoading: isBalanceLoading,
  } = useBalance({
    assetId: assetId.toString(),
    accountAddress: account?.address,
  });

  const isLoading =
    (!pool && isPoolFetched && isPoolLoading) ||
    (!balance && isBalanceFetched && isBalanceLoading) ||
    (!assetPrice && isAssetPriceLoading && !isAssetPriceFetched);
  const finalValue = isViewOnly ? viewOnlyValue : value;

  const disabled = !balance?.formattedBalance || !finalValue || isLoading;

  const asset = pool?.assets[0];
  const handleClick = () => {
    if (!finalValue || !asset || !pool?.assets[0].borrow_apy) return;

    if (
      // if the amount of interest within 10 blocks is greater than the (borrowed - amount) then repay all
      (Number(pool?.assets[0].borrow_apy) * 10) / TOTAL_BLOCKS_IN_YEAR >
      Number(borrowed) - Number(finalValue)
    ) {
      return repayAllMutate(
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
    }

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
                buttonText="Repay"
              />
            ) : (
              <Form
                isLoading={isLoading}
                value={value}
                onInputChange={setValue}
                asset={asset}
                formattedBalance={balance?.formattedBalance}
                onButtonClick={handleClick}
                isButtonLoading={isRepayPending || isRepayAllPending}
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
            error={error || repayAllError}
            data={repayData || repayAllData}
          />
        )}
      </div>
    </Modal>
  );
};

export default RepayModal;
