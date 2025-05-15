"use client";
import { SelectBox } from "~/components/inputs/select-box";
import styles from "./Form.module.scss";
import InputNumber from "~/components/inputs/input-number";
import { PrivateButton } from "~/components/private-button";

const Form = () => {
  // const { id: assetId } = useParams<{ id: string }>();

  // const { data: bidDistribution } = useGetMarketBidDistribution({
  //   assetId,
  // });

  // console.log("______XXXXXX", bidDistribution);
  const renderDiscountOption = (option: {
    percent: string;
    volume: number;
  }) => {
    return (
      <div className={styles.discount_option}>
        <span className={styles.percent}>%{option.percent}</span>
        <span className={styles.volume}>${option.volume}</span>
      </div>
    );
  };

  return (
    <>
      <div className={styles.bid_header}>Place Bid</div>
      <div className={styles.bid_info}>Premium (Discount)</div>
      <SelectBox
        className={styles.discount_select_target}
        value={{ percent: "20", volume: 200 }}
        options={[
          { percent: "10", volume: 100 },
          { percent: "20", volume: 200 },
          { percent: "30", volume: 300 },
        ]}
        renderOption={renderDiscountOption}
        renderValue={renderDiscountOption}
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
