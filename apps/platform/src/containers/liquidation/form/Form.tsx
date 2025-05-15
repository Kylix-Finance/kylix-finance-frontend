"use client";
import { SelectBox } from "~/components/inputs/select-box";
import styles from "./Form.module.scss";
import InputNumber from "~/components/inputs/input-number";
import { PrivateButton } from "~/components/private-button";
import {
  formatBigNumbers,
  formatUnit,
  useGetMarketBidDistribution,
} from "@repo/onchain";
import { useParams } from "next/navigation";
import { DiscountDistribution } from "@repo/onchain/src/types/rpc/liquidation/getMarketBidDistribution";
import { useEffect, useRef, useState } from "react";

const Form = () => {
  const [discountValue, setDiscountValue] = useState<DiscountDistribution>();

  const { id: assetId } = useParams<{ id: string }>();

  const { data: bidDistribution } = useGetMarketBidDistribution({
    assetId: +assetId,
  });
  const onceRef = useRef(false);
  useEffect(() => {
    if (onceRef.current || !bidDistribution) return;
    onceRef.current = true;
    setDiscountValue(
      bidDistribution[1][Math.floor(bidDistribution[1].length / 2)]
    );
  }, [bidDistribution]);

  const renderDiscountOption = (option: DiscountDistribution) => {
    return (
      <div className={styles.discount_option}>
        <span className={styles.percent}>%{option.discount}</span>
        <span className={styles.volume}>
          ${formatBigNumbers(formatUnit(option.amount, 6), 2)}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className={styles.bid_header}>Place Bid</div>
      <div className={styles.bid_info}>Premium (Discount)</div>
      <SelectBox
        className={styles.discount_select_target}
        value={discountValue}
        options={bidDistribution?.[1] || []}
        renderOption={renderDiscountOption}
        renderValue={renderDiscountOption}
        onChange={setDiscountValue}
        portalClassName={styles.discount_select_portal}
      />
      <InputNumber
        label="Amount"
        showMaxButton
        showEstimate
        showPercentButtons
        onMaxClick={() => console.log("Max clicked")}
        selectedToken="USDC"
        onTokenSelect={(token) => console.log("Selected token:", token)}
        availableTokens={["USDT"]}
        placeholder="0"
        decimals={4}
        price="94000"
        availableAmount="0.056"
      />
      <PrivateButton size="large" fullWidth containerClassName={styles.submit}>
        Enter an amount
      </PrivateButton>
    </>
  );
};

export default Form;
