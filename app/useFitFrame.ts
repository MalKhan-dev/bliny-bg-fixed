// app/useFitFrame.ts
"use client";

import { useEffect, useState } from "react";

/** Масштабирует фрейм 1920×1080 по принципу contain и центрирует его.
 *  offsetX — дополнительная поправка по X (в пикселях базового вьюпорта), по умолчанию 0.
 */
export function useFitFrame(
  baseW = 1920,
  baseH = 1080,
  offsetX = 0,
  safeMarginY = 0 // внешний отступ сверху/снизу в px
) {
  const [state, set] = useState({ scale: 1, left: 0, top: 0 });

  useEffect(() => {
    const apply = () => {
      // нормализуем 100vh на мобилках
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      const vw = window.innerWidth;
      const vhPx = Math.floor(window.innerHeight);

      // учитываем безопасные поля сверху/снизу
      const s = Math.min(vw / baseW, (vhPx - safeMarginY * 2) / baseH);
      const frameW = baseW * s;
      const frameH = baseH * s;
      const left = Math.floor((vw - frameW) / 2) + offsetX;
      const top = safeMarginY + Math.floor((vhPx - safeMarginY * 2 - frameH) / 2);

      set({ scale: s, left, top });
      // публикуем в CSS-переменные (можно использовать в стилях при желании)
      document.documentElement.style.setProperty("--frame-scale", s.toFixed(6));
      document.documentElement.style.setProperty("--frame-left", `${left}px`);
      document.documentElement.style.setProperty("--frame-top", `${top}px`);
    };

    apply();
    let t: any;
    const on = () => {
      clearTimeout(t);
      t = setTimeout(apply, 50);
    };
    window.addEventListener("resize", on);
    window.addEventListener("orientationchange", on);
    return () => {
      window.removeEventListener("resize", on);
      window.removeEventListener("orientationchange", on);
      clearTimeout(t);
    };
  }, [baseW, baseH, offsetX, safeMarginY]);

  return state; // { scale, left, top }
}
