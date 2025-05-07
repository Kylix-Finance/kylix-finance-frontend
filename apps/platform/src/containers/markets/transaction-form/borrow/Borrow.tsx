"use client";
import InputNumber from "~/components/inputs/input-number";
import styles from "./Borrow.module.scss";
import { useState } from "react";
import { PrivateButton } from "~/components/private-button";
import { Row } from "~/components/expandable-card/row";
import { Divider } from "~/components/divider";
import { TransactionFormProps } from "~/types";
import { formatUnit } from "@repo/onchain";

const Borrow = ({ pool, detail, price, balance }: TransactionFormProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          title="You're borrowing"
          value={value}
          onChange={(value) => setValue(value)}
          placeholder="0"
          price={{
            value: price.data && formatUnit(price.data?.[0], price.data?.[1]),
            isLoading: price.isLoading,
          }}
          decimals={pool.data?.asset_decimals}
          showEstimate
          availableAmount={{
            value: formatUnit(
              balance?.realBalance || 0,
              pool.data?.asset_decimals
            ),
            isLoading: pool.isLoading || balance.isLoading,
          }}
        />
        <PrivateButton fullWidth>Borrow</PrivateButton>
      </div>
      <div className={styles.info}>
        <Row
          title={{ value: "Borrowable Amount", className: styles.row_title }}
          content={`0 ${pool.data?.asset_symbol}`}
        />
        <Divider />
        <Row
          title={{
            value: `Borrow balance (${pool.data?.asset_symbol})`,
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
