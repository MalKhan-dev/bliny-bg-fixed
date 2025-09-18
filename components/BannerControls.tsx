"use client";
import { useEffect, useState } from "react";

export default function BannerControls() {
  // Фиксированные значения без интерактивности
  const bannerScale = 1.0;
  const bannerX = 0;
  const bannerY = 0;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Устанавливаем фиксированные значения для вывески
    document.documentElement.style.setProperty("--banner-scale", String(bannerScale));
    document.documentElement.style.setProperty("--banner-x", `${bannerX}px`);
    document.documentElement.style.setProperty("--banner-y", `${bannerY}px`);
  }, []);

  if (!isClient) {
    return null; // Не рендерим до гидратации
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
      <div className="text-sm font-semibold mb-2">Управление вывеской</div>
      <div className="space-y-3">
        {/* Scale */}
        <div>
          <div className="text-xs text-gray-600 mb-1">Scale: {bannerScale.toFixed(2)}</div>
          <input
            type="range"
            min={0.5}
            max={2.0}
            step={0.05}
            value={bannerScale}
            onChange={() => {}} // Неактивный слайдер
            className="w-32"
            disabled
          />
        </div>

        {/* X */}
        <div>
          <div className="text-xs text-gray-600 mb-1">X: {bannerX}px</div>
          <input
            type="range"
            min={-500}
            max={500}
            step={5}
            value={bannerX}
            onChange={() => {}} // Неактивный слайдер
            className="w-32"
            disabled
          />
        </div>

        {/* Y */}
        <div>
          <div className="text-xs text-gray-600 mb-1">Y: {bannerY}px</div>
          <input
            type="range"
            min={-300}
            max={300}
            step={5}
            value={bannerY}
            onChange={() => {}} // Неактивный слайдер
            className="w-32"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
