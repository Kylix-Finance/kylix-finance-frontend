import { RecentLiquidation } from "~/hooks/api/useRecentLiquidation";
import styles from "./Cards.module.scss";
import Card from "./card/Card";
interface Props {
  isPending: boolean;
  data: RecentLiquidation[];
}

const Cards = ({ data, isPending }: Props) => {
  return (
    <div className={styles.container}>
      {(isPending ? Array.from({ length: 6 }, () => null) : data).map(
        (item, index) => (
          <Card data={item} key={index} isPending={isPending} />
        )
      )}
    </div>
  );
};

export default Cards;
