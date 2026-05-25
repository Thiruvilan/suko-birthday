import { motion } from "framer-motion";

const notes = [
  { text: "your smile", color: "#D9A5B3", rot: -4 },
  { text: "your energy", color: "#A8C3A0", rot: 3 },
  { text: "your laugh", color: "#F6EBD9", rot: -2 },
  { text: "your kindness", color: "#D8C3A5", rot: 5 },
  { text: "the way you always care", color: "#D9A5B3", rot: 2 },
  { text: "how safe your presence feels", color: "#A8C3A0", rot: -5 },
];

export function WhyYouMatter() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-5xl md:text-6xl text-brown">why you matter to me</h2>
        <p className="font-hand text-2xl text-olive">little reasons, big feelings ♡</p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {notes.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: n.rot }}
            whileInView={{ opacity: 1, y: 0, rotate: n.rot }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.05, boxShadow: "0 10px 30px -8px rgba(0,0,0,0.2)" }}
            animate={{ y: [0, -6, 0] }}
            style={{ background: n.color, animationDelay: `${i * 0.2}s` }}
            className="relative p-6 min-h-36 shadow-cozy flex items-center justify-center"
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-pink text-2xl">♥</span>
            <p className="font-hand text-2xl text-brown text-center">{n.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
