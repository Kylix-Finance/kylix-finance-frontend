"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import Jar from "./Jar";
import { Suspense, useEffect, useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MotionCanvas, LayoutCamera } from "framer-motion-3d";
import { MotionConfig, MotionValue, useTransform } from "framer-motion";

import * as THREE from "three";
import { extend } from "@react-three/fiber";

extend(THREE);

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Scene = ({ scrollYProgress }: Props) => {
  return (
    <MotionConfig>
      <MotionCanvas shadows dpr={[1, 2]} style={{ height: "100vh" }}>
        <LayoutCamera makeDefault position={[0, 0, -2.9]} fov={85} />
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
    </MotionConfig>
  );
};

export default Scene;
