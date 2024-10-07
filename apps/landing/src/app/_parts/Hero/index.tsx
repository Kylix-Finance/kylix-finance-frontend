"use client";

import { motion } from "framer-motion";
import Scene from "./components/Scene";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import Image from "next/image";
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
    <div className="flex flex-col w-full h-full" ref={scrollContainerRef}>
      <div className="h-[2000px]">
        <motion.div className="sticky top-0 ">
          <div className="absolute top-0 z-0 w-full h-screen mt-16 md:mt-24 lg:mt-52">
            <Image
              src="/assets/images/section-bg.png"
              alt="section bg"
              fill
              quality={100}
              draggable="false"
              objectFit="fill"
            />
            <div className="absolute w-full h-full bg-secondary-500/80" />
          </div>
          <Scene scrollYProgress={scrollYProgress} />
        </motion.div>
      </div>
    </div>
  );
}
