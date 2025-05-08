import { formatBigNumbers } from "@repo/onchain";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import { VoidFunction } from "~/types";
import styles from "./ViewOnly.module.scss";
import Skeleton from "~/components/skeleton";
interface Props {
  assetSymbol?: string;
  value?: string;
  assetPrice?: string;
  onClick: VoidFunction;
  isLoading: boolean;
  disabled: boolean;
}

const ViewOnly = ({
  assetPrice,
  assetSymbol,
  value,
  disabled,
  isLoading,
  onClick,
}: Props) => {
  return (
    <div className={styles.view_only}>
      <div className={styles.first_row}>
        <Skeleton isLoading={!assetSymbol} width={90} height={30} rounded>
          <p className={styles.value}>
            {value} {assetSymbol}
          </p>
        </Skeleton>
        <Skeleton isLoading={!assetSymbol} width={40} height={40} circle>
          {assetSymbol && (
            <TokenIcon width={40} height={40} symbol={assetSymbol} />
          )}
        </Skeleton>
      </div>
      <div>
        <Skeleton isLoading={!assetPrice} width={80} height={20} rounded>
          {assetPrice && value && !isNaN(+assetPrice) && (
            <p>
              ${formatBigNumbers(String(+assetPrice * +value).toString(), 4)}
            </p>
          )}
        </Skeleton>
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
