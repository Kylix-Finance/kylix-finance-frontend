"use client";

import { motion, useSpring } from "framer-motion";
import Scene from "./components/Scene";
import { useCallback, useMemo, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import Image from "next/image";
import { logoImg } from "~/assets/images";
import Button from "~/components/Button";
export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ axis: "y" });
  const { width = 0, height = 0 } = useWindowSize();
  const heightRatio = height / 600;
  const aspectRatio = width / height;

  const scrollYProgress = useTransform(
    scrollY,
    [0, 2000 - height - 100],
    [0, 1]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [heightRatio, 0, 0]
  );
  const imageTranslateY = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [0, -30, -30]
  );
  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [1, 1, 0, 0]
  );
  const firstTextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [0, -90, -90, -90]
  );
  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    [0, 0, 1, 1]
  );
  const secondTextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 1],
    [0, 0, 0, -200]
  );

  const sSecondTextTranslateY = useSpring(secondTextTranslateY, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });

  const imgBottom = useCallback(() => calculateBottom(height), [height]);

  return (
    <div className="flex flex-col w-full h-full " ref={scrollContainerRef}>
      <div className="h-[2000px]">
        <motion.div className="sticky top-16 flex justify-center">
          <Scene key={`${width}-${height}`} scrollYProgress={scrollYProgress} />
          <motion.div
            style={{
              opacity: imageOpacity,
              scale: imageOpacity,
              translateY: imageTranslateY,
              translateX: "-160px",
              bottom: imgBottom(),
            }}
            className="absolute bottom-[48px] left-1/2 "
          >
            <Image src={logoImg} alt="kylix" height={320} />
          </motion.div>
          {/* FIRST Text START */}
          <motion.div
            style={{
              opacity: firstTextOpacity,
              translateY: firstTextTranslateY,
            }}
            className="absolute top-[20%] flex flex-col gap-2 justify-center items-center z-50"
          >
            <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2.5 font-bold font-heading w-full h-full text-4xl md:text-5xl lg:text-6xl">
              <span className="text-primary-500">Multi-chain Lending.</span>
              <span className="text-white"> Evolved</span>
            </h2>
            <p className="font-light text-xs md:text-sm lg:text-base leading-6 text-secondary-100 text-center ">
              A new-generation multi-chain Lending platform, with self-repaying
              loans and a marketplace <br /> for Collateral Liquidation.
            </p>
            <div className="flex gap-4">
              <Button color="secondary">Get start</Button>
              <Button color="white" variant="outline">
                Learn more
              </Button>
            </div>
          </motion.div>
          {/* FIRST Text END */}

          {/* ---------------------- */}

          {/* SECOND Text START */}
          <motion.div
            style={{
              opacity: secondTextOpacity,
              translateY: sSecondTextTranslateY,
            }}
            className="absolute top-[35%] flex flex-col gap-2 justify-center items-center z-50"
          >
            <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2.5 font-bold font-heading w-full h-full text-4xl md:text-5xl lg:text-6xl">
              <span className="text-primary-500">Multi-chain</span>
              <span className="text-white"> Lending</span>
            </h2>
            <p className="font-light text-xs md:text-sm lg:text-base leading-6 text-secondary-100 text-center ">
              The new cross-chain Lending Platform, on Polkadot.
            </p>
            <div className="flex gap-4">
              <Button color="secondary">Get start</Button>
            </div>
          </motion.div>
          {/* SECOND Text END */}
        </motion.div>
      </div>
    </div>
  );
}

const rh = 600;
function calculateBottom(h: number) {
  if (h >= 600 && h < 650) return 50 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 650 && h < 700) return 52 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 700 && h < 750) return 50 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 750 && h < 800) return 50 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 800 && h < 850) return 48 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 850 && h < 875) return 46 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 875 && h < 900) return 45 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 900 && h < 925) return 44 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 925 && h < 950) return 43 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 950 && h < 975) return 42 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 975 && h < 1000) return 41 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1000 && h < 1025) return 39.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1025 && h < 1050) return 38.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1050 && h < 1075) return 37.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1075 && h < 1100) return 36.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1100 && h < 1125) return 35.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1125 && h < 1150) return 34.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1150 && h < 1175) return 33.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1175 && h < 1200) return 32.25 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1200 && h < 1225) return 31.4 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1225 && h < 1250) return 30.4 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1250 && h < 1275) return 29.6 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1275 && h < 1300) return 28.8 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1300 && h < 1325) return 28.1 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1325 && h < 1350) return 27.3 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1350 && h < 1375) return 26.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1375 && h < 1400) return 25.8 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1400 && h < 1425) return 25.1 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1425 && h < 1450) return 24.5 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1450 && h < 1475) return 23.8 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1475 && h < 1500) return 23.2 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1500 && h < 1525) return 22.6 * (Math.pow(h, 3) / Math.pow(rh, 3));
  if (h >= 1525 && h < 1550) return 22.1 * (Math.pow(h, 3) / Math.pow(rh, 3));
}
