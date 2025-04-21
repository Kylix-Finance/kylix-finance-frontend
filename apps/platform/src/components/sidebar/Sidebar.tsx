"use client";
import { Logo, LogoDot } from "~/assets/svgs";
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
import SquareHalf from "~/assets/icons/square-half";
import { useState } from "react";
import { IconButton } from "../ui/icon-button";
import Discord from "~/assets/icons/discord";
import Telegram from "~/assets/icons/telegram";
import X from "~/assets/icons/x";
import { motion } from "framer-motion";

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

const socialItems = [
  { path: "https://instagram.com/kylix", label: "Instagram", icon: Home },
  { path: "https://twitter.com/kylix", label: "Twitter", icon: X },
  { path: "https://discord.gg/kylix", label: "Discord", icon: Discord },
  { path: "https://t.me/kylix", label: "Telegram", icon: Telegram },
];

export const Sidebar = () => {
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={styles.container}
      style={{ width: isExpanded ? "244px" : "84px" }}
    >
      <SquareHalf
        className={styles.expand_square}
        onClick={() => {
          setIsExpanded((o) => !o);
        }}
      />

      <div className={styles.sidebar}>
        <div className={styles.logo_wrapper}>
          <LogoDot
            className={styles.logo_dot}
            style={{ opacity: isExpanded ? 1 : 0 }}
          />
          <Logo className={styles.logo} />
        </div>

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
      <motion.ul className={styles.socials_container}>
        {socialItems.map((item, index) => {
          const position = index * 52; // 44px (icon size) + 8px (gap)
          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x: isExpanded ? position + -1 : 0,
                y: isExpanded ? 0 : position * -1,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Link href={item.path} target="_blank" rel="noopener noreferrer">
                <IconButton icon={item.icon} />
              </Link>
            </motion.div>
          );
        })}
      </motion.ul>
    </div>
  );
};
