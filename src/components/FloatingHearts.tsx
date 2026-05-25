import { useMemo } from "react";

export function FloatingHearts({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 12,
        size: 12 + Math.random() * 18,
        emoji: Math.random() > 0.5 ? "♡" : "✦",
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {items.map((it) => (
        <span
          key={it.id}
          className="absolute animate-float-up text-pink"
          style={{
            left: `${it.left}%`,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
            fontSize: it.size,
            color: it.emoji === "♡" ? "var(--pink)" : "var(--olive)",
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  );
}
