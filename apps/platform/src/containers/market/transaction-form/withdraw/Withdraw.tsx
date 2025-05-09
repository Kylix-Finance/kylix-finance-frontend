"use client";
import InputNumber from "~/components/inputs/input-number";
import styles from "./Withdraw.module.scss";
import { useState } from "react";
import { PrivateButton } from "~/components/private-button";
import { Row } from "~/components/expandable-card/row";
import { Divider } from "~/components/divider";
import { TransactionFormProps } from "~/types";
import { formatUnit } from "@repo/onchain";

const Withdraw = ({
  pool,
  detail,
  price,
  balance,
  isLoading,
}: TransactionFormProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          title="You're withdrawing"
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
        />
        <PrivateButton fullWidth>Withdraw</PrivateButton>
      </div>
      <div className={styles.info}>
        <Row
          title={{ value: "Withdrawable Amount", className: styles.row_title }}
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

export default Withdraw;
