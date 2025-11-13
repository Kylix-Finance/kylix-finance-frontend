import InputNumber from "~/components/inputs/input-number";
import styles from "./Form.module.scss";
import { LandingPool } from "@repo/onchain";
import { PrivateButton } from "~/components/private-button";
interface Props {
  value: string | undefined;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  asset: LandingPool | undefined;
  formattedBalance: string | undefined;
  realBalance: bigint | undefined;
  onButtonClick: () => void;
  isButtonLoading: boolean;
  assetPrice: string | undefined;
  disabled: boolean;
  maxValue: string | undefined;
}

const Form = ({
  value,
  isLoading,
  onInputChange,
  asset,
  formattedBalance,
  onButtonClick,
  isButtonLoading,
  assetPrice,
  disabled,
  realBalance,
  maxValue,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <InputNumber
          label="Borrow"
          placeholder="0"
          showEstimate
          selectedToken={asset?.asset_symbol}
          value={value}
          availableAmount={formattedBalance}
          onChange={onInputChange}
          decimals={asset?.asset_decimals}
          price={assetPrice}
          max={maxValue}
        />
        <PrivateButton
          disabled={disabled}
          size="large"
          fullWidth
          onClick={onButtonClick}
          isLoading={isButtonLoading}
        >
          {value ? "Borrow" : "Enter an amount"}
        </PrivateButton>
      </div>
    </div>
  );
};

export default Form;
