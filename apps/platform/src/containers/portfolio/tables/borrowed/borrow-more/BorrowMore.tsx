import { EmptyState } from "~/components/empty-state";
import PlusCircle from "~/assets/icons/plus-circle.svg";
import { Button } from "~/components/ui/button";
import styles from "./BorrowMore.module.scss";
import { LinkButton } from "~/components/ui/link-button";
import { useMaxBorrowAmount } from "@repo/onchain";
import { BASE_ASSET_ID } from "@repo/shared";
import clsx from "clsx";
interface Props {
  hasBorrowed: boolean;
  hasPadding?: boolean;
}

const BorrowMore = ({ hasBorrowed, hasPadding }: Props) => {
  const usdtAmount = useMaxBorrowAmount({ assetId: BASE_ASSET_ID });
  return (
    <div
      className={clsx({
        [styles.padding]: hasPadding,
      })}
    >
      <EmptyState
        hasBorder
        icon={PlusCircle}
        title={hasBorrowed ? "Borrow more assets" : "Unlock your first borrow"}
        description={
          hasBorrowed ? (
            <p className={styles.description}>
              Based on your collateral, you can borrow up to{" "}
              <span className={styles.description_balance}>${usdtAmount}</span>
            </p>
          ) : (
            "Use your collateral to unlock borrowing power and access a wide range of assets instantly."
          )
        }
        action={
          <LinkButton href="/dashboard" className={styles.action_button}>
            <Button fullWidth>Explore Assets</Button>
          </LinkButton>
        }
      />
    </div>
  );
};

export default BorrowMore;
