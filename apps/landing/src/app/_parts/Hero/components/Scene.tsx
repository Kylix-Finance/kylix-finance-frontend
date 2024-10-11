"use client";

import { Environment, OrbitControls, Html } from "@react-three/drei";
import Jar from "./Jar";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MotionCanvas } from "framer-motion-3d";
import { MotionConfig, MotionValue } from "framer-motion";
import Image from "next/image";

import * as THREE from "three";
import { extend } from "@react-three/fiber";
import Camera from "./Camera";

extend(THREE);

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Scene = ({ scrollYProgress }: Props) => {
  return (
    <MotionCanvas shadows dpr={[1, 2]} style={{ height: "100vh" }}>
      <Camera />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        enableDamping={true}
        dampingFactor={0.01}
      />
      <Suspense fallback={null}>
        <EffectComposer>
          <Bloom intensity={0.2} width={1000} height={1000} kernelSize={5} />
        </EffectComposer>
        <Jar scrollYProgress={scrollYProgress} />

        <Environment preset="warehouse" />
      </Suspense>
    </MotionCanvas>
  );
};

export default Scene;
