import { Float } from "@react-three/drei";
import * as THREE from "three";
import {
  CUBE_COUNT,
  CUBE_ROTATION_INTENSITY,
  CUBE_SIZE_MIN,
  CUBE_SIZE_RANGE,
  CUBE_SOLID_FACE_CHANCE,
  CUBE_SPEED_MIN,
  CUBE_SPEED_RANGE,
  CUBE_SPREAD_X,
  CUBE_SPREAD_Y,
  CUBE_SPREAD_Z,
  CUBE_Y_OFFSET,
  SCENE_WHITE,
} from "../../constants";

type CubeData = {
  id: number;
  position: [number, number, number];
  size: [number, number, number];
  speed: number;
  solidFace: boolean;
};

// Generated once at module load so renders stay pure.
const cubes: CubeData[] = Array.from({ length: CUBE_COUNT }, (_, id) => {
  const size = CUBE_SIZE_MIN + Math.random() * CUBE_SIZE_RANGE;
  return {
    id,
    position: [
      (Math.random() - 0.5) * CUBE_SPREAD_X,
      Math.random() * CUBE_SPREAD_Y + CUBE_Y_OFFSET,
      -Math.random() * CUBE_SPREAD_Z,
    ],
    size: [size, size, size],
    speed: CUBE_SPEED_MIN + Math.random() * CUBE_SPEED_RANGE,
    solidFace: Math.random() < CUBE_SOLID_FACE_CHANCE,
  };
});

export default function Cubes() {
  return (
    <>
      {cubes.map((cube) => (
        <Float
          key={cube.id}
          position={cube.position}
          speed={cube.speed}
          rotationIntensity={CUBE_ROTATION_INTENSITY}
        >
          <mesh>
            <boxGeometry args={cube.size} />
            <meshBasicMaterial color={SCENE_WHITE} wireframe />
          </mesh>
          {/* {cube.solidFace && (
            <mesh position={[0, 0, cube.size[2] / 2]}>
              <planeGeometry args={[cube.size[0], cube.size[1]]} />
              <meshBasicMaterial color={SCENE_WHITE} side={THREE.DoubleSide} />
            </mesh>
          )} */}
        </Float>
      ))}
    </>
  );
}
