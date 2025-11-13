import styles from "./Cards.module.scss";
import Card from "./card/Card";
import { SuppliesResponse } from "../Supplies";
interface Props {
  isPending: boolean;
  data: SuppliesResponse;
  onSupplyClick: (assetId: number) => void;
}

const Cards = ({ data, isPending, onSupplyClick }: Props) => {
  return (
    <div className={styles.container}>
      {(isPending ? Array.from({ length: 6 }, () => null) : data).map(
        (item, index) => (
          <Card
            data={item}
            key={index}
            isPending={isPending}
            onSupplyClick={() =>
              data && item?.assetId !== undefined && onSupplyClick(item.assetId)
            }
          />
        )
      )}
    </div>
  );
};

export default Cards;
