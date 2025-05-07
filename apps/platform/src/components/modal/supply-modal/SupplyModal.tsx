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
import { useEffect, useState } from "react";
import Loading from "./loading/Loading";
import styles from "./SupplyModal.module.scss";

interface BaseProps {
  assetId: number;
  onClose: VoidFunction;
  isViewOnly?: boolean;
}

interface ViewOnlyProps extends BaseProps {
  isViewOnly: true;
  value: string;
}

interface EditableProps extends BaseProps {
  isViewOnly?: false;
}

type Props = ViewOnlyProps | EditableProps;
const SupplyModal = ({ assetId, onClose }: Props) => {
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
  const disabled = !balance?.realBalance || !value || isLoading;

  const asset = pool?.assets[0];
  const handleClick = () => {
    if (!value || !asset) return;
    supplyMutate(
      {
        balance: parseUnit(value, asset.asset_decimals),
        options: {
          onBroadcast: () => setStage("broadcast"),
          onFinalized: () => setStage("finalized"),
          onInBlock: () => setStage("in_block"),
          onReady: () => setStage("ready"),
        },
      },
      {
        onError: () => {
          setStage("error");
        },
      }
    );
  };

  const onInputValueChange = async (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal
      isOpen={!!assetId}
      onClose={onClose}
      title={stage === "form" ? "You’re supplying" : undefined}
    >
      <div className={styles.container}>
        {stage === "form" ? (
          <Form
            isLoading={isLoading}
            value={value}
            onInputChange={onInputValueChange}
            asset={asset}
            formattedBalance={balance?.formattedBalance}
            onButtonClick={handleClick}
            isButtonLoading={isSupplyPending}
            assetPrice={assetPrice?.[0].toString()}
            assetDecimal={assetPrice?.[1]}
            disabled={disabled}
            realBalance={balance?.realBalance}
          />
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
