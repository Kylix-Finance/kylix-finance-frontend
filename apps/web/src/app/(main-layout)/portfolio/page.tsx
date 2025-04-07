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
        hasIconBackground
        className={styles.total}
        icon={Icons.WalletFill}
        title="Total Portfolio Value"
      >
        <TotalValue />
      </Card>
      <Card
        hasIconBackground
        className={styles.collateral}
        icon={Icons.WalletFill}
        title="Total Collateral Value"
      >
        <CollateralValue />
      </Card>
      <Card hasIconBackground className={styles.borrow}>
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
