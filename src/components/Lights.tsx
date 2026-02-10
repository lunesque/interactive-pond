// Lights.tsx 
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from 'three';

export function Lights() {
  const directionalLightRef = useRef<DirectionalLight>(null!);

  useHelper(directionalLightRef, DirectionalLightHelper, 1, 'blue');
  
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight color="#ff7f00" intensity={3} position={[0, 1, 5]} />
      <directionalLight color="#59CBE8" intensity={3} position={[0, 1, -5]} />
    </>
  )
}