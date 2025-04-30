import { ComponentPropsWithRef, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const formatNumberWithCommas = (value: string) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const newValue = input.value.replace(/,/g, ""); // Remove existing commas
    const cursorPosition = input.selectionStart || 0;

    // Count commas before cursor in the old value
    const beforeCommasCount = (
      localValue.slice(0, cursorPosition).match(/,/g) || []
    ).length;

    // Allow empty string or valid number with optional decimal
    const isValidNumber = newValue === "" || /^\d*\.?\d*$/.test(newValue);
    const hasOneOrNoDot = (newValue.match(/\./g) || []).length <= 1;
    const parts = newValue.split(".");
    const hasValidDecimals = parts.length === 1 || parts[1].length <= decimals;

    if (isValidNumber && hasOneOrNoDot && hasValidDecimals) {
      const formattedValue = formatNumberWithCommas(newValue);
      setLocalValue(formattedValue);
      onChange?.(newValue);

      // Count commas before cursor in the new value
      const afterCommasCount = (
        formattedValue.slice(0, cursorPosition).match(/,/g) || []
      ).length;

      // Calculate new cursor position
      requestAnimationFrame(() => {
        if (inputRef.current) {
          const newCursorPosition =
            cursorPosition + (afterCommasCount - beforeCommasCount);
          inputRef.current.setSelectionRange(
            newCursorPosition,
            newCursorPosition
          );
        }
      });
    }
  };

  const renderTokenOption = (token: string) => (
    <>
      <TokenIcon symbol={token} width={28} height={28} />
      <span>{token}</span>
    </>
  );

  return (
    <div className={styles.input_wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.top_row}>
        <input
          ref={inputRef}
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
            className={styles.token_selector}
          />
        )}
      </div>
      <div className={styles.bottom_row}>
        ${localValue || 0}
        <div className={styles.wallet_balance}>
          <Wallet className={styles.wallet_icon} />
          <div className={styles.available_amount}>0.53 {selectedToken}</div>

          {showMaxButton && (
            <Button variant="primary" size="small" onClick={onMaxClick}>
              Max
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
