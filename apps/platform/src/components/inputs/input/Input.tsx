import { ComponentPropsWithRef, useState } from "react";
import styles from "./Input.module.scss";
import { Button } from "~/components/ui/button";
import TokenIcon from "~/components/token-icon";

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

export const Input = ({
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
            <Button
              variant="secondary"
              size="small"
              onClick={() => {
                onMaxClick?.();
              }}
            >
              Max
            </Button>
          )}
          {selectedToken && (
            <div className={styles.tokenSelector}>
              <TokenIcon symbol={selectedToken} width={24} height={24} />
              <span className={styles.tokenSymbol}>{selectedToken}</span>
              {availableTokens.length > 0 && onTokenSelect && (
                <select
                  className={styles.tokenSelect}
                  value={selectedToken}
                  onChange={(e) => onTokenSelect(e.target.value)}
                >
                  {availableTokens.map((token) => (
                    <option key={token} value={token}>
                      {token}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )}
        </div>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
