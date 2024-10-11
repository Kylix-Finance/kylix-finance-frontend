"use client";

import { motion } from "framer-motion";
import Scene from "./components/Scene";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import Image from "next/image";
import { logoImg } from "~/assets/images";
export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ axis: "y" });
  const { height = 0 } = useWindowSize();

  const scrollYProgress = useTransform(
    scrollY,
    [0, 2000 - height - 100],
    [0, 1]
  );

  return (
    <div className="flex flex-col w-full h-full " ref={scrollContainerRef}>
      <div className="h-[2000px]">
        <motion.div className="sticky top-16">
          <Scene scrollYProgress={scrollYProgress} />
          <Image
            className="absolute  bottom-16 left-1/2 translate-x-[-250px] "
            src={logoImg}
            alt="kylix"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
}
