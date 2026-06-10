import { motion } from "framer-motion";
import type { Story } from "@/lib/movieData";

export function CreditsScreen({
  story,
  onRestart,
}: {
  story: Story;
  onRestart: () => void;
}) {
  const STORY = story;
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black text-white overflow-hidden flex items-start justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-md px-6 text-center"
        initial={{ y: "100vh" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 28, ease: "linear" }}
      >
        <div className="py-32" />
        <h1 className="text-5xl font-black mb-2 text-[#E50914]" style={{ fontFamily: "'Bebas Neue', Impact, sans-serif" }}>
          {STORY.featured.title}
        </h1>
        <p className="text-neutral-400 italic mb-16">{STORY.featured.tagline}</p>

        <div className="space-y-8">
          {STORY.credits.map((c, i) => (
            <div key={i}>
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-1">
                {c.role}
              </p>
              <p className="text-2xl font-light">{c.name}</p>
            </div>
          ))}
        </div>

        <div className="py-20" />

        <motion.div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-[#E50914]">
            {STORY.closingMessage}
          </h2>
          <p className="text-xl text-white/80">{STORY.closingSub}</p>
        </motion.div>

        <div className="py-32" />
      </motion.div>

      <motion.button
        onClick={onRestart}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-black rounded font-semibold z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        Watch Again
      </motion.button>
    </motion.div>
  );
}