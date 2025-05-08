import Modal from "~/components/ui/modal/Modal";
import { TransactionStage, VoidFunction } from "~/types";
import Form from "./form/Form";
import {
  formatUnit,
  parseUnit,
  useAssetPrice,
  useBalance,
  useBorrow,
  useGetLendingPools,
  useGetUserLtv,
  usePool,
} from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";
import { useState } from "react";
import Loading from "./loading/Loading";
import styles from "./BorrowModal.module.scss";
// import Detail from "./detail/Detail";
// import ViewOnly from "./view-only/ViewOnly";

interface Props {
  assetId: number;
  onClose: VoidFunction;
  isViewOnly?: boolean;
  value?: string;
}

const BorrowModal = ({
  assetId,
  onClose,
  isViewOnly,
  value: viewOnlyValue,
}: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [stage, setStage] = useState<TransactionStage>("form");
  const { account } = useAccountsStore();

  const {
    mutate: borrowMutate,
    isPending: isBorrowPending,
    error,
    data: borrowData,
  } = useBorrow({
    assetId: assetId?.toString(),
  });

  const {
    data: pool,
    isFetched: isPoolFetched,
    isLoading: isPoolLoading,
  } = useGetLendingPools({ assetId, account: account?.address });

  const { data: otherPoolData } = usePool({ assetId });

  const decimals = pool?.assets[0].asset_decimals;

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

  const { data: ltv } = useGetUserLtv();
  const allowance = formatUnit(ltv?.allowance || "0", 6);

  const allowanceAmount =
    Number(allowance || 0) / Number(assetPrice?.formattedPrice || 1);

  const poolBalance = Number(
    formatUnit(BigInt(otherPoolData?.reserveBalance || 0), decimals) || 0
  );

  const max = Math.min(poolBalance, allowanceAmount).toFixed(4);

  // const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
  //   { poolId: assetId }
  // );

  // const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];

  const isLoading =
    (!pool && isPoolFetched && isPoolLoading) ||
    (!balance && isBalanceFetched && isBalanceLoading) ||
    (!assetPrice && isAssetPriceLoading && !isAssetPriceFetched);
  const finalValue = isViewOnly ? viewOnlyValue : value;

  const disabled = !balance?.realBalance || !finalValue || isLoading;

  const asset = pool?.assets[0];

  const handleClick = () => {
    if (!finalValue || !asset) return;
    borrowMutate(
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
      title={stage === "form" ? "You’re borrowing" : undefined}
    >
      <div className={styles.container}>
        {stage === "form" ? (
          <div className={styles.content}>
            {isViewOnly ? (
              // <ViewOnly
              //   assetDecimal={asset?.asset_decimals}
              //   assetPrice={assetPrice?.[0]}
              //   assetSymbol={asset?.asset_symbol}
              //   disabled={disabled}
              //   isLoading={isLoading}
              //   onClick={handleClick}
              //   value={finalValue}
              // />
              <></>
            ) : (
              <Form
                isLoading={isLoading}
                value={value}
                onInputChange={setValue}
                asset={asset}
                formattedBalance={balance?.formattedBalance}
                onButtonClick={handleClick}
                isButtonLoading={isBorrowPending}
                assetPrice={assetPrice?.formattedPrice}
                disabled={disabled}
                realBalance={balance?.realBalance}
                maxValue={max}
              />
            )}
            {/* <Detail asset={asset} enable={!!finalValue} /> */}
          </div>
        ) : (
          <Loading
            stage={stage}
            value={value}
            symbol={asset?.asset_symbol}
            error={error}
            data={borrowData}
          />
        )}
      </div>
    </Modal>
  );
};

export default BorrowModal;
