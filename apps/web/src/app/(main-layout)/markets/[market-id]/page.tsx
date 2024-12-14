import { Card } from "~/components";
import TransactionForm from "./_parts/TransactionForm";
import PoolDetails from "./_parts/PoolDetails";
import { Box } from "@mui/material";
import TotalChart from "./_parts/TotalChart";
import ApyChart from "./_parts/ApyChart";
import styles from "./ styles.module.css";

export default function page() {
  return (
    <Card className="">
      <Box className={styles.container}>
        <Box className={styles.details}>
          <PoolDetails />
        </Box>
        <Box className={styles.apy_chart}>
          <ApyChart />
        </Box>
        <TotalChart />
        <Box className={styles.form}>
          <TransactionForm />
        </Box>
      </Box>
    </Card>
  );
}
