import { Canvas } from "@react-three/fiber";
import { Environment, Center, Html } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { useSnapshot } from "valtio";
import state from "../store";
import Coat from "./Coat";
import Pants from "./Pants";
import Shorts from "./Shorts";
import { Suspense } from "react";
import Loader from "../components/Loader";

const CanvasModel = () => {
  const snap = useSnapshot(state);

  const getCloth = () => {
    switch (snap.clothingSelected) {
      case "tshirt":
        return <Shirt />;
      case "coats":
        return <Coat />;
      case "pants":
        return <Pants />;
      case "shorts":
        return <Shorts />;
      default:
        return <Shirt />;
    }
  };

  const snapString = JSON.stringify(snap.clothingSelected);

  return (
    <Canvas
      key={snapString}
      shadows
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <CameraRig>
          <Backdrop />
          <Center>{getCloth()}</Center>
        </CameraRig>
      </Suspense>
    </Canvas>
  );
};

export default CanvasModel;
