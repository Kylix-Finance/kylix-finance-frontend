import React from "react";
import { Box } from "@mui/material";
import { Sidebar, Header } from "~/components";
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
          <Box className="w-full h-full flex flex-col" component="main">
            {children}
          </Box>
        </Box>
      </Box>
      <Box className="flex flex-col lg:hidden w-screen h-screen justify-center items-center text-xl font-light p-12 text-center bg-primary-600 dark:bg-black-500 text-white">
        <Image
          alt=""
          className="pb-16"
          quality={100}
          src={kylixLogoImg}
          width={320}
        />
        The Kylix App works best on desktop right now, but We are working hard
        to bring you a mobile version soon.
        <br /> Stay tuned!
      </Box>
    </>
  );
};

export default MainLayout;
