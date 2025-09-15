"use client";

import { useLayoutEffect, useState } from "react";

/**
 * Масштабирует кадр baseW×baseH по принципу contain и центрирует его.
 * offsetX — в пикселях БАЗОВОГО кадра (1920), масштабируется на s.
 * safeMarginY — внешние поля сверху/снизу (в пикселях ЭКРАНА).
 */
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

    // высота, доступная под кадр, с учётом safeMarginY
    const usableH = vh - safeMarginY * 2;

    const s = Math.min(vw / baseW, usableH / baseH);
    const w = baseW * s;
    const h = baseH * s;

    // ВАЖНО: offsetX задан в пикселях макета → масштабируем на s
    const left = Math.round((vw - w) / 2 + offsetX * s);
    const top  = Math.round(safeMarginY + (usableH - h) / 2);

    return { scale: s, left, top };
  };

  // На первом клиентском рендере сразу отдаём корректные значения
  const [state, setState] = useState(() => compute());

  useLayoutEffect(() => {
    let raf1 = 0, raf2 = 0, raf3 = 0;
    let postT = 0 as any;

    const apply = () => {
      const next = compute();
      setState(next);

      // нормализуем 100vh для мобилок (если используешь var(--vh))
      const vhUnit = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vhUnit}px`);

      // (опционально) проброс в CSS-переменные
      document.documentElement.style.setProperty("--frame-scale", next.scale.toFixed(6));
      document.documentElement.style.setProperty("--frame-left", `${next.left}px`);
      document.documentElement.style.setProperty("--frame-top", `${next.top}px`);
    };

    // Стабилизация: тройной rAF (+ короткий post-таймер)
    const schedule = () => {
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); cancelAnimationFrame(raf3);
      clearTimeout(postT);
      raf1 = requestAnimationFrame(() => {
        apply();              // 1-й layout
        raf2 = requestAnimationFrame(() => {
          apply();            // 2-й — после возможного появления скроллбара
          raf3 = requestAnimationFrame(() => {
            apply();          // 3-й — после возможной перекомпоновки шрифтов/метрик
            postT = setTimeout(apply, 80); // короткий пост-тик на «поздние» изменения
          });
        });
      });
    };

    // немедленно посчитать на старте
    schedule();

    // источники поздних изменений, которые нужно ловить
    const on = schedule;
    window.addEventListener("resize", on, { passive: true });
    window.addEventListener("orientationchange", on, { passive: true });
    window.addEventListener("load", on, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") on();
    });

    // bfcache возврат
    const onPageShow = (e: PageTransitionEvent) => { if ((e as any).persisted) on(); };
    window.addEventListener("pageshow", onPageShow as any);

    // мобильная адресная строка и zoom-плавание
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener("resize", on, { passive: true });
      vv.addEventListener("scroll", on, { passive: true });
    }

    // когда шрифты готовы — пересчитать один раз
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(on).catch(() => {});
    }

    return () => {
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); cancelAnimationFrame(raf3);
      clearTimeout(postT);
      window.removeEventListener("resize", on);
      window.removeEventListener("orientationchange", on);
      window.removeEventListener("load", on);
      window.removeEventListener("pageshow", onPageShow as any);
      document.removeEventListener("visibilitychange", on as any);
      if (vv) {
        vv.removeEventListener("resize", on);
        vv.removeEventListener("scroll", on);
      }
    };
  }, [baseW, baseH, offsetX, safeMarginY]);

  return state; // { scale, left, top }
}
