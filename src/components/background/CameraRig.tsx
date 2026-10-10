import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import {
  CAMERA_LERP_SPEED,
  CAMERA_LOOK_AT,
  CAMERA_PARALLAX_X,
  CAMERA_PARALLAX_Y,
  CAMERA_SCROLL_DOLLY,
  CAMERA_Y,
  CAMERA_Z,
} from "../../constants";

export default function CameraRig() {
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
