import { RecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import styles from "./Card.module.scss";
import CardItem from "~/components/card-item";
import TokenIcon from "~/components/token-icon";
import { Divider } from "~/components/divider";
import { formatTimestamp } from "~/utils/date";
import Skeleton from "~/components/skeleton";
interface Props {
  data: RecentLiquidation | null;
  isPending: boolean;
}

const Card = ({ data, isPending }: Props) => {
  const time = formatTimestamp(data?.time || 0);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon_container}>
          <p className={styles.icon_header}>Collateral</p>
          <div className={styles.icon_holder}>
            <Skeleton width={32} height={32} isLoading={isPending} circle>
              <TokenIcon symbol="BTC" />
            </Skeleton>
            <Skeleton width={40} height={20} isLoading={isPending}>
              <span>BTC</span>
            </Skeleton>
          </div>
        </div>
        <div className={styles.icon_container}>
          <p className={styles.icon_header}>Bid Denom</p>
          <div className={styles.icon_holder}>
            <Skeleton width={32} height={32} isLoading={isPending} circle>
              <TokenIcon symbol="BTC" />
            </Skeleton>
            <Skeleton width={40} height={20} isLoading={isPending}>
              <span>BTC</span>
            </Skeleton>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.content}>
        <CardItem
          isPending={isPending}
          title="Time"
          value={time.date}
          subValue={time.time}
          hasSubValue
        />
        <CardItem
          isPending={isPending}
          title="Liquidated"
          value={`${data?.assetAmountLiquidated} BTC`}
          subValue="$3.91B"
          hasSubValue
        />
        <CardItem
          isPending={isPending}
          title="Paid"
          value={`${data?.usdtAmountPaid} USDT`}
          subValue="$3.91B"
          hasSubValue
        />
        <CardItem
          isPending={isPending}
          title="Average Price"
          value={`${data?.averagePrice} USDT`}
          subValue="-2.3% this week"
          hasSubValue
          subValueClassName={styles.up}
        />
      </div>
    </div>
  );
};

export default Card;
