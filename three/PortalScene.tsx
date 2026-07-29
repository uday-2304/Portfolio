"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";

function createWebTexture() {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#ff0000'; // Pure bright neon red background
    ctx.fillRect(0, 0, 1024, 1024);
    ctx.strokeStyle = 'rgba(15, 0, 0, 0.75)'; // Dark strong lines
    ctx.lineWidth = 4;
    
    // Draw realistic spider web
    const numRadii = 16;
    
    // Radiating lines (meridians)
    for (let i = 0; i < numRadii; i++) {
      const x = (i / numRadii) * 1024;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }

    // Scalloped concentric rings (parallels)
    const numRings = 16;
    for (let i = 1; i < numRings; i++) {
      // The rings get closer together near the top pole (center of face)
      // We can use a power function to distribute them
      const progress = Math.pow(i / numRings, 1.2);
      const baseY = progress * 1024;
      
      ctx.beginPath();
      for (let x = 0; x <= 1024; x += 16) {
        const sector = (x / 1024) * numRadii;
        const sectorFraction = sector % 1; // 0 to 1
        // Scallop dip (parabola shape)
        const dipAmount = 15 * (1 - progress) + 5; // Deeper scallops near center
        const dip = dipAmount * 4 * sectorFraction * (1 - sectorFraction); 
        ctx.lineTo(x, baseY - dip);
      }
      ctx.stroke();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createEyeShape(scale = 1) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.5 * scale); // Top point
  shape.bezierCurveTo(-0.2 * scale, 0.4 * scale, -0.4 * scale, 0.1 * scale, -0.3 * scale, -0.1 * scale); // Left curve
  shape.bezierCurveTo(-0.2 * scale, -0.3 * scale, 0.1 * scale, -0.4 * scale, 0.3 * scale, -0.1 * scale); // Bottom curve
  shape.bezierCurveTo(0.4 * scale, 0.1 * scale, 0.2 * scale, 0.4 * scale, 0, 0.5 * scale); // Inner curve back to top
  return shape;
}

