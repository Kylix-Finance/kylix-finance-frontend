import { formatBigNumbers, LiquidationMarket } from "@repo/onchain";
import styles from "./Card.module.scss";
import { Button } from "~/components/ui/button";
import Health from "../../health/Health";
import CardItem from "~/components/card-item";
import TokenIcon from "~/components/token-icon";
import Check from "~/assets/icons/check.svg";
import Skeleton from "~/components/skeleton";
import { VoidFunction } from "~/types";
interface Props {
  data: LiquidationMarket | null;
  isPending: boolean;
  onViewMarketClick?: VoidFunction;
}

const Card = ({ data, isPending, onViewMarketClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.heading}>Health</p>
          <Skeleton width={28} height={26} isLoading={isPending}>
            <span>{data && <Health value={data?.health} />}</span>
          </Skeleton>
        </div>
        <div className={styles.detail}>
          <CardItem
            title="Collateral"
            isPending={isPending}
            value={
              <>
                {data && (
                  <div className={styles.collateral}>
                    <Skeleton
                      circle
                      isLoading={isPending}
                      width={32}
                      height={32}
                    >
                      <TokenIcon
                        width={28}
                        height={28}
                        symbol={data.asset_symbol}
                      />
                    </Skeleton>{" "}
                    <Skeleton
                      rounded
                      isLoading={isPending}
                      width={30}
                      height={15}
                    >
                      <p>{data.asset_symbol}</p>
                    </Skeleton>
                  </div>
                )}
              </>
            }
          />
          <CardItem
            title="Bid Denom"
            isPending={isPending}
            value={
              <div>
                {data && (
                  <div className={styles.collateral}>
                    <Skeleton
                      circle
                      isLoading={isPending}
                      width={32}
                      height={32}
                    >
                      <TokenIcon
                        width={28}
                        height={28}
                        symbol={data.asset_symbol}
                      />
                    </Skeleton>
                    <Skeleton
                      rounded
                      isLoading={isPending}
                      width={30}
                      height={15}
                    >
                      <p>{data.asset_symbol}</p>
                    </Skeleton>
                  </div>
                )}
              </div>
            }
          />
          <CardItem
            title="Pool size"
            isPending={isPending}
            value={
              <>
                {data && (
                  <p>
                    <Skeleton
                      isLoading={isPending}
                      height={20}
                      width={80}
                      rounded
                    >
                      <span>
                        {formatBigNumbers(data.pool_size.toString(), 4)}
                      </span>
                    </Skeleton>
                    <Skeleton
                      isLoading={isPending}
                      height={20}
                      width={30}
                      rounded
                    >
                      <span>{data.asset_symbol}</span>
                    </Skeleton>{" "}
                  </p>
                )}
              </>
            }
            hasSubValue
            subValue="$3.91B"
          />
          <CardItem
            title="TVL"
            isPending={isPending}
            value={
              <>
                {data && (
                  <p className={styles.tvl}>
                    <Skeleton
                      isLoading={isPending}
                      height={20}
                      width={80}
                      rounded
                    >
                      <span>{formatBigNumbers(data.tvl.toString(), 4)}</span>
                    </Skeleton>
                    <Skeleton
                      isLoading={isPending}
                      height={20}
                      width={30}
                      rounded
                    >
                      <span>{data.asset_symbol}</span>
                    </Skeleton>
                  </p>
                )}
              </>
            }
            hasSubValue
            subValue="$3.91B"
          />
          <CardItem
            title="Max Discount"
            isPending={isPending}
            value={data?.max_discount}
            hasSubValue
          />
          <CardItem
            title="Bid Placed"
            isPending={isPending}
            value={
              data?.user_bid ? (
                <Skeleton isLoading={isPending} width={28} height={28} rounded>
                  <Check className={styles.check} width={24} height={24} />
                </Skeleton>
              ) : (
                "-"
              )
            }
            hasSubValue
          />
        </div>
      </div>
      <div>
        <Button fullWidth onClick={onViewMarketClick}>
          View Market
        </Button>
      </div>
    </div>
  );
};

export default Card;
