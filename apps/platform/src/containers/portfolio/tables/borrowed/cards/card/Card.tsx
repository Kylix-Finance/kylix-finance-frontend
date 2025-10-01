import { formatBigNumbers } from "@repo/onchain";
import styles from "./Card.module.scss";
import TokenIcon from "~/components/token-icon";
import { Button } from "~/components/ui/button";
import Skeleton from "~/components/skeleton";
import { VoidFunction } from "~/types";
import Link from "next/link";
import { useAccountsStore } from "@repo/shared";
import { BorrowedResponse } from "../../Borrowed";
import CardItem from "~/components/card-item";
interface Props {
  data: BorrowedResponse[number] | null;
  isPending: boolean;
  onRepayClick: VoidFunction;
  onBorrowClick: VoidFunction;
}

const Card = ({ data, isPending, onBorrowClick, onRepayClick }: Props) => {
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
            title="Borrowed"
            value={` ${data && formatBigNumbers(data.borrowed.toString(), data.decimals)} ${data && data.assetSymbol}`}
            hasSubValue
            subValue="$3.91B"
            isPending={isPending}
          />
          <CardItem
            title="Borrow APY"
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
                onRepayClick();
              }}
              disabled={!data || !account?.address}
            >
              Borrow
            </Button>
          </Skeleton>
          <Skeleton borderRadius={10} isLoading={isPending} height={44}>
            <Button
              size="large"
              variant="secondary"
              fullWidth
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                onBorrowClick();
              }}
              disabled={!data || !account?.address}
            >
              Borrow
            </Button>
          </Skeleton>
        </div>
      </div>
    </Link>
  );
};

export default Card;
