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
  const { data: poolData } = usePool({ assetId: +assetId });
  const { data: assetPrice } = useAssetPrice({ assetId: +assetId });
  const { account } = useAccountsStore();
  const { data: balance } = useBalance({ assetId });
  const { data: lendingPool, isLoading: isLendingPoolLoading } =
    useGetLendingPools({
      account: account?.address,
    });
  const asset = lendingPool?.assets[0];
  return (
    <div className={styles.container}>
      <div className={styles.action_header}>
        <ActionHeader
          data={[
            {
              title: "Total Borrowed",
              value:
                asset &&
                formatUnit(
                  asset?.total_pool_borrow || 0,
                  asset?.asset_decimals
                ),
            },
            {
              title: "Borrow APY",
              value: asset?.borrow_apy,
            },
            {
              title: "Total Supplied",
              value:
                asset &&
                formatUnit(asset.total_pool_supply, asset.asset_decimals),
            },
            {
              title: "Supply APY",
              value: asset?.supply_apy,
            },
            {
              title: "Oracle price",
              value:
                assetPrice &&
                formatBigNumbers(
                  formatUnit(assetPrice?.[0], assetPrice?.[1]),
                  4
                ),
            },
          ]}
          symbol={asset?.asset_symbol || ""}
          title={asset?.asset || ""}
          isLoading={isLendingPoolLoading}
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
          data={lendingPool?.assets[0]}
          detail={poolData}
          price={assetPrice}
          balance={balance}
        />
      </div>
    </div>
  );
};

export default Markets;
