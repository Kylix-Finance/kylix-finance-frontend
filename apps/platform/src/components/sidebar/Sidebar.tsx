"use client";
import { Logo } from "~/assets/svgs";
import styles from "./Sidebar.module.scss";
import Home from "~/assets/icons/home";
import clsx from "clsx";
import User from "~/assets/icons/user";
import Swap from "~/assets/icons/swap";
import SwimmingPool from "~/assets/icons/swimming-pool";
import Coins from "~/assets/icons/coins";
import Stack from "~/assets/icons/stack";
import { usePathname } from "next/navigation";
import Bank from "~/assets/icons/bank";
import Link from "next/link";

type MenuItem = {
  path: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  disabled?: boolean;
};

const menuItems: MenuItem[] = [
  { path: "/dashboard", label: "Dashboard", icon: Home },
  { path: "/portfolio", label: "Portfolio", icon: User },
  { path: "/swap", label: "Swap", icon: Swap },
  { path: "/pools", label: "Pools", icon: SwimmingPool },
  { path: "/loans", label: "Loans", icon: Coins },
  { path: "/stake", label: "Stake", icon: Stack },
  { path: "/governance", label: "Governance", icon: Bank, disabled: true },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div>
        <Logo className={styles.logo} />
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
            {menuItems.map((item, index) => (
              <Link href={item.disabled ? "#" : item.path} key={index}>
                <li
                  className={clsx(styles.menu_item, {
                    [styles.active_menu_item]: pathname === item.path,
                    [styles.disabled_menu_item]: item.disabled,
                  })}
                >
                  {item.icon && <item.icon className={styles.icon} />}
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
