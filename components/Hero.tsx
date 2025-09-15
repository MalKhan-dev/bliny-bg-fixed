"use client";

export default function Hero() {
  return (
    <div className="absolute" style={{ left: 0, top: 0, width: 1920, height: 1080 }}>
      {/* Вывеска */}
      <img src="/art/вывеска.png" className="layer hero-element"
           style={{ left: 306, top: -11, width: 1002.85, height: 362 }}
           alt="Вывеска" />
      {/* Повар */}
      <img src="/art/Повар.png" className="layer hero-element"
           style={{ left: 14, top: 22, width: 859, height: 1063 }}
           alt="Повар" />
      {/* БЛИНЧИК И */}
      <div
        className="layer blini-text"
        style={{
          position: "absolute",
          left: 860.36,
          top: 365.73,
          width: 494.89,
          height: 207.09,
          fontSize: 120,
          lineHeight: 0.9,
          textAlign: "center",
        }}
      >
        <div>БЛИНЧИК</div>
        <div>И</div>
      </div>
      {/* РЮМОЧКА! */}
      <div className="layer blini-text hero-element"
           style={{ left: 850.91, top: 595.3, width: 540.75, height: 80.86, fontSize: "120px" }}>
        РЮМОЧКА!
      </div>
    </div>
  );
}
