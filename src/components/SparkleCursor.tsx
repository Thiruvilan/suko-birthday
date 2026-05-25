import { useEffect, useState } from "react";

type Spark = { id: number; x: number; y: number };

export function SparkleCursor() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    let id = 0;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 50) return;
      last = now;
      const s = { id: id++, x: e.clientX, y: e.clientY };
      setSparks((prev) => [...prev.slice(-12), s]);
      setTimeout(() => setSparks((p) => p.filter((x) => x.id !== s.id)), 800);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute text-pink"
          style={{
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%)",
            animation: "sparkle 0.8s ease-out forwards",
            fontSize: 14,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
