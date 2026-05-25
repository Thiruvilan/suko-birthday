import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LETTER = `Suko, where do I even begin. You walked into my life so softly and somehow rearranged it into something warmer. Every laugh we've shared, every silly voice note, every late-night talk — they live in me like little glowing windows. On your birthday I just want you to know: you are loved, you are seen, and you are so unbelievably special. Here's to another year of you being exactly, beautifully you.`;

export function LetterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [text, setText] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(LETTER.slice(0, i));
      if (i >= LETTER.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section ref={ref} className="relative py-24 px-6 flex justify-center">
      <motion.div
        initial={{ rotate: -2, y: 40, opacity: 0 }}
        whileInView={{ rotate: -1.5, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-2xl w-full bg-cream shadow-cozy p-10 md:p-14 rounded-sm"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent 0 31px, oklch(0.78 0.08 10 / 0.25) 31px 32px)",
        }}
      >
        <div className="tape -top-3 left-8 -rotate-6" />
        <div className="tape -top-3 right-10 rotate-6" />
        <div className="absolute -top-6 -right-4 text-3xl">🌸</div>
        <div className="absolute -bottom-4 -left-3 text-2xl">✿</div>

        <p className="font-hand text-3xl md:text-4xl text-brown leading-tight">
          “Some people become memories.
          <br />
          But somehow… you became home.”
        </p>
        <div className="mt-8 font-hand text-2xl md:text-3xl text-foreground/85 leading-snug min-h-[12rem]">
          {text}
          <span className="inline-block w-[2px] h-6 bg-brown/60 align-middle ml-0.5 animate-pulse" />
        </div>
        <p className="mt-8 text-right font-hand text-2xl text-olive">— always yours ♡</p>
      </motion.div>
    </section>
  );
}
