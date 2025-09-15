// components/HeroStage.tsx
"use client";

import React from "react";
import { useFitFrame } from "@/app/useFitFrame";

type Props = {
  children: React.ReactNode;
  withCorners?: boolean;
  /** Смещение кадра по X (в px экрана). */
  offsetX?: number;
  /** Внешние отступы сверху/снизу (в px экрана). */
  safeMarginY?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function HeroStage({ children, withCorners = true, offsetX = 0, safeMarginY = 0, ...rest }: Props) {
  // поддерживаем оба синтаксиса:
  // 1) <HeroStage offsetX={20} />
  // 2) <HeroStage data-offset-x={20} />
  const dataOffsetRaw = (rest as any)?.["data-offset-x"];
  const dataOffset = typeof dataOffsetRaw === "string" ? parseFloat(dataOffsetRaw) : (typeof dataOffsetRaw === "number" ? dataOffsetRaw : 0);
  const effectiveOffsetX = typeof offsetX === "number" ? offsetX : (Number.isFinite(dataOffset) ? (dataOffset as number) : 0);

  const { scale, left, top } = useFitFrame(1920, 1080, effectiveOffsetX, safeMarginY);

  return (
    <div className="relative w-full" style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }} {...rest}>
      {/* Фоны вне масштаба — на весь вьюпорт */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url(/bg/final/bg-1920x1080.png)" }}
      />
      
      {withCorners && (
        <div className="corners absolute inset-0 -z-10 pointer-events-none">
          <img className="corner corner-tl" src="/bg/corners/tl.png" alt="" />
          <img className="corner corner-tr" src="/bg/corners/tr.png" alt="" />
          <img className="corner corner-bl" src="/bg/corners/bl.png" alt="" />
          <img className="corner corner-br" src="/bg/corners/br.png" alt="" />
        </div>
      )}

      {/* Масштабируемый кадр 1920×1080 */}
      <div
        className="absolute"
        style={{
          width: 1920,
          height: 1080,
          transform: `translate(${left}px, ${top}px) scale(${scale})`,
          transformOrigin: "top left",
          willChange: "transform"
        }}
      >
        {children}
      </div>
    </div>
  );
}
