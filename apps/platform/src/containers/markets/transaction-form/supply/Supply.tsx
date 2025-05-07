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
import SupplyModal from "~/components/modal/supply-modal/SupplyModal";
const Supply = ({ pool, detail, price, balance }: TransactionFormProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isReviewed, setIsReviewed] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          title="You’re supplying"
          value={value}
          onChange={setValue}
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
            isLoading: balance.isLoading || pool.isLoading,
          }}
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
          title={{ value: "Borrowable Amount", className: styles.row_title }}
          content={`0 ${pool.data?.asset_symbol}`}
          isLoading={pool.isLoading}
        />
        <Row
          title={{ value: "Collateral", className: styles.row_title }}
          content={<Switch name="collateral" checked={true} readOnly />}
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
          content="$0"
        />
        <Row
          title={{ value: "Daily earnings", className: styles.row_title }}
          content="$0"
        />
      </div>
      {pool.data?.asset_id && isReviewed && (
        <SupplyModal
          assetId={pool.data.asset_id}
          onClose={() => setIsReviewed(false)}
          isViewOnly
          value={value}
        />
      )}
    </div>
  );
};

export default Supply;
