import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import {
  BACKGROUND_BLACK,
  CAMERA_FOV,
  CAMERA_POSITION,
  CANVAS_Z_INDEX,
  GRID_DIVISIONS,
  GRID_POSITION,
  GRID_SIZE,
  SCENE_WHITE,
  SCROLL_DAMPING,
  SCROLL_PAGES,
  STAR_COUNT,
  STAR_FACTOR,
  STAR_RADIUS,
} from "../constants";
import CameraRig from "./background/CameraRig";
import Cubes from "./background/Cubes";
import Terrain from "./background/Terrain";

export default function Background() {
  return (
    <Canvas
      style={{ position: "fixed", inset: 0, zIndex: CANVAS_Z_INDEX }}
      camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}
    >
      <color attach="background" args={[BACKGROUND_BLACK]} />
      <ScrollControls pages={SCROLL_PAGES} damping={SCROLL_DAMPING}>
        <Cubes />
        <Terrain />
        <gridHelper
          args={[GRID_SIZE, GRID_DIVISIONS, SCENE_WHITE, SCENE_WHITE]}
          position={GRID_POSITION}
        />
        <Stars
          radius={STAR_RADIUS}
          count={STAR_COUNT}
          factor={STAR_FACTOR}
          fade
        />
        <CameraRig />
      </ScrollControls>
    </Canvas>
  );
}
