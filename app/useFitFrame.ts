"use client";
import { useLayoutEffect, useState } from "react";

export function useFitFrame(
  baseW = 1920,
  baseH = 1080,
  offsetX = 0,
  safeMarginY = 0
) {
  const vw = () => (typeof window !== "undefined" ? (window.visualViewport?.width ?? window.innerWidth) : baseW);
  const vh = () => (typeof window !== "undefined" ? (window.visualViewport?.height ?? window.innerHeight) : baseH);

  const compute = () => {
    const _vw = vw();
    const _vh = vh();
    const usableH = _vh - safeMarginY * 2;
    const s = Math.min(_vw / baseW, usableH / baseH);
    const w = baseW * s;
    const h = baseH * s;
    const left = Math.round((_vw - w) / 2 + offsetX * s);
    const top  = Math.round(safeMarginY + (usableH - h) / 2);
    return { scale: s, left, top };
  };

  // ✅ Уже на первом клиентском рендере ставим верные значения
  const [st, setSt] = useState(() => compute());

  useLayoutEffect(() => {
    let raf1 = 0, raf2 = 0;

    const apply = () => {
      const next = compute();
      setSt(next);
      // (опционально) в CSS-переменные
      document.documentElement.style.setProperty("--frame-scale", next.scale.toFixed(6));
      document.documentElement.style.setProperty("--frame-left", `${next.left}px`);
      document.documentElement.style.setProperty("--frame-top", `${next.top}px`);
      // нормализуем 100vh на мобилках
      const vhUnit = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vhUnit}px`);
    };

    const schedule = () => {
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2);
      raf1 = requestAnimationFrame(() => { apply(); raf2 = requestAnimationFrame(apply); });
    };

    schedule();

    const onResize = schedule;
    const onOrient = schedule;
    const onPageShow = (e: PageTransitionEvent) => { if ((e as any).persisted) schedule(); };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onOrient, { passive: true });
    window.addEventListener("pageshow", onPageShow as any);

    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", onResize, { passive: true });
      vv.addEventListener("scroll", onResize, { passive: true });
    }

    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(schedule).catch(() => {});
    }

    return () => {
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrient);
      window.removeEventListener("pageshow", onPageShow as any);
      if (vv) { vv.removeEventListener("resize", onResize); vv.removeEventListener("scroll", onResize); }
    };
  }, [baseW, baseH, offsetX, safeMarginY]);

  return st; // { scale, left, top }
}
