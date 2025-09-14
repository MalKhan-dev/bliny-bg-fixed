"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const BG_SIZES: [number,number][] = [
  [360,640],[375,667],[390,844],[414,896],[428,926],
  [768,1024],[834,1112],[1024,1366],
  [1140,768],[1280,800],[1366,768],[1440,900],
  [1600,900],[1680,1050],[1920,1080],[1920,1200],
  [2048,1280],[2560,1440],[2560,1600],[2880,1800],
  [3440,1440],[3840,2160]
];

function useAdaptiveBg() {
  useEffect(() => {
    const pick = () => {
      const w = window.innerWidth, h = window.innerHeight, ar = w/h;
      let best = BG_SIZES[0], score = Infinity;
      for (const [W,H] of BG_SIZES) {
        const sar = W/H;
        const s = Math.abs(sar-ar)*2 + Math.abs(W-w)/w + Math.abs(H-h)/h;
        if (s < score) { score = s; best = [W,H]; }
      }
      const url = `/bg/final/bg-${best[0]}x${best[1]}.png`;
      document.documentElement.style.setProperty('--bg-url', `url('${url}')`);
    };
    pick();
    const on = () => { clearTimeout((window as any).__bgT); (window as any).__bgT = setTimeout(pick, 60); };
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
}

export function useCornerScale() {
  useEffect(() => {
    const BASE_H = 1050;
    const MIN = 0.50;        // не даём стать тоньше, чем новый базовый (-50%)
    const MAX = 1.55;        // ограничиваем без фанатизма

    const apply = () => {
      let s = window.innerHeight / BASE_H;  // растём только от высоты
      s = Math.max(MIN, Math.min(s, MAX));
      document.documentElement.style.setProperty("--corner-scale", s.toFixed(3));
    };

    apply();
    const on = () => { clearTimeout((window as any).__cs); (window as any).__cs = setTimeout(apply, 50); };
    addEventListener("resize", on); addEventListener("orientationchange", on);
    return () => { removeEventListener("resize", on); removeEventListener("orientationchange", on); };
  }, []);
}

// компонент углов
function CornersOverlay(){
  return (
    <div className="corners">
      <img className="corner corner-tl" src="/bg/corners/tl.png" alt="" />
      <img className="corner corner-tr" src="/bg/corners/tr.png" alt="" />
      <img className="corner corner-bl" src="/bg/corners/bl.png" alt="" />
      <img className="corner corner-br" src="/bg/corners/br.png" alt="" />
    </div>
  );
}


export default function Home() {
  useAdaptiveBg();
  useCornerScale();
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed inset-0 -z-10 bg-blini" />
      
      {/* 4 PNG-угла с масштабированием от базового кадра */}
      <CornersOverlay />
      
      {/* Hero с масштабированием 1:1 по Figma */}
      <Hero />
    </div>
  );
}
