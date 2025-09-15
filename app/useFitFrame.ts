// app/useFitFrame.ts
"use client";

import { useLayoutEffect, useState } from "react";

export function useFitFrame(
  baseW = 1920,
  baseH = 1080,
  offsetX = 0,
  safeMarginY = 0
) {
  const compute = () => {
    const vw = typeof window !== "undefined" ? window.innerWidth : baseW;
    const vh = typeof window !== "undefined" ? window.innerHeight : baseH;

    const usableH = vh - safeMarginY * 2;
    const s = Math.min(vw / baseW, usableH / baseH);
    const frameW = baseW * s;
    const frameH = baseH * s;

    const left = Math.floor((vw - frameW) / 2 + offsetX);
    const top  = Math.floor(safeMarginY + (usableH - frameH) / 2);

    return { scale: s, left, top };
  };

  // ✅ уже на первом рендере отдаём правильные значения
  const [state, setState] = useState(() => compute());

  useLayoutEffect(() => {
    // нормализуем 100vh на мобилках
    const fixVh = () => {
      const vhUnit = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vhUnit}px`);
    };

    const apply = () => {
      fixVh();
      const next = compute();
      setState(next);
      // опционально — для CSS-варов (если где-то используешь)
      document.documentElement.style.setProperty("--frame-scale", next.scale.toFixed(6));
      document.documentElement.style.setProperty("--frame-left", `${next.left}px`);
      document.documentElement.style.setProperty("--frame-top", `${next.top}px`);
    };

    apply();
    let tid = 0 as any;
    const on = () => { clearTimeout(tid); tid = setTimeout(apply, 50); };
    window.addEventListener("resize", on);
    window.addEventListener("orientationchange", on);
    return () => {
      clearTimeout(tid);
      window.removeEventListener("resize", on);
      window.removeEventListener("orientationchange", on);
    };
  }, [baseW, baseH, offsetX, safeMarginY]);

  return state; // { scale, left, top }
}
