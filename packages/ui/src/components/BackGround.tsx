"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CSSProperties } from "react";
import { ThemeMode } from "../hooks";
import { useLocalStorage } from "usehooks-ts";
const objectVariant: Variants = {
  initial: { rotate: 12 },
  animate: {
    y: [0, 15, -15, 0],
    rotate: [12, 15, 9, 12],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

interface Props {
  imgStyle?: CSSProperties;
}

export const BackGround: React.FC<Props> = ({ imgStyle }) => {
  const [mode] = useLocalStorage<ThemeMode>("theme-mode", "dark");

  if (mode === "light") return null;

  return (
    <>
      <div
        className="fixed w-full h-full  top-0  right-0 left-0 -z-10"
        style={{
          background: `radial-gradient(circle at top, #56DDB420 0%, rgba(17, 23, 61, 0) 60%)`,
        }}
      />
      <motion.div
        className="fixed w-full h-screen opacity-15"
        initial="initial"
        animate="animate"
        variants={objectVariant}
      >
        <Image
          src="/assets/images/section-bg.png"
          alt="section bg"
          fill
          style={imgStyle}
          quality={100}
          draggable="false"
          objectFit="fill"
        />
      </motion.div>
    </>
  );
};
