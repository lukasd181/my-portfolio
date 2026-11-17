"use client";

import dynamic from "next/dynamic";

const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function Home() {
  return <Background />;
}
