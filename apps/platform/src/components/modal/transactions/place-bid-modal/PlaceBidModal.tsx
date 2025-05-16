import Modal from "~/components/ui/modal/Modal";
import { TransactionStage, VoidFunction } from "~/types";
import Form from "./form/Form";
import {
  parseUnit,
  useBalance,
  useGetLendingPools,
  usePlaceBid,
} from "@repo/onchain";
import { BASE_ASSET_ID, useAccountsStore } from "@repo/shared";
import { useState } from "react";
import Loading from "./loading/Loading";
import styles from "./PlaceBidModal.module.scss";
import Detail from "./detail/Detail";
import ViewOnly from "../components/view-only/ViewOnly";

interface Props {
  assetId: string;
  onClose: VoidFunction;
  isViewOnly?: boolean;
  value: string | undefined;
  discount: number | undefined;
}

const PlaceBidModal = ({
  assetId,
  onClose,
  isViewOnly,
  value: viewOnlyValue,
  discount,
}: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [stage, setStage] = useState<TransactionStage>("form");
  const { account } = useAccountsStore();

  const {
    mutate: bidMutate,
    isPending: isBidPending,
    error,
    data: bidData,
  } = usePlaceBid({
    assetId,
  });

  const {
    data: pool,
    isFetched: isPoolFetched,
    isLoading: isPoolLoading,
  } = useGetLendingPools({ assetId: BASE_ASSET_ID, account: account?.address });
  const {
    data: balance,
    isFetched: isBalanceFetched,
    isLoading: isBalanceLoading,
  } = useBalance({
    assetId: BASE_ASSET_ID.toString(),
    accountAddress: account?.address,
  });

  const isLoading =
    (!pool && isPoolFetched && isPoolLoading) ||
    (!balance && isBalanceFetched && isBalanceLoading);
  const finalValue = isViewOnly ? viewOnlyValue : value;

  const disabled = !balance?.realBalance || !finalValue || isLoading;

  const asset = pool?.assets[0];

  const handleClick = () => {
    if (!finalValue || !asset || !discount) return;
    bidMutate(
      {
        balance: parseUnit(finalValue, asset.asset_decimals),
        discount,
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
      title={stage === "form" ? "You're placing a bid" : undefined}
    >
      <div className={styles.container}>
        {stage === "form" ? (
          <div className={styles.content}>
            {isViewOnly ? (
              <ViewOnly
                assetPrice="1"
                assetSymbol={asset?.asset_symbol}
                disabled={disabled}
                isLoading={isLoading}
                onClick={handleClick}
                value={finalValue}
                buttonText="Place Bid"
              />
            ) : (
              <Form
                isLoading={isLoading}
                value={value}
                onInputChange={setValue}
                asset={asset}
                formattedBalance={balance?.formattedBalance}
                onButtonClick={handleClick}
                isButtonLoading={isBidPending}
                assetPrice="1"
                disabled={disabled}
                realBalance={balance?.realBalance}
              />
            )}
            <Detail asset={asset} enable={!!finalValue} discount={discount} />
          </div>
        ) : (
          <Loading
            stage={stage}
            value={finalValue}
            symbol={asset?.asset_symbol}
            error={error}
            data={bidData}
          />
        )}
      </div>
    </Modal>
  );
};

export default PlaceBidModal;
