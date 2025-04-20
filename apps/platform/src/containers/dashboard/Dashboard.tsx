"use client";

import { ButtonGroup } from "~/components/ui/button-group";
import styles from "./Dashboard.module.scss";
import Sun from "~/assets/icons/sun";
import Moon from "~/assets/icons/moon";
import { useState } from "react";
import { IconButton } from "~/components/ui/icon-button";
import Swap from "~/assets/icons/swap";

const Dashboard = () => {
  const [tab, setTab] = useState(0);
  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <ButtonGroup
        tabs={[
          "Auto",
          <Sun width={24} height={24} />,
          <Moon width={24} height={24} />,
        ]}
        tab={tab}
        setTab={setTab}
      />
      <IconButton icon={Swap} />
    </div>
  );
};
export default Dashboard;
