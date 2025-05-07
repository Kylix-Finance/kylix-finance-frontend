import { formatUnit } from "@repo/onchain";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { VoidFunction } from "~/types";
import styles from "./ViewOnly.module.scss";
interface Props {
  assetSymbol: string;
  value: string;
  assetDecimal: number;
  assetPrice: number;
  onClick: VoidFunction;
  isLoading: boolean;
  disabled: boolean;
}

const ViewOnly = ({
  assetDecimal,
  assetPrice,
  assetSymbol,
  value,
  disabled,
  isLoading,
  onClick,
}: Props) => {
  const price = Number(formatUnit(assetPrice, assetDecimal));
  return (
    <div className={styles.view_only}>
      <div className={styles.first_row}>
        <p className={styles.value}>
          {value} {assetSymbol}
        </p>
        {assetSymbol && (
          <TokenIcon width={40} height={40} symbol={assetSymbol} />
        )}
      </div>
      <div>
        {assetPrice && !isNaN(price) && value && (
          <p>
            ${price} * {+value}
          </p>
        )}
      </div>
      <Button
        size="large"
        fullWidth
        onClick={onClick}
        isLoading={isLoading}
        disabled={disabled}
      >
        Supply
      </Button>
    </div>
  );
};

export default ViewOnly;
