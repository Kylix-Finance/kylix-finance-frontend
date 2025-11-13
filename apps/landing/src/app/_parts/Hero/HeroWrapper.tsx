"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => <div className="w-full h-screen" />,
});

export default Hero;
