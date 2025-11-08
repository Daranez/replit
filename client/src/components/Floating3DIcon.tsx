import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Floating3DIconProps {
  position: [number, number, number];
  color: string;
  icon: 'shield' | 'clock' | 'document' | 'clipboard' | 'badge' | 'puzzle';
  delay?: number;
}

export function Floating3DIcon({ position, color, icon, delay = 0 }: Floating3DIconProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(delay);

  useFrame((state, delta) => {
    if (meshRef.current) {
      time.current += delta;
      meshRef.current.position.y = position[1] + Math.sin(time.current) * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const getGeometry = () => {
    switch (icon) {
      case 'shield':
        return <coneGeometry args={[0.5, 1, 4]} />;
      case 'clock':
        return <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />;
      case 'document':
        return <boxGeometry args={[0.7, 1, 0.1]} />;
      case 'clipboard':
        return <boxGeometry args={[0.8, 1, 0.15]} />;
      case 'badge':
        return <octahedronGeometry args={[0.5, 0]} />;
      case 'puzzle':
        return <torusKnotGeometry args={[0.4, 0.15, 64, 8]} />;
      default:
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}
