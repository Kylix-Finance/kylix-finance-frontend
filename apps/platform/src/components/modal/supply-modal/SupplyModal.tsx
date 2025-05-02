import Modal from "~/components/ui/modal/Modal";
import { VoidFunction } from "~/types";
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

interface Props {
  assetId: number;
  onClose: VoidFunction;
}

const SupplyModal = ({ assetId, onClose }: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const { account } = useAccountsStore();

  const { mutate: supplyMutate, isPending: isSupplyPending } = useSupply({
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

  const asset = pool?.assets[0];
  const handleClick = () => {
    if (!value || !asset) return;
    supplyMutate({
      balance: parseUnit(value, asset.asset_decimals),
      options: {},
    });
  };

  const onInputValueChange = async (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Modal isOpen={!!assetId} onClose={onClose} title="You’re supplying">
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
      />
    </Modal>
  );
};

export default SupplyModal;
