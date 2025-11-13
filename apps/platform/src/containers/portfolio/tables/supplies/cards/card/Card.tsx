import { formatBigNumbers } from "@repo/onchain";
import styles from "./Card.module.scss";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import Skeleton from "~/components/skeleton";
import { VoidFunction } from "~/types";
import Link from "next/link";
import { useAccountsStore } from "@repo/shared";
import { SuppliesResponse } from "../../Supplies";
import CardItem from "~/components/card-item";
import { LinkButton } from "~/components/ui/link-button";
interface Props {
  data: SuppliesResponse[number] | null;
  isPending: boolean;
  onSupplyClick: VoidFunction;
}

const Card = ({ data, isPending, onSupplyClick }: Props) => {
  const { account } = useAccountsStore();
  return (
    <Link href={`/markets/${data?.assetId}`} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Skeleton rounded isLoading={isPending} circle width={40} height={40}>
            <TokenIcon
              width={40}
              height={44}
              symbol={data?.assetSymbol || ""}
            />
          </Skeleton>
          <Skeleton rounded isLoading={isPending} height={16} width={40}>
            <p>{data?.assetSymbol}</p>
          </Skeleton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.detail}>
          <CardItem
            title="Supplied"
            value={` ${data && formatBigNumbers(data.supplied.toString(), data.decimals)} ${data && data.assetSymbol}`}
            hasSubValue
            subValue="$3.91B"
            isPending={isPending}
          />
          <CardItem
            title="Supply APY"
            isPending={isPending}
            value={`${data && formatBigNumbers(data.apy.toString(), 2)}%`}
          />
          <CardItem
            title="Balance"
            value={` ${data && formatBigNumbers(data.balance.toString(), data.decimals)} ${data && data.assetSymbol}`}
            subValue="$3.91B"
            hasSubValue
            isPending={isPending}
          />
        </div>
        <div className={styles.buttons}>
          <Skeleton borderRadius={10} isLoading={isPending} height={44}>
            <Button
              size="large"
              fullWidth
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onSupplyClick();
              }}
              disabled={!data || !account?.address}
            >
              Supply
            </Button>
          </Skeleton>
          <Skeleton borderRadius={10} isLoading={isPending} height={44}>
            <LinkButton href={`/markets/${data?.assetId}`}>
              <Button
                size="large"
                variant="secondary"
                fullWidth
                disabled={!data || !account?.address}
              >
                Details
              </Button>
            </LinkButton>
          </Skeleton>
        </div>
      </div>
    </Link>
  );
};

export default Card;
