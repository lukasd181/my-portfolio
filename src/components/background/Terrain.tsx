import { useMemo } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import {
  SCENE_WHITE,
  TERRAIN_DEPTH,
  TERRAIN_DEPTH_SEGMENTS,
  TERRAIN_NOISE_AMPLITUDE,
  TERRAIN_NOISE_FREQUENCY,
  TERRAIN_OPACITY,
  TERRAIN_POSITION,
  TERRAIN_ROTATION,
  TERRAIN_WIDTH,
  TERRAIN_WIDTH_SEGMENTS,
} from "../../constants";

export default function Terrain() {
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
    <mesh
      geometry={geometry}
      rotation={TERRAIN_ROTATION}
      position={TERRAIN_POSITION}
    >
      <meshBasicMaterial
        color={SCENE_WHITE}
        wireframe
        transparent
        opacity={TERRAIN_OPACITY}
      />
    </mesh>
  );
}
