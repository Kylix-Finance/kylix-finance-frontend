"use client";
import { useParams } from "next/navigation";
import ActionHeader from "./action-header/ActionHeader";
import styles from "./Markets.module.scss";
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
    assetId: +assetId,
  });
  const { data: assetPrice, isLoading: isAssetPriceLoading } = useAssetPrice({
    assetId: +assetId,
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
    assetId: +assetId,
  });
  const isLendingPoolPending =
    !lendingPool && (isLendingPoolFetched || isLendingPoolLoading);
  const isBalancePending = !balance && (isBalanceFetched || isBalanceLoading);
  const isPoolPending = !poolData && (isPoolFetched || isPoolLoading);
  const asset = lendingPool?.assets[0];

  return (
    <div className={styles.container}>
      <div className={styles.action_header}>
        <ActionHeader
          data={[
            {
              content: "Total Borrowed",
              value:
                asset &&
                formatBigNumbers(
                  formatUnit(
                    asset?.total_pool_borrow || 0,
                    asset?.asset_decimals
                  ),
                  4
                ),
              isLoading: isLendingPoolPending,
            },
            {
              content: "Borrow APY",
              value: asset?.borrow_apy,
              isLoading: isLendingPoolPending,
            },
            {
              content: "Total Supplied",
              value:
                asset &&
                formatBigNumbers(
                  formatUnit(asset.total_pool_supply, asset.asset_decimals),
                  4
                ),
              isLoading: isLendingPoolPending,
            },
            {
              content: "Supply APY",
              value: asset?.supply_apy,
              isLoading: isLendingPoolPending,
            },
            {
              content: "Oracle price",
              value:
                assetPrice &&
                formatBigNumbers(
                  formatUnit(assetPrice?.[0], assetPrice?.[1]),
                  4
                ),
              isLoading: isAssetPriceLoading,
            },
          ]}
          symbol={{
            content: asset?.asset_symbol,
            isLoading: isLendingPoolPending,
          }}
          title={{
            isLoading: isLendingPoolPending,
            content: asset?.asset,
          }}
          isLoading={isLendingPoolPending}
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
        />
      </div>
    </div>
  );
};

export default Markets;
