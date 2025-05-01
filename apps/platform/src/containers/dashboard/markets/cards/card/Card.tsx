import { formatBigNumbers, LandingPool } from "@repo/onchain";
import styles from "./Card.module.scss";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import CardItem from "../../../card-item/CardItem";
import { Skeleton } from "~/components/skeleton";

interface Props {
  data: LandingPool | null;
  isPending: boolean;
}

const Card = ({ data, isPending }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Skeleton rounded isLoading={isPending} circle width={40} height={40}>
            <TokenIcon
              width={40}
              height={44}
              symbol={data?.asset_symbol || ""}
            />
          </Skeleton>
          <Skeleton rounded isLoading={isPending} height={16} width={40}>
            <p>{data?.asset_symbol}</p>
          </Skeleton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.detail}>
          <CardItem
            title="Total Supplied"
            value={` ${data && formatBigNumbers(data.total_pool_supply.toString(), 2)} ${data && data.asset_symbol} : `}
            hasSubValue
            subValue="$3.91B"
            isPending={isPending}
          />
          <CardItem
            title="Supply APY"
            isPending={isPending}
            value={`${data && formatBigNumbers(data.supply_apy.toString(), 2)}`}
          />
          <CardItem
            title="Total Borrowed"
            value={` ${data && formatBigNumbers(data.total_pool_borrow.toString(), 2)} ${data && data.asset_symbol}`}
            subValue="$3.91B"
            hasSubValue
            isPending={isPending}
          />
          <CardItem
            title="Borrow APY"
            value={`${data && formatBigNumbers(data.borrow_apy.toString(), 2)}`}
            isPending={isPending}
          />
          <CardItem
            title="Utilization"
            value={`${data && formatBigNumbers(data.utilization.toString(), 2)}`}
            isPending={isPending}
          />
        </div>
        <div className={styles.buttons}>
          <Skeleton borderRadius={10} isLoading={isPending} height={44}>
            <Button size="large" fullWidth>
              Supply
            </Button>
          </Skeleton>
          <Skeleton borderRadius={10} isLoading={isPending} height={44}>
            <Button size="large" variant="secondary" fullWidth>
              Borrow
            </Button>
          </Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Card;
