"use client";
import { useEffect, useState } from "react";

export default function SamovarControls() {
  // Фиксированные значения без интерактивности
  const samovarScale = 1.35;
  const samovarX = -530;
  const samovarY = -50;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Устанавливаем фиксированные значения
    document.documentElement.style.setProperty("--history-samovar-scale", String(samovarScale));
    document.documentElement.style.setProperty("--history-samovar-x", `${samovarX}px`);
    document.documentElement.style.setProperty("--history-samovar-y", `${samovarY}px`);
  }, []);

  if (!isClient) {
    return null; // Не рендерим до гидратации
  }

  return null; // Полностью убираем панель управления
}
