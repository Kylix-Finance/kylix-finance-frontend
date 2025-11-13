import { UserBid } from "@repo/onchain";
import styles from "./Cards.module.scss";
import Card from "./card/Card";
interface Props {
  data: UserBid[];
  isPending: boolean;
  assetId: string;
}

const Cards = ({ data, isPending, assetId }: Props) => {
  return (
    <div className={styles.container}>
      {(isPending ? Array.from({ length: 6 }, () => null) : data).map(
        (item, index) => (
          <Card
            data={item}
            key={index}
            isPending={isPending}
            assetId={assetId}
          />
        )
      )}
    </div>
  );
};

export default Cards;
