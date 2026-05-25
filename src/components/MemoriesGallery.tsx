import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const memories = [
  { color: "#D9A5B3", caption: "core memory ♡", rot: -6 },
  { color: "#A8C3A0", caption: "still my favorite day", rot: 4 },
  { color: "#D8C3A5", caption: "you looked happiest here", rot: -3 },
  { color: "#F6EBD9", caption: "one of my comfort memories", rot: 5 },
  { color: "#7D8F69", caption: "golden hour, golden you", rot: -5 },
  { color: "#8B5E3C", caption: "laughing till we cried", rot: 3 },
];

export function MemoriesGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-6xl text-brown">our memories</h2>
        <p className="font-hand text-2xl text-olive">a little wall of us ✿</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        {memories.map((m, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 40, rotate: m.rot }}
            whileInView={{ opacity: 1, y: 0, rotate: m.rot }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.06, y: -6 }}
            onClick={() => setActive(i)}
            className="relative bg-cream p-3 pb-12 shadow-cozy text-left"
          >
            <div className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
            <div
              className="aspect-[4/5] w-full"
              style={{
                background: `linear-gradient(135deg, ${m.color}, ${m.color}cc)`,
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)`,
              }}
            />
            <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-xl text-brown">
              {m.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-brown/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="bg-cream p-4 pb-14 shadow-cozy max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/5] w-full" style={{ background: memories[active].color }} />
              <p className="absolute bottom-4 left-0 right-0 text-center font-hand text-2xl text-brown">
                {memories[active].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
