import { formatUnit, UserBid } from "@repo/onchain";
import styles from "./Card.module.scss";
import CardItem from "~/components/card-item";
import TokenIcon from "~/components/token-icon";
import Skeleton from "~/components/skeleton";
import { Status } from "~/components/ui/status";
import { CancelBidButton } from "../../CancelBidButton";
import { Divider } from "~/components/divider";
interface Props {
  data: UserBid | null;
  isPending: boolean;
  assetId: string;
}

const Card = ({ data, isPending, assetId }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.bid_info}>
          <Skeleton circle isLoading={isPending} width={32} height={32}>
            {data && (
              <TokenIcon
                width={28}
                height={28}
                symbol={data.bid_asset_info.asset_symbol}
              />
            )}
          </Skeleton>
          <Skeleton rounded isLoading={isPending} width={30} height={15}>
            {data && <p>{data.bid_asset_info.asset_symbol}</p>}
          </Skeleton>
        </div>
        <Skeleton width={28} height={26} isLoading={isPending}>
          <Status content="Completed" />
        </Skeleton>
      </div>
      <Divider />
      <div className={styles.detail}>
        <CardItem
          title="Bid amount"
          isPending={isPending}
          value={`${formatUnit(
            data?.bid_amount || 0,
            data?.bid_asset_info.decimals
          )} BTC`}
          hasValue
          subValue="$3.91B"
        />
        <CardItem
          title="Discount"
          isPending={isPending}
          value={`${data?.discount}%`}
        />
        <CardItem
          title="Filled"
          isPending={isPending}
          value={data?.filled_amount}
        />
      </div>
      <div>
        <Skeleton
          isLoading={isPending}
          width="100%"
          height={40}
          borderRadius={8}
        >
          {data && (
            <CancelBidButton
              assetId={assetId}
              discount={data.discount}
              txBlockNumber={data.blocknumber}
              txIndex={data.index}
            />
          )}
        </Skeleton>
      </div>
    </div>
  );
};

export default Card;
