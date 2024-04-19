import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/cloth_jacket.glb");

  console.log("nodes", nodes, materials);
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fulldecal);

  useFrame((state, delta) =>
    easing.dampC(materials.JacketAndShirt.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.JacketAndShirt}
        material-roughness={1}
        scale={0.2}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0.3, 5, 0]}
            rotation={[0, 0, 0]}
            scale={8}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[-0.5, 6.4, 0]}
            rotation={[0, 0, 0]}
            scale={0.7}
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

export default Shirt;

useGLTF.preload("/cloth_jacket.glb");
