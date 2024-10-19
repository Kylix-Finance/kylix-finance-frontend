"use client";
import { useWindowSize } from "usehooks-ts";
import Hero3D from "./components/Hero3D";
import Button from "~/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { logoImg } from "~/assets/images";

const Hero = () => {
  const { height = 0, width = 0 } = useWindowSize();

  return (
    <div className="h-full w-full">
      {height >= 600 && width >= 700 ? (
        <Hero3D />
      ) : (
        // This is the fallback for smaller screens
        <div className="w-full h-full relative flex flex-col justify-center items-center">
          <div className="px-6 mt-[20vh] flex flex-col gap-2 justify-center items-center z-50">
            <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2.5 font-bold font-heading w-full h-full text-4xl md:text-5xl lg:text-6xl">
              <span className="text-primary-500 flex-wrap text-center">
                Multi-chain &nbsp;Lending.
              </span>
              <span className="text-white"> Evolved</span>
            </h2>
            <p className="font-light text-xs md:text-sm lg:text-base leading-6 text-secondary-100 text-center ">
              <b>
                Borrow, lend and earn seamlessly across multiple networks <br />
                with Kylix Finance, the new multi-chain lending platform.
              </b>
              <br />
              <br />
            </p>
            <div className="flex gap-4">
              <Button color="secondary">Get start</Button>
              <Button color="white" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
          <Image src={logoImg} alt="kylix" height={400} />
        </div>
      )}
    </div>
  );
};

export default Hero;
