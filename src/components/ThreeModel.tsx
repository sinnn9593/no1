import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

const Model = ({
  url,
  scale = 1,
  position = [0, -20, 50],
  rotation = [90, 90, 90]
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF(url);


  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
      groupRef.current.rotation.y = state.clock.elapsedTime / 2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </group>
  );
};

const ThreeModel = () => {
  const modelUrl = `${import.meta.env.BASE_URL}assets/models1/scene.gltf`;  // 修正箇所
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 0.8,
        delay: 0.9,
        stiffness: 160
      }}
      className="w-full h-[500px]"
    >
      <Canvas camera={{ position: [20, 0, 30], fov: 50 }}>
        <ambientLight intensity={3} />
        <Model url= {modelUrl} scale={7.0} position={[-10, -15, 0]} rotation={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;
