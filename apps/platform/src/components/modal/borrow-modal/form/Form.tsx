import InputNumber from "~/components/inputs/input-number";
import { Button } from "~/components/ui/button";
import styles from "./Form.module.scss";
import { formatUnit, LandingPool } from "@repo/onchain";
import Detail from "./detail/Detail";
import { LinkButton } from "~/components/ui/link-button";
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
  assetDecimal: number | undefined;
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
  assetDecimal,
  disabled,
  realBalance,
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
          availableAmount={{
            value: formattedBalance,
          }}
          onChange={onInputChange}
          decimals={asset?.asset_decimals}
          price={{
            value: assetPrice && formatUnit(assetPrice, assetDecimal),
          }}
        />
        <Button
          disabled={disabled}
          size="large"
          fullWidth
          onClick={onButtonClick}
          isLoading={isButtonLoading}
        >
          {realBalance
            ? value
              ? "Borrow"
              : "Enter an amount"
            : "Insufficient balance"}
        </Button>
      </div>
      <Detail asset={asset} enable={!!value} />
      <div className={styles.alert}>
        <p>
          Maximum LTV: 75%. Borrow up to 75% of your collateral value. Monitor
          health factor to avoid liquidation.
        </p>
        <LinkButton href="/">Learn more</LinkButton>
      </div>
    </div>
  );
};

export default Form;
