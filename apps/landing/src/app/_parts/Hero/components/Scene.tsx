"use client";

import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import Jar from "./Jar";
import { Suspense, useEffect, useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MotionCanvas, LayoutCamera } from "framer-motion-3d";
import { MotionConfig, MotionValue, useTransform } from "framer-motion";

import * as THREE from "three";
import { extend, useThree } from "@react-three/fiber";
import { OrthographicCamera as ThreeOrthographicCamera } from "three";
import Camera from "./Camera";

extend(THREE);

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Scene = ({ scrollYProgress }: Props) => {
  return (
    <MotionConfig>
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
    </MotionConfig>
  );
};

export default Scene;
