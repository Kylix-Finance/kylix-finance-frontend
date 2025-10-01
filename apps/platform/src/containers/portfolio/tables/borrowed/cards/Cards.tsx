import styles from "./Cards.module.scss";
import Card from "./card/Card";
import { BorrowedResponse } from "../Borrowed";
import BorrowMore from "../borrow-more/BorrowMore";
interface Props {
  isPending: boolean;
  data: BorrowedResponse;
  onRepayClick: (assetId: number) => void;
  onBorrowClick: (assetId: number) => void;
}

const Cards = ({ data, isPending, onBorrowClick, onRepayClick }: Props) => {
  return (
    <div className={styles.container}>
      <BorrowMore hasBorrowed={data.length > 0} />
      {(isPending ? Array.from({ length: 6 }, () => null) : data).map(
        (item, index) => (
          <Card
            data={item}
            key={index}
            isPending={isPending}
            onBorrowClick={() =>
              data && item?.assetId !== undefined && onBorrowClick(item.assetId)
            }
            onRepayClick={() => {
              data && item?.assetId !== undefined && onRepayClick(item.assetId);
            }}
          />
        )
      )}
    </div>
  );
};

export default Cards;
