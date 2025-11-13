"use client";
import InputNumber from "~/components/inputs/input-number";
import styles from "./Borrow.module.scss";
import { useState } from "react";
import { PrivateButton } from "~/components/private-button";
import { Row } from "~/components/expandable-card/row";
import { Divider } from "~/components/divider";
import { TransactionFormProps } from "~/types";
import { formatUnit, useGetUserLtv, usePool } from "@repo/onchain";
import BorrowModal from "~/components/modal/transactions/borrow-modal/BorrowModal";

const Borrow = ({
  pool,
  price,
  balance,
  isLoading,
  assetId,
}: TransactionFormProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isReviewed, setIsReviewed] = useState(false);

  const { data: otherPoolData } = usePool({ assetId });

  const { data: ltv } = useGetUserLtv();
  const allowance = formatUnit(ltv?.allowance || "0", 6);

  const allowanceAmount =
    Number(allowance) / Number(price?.formattedPrice || 1);

  const poolBalance = Number(
    formatUnit(BigInt(otherPoolData?.reserveBalance || 0), price?.decimal) || 0
  );

  const max = Math.min(poolBalance, allowanceAmount).toFixed(4);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          title="You're borrowing"
          value={value}
          onChange={(value) => setValue(value)}
          placeholder="0"
          price={price?.formattedPrice}
          decimals={pool?.asset_decimals}
          showEstimate
          availableAmount={formatUnit(
            balance?.realBalance || 0,
            pool?.asset_decimals
          )}
          isLoading={isLoading}
          max={max}
        />
        <PrivateButton
          fullWidth
          onClick={() => setIsReviewed(true)}
          disabled={!value}
        >
          Borrow
        </PrivateButton>
      </div>
      {pool?.asset_id && isReviewed && (
        <BorrowModal
          assetId={pool.asset_id}
          onClose={() => setIsReviewed(false)}
          isViewOnly
          value={value}
        />
      )}
      <div className={styles.info}>
        <Row
          title={{ value: "Available to Borrow", className: styles.row_title }}
          content={`0 ${pool?.asset_symbol}`}
        />
        <Divider />
        <Row
          title={{
            value: `Borrow balance (${pool?.asset_symbol})`,
            className: styles.row_title,
          }}
          content="0"
        />
        <Row
          title={{ value: "Borrow limit used", className: styles.row_title }}
          content="0%"
        />
        <Row
          title={{ value: "Daily earnings", className: styles.row_title }}
          content="$0"
        />
      </div>
    </div>
  );
};

export default Borrow;
