import { Mesh } from 'three';
import { useControls } from "leva";
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import type { LilyProps } from '../types/lily';

export function Ripple({ position }: LilyProps) {
  const rippleRef = useRef<Mesh>(null); // On stocke le mesh qu'on veut animer dans une ref
  const [rippleScale, setRippleScale] = useState(1);
  const [rippleOpacity, setRippleOpacity] = useState(1);
  const [isActive, setIsActive] = useState(false);

  //Leva GUI
  const { rippleSpeed: rippleSpeed, fadeSpeed: fadeSpeed } = useControls('Ripple', {
    rippleSpeed: {
      label: 'Ripple speed', 
      value: 1
    },
    fadeSpeed: {
      label: 'Ripple fade speed',
      value: 1
    }
  })

  //Animation 
  useFrame((state, delta) => { 
    if (rippleRef.current && isActive) {
      setRippleScale(x => x += delta * rippleSpeed)
      setRippleOpacity(opacity => opacity -= delta * fadeSpeed)
    }
  });

  setTimeout(() => {
    setIsActive(false);
  }, 2000);

  return (
    <mesh 
      onClick={() => {
        rippleScale !== 1 ? setRippleScale(1) : null;
        rippleOpacity !== 1 ? setRippleOpacity(1) : null;
        setIsActive(true);
      }}
      ref={rippleRef}
      position={[position.x,position.y-0.1,position.z]}
      rotation={[-Math.PI/2, 0, 0]}
      scale={[rippleScale, rippleScale, rippleScale]}
      visible={isActive ? true : false}
    > 
      <mesh visible={false}>
        <circleGeometry args={[1]} />
        <meshBasicMaterial/>
      </mesh>
      <mesh>
        <ringGeometry args={[0.9,0.92]} />
        <meshBasicMaterial color={'white'} opacity={rippleOpacity} transparent={true}/>
      </mesh>
    </mesh>
  )
}
