import { Html } from '@react-three/drei';
import './SwitchLightingButton.css';
import { useRef, useState } from "react";

export function SwitchLightingButton() {
  const [lighting, setLighting] = useState('day');
  
  return (
    <Html>
      <div className="button">
        <img width="40" height={40} src="/sun.png" />
      </div>
    </Html>
  )
}