import { ComponentPropsWithRef, useState } from "react";
import styles from "./InputNumber.module.scss";
import { Button } from "~/components/ui/button";
import TokenIcon from "~/components/token-icon";
import { SelectBox } from "../select-box";
import { Wallet } from "~/assets/icons";

interface Props
  extends Omit<ComponentPropsWithRef<"input">, "onChange" | "value"> {
  label?: string;
  showMaxButton?: boolean;
  onMaxClick?: () => void;
  selectedToken?: string;
  onTokenSelect?: (token: string) => void;
  availableTokens?: string[];
  onChange?: (value: string) => void;
  error?: string;
  value?: string;
  decimals?: number;
}

export const InputNumber = ({
  label,
  showMaxButton = false,
  onMaxClick,
  selectedToken,
  onTokenSelect,
  availableTokens = [],
  onChange,
  error,
  value: externalValue,
  decimals = 18,
  ...rest
}: Props) => {
  const [localValue, setLocalValue] = useState(externalValue || "");

  const formatNumberWithCommas = (value: string) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/,/g, ""); // Remove existing commas

    // Allow empty string or valid number with optional decimal
    const isValidNumber = newValue === "" || /^\d*\.?\d*$/.test(newValue);

    // Additional validation to prevent multiple decimal points
    const hasOneOrNoDot = (newValue.match(/\./g) || []).length <= 1;

    // Check decimal places
    const parts = newValue.split(".");
    const hasValidDecimals = parts.length === 1 || parts[1].length <= decimals;

    if (isValidNumber && hasOneOrNoDot && hasValidDecimals) {
      const formattedValue = formatNumberWithCommas(newValue);
      setLocalValue(formattedValue);
      onChange?.(newValue); // Pass the unformatted value to onChange
    }
  };

  const renderTokenOption = (token: string) => (
    <>
      <TokenIcon symbol={token} width={28} height={28} />
      <span>{token}</span>
    </>
  );

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.topRow}>
        <input
          type="text"
          className={styles.input}
          onChange={handleInputChange}
          value={localValue}
          {...rest}
        />
        {selectedToken && availableTokens.length > 0 && (
          <SelectBox
            options={availableTokens}
            value={selectedToken}
            onChange={onTokenSelect}
            renderOption={renderTokenOption}
            renderValue={renderTokenOption}
            className={styles.tokenSelector}
          />
        )}
      </div>
      <div className={styles.bottomRow}>
        ${localValue || 0}
        <div className={styles.wallet_balance}>
          <Wallet className={styles.wallet_icon} />
          <div className={styles.available_amount}>0.53 {selectedToken}</div>

          {showMaxButton && (
            <Button variant="secondary" size="small" onClick={onMaxClick}>
              Max
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
