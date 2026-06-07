"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const particleCount = 2000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const colorTheme = theme === "light" ? new THREE.Color(0x333333) : new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      col[i * 3] = colorTheme.r;
      col[i * 3 + 1] = colorTheme.g;
      col[i * 3 + 2] = colorTheme.b;
    }
    return [pos, col];
  }, [theme]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export function BackgroundCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
