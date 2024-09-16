import { Box } from "@mui/material";
import styles from "./_parts/styles.module.css";
import { Card } from "~/components";
import { Icons } from "~/assets/svgs";
import TotalValue from "./_parts/TotalValue";
import CollateralValue from "./_parts/CollateralValue";
import BorrowValue from "./_parts/BorrowValue";
import ProgressBar from "./_parts/ProgressBar";
import Supplied from "./_parts/Supplied";
import Borrowed from "./_parts/Borrowed";

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
        <ProgressBar />
      </Card>
      <Card className={styles.supplied} title="Your Supplies">
        <Supplied />
      </Card>
      <Card className={styles.borrowed} title="Your Borrows">
        <Borrowed />
      </Card>
    </Box>
  );
}
