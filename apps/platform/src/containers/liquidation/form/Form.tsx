"use client";
import { SelectBox } from "~/components/inputs/select-box";
import styles from "./Form.module.scss";

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
    </>
  );
};

export default Form;
