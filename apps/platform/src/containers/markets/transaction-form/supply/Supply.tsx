"use client";
import InputNumber from "~/components/inputs/input-number";
import styles from "./Supply.module.scss";
import { useState } from "react";
import { PrivateButton } from "~/components/private-button";
import { Row } from "~/components/expandable-card/row";
import { Divider } from "~/components/divider";
import { TransactionFormProps } from "~/types";
import { formatUnit } from "@repo/onchain";
import { Switch } from "~/components/ui/switch";
const Supply = ({ data, detail, price, balance }: TransactionFormProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          title="You’re supplying"
          value={value}
          onChange={(value) => setValue(value)}
          placeholder="0"
          price={price && formatUnit(price?.[0], price?.[1])}
          decimals={data?.asset_decimals}
          showEstimate
          availableAmount={formatUnit(
            balance?.realBalance || 0,
            data?.asset_decimals
          )}
        />
        <PrivateButton fullWidth>Supply</PrivateButton>
      </div>
      <div className={styles.info}>
        <Row
          title={{ value: "Borrowable Amount", className: styles.row_title }}
          content={`0 ${data?.asset_symbol}`}
        />
        <Row
          title={{ value: "Collateral", className: styles.row_title }}
          content={<Switch name="collateral" checked={true} />}
        />
        <Divider />
        <Row
          title={{
            value: `Borrow balance (${data?.asset_symbol})`,
            className: styles.row_title,
          }}
          content="0"
        />
        <Row
          title={{ value: "Borrow limit used", className: styles.row_title }}
          content="$0"
        />
        <Row
          title={{ value: "Daily earnings", className: styles.row_title }}
          content="$0"
        />
      </div>
    </div>
  );
};

export default Supply;
