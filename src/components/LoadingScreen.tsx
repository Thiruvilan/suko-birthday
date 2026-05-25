import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
    >
      <div className="flex gap-1 mb-6">
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-pink"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
      <p className="font-pixel text-xs text-brown">loading love...</p>
    </motion.div>
  );
}