// Helper to create perfect, smooth ball-jointed limbs between two 3D points
function Limb({ start, end, radius, material }: { start: [number, number, number], end: [number, number, number], radius: number, material: any }) {
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);
  
  const { midpoint, length, euler } = useMemo(() => {
    const mid = startVec.clone().lerp(endVec, 0.5);
    const len = startVec.distanceTo(endVec);
    const quaternion = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    const direction = endVec.clone().sub(startVec).normalize();
    quaternion.setFromUnitVectors(up, direction);
    return { midpoint: mid, length: len, euler: new THREE.Euler().setFromQuaternion(quaternion) };
  }, [startVec, endVec]);

  return (
    <group>
      <mesh position={start}>
        <sphereGeometry args={[radius, 16, 16]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={midpoint} rotation={euler}>
        <cylinderGeometry args={[radius, radius, length, 16]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={end}>
        <sphereGeometry args={[radius, 16, 16]} />
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
}

function HangingChibiSpiderman({ isUp, setIsUp }: { isUp: boolean, setIsUp: (v: boolean) => void }) {
  const outerGroup = useRef<THREE.Group>(null);
  const innerGroup = useRef<THREE.Group>(null);
  
  // Memoize custom assets
  const webTexture = useMemo(() => createWebTexture(), []);
  const eyeWhiteShape = useMemo(() => createEyeShape(0.9), []);
  const eyeBlackShape = useMemo(() => createEyeShape(1.15), []); // Thicker black outline
  
  const eyeWhiteGeometry = useMemo(() => new THREE.ShapeGeometry(eyeWhiteShape), [eyeWhiteShape]);
  const eyeBlackGeometry = useMemo(() => new THREE.ShapeGeometry(eyeBlackShape), [eyeBlackShape]);

  // Gentle swinging animation and smooth up/down transition
  useFrame((state, delta) => {
    if (innerGroup.current) {
      if (!isUp) {
        const t = Date.now() / 1000; // Use pure time to prevent any ThreeJS clock delta bugs
        innerGroup.current.rotation.z = Math.sin(t * 1.5) * 0.05;
        innerGroup.current.position.x = Math.sin(t * 1.5) * 0.05;
      } else {
        // Smoothly return to center when pulled up
        innerGroup.current.rotation.z = THREE.MathUtils.lerp(innerGroup.current.rotation.z, 0, 4 * delta);
        innerGroup.current.position.x = THREE.MathUtils.lerp(innerGroup.current.position.x, 0, 4 * delta);
      }
    }
    if (outerGroup.current) {
      const targetY = isUp ? 3.8 : -0.1;
      outerGroup.current.position.y = THREE.MathUtils.lerp(outerGroup.current.position.y, targetY, 4 * delta);
    }
  });

  // Materials - brighter, cleaner, with accurate web texture
  const redMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    map: webTexture || undefined,
    color: !webTexture ? "#ff0000" : "#ffffff", 
    roughness: 0.5, 
    metalness: 0.1,
    transparent: false,
    opacity: 1,
    depthWrite: true
  }), [webTexture]);

  const blueMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: "#111111", // Black suit accents
    roughness: 0.8, 
    metalness: 0.05,
    transparent: false,
    opacity: 1,
    depthWrite: true
  }), []);

  return (
    <group 
      ref={outerGroup}
      onPointerOver={() => document.body.style.cursor = 'grab'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setIsUp(!isUp);
      }}
      position={[0, -0.1, 0]} 
      scale={[0.9, 0.9, 0.9]}
    >
      <group ref={innerGroup}>
        {/* Tight invisible hitbox just for the web string to make the thin line easier to click */}
        <mesh position={[0, 4, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 8, 8]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>

        {/* Web string */}
        <mesh position={[0, 4, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Additional localized light for face brightness */}
        <pointLight position={[0, -1, 3]} intensity={1.5} color="#ffffff" distance={10} />

        {/* Spiderman Group (Upside down pose) */}
        <group position={[0, 0.5, 0]} rotation={[0, 0, Math.PI]}>
          
        {/* Head (Perfectly round sphere) */}
          <mesh position={[0, 1.2, 0.1]} scale={[1.25, 1.25, 1.25]} rotation={[-Math.PI / 2 - 0.1, 0, 0]}>
            <sphereGeometry args={[0.8, 64, 64]} />
            <primitive object={redMaterial} attach="material" />
          </mesh>

        {/* Left Eye */}
        <group position={[-0.45, 1.15, 1.08]} rotation={[0.1, -0.4, 0.35]}>
          {/* Black Outline */}
          <mesh geometry={eyeBlackGeometry} position={[0, 0, -0.01]}>
            <meshBasicMaterial color="#080808" side={THREE.DoubleSide} />
          </mesh>
          {/* White Inner */}
          <mesh geometry={eyeWhiteGeometry}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} side={THREE.DoubleSide} />
          </mesh>
        </group>

        {/* Right Eye */}
        <group position={[0.45, 1.15, 1.08]} rotation={[0.1, 0.4, -0.35]}>
          <group scale={[-1, 1, 1]}>
            <mesh geometry={eyeBlackGeometry} position={[0, 0, -0.01]}>
              <meshBasicMaterial color="#080808" side={THREE.DoubleSide} />
            </mesh>
            <mesh geometry={eyeWhiteGeometry}>
              <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} side={THREE.DoubleSide} />
            </mesh>
          </group>
        </group>

        {/* Torso (Very tiny compared to head) */}
        <mesh position={[0, 0.3, 0.1]} scale={[1, 1, 0.8]}>
          <capsuleGeometry args={[0.35, 0.4, 32, 32]} />
          <primitive object={blueMaterial} attach="material" />
        </mesh>
        {/* Torso Red Center (V-shape approximation) */}
        <mesh position={[0, 0.3, 0.2]}>
          <capsuleGeometry args={[0.2, 0.42, 32, 32]} />
          <primitive object={redMaterial} attach="material" />
        </mesh>
        
        {/* Spider Logo on chest - Prominent and clean */}
        <group position={[0, 0.4, 0.35]}>
          {/* Spider Body */}
          <mesh scale={[0.12, 0.15, 0.05]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color="#080808" />
          </mesh>
          {/* Tiny legs */}
          {[...Array(4)].map((_, i) => (
            <mesh key={`l-${i}`} position={[-0.06, 0.03 - i * 0.02, 0]} rotation={[0, 0, 0.6 + i * 0.3]}>
              <capsuleGeometry args={[0.01, 0.1, 8, 8]} />
              <meshBasicMaterial color="#080808" />
            </mesh>
          ))}
          {[...Array(4)].map((_, i) => (
            <mesh key={`r-${i}`} position={[0.06, 0.03 - i * 0.02, 0]} rotation={[0, 0, -0.6 - i * 0.3]}>
              <capsuleGeometry args={[0.01, 0.1, 8, 8]} />
              <meshBasicMaterial color="#080808" />
            </mesh>
          ))}
        </group>

        {/* Smooth Ball-Jointed Limbs */}
        
        {/* Right Leg (Left side of screen) */}
        <Limb start={[0.15, 0.15, 0.05]} end={[0.35, -0.25, 0.1]} radius={0.14} material={blueMaterial} />
        <Limb start={[0.35, -0.25, 0.1]} end={[0.1, -0.5, 0.05]} radius={0.13} material={redMaterial} />
        
        {/* Left Leg (Right side of screen) */}
        <Limb start={[-0.15, 0.15, 0.05]} end={[-0.35, -0.25, 0.1]} radius={0.14} material={blueMaterial} />
        <Limb start={[-0.35, -0.25, 0.1]} end={[-0.1, -0.5, 0.05]} radius={0.13} material={redMaterial} />

        {/* Right Arm (Left side of screen) */}
        <Limb start={[0.15, 0.25, 0.2]} end={[0.12, -0.05, 0.25]} radius={0.11} material={blueMaterial} />
        <Limb start={[0.12, -0.05, 0.25]} end={[0.08, -0.3, 0.25]} radius={0.10} material={redMaterial} />

        {/* Left Arm (Right side of screen) */}
        <Limb start={[-0.15, 0.25, 0.2]} end={[-0.12, -0.05, 0.25]} radius={0.11} material={blueMaterial} />
        <Limb start={[-0.12, -0.05, 0.25]} end={[-0.08, -0.3, 0.25]} radius={0.10} material={redMaterial} />
        
      </group>
      </group>
    </group>
  );
}

function FloatingParticles() {
  const count = 500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 30; // wider spread
  }
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      {/* Subtle warm orange particles for atmosphere */}
      <pointsMaterial size={0.03} color="#ffb066" transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} />
    </points>
  );
}

export function PortalScene() {
  const [isUp, setIsUp] = useState(false);

  return (
    <div className="fixed inset-0 z-0 bg-[#020813]">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 10, 10]} intensity={4} color="#ffffff" penumbra={1} />
        <spotLight position={[-5, -10, -5]} intensity={2} color="#ff9c33" penumbra={1} />
        
        <OrbitControls 
          enabled={!isUp}
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          minAzimuthAngle={-Math.PI / 1.5}
          maxAzimuthAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2 - Math.PI / 4}
          maxPolarAngle={Math.PI / 2 + Math.PI / 4}
        />
        
        <group onPointerOver={() => document.body.style.cursor = 'grab'} onPointerOut={() => document.body.style.cursor = 'auto'}>
          <HangingChibiSpiderman isUp={isUp} setIsUp={setIsUp} />
        </group>

        <FloatingParticles />
        
      </Canvas>
    </div>
  );
}