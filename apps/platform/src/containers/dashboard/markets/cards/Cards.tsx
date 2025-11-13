import { LandingPool } from "@repo/onchain";
import styles from "./Cards.module.scss";
import Card from "./card/Card";
import Empty from "../Empty";
interface Props {
  isPending: boolean;
  isEmpty: boolean;
  data: LandingPool[];
  onSupplyClick: (assetId: number) => void;
  onBorrowClick: (assetId: number) => void;
}

const Cards = ({
  data,
  isPending,
  isEmpty,
  onBorrowClick,
  onSupplyClick,
}: Props) => {
  return (
    <div className={styles.container}>
      {(isPending ? Array.from({ length: 6 }, () => null) : data).map(
        (item, index) => (
          <Card
            data={item}
            key={index}
            isPending={isPending}
            onBorrowClick={() =>
              data &&
              item?.asset_id !== undefined &&
              onBorrowClick(item.asset_id)
            }
            onSupplyClick={() => {
              data &&
                item?.asset_id !== undefined &&
                onSupplyClick(item.asset_id);
            }}
          />
        )
      )}
      <Empty isEmpty={isEmpty} hasBorder />
    </div>
  );
};

export default Cards;
