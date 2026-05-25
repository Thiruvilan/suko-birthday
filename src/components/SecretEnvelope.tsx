import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function SecretEnvelope() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 px-6 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl text-brown mb-3">a little secret</h2>
      <p className="font-hand text-2xl text-olive mb-12">just for you ♡</p>

      <div className="relative w-[320px] h-[220px] md:w-[420px] md:h-[280px]">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="env"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ y: { duration: 3, repeat: Infinity } }}
              onClick={() => setOpen(true)}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-pink rounded-md shadow-cozy" />
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 55%)",
                  background: "oklch(0.7 0.09 10)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-hand text-3xl text-cream drop-shadow">Click Me :)</span>
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink text-2xl bg-cream rounded-full w-10 h-10 flex items-center justify-center shadow-cozy">
                ♥
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cream p-6 md:p-8 shadow-cozy rounded-md"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent 0 26px, oklch(0.78 0.08 10 / 0.2) 26px 27px)",
              }}
            >
              <p className="font-hand text-xl md:text-2xl text-brown leading-snug">
                Suko, you deserve all the love, happiness, and softness this world can offer. Thank
                you for being the kind of person who makes ordinary days feel a little magical. I
                hope this year holds you gently. ♡
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {open && <FloatingPetals />}
    </section>
  );
}

function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: -20, x: Math.random() * 400 - 200, opacity: 0 }}
          animate={{ y: 400, opacity: [0, 1, 0], rotate: 360 }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute left-1/2 text-2xl"
          style={{ color: "#D9A5B3" }}
        >
          ✿
        </motion.span>
      ))}
    </div>
  );
}
