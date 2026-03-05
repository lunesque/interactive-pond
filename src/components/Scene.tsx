import { useRef, useState } from "react";
import { Lights } from "./Lights";
import { Lily } from './Lily';
import { LilyPad } from "./LilyPad";
import { SwitchLightingButton } from './SwitchLightingButton/SwitchLightingButton.tsx';
import { Ripple } from "./Ripple.tsx";

export function Scene() {
  return (
    <>
      {/* <SwitchLightingButton /> */}
      <Lights />
      <Lily position={{x: 0.5, y: 0, z: 2}}/>
      <Lily position={{x: 2, y: 0, z: -4}}/>
      <Lily position={{x: -3, y: 0, z: -2}}/>
      <Lily position={{x: 1.5, y: 0, z: 4}}/>

      <LilyPad position={{x: -2, y: 0, z: 3}}/>
      <LilyPad position={{x: 2, y: 0, z: 0.5}}/>
      <LilyPad position={{x: -1, y: 0, z: -0.5}}/>
      <LilyPad position={{x: -5, y: 0, z: -1}}/>
      <LilyPad position={{x: 5, y: 0, z: -1}}/>

    </>
  )
}