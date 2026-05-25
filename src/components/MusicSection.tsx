import { motion } from "framer-motion";

const songs = [
  { title: "Sweet", artist: "Cigarettes After Sex" },
  { title: "From The Start", artist: "Laufey" },
  { title: "Sunsetz", artist: "Cigarettes After Sex" },
  { title: "Lover", artist: "Taylor Swift" },
];

export function MusicSection() {
  return (
    <section
      className="relative py-24 px-6"
      style={{
        background: "linear-gradient(180deg, transparent, oklch(0.48 0.07 55 / 0.08), transparent)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-5xl md:text-6xl text-brown">these songs remind me of you ♫</h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#3a2a2a] shadow-cozy flex items-center justify-center relative"
              style={{
                backgroundImage:
                  "repeating-radial-gradient(circle, rgba(255,255,255,0.04) 0 2px, transparent 2px 6px)",
              }}
            >
              <div className="w-24 h-24 rounded-full bg-pink flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-brown" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="space-y-4">
          {songs.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 6 }}
              className="bg-cream/90 backdrop-blur p-4 rounded-2xl shadow-cozy flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center text-brown text-xl">
                ♫
              </div>
              <div>
                <p className="font-soft font-semibold text-brown">{s.title}</p>
                <p className="font-soft text-sm text-foreground/60">{s.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
