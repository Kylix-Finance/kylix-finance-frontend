"use client";
import { useParams } from "next/navigation";
import ActionHeader from "./action-header/ActionHeader";
import styles from "./Market.module.scss";
import TotalSuppliedBorrowed from "./total-supplied-borrowed/TotalSuppliedBorrowed";
import TransactionForm from "./transaction-form/TransactionForm";
import Utilization from "./utilization/Utilization";
import {
  formatBigNumbers,
  formatUnit,
  useAssetPrice,
  useBalance,
  useGetLendingPools,
  usePool,
} from "@repo/onchain";
import { useAccountsStore } from "@repo/shared";

const Markets = () => {
  const { id: assetId } = useParams<{ id: string }>();
  const {
    data: poolData,
    isLoading: isPoolLoading,
    isFetched: isPoolFetched,
  } = usePool({
    assetId,
  });
  const { data: assetPrice, isLoading: isAssetPriceLoading } = useAssetPrice({
    assetId,
  });
  const { account } = useAccountsStore();
  const {
    data: balance,
    isLoading: isBalanceLoading,
    isFetched: isBalanceFetched,
  } = useBalance({
    assetId,
  });
  const {
    data: lendingPool,
    isLoading: isLendingPoolLoading,
    isFetched: isLendingPoolFetched,
  } = useGetLendingPools({
    account: account?.address,
    assetId,
  });
  const isLendingPoolPending =
    !lendingPool && (isLendingPoolFetched || isLendingPoolLoading);
  const isBalancePending = !balance && (isBalanceFetched || isBalanceLoading);
  const isPoolPending = !poolData && (isPoolFetched || isPoolLoading);
  const asset = lendingPool?.assets[0];

  const headerData = [
    {
      content: "Total Borrowed",
      value:
        asset &&
        formatBigNumbers(
          formatUnit(asset?.total_pool_borrow || 0, asset?.asset_decimals),
          4
        ),
    },
    {
      content: "Borrow APY",
      value: asset?.borrow_apy,
    },
    {
      content: "Total Supplied",
      value:
        asset &&
        formatBigNumbers(
          formatUnit(asset.total_pool_supply, asset.asset_decimals),
          4
        ),
    },
    {
      content: "Supply APY",
      value: asset?.supply_apy,
    },
    {
      content: "Oracle price",
      value: assetPrice && formatBigNumbers(assetPrice.formattedPrice, 4),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.action_header}>
        <ActionHeader
          data={headerData}
          symbol={asset?.asset_symbol}
          title={asset?.asset}
          isLoading={isLendingPoolPending || isAssetPriceLoading}
        />
      </div>
      <div className={styles.utilization}>
        <Utilization />
      </div>
      <div className={styles.total_supplied_borrowed}>
        <TotalSuppliedBorrowed />
      </div>
      <div className={styles.transaction_form}>
        <TransactionForm
          pool={lendingPool?.assets[0]}
          detail={poolData}
          price={assetPrice}
          balance={balance}
          isLoading={isBalancePending || isLendingPoolPending || isPoolPending}
          assetId={assetId}
        />
      </div>
    </div>
  );
};

export default Markets;
