import { Box } from "@mui/material";
import { Card } from "~/components";
import { Icons } from "~/assets/svgs";
import Borrowed from "./_parts/Borrowed";
import BorrowValue from "./_parts/BorrowValue";
import CollateralValue from "./_parts/CollateralValue";
import Ltv from "./_parts/Ltv";
import styles from "./_parts/styles.module.css";
import Supplied from "./_parts/Supplied";
import TotalValue from "./_parts/TotalValue";

export default function Page() {
  return (
    <Box className={styles.container}>
      <Card
        className={styles.total}
        title="Total value"
        icon={Icons.WalletFill}
        hasIconBackground
      >
        <TotalValue />
      </Card>
      <Card
        className={styles.collateral}
        title="Collateral value"
        icon={Icons.WalletFill}
        hasIconBackground
      >
        <CollateralValue />
      </Card>
      <Card className={styles.borrow} hasIconBackground>
        <BorrowValue />
      </Card>
      <Card className={styles.progress_bar}>
        <Ltv />
      </Card>
      <Card className={styles.supplied} title="Your Supplies">
        <Supplied />
      </Card>
      <Card className={styles.borrowed} title="Your Borrows">
        <Borrowed />
      </Card>
      {/* <Card className={styles.quick_borrow} title="Your Borrows">
        <QuickBorrow />
      </Card> */}
    </Box>
  );
}
