"use client";

import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  ssr: false,
});

export default function Home() {
  return <AboutMe />;
}
