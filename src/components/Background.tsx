import { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ScrollControls, Stars, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import {
  BACKGROUND_BLACK,
  CAMERA_FOV,
  CAMERA_LERP_SPEED,
  CAMERA_LOOK_AT,
  CAMERA_PARALLAX_X,
  CAMERA_PARALLAX_Y,
  CAMERA_POSITION,
  CAMERA_SCROLL_DOLLY,
  CAMERA_Y,
  CAMERA_Z,
  CANVAS_Z_INDEX,
  SCROLL_DAMPING,
  SCROLL_PAGES,
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
  GRID_DIVISIONS,
  GRID_POSITION,
  GRID_SIZE,
  SCENE_WHITE,
  STAR_COUNT,
  STAR_FACTOR,
  STAR_RADIUS,
  TERRAIN_DEPTH,
  TERRAIN_DEPTH_SEGMENTS,
  TERRAIN_NOISE_AMPLITUDE,
  TERRAIN_NOISE_FREQUENCY,
  TERRAIN_OPACITY,
  TERRAIN_POSITION,
  TERRAIN_ROTATION,
  TERRAIN_WIDTH,
  TERRAIN_WIDTH_SEGMENTS,
} from "../constants";

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

function Cubes() {
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
          {cube.solidFace && (
            <mesh position={[0, 0, cube.size[2] / 2]}>
              <planeGeometry args={[cube.size[0], cube.size[1]]} />
              <meshBasicMaterial color={SCENE_WHITE} side={THREE.DoubleSide} />
            </mesh>
          )}
        </Float>
      ))}
    </>
  );
}

function Terrain() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      TERRAIN_WIDTH,
      TERRAIN_DEPTH,
      TERRAIN_WIDTH_SEGMENTS,
      TERRAIN_DEPTH_SEGMENTS,
    );
    const noise = new SimplexNoise();
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      // Local Z becomes world "up" after the -90deg X rotation below.
      positions.setZ(
        i,
        noise.noise(x * TERRAIN_NOISE_FREQUENCY, y * TERRAIN_NOISE_FREQUENCY) *
          TERRAIN_NOISE_AMPLITUDE,
      );
    }
    positions.needsUpdate = true;
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} rotation={TERRAIN_ROTATION} position={TERRAIN_POSITION}>
      <meshBasicMaterial
        color={SCENE_WHITE}
        wireframe
        transparent
        opacity={TERRAIN_OPACITY}
      />
    </mesh>
  );
}

function CameraRig() {
  const scroll = useScroll();
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    target.set(
      state.pointer.x * CAMERA_PARALLAX_X,
      CAMERA_Y + state.pointer.y * CAMERA_PARALLAX_Y,
      CAMERA_Z - scroll.offset * CAMERA_SCROLL_DOLLY,
    );
    // Frame-rate independent lerp.
    state.camera.position.lerp(
      target,
      1 - Math.exp(-CAMERA_LERP_SPEED * delta),
    );
    state.camera.lookAt(...CAMERA_LOOK_AT);
  });

  return null;
}

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
