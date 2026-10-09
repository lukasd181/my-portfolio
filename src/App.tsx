import { useState, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import SlidingInfo from "./components/SlidingInfo.tsx";
import MainFeed from "./components/MainFeed.tsx";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry } from "three";

function App() {
  const cube = useRef<BoxGeometry | null>(null);

  // animation loop - custom hook provided by R3F to run code on every frame
  useFrame(() => {
    if (cube.current) {
      cube.current.rotateX(0.01);
      cube.current.rotateY(0.01);
    }
  });
  return (
    // <div className="bg-red flex flex-col space-between border item-start">
    //   <Canvas>
    //     <mesh>
    //       <boxGeometry />
    //       <meshStandardMaterial />
    //     </mesh>
    //   </Canvas>
    //   <NavBar />
    //   <div className="sticky top-4 self-start">
    //     <SlidingInfo />
    //   </div>
    //   <div>
    //     <MainFeed />
    //   </div>
    // </div>
    <Canvas>
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} ref={cube} />
        <meshBasicMaterial color="green" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
