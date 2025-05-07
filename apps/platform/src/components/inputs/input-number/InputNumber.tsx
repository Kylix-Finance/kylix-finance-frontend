import { ComponentPropsWithRef, useRef, useState } from "react";
import styles from "./InputNumber.module.scss";
import { Button } from "~/components/ui/button";
import TokenIcon from "~/components/token-icon";
import { SelectBox } from "../select-box";
import { Wallet } from "~/assets/icons";
import { formatBigNumbers } from "@repo/onchain";
import Skeleton from "~/components/skeleton";

type Data = {
  value?: string;
  isLoading?: boolean;
};
interface Props
  extends Omit<ComponentPropsWithRef<"input">, "onChange" | "value"> {
  label?: string;
  showMaxButton?: boolean;
  showEstimate?: boolean;
  showPercentButtons?: boolean;
  onMaxClick?: () => void;
  selectedToken?: string;
  onTokenSelect?: (token: string) => void;
  availableTokens?: string[];
  onChange?: (value: string) => void;
  error?: string;
  value?: string;
  decimals?: number;
  price?: Data;
  availableAmount?: Data;
  isPercentMode?: boolean;
}

export const InputNumber = ({
  label,
  showMaxButton,
  showEstimate,
  showPercentButtons,
  onMaxClick,
  selectedToken,
  onTokenSelect,
  availableTokens = [],
  onChange,
  error,
  value: externalValue,
  decimals = 18,
  price,
  availableAmount,
  isPercentMode = false,
  ...rest
}: Props) => {
  const [localValue, setLocalValue] = useState(externalValue || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const formatNumberWithCommas = (value: string) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const processValue = (newValue: string, cursorPosition?: number) => {
    newValue = newValue.replace(/,/g, ""); // Remove existing commas

    // Check if the value is empty, a valid decimal number, and doesn't start with unnecessary zeros
    const isValidNumber =
      newValue === "" ||
      (/^\d*\.?\d*$/.test(newValue) &&
        !/^0\d+/.test(newValue) &&
        newValue !== ".");

    const hasOneOrNoDot = (newValue.match(/\./g) || []).length <= 1;
    const parts = newValue.split(".");
    const hasValidDecimals = parts.length === 1 || parts[1].length <= decimals;

    if (isValidNumber && hasOneOrNoDot && hasValidDecimals) {
      const formattedValue = formatNumberWithCommas(newValue);
      setLocalValue(formattedValue);
      onChange?.(newValue);

      if (cursorPosition !== undefined) {
        // Count commas before cursor in the old value
        const beforeCommasCount = (
          localValue.slice(0, cursorPosition).match(/,/g) || []
        ).length;
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
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    processValue(input.value, input.selectionStart || 0);
  };

  const handlePercentageClick = (percent: number) => {
    if (!availableAmount) return;

    const currentValue = Number(localValue.replace(/,/g, "") || "0");
    const availableNum = Number(availableAmount);
    const percentAmount = (availableNum * percent) / 100;
    const newValue = currentValue + percentAmount;

    if (newValue <= availableNum) {
      processValue(newValue.toFixed(decimals));
    }
  };

  const focusInput = () => inputRef.current?.focus();

  const renderTokenOption = (token: string) => (
    <>
      <TokenIcon symbol={token} width={28} height={28} />
      <span>{token}</span>
    </>
  );
  return (
    <div className={styles.input_wrapper}>
      {label && (
        <label className={styles.label} onClick={focusInput}>
          {label}
        </label>
      )}

      <div className={styles.top_row}>
        <div className={styles.input_container}>
          {isPercentMode && (
            <span onClick={focusInput} className={styles.percent_symbol}>
              %
            </span>
          )}
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            onChange={handleInputChange}
            value={localValue}
            data-percent-mode={isPercentMode}
            {...rest}
          />
        </div>
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
        {showEstimate && price?.value && (
          <Skeleton isLoading={price.isLoading} width={60} height={20}>
            <span className={styles.estimated_value}>
              <>
                $
                <span>
                  {formatBigNumbers(
                    (
                      Number(price.value || 0) * Number(externalValue || 0)
                    ).toString(),
                    2
                  )}
                </span>
              </>
            </span>
          </Skeleton>
        )}
        <div className={styles.wallet_balance}>
          <Wallet className={styles.wallet_icon} />
          <Skeleton
            isLoading={availableAmount?.isLoading}
            width={80}
            height={20}
            rounded
          >
            <div className={styles.available_amount}>
              {formatBigNumbers(availableAmount?.value || "0", 4)}{" "}
              {selectedToken}
            </div>
          </Skeleton>

          {showMaxButton && (
            <Button
              disabled={!availableAmount}
              variant="primary"
              size="small"
              onClick={() => {
                onMaxClick?.();
                processValue(availableAmount?.value || "0");
              }}
            >
              Max
            </Button>
          )}
        </div>
      </div>
      {showPercentButtons && (
        <div className={styles.percentage}>
          {[1, 5, 10, 25].map((percent) => (
            <Button
              variant="secondary"
              size="small"
              key={percent}
              onClick={() => handlePercentageClick(percent)}
              disabled={!availableAmount}
            >
              +{percent}%
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
