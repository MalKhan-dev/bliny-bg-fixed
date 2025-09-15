"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import HeroStage from "../components/HeroStage";

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
    <HeroStage offsetX={185} safeMarginY={60}>
      <div className="absolute" style={{ left: 0, top: 0, width: 1920, height: 1080 }}>
        {/* Вывеска */}
        <img src="/art/вывеска.png" className="layer hero-element"
             style={{ left: 306, top: -11, width: 1002.85, height: 362 }}
             alt="Вывеска" />
        {/* Повар */}
        <img src="/art/Повар.png" className="layer hero-element"
             style={{ left: 14, top: 22, width: 859, height: 1063 }}
             alt="Повар" />

        {/* БЛИНЧИК И */}
        <div
          className="layer blini-text"
          style={{
            position: "absolute",
            left: 860.36,
            top: 365.73,
            width: 494.89,
            height: 207.09,
            fontSize: 120,
            lineHeight: 0.9,
            textAlign: "center",
          }}
        >
          <div>БЛИНЧИК</div>
          <div>И</div>
        </div>

        {/* РЮМОЧКА! */}
        <div className="layer blini-text hero-element"
             style={{ left: 850.91, top: 595.3, width: 540.75, height: 80.86, fontSize: '120px' }}>
          РЮМОЧКА!
        </div>

        {/* навигация внутри кадра */}
        <div
          className="absolute"
          style={{
            width: 1280,
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 6
          }}
        >
          <Navigation currentPage="/" />
        </div>
      </div>
    </HeroStage>
  );
}
