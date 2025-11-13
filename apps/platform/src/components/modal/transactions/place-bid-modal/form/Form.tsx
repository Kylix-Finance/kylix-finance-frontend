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
  assetPrice?: string;
  disabled: boolean;
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
}: Props) => {
  return (
    <div className={styles.content}>
      <InputNumber
        label="Place Bid"
        placeholder="0"
        onMaxClick={() => {}}
        showMaxButton
        showEstimate
        showPercentButtons
        selectedToken={asset?.asset_symbol}
        value={value}
        availableAmount={formattedBalance}
        onChange={onInputChange}
        decimals={asset?.asset_decimals}
        price={assetPrice}
        isLoading={isLoading}
      />
      <PrivateButton
        disabled={disabled}
        size="large"
        fullWidth
        onClick={onButtonClick}
        isLoading={isButtonLoading}
      >
        {realBalance
          ? value
            ? "Place Bid"
            : "Enter an amount"
          : "Insufficient balance"}
      </PrivateButton>
    </div>
  );
};

export default Form;
