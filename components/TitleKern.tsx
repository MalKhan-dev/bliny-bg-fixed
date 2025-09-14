// components/TitleKern.tsx
"use client";

type Props = {
  className?: string;
  // базовый кернинг перед буквой "и" в пикселях макета 1920
  kernPx?: number; // например 6..14 подгонишь по месту
  textLeft?: string;   // "Блинчик "
  textI?: string;      // "и"
  textRight?: string;  // " рюмочка"
};

export default function TitleKern({
  className,
  kernPx = 10,
  textLeft = "Блинчик ",
  textI = "и",
  textRight = " рюмочка",
}: Props) {
  return (
    <h1 className={className} style={{ position: "relative" }}>
      <span>{textLeft}</span>
      <span
        // отрицательный letterSpacing перед "и"
        style={{
          display: "inline-block",
          marginLeft: `calc(${kernPx}px)`,
        }}
      >
        {textI}
      </span>
      <span>{textRight}</span>
    </h1>
  );
}
