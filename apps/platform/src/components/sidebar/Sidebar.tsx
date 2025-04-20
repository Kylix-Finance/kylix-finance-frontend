import { Logo } from "~/assets/svgs";
import styles from "./Sidebar.module.scss";
import Home from "~/assets/icons/home";
import clsx from "clsx";
import User from "~/assets/icons/user";
import Swap from "~/assets/icons/swap";
import SwimmingPool from "~/assets/icons/swimming-pool";
import Coins from "~/assets/icons/coins";
import Stack from "~/assets/icons/stack";

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: User, label: "Settings" },
  { icon: Swap, label: "Profile" },
  { icon: SwimmingPool, label: "Notifications" },
  { icon: Coins, label: "Help" },
  { icon: Stack, label: "Logout" },
];

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo className={styles.logo} />
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={clsx(styles.menu_item, {
                  [styles.active_menu_item]: item.label === "Dashboard",
                })}
              >
                {item.icon && <item.icon className={styles.icon} />}{" "}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
