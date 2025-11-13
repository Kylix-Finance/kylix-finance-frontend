import { LiquidationMarket } from "@repo/onchain";
import styles from "./Cards.module.scss";
import Card from "./card/Card";
import Empty from "../Empty";
interface Props {
  isPending: boolean;
  isEmpty: boolean;
  data: LiquidationMarket[];
  onViewMarketClick?: (id: number) => void;
}

const Cards = ({ data, isEmpty, isPending, onViewMarketClick }: Props) => {
  return (
    <div className={styles.container}>
      {(isPending ? Array.from({ length: 6 }, () => null) : data).map(
        (item, index) => (
          <Card
            data={item}
            key={index}
            isPending={isPending}
            onViewMarketClick={() =>
              item && onViewMarketClick?.(item?.asset_id)
            }
          />
        )
      )}
      <Empty isEmpty={isEmpty} hasBorder />
    </div>
  );
};

export default Cards;
