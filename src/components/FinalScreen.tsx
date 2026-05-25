import { motion } from "framer-motion";

export function FinalScreen({ onReplay }: { onReplay: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, oklch(0.78 0.08 10 / 0.35), transparent 60%), linear-gradient(180deg, oklch(0.4 0.05 280 / 0.25), oklch(0.94 0.03 80))",
        }}
      />
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-cream"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: Math.random() * 14 + 6,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative z-10 text-center max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-4xl md:text-6xl text-brown leading-tight"
        >
          You deserve every beautiful thing in this world, Suko ♡
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.6 }}
          className="mt-8 font-hand text-3xl text-olive"
        >
          Thank you for existing.
        </motion.p>
      </div>
    </section>
  );
}
