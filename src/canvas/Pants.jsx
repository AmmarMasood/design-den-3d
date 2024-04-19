import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import state from "../store";

const Pants = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/cargo_pants.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fulldecal);

  useFrame((state, delta) => {
    const color = new THREE.Color(snap.color).multiplyScalar(1); // Increase color intensity
    easing.dampC(materials.pants_normal.color, color, 1, delta);
  });

  const stateString = JSON.stringify(snap);

  console.log("materials", materials);
  console.log("nodes", nodes);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.Cube011_pants_normal_0.geometry}
        material={materials.pants_normal}
        material-roughness={10}
        scale={0.8}
        dispose={null}
        rotation={[Math.PI / 2, Math.PI, Math.PI]} // Rotate the model 90 degrees around the x-axis
      >
        {snap.isFullTexture && (
          <Decal
            position={[0.02, 0, 0.6]}
            rotation={[2, 0, 0]}
            scale={1.4}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[-0.1, -0.1, 0.9]}
            rotation={[2, 0, 0]}
            scale={0.2}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Pants;
