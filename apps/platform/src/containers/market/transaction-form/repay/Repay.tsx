"use client";
import InputNumber from "~/components/inputs/input-number";
import styles from "./Repay.module.scss";
import { useState } from "react";
import { PrivateButton } from "~/components/private-button";
import { Row } from "~/components/expandable-card/row";
import { Divider } from "~/components/divider";
import { TransactionFormProps } from "~/types";
import { formatUnit, useGetAssetWiseBorrowsCollaterals } from "@repo/onchain";
import RepayModal from "~/components/modal/transactions/repay-modal/RepayModal";
const Repay = ({
  pool,
  detail,
  price,
  balance,
  isLoading,
  assetId,
}: TransactionFormProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isReviewed, setIsReviewed] = useState(false);

  const { data: assetWiseBorrowCollateral } = useGetAssetWiseBorrowsCollaterals(
    { poolId: assetId }
  );

  const borrowAssetData = assetWiseBorrowCollateral?.borrowedAssets[0];
  const borrowed = formatUnit(
    borrowAssetData?.borrowed || "0",
    pool?.asset_decimals
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          title="You’re Repaying"
          value={value}
          onChange={setValue}
          placeholder="0"
          price={price?.formattedPrice}
          decimals={pool?.asset_decimals}
          showEstimate
          availableAmount={formatUnit(
            balance?.realBalance || 0,
            pool?.asset_decimals
          )}
          isLoading={isLoading}
          max={borrowed}
        />
        <PrivateButton
          fullWidth
          onClick={() => setIsReviewed(true)}
          disabled={!value}
        >
          Review
        </PrivateButton>
      </div>
      <div className={styles.info}>
        <Row
          title={{ value: "Repayable Amount", className: styles.row_title }}
          content={`0 ${pool?.asset_symbol}`}
          isContentLoading={isLoading}
        />
        <Divider />
        <Row
          title={{
            value: `Borrow balance (${pool?.asset_symbol})`,
            className: styles.row_title,
            isLoading,
          }}
          content="0"
        />
        <Row
          title={{ value: "Daily earnings", className: styles.row_title }}
          content="$0"
        />
      </div>
      {pool?.asset_id && isReviewed && (
        <RepayModal
          assetId={pool.asset_id}
          onClose={() => setIsReviewed(false)}
          isViewOnly
          value={value}
        />
      )}
    </div>
  );
};

export default Repay;
