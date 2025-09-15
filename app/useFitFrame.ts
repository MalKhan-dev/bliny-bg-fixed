"use client";
import { useLayoutEffect, useState } from "react";

export function useFitFrame(
  baseW = 1920,
  baseH = 1080,
  offsetX = 0,
  safeMarginY = 0
) {
  const getVW = () =>
    typeof window !== "undefined"
      ? (window.visualViewport?.width ?? window.innerWidth)
      : baseW;

  const getVH = () =>
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : baseH;

  const compute = () => {
    const vw = getVW();
    const vh = getVH();
    const usableH = vh - safeMarginY * 2;
    const s = Math.min(vw / baseW, usableH / baseH);
    const w = baseW * s;
    const h = baseH * s;
    const left = Math.round((vw - w) / 2 + offsetX * s); // offsetX в px макета
    const top  = Math.round(safeMarginY + (usableH - h) / 2);
    return { scale: s, left, top };
  };

  // ✅ корректные значения уже на первом клиентском рендере
  const [state, setState] = useState(() => compute());

  useLayoutEffect(() => {
    const apply = () => {
      const next = compute();
      setState(next);
      const vhUnit = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vhUnit}px`);
      document.documentElement.style.setProperty("--frame-scale", next.scale.toFixed(6));
      document.documentElement.style.setProperty("--frame-left", `${next.left}px`);
      document.documentElement.style.setProperty("--frame-top", `${next.top}px`);
    };

    // двойной rAF сглаживает поздние правки браузера (скроллбар/адресная строка)
    let r1 = 0, r2 = 0;
    const schedule = () => {
      cancelAnimationFrame(r1); cancelAnimationFrame(r2);
      r1 = requestAnimationFrame(() => { apply(); r2 = requestAnimationFrame(apply); });
    };

    schedule();

    const on = schedule;
    window.addEventListener("resize", on, { passive: true });
    window.addEventListener("orientationchange", on, { passive: true });
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", on, { passive: true });
      vv.addEventListener("scroll", on, { passive: true });
    }
    if ((document as any).fonts?.ready) (document as any).fonts.ready.then(on).catch(() => {});

    return () => {
      cancelAnimationFrame(r1); cancelAnimationFrame(r2);
      window.removeEventListener("resize", on);
      window.removeEventListener("orientationchange", on);
      if (vv) { vv.removeEventListener("resize", on); vv.removeEventListener("scroll", on); }
    };
  }, [baseW, baseH, offsetX, safeMarginY]);

  return state; // { scale, left, top }
}
