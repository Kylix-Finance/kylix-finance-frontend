import { Box, Skeleton } from "@mui/material";
import styles from "./_parts/styles.module.css";
import { Card } from "~/components";
import { Icons } from "~/assets/svgs";
import TotalValue from "./_parts/TotalValue";
import CollateralValue from "./_parts/CollateralValue";
import BorrowValue from "./_parts/BorrowValue";
import ProgressBar from "./_parts/ProgressBar";
import QuickBorrow from "./_parts/QuickBorrow";

export default function Page() {
  return (
    <Box className={styles.top}>
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
      <Card className={`${styles.progress_bar}`}>
        <ProgressBar />
      </Card>
      <Card className={styles.quick_borrow} title="Quick Supply">
        <QuickBorrow />
      </Card>
    </Box>
  );
}
