"use client";
import { useWindowSize } from "usehooks-ts";
import Hero3D from "./components/Hero3D";

const Hero = () => {
  const { height = 0 } = useWindowSize();

  return (
    <div className="h-full w-full">
      {height >= 600 ? (
        <Hero3D />
      ) : (
        <div className="w-full h-full flex flex-col"></div>
      )}
    </div>
  );
};

export default Hero;
