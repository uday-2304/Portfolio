"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function GarageEnvironment() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.pointer.x * 0.2;
      group.current.rotation.x = -state.pointer.y * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Basic representation of an F1 car (placeholder) */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1.5, 0.5, 4]} />
        <meshStandardMaterial color="#E10600" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Wheels */}
      <mesh position={[1, -1, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-1, -1, 1.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[1, -1, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-1, -1, -1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* Rear Wing */}
      <mesh position={[0, -0.2, -1.8]}>
        <boxGeometry args={[1.8, 0.1, 0.4]} />
        <meshStandardMaterial color="#E10600" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Floor */}
      <mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} metalness={0.2} />
      </mesh>
    </group>
  );
}

export function F1GarageScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1.5, 6]} fov={50} />
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 5, 0]} intensity={5} color="#E10600" />
        <spotLight position={[5, 2, 5]} intensity={2} color="#ffffff" />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={2} />
        <GarageEnvironment />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
