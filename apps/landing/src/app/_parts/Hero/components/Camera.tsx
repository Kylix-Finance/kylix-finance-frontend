"use client";

import { OrthographicCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrthographicCamera as ThreeOrthographicCamera } from "three";

const Camera = () => {
  const { viewport } = useThree();
  const cameraRef = useRef<ThreeOrthographicCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      const aspect = viewport.width / viewport.height;
      const frustumSize = 5;

      cameraRef.current.left = (frustumSize * aspect) / -2;
      cameraRef.current.right = (frustumSize * aspect) / 2;
      cameraRef.current.top = frustumSize / 2;
      cameraRef.current.bottom = frustumSize / -2;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [viewport]);
  return (
    <OrthographicCamera ref={cameraRef} makeDefault position={[0, 0, -10]} />
  );
};

export default Camera;
