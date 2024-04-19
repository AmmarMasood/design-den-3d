import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import state from "../store";

const Shorts = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shorts.glb");

  console.log("materials", materials);
  console.log("nodes", nodes);

  const fullTexture = useTexture(snap.fulldecal);
  const logoTexture = useTexture(snap.logoDecal);

  fullTexture.color = new THREE.Color(0xffffff); // White color

  useFrame((state, delta) =>
    easing.dampC(materials["Scene_-_Root"].color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.pants_1.geometry}
        material={materials["Scene_-_Root"]}
        material-roughness={1}
        scale={0.1}
        dispose={null}
        rotation={[0, 0, 0]} // Rotate the model 90 degrees around the x-axis
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, -3, 0]}
            rotation={[0, 0, 0]}
            scale={15}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[-0.5, -1, 0]}
            rotation={[0, 0, 0]}
            scale={1.3}
            map={logoTexture}
            anisotropy={16}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shorts;
