"use client";
import { useEffect, useState } from "react";

export default function HistoryControls() {
  // Фиксированные значения без интерактивности
  const textScale = 1.30;
  const textX = -450;
  const textY = 185;
  const textWidth = 130;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Устанавливаем фиксированные значения
    document.documentElement.style.setProperty("--history-text-scale", String(textScale));
    document.documentElement.style.setProperty("--text-zoom", String(textScale));
    document.documentElement.style.setProperty("--history-text-x", `${textX}px`);
    document.documentElement.style.setProperty("--history-text-y", `${textY}px`);
    document.documentElement.style.setProperty("--history-text-width", `${textWidth}%`);
  }, []);

  if (!isClient) {
    return null; // Не рендерим до гидратации
  }

  return null; // Полностью убираем панель управления
}
