import { RecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import styles from "./Card.module.scss";
import CardItem from "~/components/card-item";
import TokenIcon from "~/components/token-icon";
import { Divider } from "~/components/divider";
import { formatTimestamp } from "~/utils/date";
interface Props {
  data?: RecentLiquidation;
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
            <TokenIcon symbol="BTC" />
            <span>BTC</span>
          </div>
        </div>
        <div className={styles.icon_container}>
          <p className={styles.icon_header}>Bid Denom</p>
          <div className={styles.icon_holder}>
            <TokenIcon symbol="ETH" />
            <span>ETH</span>
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.content}>
        <CardItem
          isPending={false}
          title="Time"
          value={time.date}
          subValue={time.time}
          hasSubValue
        />
        <CardItem
          isPending={false}
          title="Liquidated"
          value={`${data?.assetAmountLiquidated} BTC`}
          subValue="$3.91B"
          hasSubValue
        />
        <CardItem
          isPending={false}
          title="Paid"
          value={`${data?.usdtAmountPaid} USDT`}
          subValue="$3.91B"
          hasSubValue
        />
        <CardItem
          isPending={false}
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
