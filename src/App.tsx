import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import SlidingInfo from "./components/SlidingInfo.tsx";
import MainFeed from "./components/MainFeed.tsx";

function App() {
  return (
    <div className="w-150 h-2000 bg-red flex flex-row space-between border item-start">
      <div className="sticky top-4 self-start">
        <SlidingInfo />
      </div>
      <div>
        <MainFeed />
      </div>
    </div>
  );
}

export default App;
