import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { LetterSection } from "@/components/LetterSection";
import { WhyYouMatter } from "@/components/WhyYouMatter";
import { SecretEnvelope } from "@/components/SecretEnvelope";

import { FinalScreen } from "@/components/FinalScreen";
import { FloatingHearts } from "@/components/FloatingHearts";
import { SparkleCursor } from "@/components/SparkleCursor";
import { TopBar } from "@/components/TopBar";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <TopBar />
      <SparkleCursor />
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <IntroScreen onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <LetterSection />
            <WhyYouMatter />
            <SecretEnvelope />

            <FinalScreen
              onReplay={() => {
                setOpened(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
