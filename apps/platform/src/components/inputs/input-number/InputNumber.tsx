import { ComponentPropsWithRef, useState } from "react";
import styles from "./InputNumber.module.scss";
import { Button } from "~/components/ui/button";
import TokenIcon from "~/components/token-icon";
import { SelectBox } from "../select-box";

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
  ...rest
}: Props) => {
  const [localValue, setLocalValue] = useState(externalValue || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Allow empty string or valid number with optional decimal
    const isValidNumber = newValue === "" || /^\d*\.?\d*$/.test(newValue);

    // Additional validation to prevent multiple decimal points
    const hasOneOrNoDot = (newValue.match(/\./g) || []).length <= 1;

    if (isValidNumber && hasOneOrNoDot) {
      setLocalValue(newValue);
      onChange?.(newValue);
    }
  };

  const renderTokenOption = (token: string) => (
    <>
      <TokenIcon symbol={token} width={28} height={28} />
      <span>{token}</span>
    </>
  );

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          onChange={handleInputChange}
          value={localValue}
          {...rest}
        />
        <div className={styles.rightElements}>
          {showMaxButton && (
            <Button variant="secondary" size="small" onClick={onMaxClick}>
              Max
            </Button>
          )}
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
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
