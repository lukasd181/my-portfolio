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
  const pages = [
    { position: [0, 2, 12], lookAt: [0, 0, -5] },
    { position: [0, 2, 6], lookAt: [0, 0, -5] },
    { position: [4, 3, 6], lookAt: [2, 1, -4] },
    { position: [0, 5, 8], lookAt: [0, 0, 0] },
  ];
  useFrame((state, delta) => {
    const current = scroll.offset * (pages.length - 1);
    const index = Math.min(Math.floor(current), pages.length - 2);
    const t = current - index;
    const from = pages[index];
    const to = pages[index + 1];
    target.set(
      THREE.MathUtils.lerp(from.position[0], to.position[0], t),
      THREE.MathUtils.lerp(from.position[1], to.position[1], t),
      THREE.MathUtils.lerp(from.position[2], to.position[2], t),
    );
    state.camera.position.lerp(
      target,
      1 - Math.exp(-CAMERA_LERP_SPEED * delta),
    );
    state.camera.lookAt(
      THREE.MathUtils.lerp(from.lookAt[0], to.lookAt[0], t),
      THREE.MathUtils.lerp(from.lookAt[1], to.lookAt[1], t),
      THREE.MathUtils.lerp(from.lookAt[2], to.lookAt[2], t),
    );
  });

  // useFrame((state, delta) => {
  //   target.set(0, CAMERA_Y, CAMERA_Z - scroll.offset * CAMERA_SCROLL_DOLLY);
  //   // Frame-rate independent lerp.
  //   state.camera.position.lerp(
  //     target,
  //     1 - Math.exp(-CAMERA_LERP_SPEED * delta),
  //   );
  //   // state.camera.lookAt(...CAMERA_LOOK_AT);
  // });

  return null;
}
