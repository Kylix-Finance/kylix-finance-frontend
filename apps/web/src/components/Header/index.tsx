"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import Heading from "./Heading";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebarStore } from "~/store";
import { ConnectButton } from "@repo/wallet-modal";
import { useActiveAccount } from "@repo/onchain-utils";
import UserBalance from "./UserBalance";

import DarkMode from "../../assets/svgs/darkMode.svg";
import LightMode from "../../assets/svgs/lightMode.svg";
import usePreferences from "~/hooks/usePreferences";
import { ThemeSwitch } from "./ThemeSwitch";

const Header = () => {
  const { toggle, mode } = usePreferences();

  const { isMobile, setSidebarOpen } = useSidebarStore();

  const { activeAccount } = useActiveAccount();

  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  const SwitchIcon = (
    <span className="flex justify-center items-center rounded-full bg-white dark:bg-[#0D0D0D] size-[21px] shadow-[0px_1.5px_3px_0px_rgba(0,0,0,0.10)]">
      {mode === "light" ? <LightMode /> : <DarkMode />}
    </span>
  );

  return (
    <Box className="w-full mb-4 flex justify-between">
      <Box className="flex">
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setSidebarOpen(true)}
            className="self-start"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box className="flex flex-col items-center  gap-3">
          <Breadcrumbs pathnames={pathnames} />
          <Heading heading={pathnames[0] ?? ""} />
        </Box>
      </Box>
      <Box className="flex dark:bg-[#151515] rounded-[4px] p-2 gap-[16px] h-[60px] items-center text-center">
        {/* <p className="h-full bg-primary-500 px-2 py-1 text-white items-center text-center flex">
          User balance
        </p> */}

        <ThemeSwitch
          checked={mode === "dark"}
          icon={SwitchIcon}
          checkedIcon={SwitchIcon}
          onChange={() => toggle()}
        />
        {activeAccount && <UserBalance />}
        <ConnectButton address={activeAccount?.address} />
      </Box>
    </Box>
  );
};

export default Header;
