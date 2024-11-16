import React from "react";
import { Box } from "@mui/material";
import { Sidebar, Header } from "~/components";
import { KylixLogo } from "~/assets/svgs";
import Image from "next/image";
import { kylixLogoImg } from "~/assets/imgs";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Box className="hidden lg:flex">
        <Sidebar />
        <Box className="w-full min-h-full flex flex-col p-6">
          <Header />
          <Box component="main" className="w-full h-full flex flex-col">
            {children}
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col lg:hidden w-screen h-screen justify-center items-center text-xl font-light p-12 text-center bg-primary-600 text-white">
        <Image
          src={kylixLogoImg}
          alt=""
          width={320}
          quality={100}
          className="pb-16"
        />
        The Kylix App works best on desktop right now, but We are working hard
        to bring you a mobile version soon.
        <br /> Stay tuned!
      </Box>
    </>
  );
};

export default MainLayout;
