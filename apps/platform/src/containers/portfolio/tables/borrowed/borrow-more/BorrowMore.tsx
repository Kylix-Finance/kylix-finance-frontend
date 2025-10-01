import { EmptyState } from "~/components/empty-state";
import PlusCircle from "~/assets/icons/plus-circle.svg";
import { Button } from "~/components/ui/button";
import styles from "./BorrowMore.module.scss";
import { LinkButton } from "~/components/ui/link-button";
interface Props {
  hasBorrowed: boolean;
  usdtBalance: number;
}

const BorrowMore = ({ hasBorrowed, usdtBalance }: Props) => {
  return (
    <div className={styles.container}>
      <EmptyState
        hasBorder
        icon={PlusCircle}
        title={hasBorrowed ? "Borrow more assets" : "Unlock your first borrow"}
        description={
          hasBorrowed ? (
            <p className={styles.description}>
              Based on your collateral, you can borrow up to{" "}
              <span className={styles.description_balance}>${usdtBalance}</span>
            </p>
          ) : (
            "Use your collateral to unlock borrowing power and access a wide range of assets instantly."
          )
        }
        action={
          <LinkButton href="/dashboard">
            <Button>Explore Assets</Button>
          </LinkButton>
        }
      />
    </div>
  );
};

export default BorrowMore;
