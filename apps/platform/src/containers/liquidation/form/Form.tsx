"use client";
import { SelectBox } from "~/components/inputs/select-box";
import styles from "./Form.module.scss";
import InputNumber from "~/components/inputs/input-number";
import { PrivateButton } from "~/components/private-button";
import {
  formatBigNumbers,
  formatUnit,
  useBalance,
  useGetMarketBidDistribution,
} from "@repo/onchain";
import { useParams } from "next/navigation";
import { DiscountDistribution } from "@repo/onchain/src/types/rpc/liquidation/getMarketBidDistribution";
import { useEffect, useRef, useState } from "react";
import { BASE_ASSET_ID } from "@repo/shared";
import CardWrapper from "~/components/card-wrapper";
import PlaceBidModal from "~/components/modal/transactions/place-bid-modal/PlaceBidModal";

const Form = () => {
  const [isReviewed, setIsReviewed] = useState(false);

  const [amount, setAmount] = useState<string | undefined>(undefined);

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

  const { data: balance } = useBalance({
    assetId: BASE_ASSET_ID.toString(),
  });

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
    <CardWrapper className={styles.container}>
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
        activeType="border"
      />
      <InputNumber
        value={amount}
        onChange={setAmount}
        label="Amount"
        showMaxButton
        showEstimate
        showPercentButtons
        onMaxClick={() => console.log("Max clicked")}
        selectedToken="USDT"
        onTokenSelect={(token) => console.log("Selected token:", token)}
        availableTokens={["USDT"]}
        placeholder="0"
        decimals={4}
        price="1"
        availableAmount={balance?.formattedBalance}
      />
      <PrivateButton
        fullWidth
        onClick={() => setIsReviewed(true)}
        disabled={!amount || !discountValue}
        containerClassName={styles.submit}
      >
        Review
      </PrivateButton>
      {/* <PrivateButton
        size="large"
        fullWidth
        containerClassName={styles.submit}
        onClick={handlePlaceBid}
        isLoading={isPlaceBidLoading || isMetadataLoading}
        disabled={!amount || !discountValue}
      >
        {balance?.realBalance
          ? amount
            ? "Place"
            : "Enter an amount"
          : "Insufficient balance"}
      </PrivateButton> */}
      {isReviewed && (
        <PlaceBidModal
          assetId={BASE_ASSET_ID}
          onClose={() => setIsReviewed(false)}
          isViewOnly
          value={amount}
          discount={discountValue?.discount}
        />
      )}
    </CardWrapper>
  );
};

export default Form;
