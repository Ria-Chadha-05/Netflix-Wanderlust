import { motion } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";
import type { Story } from "@/lib/movieData";

export function EpisodesScreen({
  story,
  onBack,
  onPlay,
}: {
  story: Story;
  onBack: () => void;
  onPlay: (idx: number) => void;
}) {
  const STORY = story;
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black text-white overflow-y-auto"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.35 }}
    >
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur px-4 py-3 flex items-center gap-3 border-b border-white/10">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold">Episodes</h2>
      </div>

      <div className="px-4 py-4">
        <h1 className="text-2xl font-black mb-1">{STORY.featured.title}</h1>
        <p className="text-sm text-neutral-400 mb-5">Season 1 — {STORY.episodes.length} Episodes</p>

        <div className="space-y-4">
          {STORY.episodes.map((e, i) => (
            <motion.button
              key={i}
              onClick={() => onPlay(i)}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="w-full flex gap-3 text-left group"
            >
              <div className="flex items-center text-2xl text-neutral-400 font-light w-6 shrink-0">
                {e.num}
              </div>
              <div className="relative w-32 h-20 rounded overflow-hidden shrink-0">
                <img src={e.thumb} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Play className="w-6 h-6 fill-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold truncate">{e.title}</h3>
                  <span className="text-xs text-neutral-400 shrink-0">{e.duration}</span>
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 mt-1">{e.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}