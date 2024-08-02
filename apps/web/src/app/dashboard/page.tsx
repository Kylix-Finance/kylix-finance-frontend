import styles from "./_parts/styles.module.css";
import { Metadata } from "next";
import Borrow from "./_parts/Borrow";
import Burned from "./_parts/Burned";
import Featured from "./_parts/Featured";
import KylixChart from "./_parts/KylixChart";
import Reward from "./_parts/Reward";
import Supply from "./_parts/Supply";
import TotalLocked from "./_parts/TotalLocked";
import VaultChart from "./_parts/VaultChart";
import { Card } from "~/components";
import { Icons } from "~/assets/svgs";
import { mergeMetadata } from "~/config/metadata";

export const metadata: Metadata = mergeMetadata({
  title: "Dashboard",
});

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Card
          className={styles.total}
          title="Total value locked"
          icon={Icons.WalletFill}
          hasIconBackground
        >
          <TotalLocked />
        </Card>
        <Card
          className={styles.reward}
          title="Reward imbursed to lenders"
          icon={Icons.WalletFill}
        >
          <Reward />
        </Card>
        <Card
          className={styles.burned}
          title=" Kylix Burned"
          icon={Icons.WalletFill}
        >
          <Burned />
        </Card>
        <Card className={styles.kylix_chart}>
          <KylixChart />
        </Card>
      </div>
      <div className={styles.bottom}>
        <Card className={styles.featured} title="Featured Market">
          <Featured />
        </Card>
        <Card className={styles.vault_chart}>
          <VaultChart />
        </Card>
        <Card className={styles.supply} title="Assets to Supply">
          <Supply />
        </Card>
        <Card className={styles.borrow} title="Assets to Borrow">
          <Borrow />
        </Card>
      </div>
    </div>
  );
};
export default Page;
