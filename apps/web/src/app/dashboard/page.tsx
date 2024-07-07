import styles from "./_parts/styles.module.css";
import { Metadata } from "next";
import { metadataGenerator } from "~/config/metadata";
import Borrow from "./_parts/Borrow";
import Burned from "./_parts/Burned";
import Featured from "./_parts/Featured";
import KylixChart from "./_parts/KylixChart";
import Reward from "./_parts/Reward";
import Supply from "./_parts/Supply";
import TotalLocked from "./_parts/TotalLocked";
import VaultChart from "./_parts/VaultChart";
import { Card } from "@mui/material";

export const metadata: Metadata = metadataGenerator({
  title: "Dashboard",
});

const Page = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.total}>
        <TotalLocked />
      </Card>
      <Card className={styles.reward}>
        <Reward />
      </Card>
      <Card className={styles.burned}>
        <Burned />
      </Card>
      <Card className={styles.kylix_chart}>
        <KylixChart />
      </Card>
      <Card className={styles.featured}>
        <Featured />
      </Card>
      <Card className={styles.vault_chart}>
        <VaultChart />
      </Card>
      <Card className={styles.supply}>
        <Supply />
      </Card>
      <Card className={styles.borrow}>
        <Borrow />
      </Card>
    </div>
  );
};
export default Page;
