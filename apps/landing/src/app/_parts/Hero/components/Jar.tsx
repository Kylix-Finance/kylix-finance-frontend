"use client";

import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { MotionValue, useSpring, useTransform } from "framer-motion";
interface Props {
  scrollYProgress: MotionValue<number>;
}
const Jar = ({ scrollYProgress }: Props) => {
  const { nodes } = useGLTF("/jar.glb");

  const rotation = useTransform(scrollYProgress, [0, 1], [-Math.PI / 2.3, 0]);
  const sRotation = useSpring(rotation, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });
  const position = useTransform(scrollYProgress, [0, 1], [0.2, -0.5]);
  const sPosition = useSpring(position, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1.5]);
  const sScale = useSpring(scale, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });

  return (
    <motion.group
      scale={sScale}
      dispose={null}
      rotation-x={sRotation}
      rotation-y={-0.04}
      position-y={sPosition}
    >
      <motion.group name="Mesh_0">
        {Object.entries(nodes).map(([name, node]) => {
          if (node instanceof THREE.Mesh) {
            const material = node.material as THREE.MeshStandardMaterial;

            return (
              <motion.mesh key={name} name={name} geometry={node.geometry}>
                <meshStandardMaterial
                  color={material.color}
                  emissive={material.emissive}
                  emissiveIntensity={material.emissiveIntensity}
                  emissiveMap={material.emissiveMap}
                  metalness={1.5}
                  roughness={0.1}
                  transparent={material.transparent}
                  opacity={material.opacity}
                />
              </motion.mesh>
            );
          }
          return null;
        })}
      </motion.group>
    </motion.group>
  );
};

export default Jar;

useGLTF.preload("/jar.glb");
