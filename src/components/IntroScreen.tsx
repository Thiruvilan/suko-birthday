import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

export function IntroScreen({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.55 },
      colors: ["#D9A5B3", "#A8C3A0", "#F6EBD9", "#8B5E3C", "#7D8F69"],
    });
    setTimeout(() => {
      confetti({ particleCount: 120, spread: 120, origin: { y: 0.6 } });
    }, 250);
    setTimeout(onOpen, 1500);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gingham">
      <div className="absolute inset-0 bg-paper opacity-50 mix-blend-multiply" />
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={opening ? { scale: [1, 1.3, 0], rotate: [0, -10, 20] } : { y: [0, -8, 0] }}
            transition={opening ? { duration: 1.2 } : { duration: 3, repeat: Infinity }}
            className="relative"
          >
            <PixelGift />
            <div className="absolute inset-0 -z-10 blur-2xl rounded-full bg-pink/40" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl text-brown drop-shadow-sm"
        >
          Happy Birthday, Suko <span className="text-pink">♡</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-foreground/70 font-soft"
        >
          I made this little world just for you…
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          disabled={opening}
          className="mt-10 px-8 py-4 rounded-full bg-brown text-cream font-soft font-semibold shadow-cozy hover:bg-olive transition-colors"
        >
          Open Your Gift ♡
        </motion.button>
      </div>

      <AnimatePresence>
        {opening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cream z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function PixelGift() {
  // pixel-art gift via CSS grid
  const P = "#D9A5B3",
    B = "#8B5E3C",
    R = "#A8C3A0",
    L = "#7D8F69";
  const grid: (string | null)[] = [
    null,
    null,
    null,
    L,
    L,
    L,
    null,
    L,
    L,
    L,
    null,
    null,
    null,
    null,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    null,
    null,
    L,
    L,
    P,
    P,
    P,
    L,
    P,
    P,
    P,
    L,
    L,
    P,
    P,
    P,
    P,
    P,
    P,
    L,
    P,
    P,
    P,
    P,
    P,
    P,
    P,
    P,
    P,
    P,
    P,
    L,
    P,
    P,
    P,
    P,
    P,
    R,
    R,
    R,
    R,
    R,
    R,
    L,
    R,
    R,
    R,
    R,
    R,
    B,
    B,
    B,
    B,
    B,
    B,
    L,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    L,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    B,
    L,
    B,
    B,
    B,
    B,
    B,
  ];
  return (
    <div className="grid grid-cols-12 gap-[2px]" style={{ width: 168 }}>
      {grid.map((c, i) => (
        <div key={i} className="aspect-square" style={{ background: c ?? "transparent" }} />
      ))}
    </div>
  );
}
