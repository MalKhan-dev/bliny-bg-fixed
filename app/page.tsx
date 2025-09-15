"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import HeroStage from "../components/HeroStage";

export default function Home() {
  return (
    <HeroStage>
      <Hero />
    </HeroStage>
  );
}