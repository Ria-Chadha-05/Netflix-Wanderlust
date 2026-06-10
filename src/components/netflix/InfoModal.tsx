import { motion } from "framer-motion";
import { X, Play, Plus, ThumbsUp } from "lucide-react";
import type { Story } from "@/lib/movieData";

export function InfoModal({
  story,
  onClose,
  onPlay,
  onEpisodes,
}: {
  story: Story;
  onClose: () => void;
  onPlay: () => void;
  onEpisodes: () => void;
}) {
  const f = story.featured;
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="w-full sm:max-w-xl bg-[#181818] sm:rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide"
      >
        <div className="relative h-56 sm:h-72">
          <img src={f.backdrop} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-3xl font-black text-shadow-lg">{f.title}</h2>
            <div className="flex gap-2 mt-3">
              <button
                onClick={onPlay}
                className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded font-semibold active:scale-95"
              >
                <Play className="w-4 h-4 fill-black" /> Play
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-neutral-400 flex items-center justify-center">
                <Plus className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-neutral-400 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-green-500 font-semibold">98% Match</span>
            <span className="text-neutral-400">{f.year}</span>
            <span className="border border-neutral-500 px-1 text-xs text-neutral-300">
              {f.rating}
            </span>
            <span className="text-neutral-400">{f.seasons}</span>
          </div>
          <p className="text-sm text-neutral-200">{f.description}</p>
          <div className="text-xs text-neutral-400 space-y-1">
            <p>
              <span className="text-neutral-500">Cast:</span> You, Them, Forever
            </p>
            <p>
              <span className="text-neutral-500">Genres:</span> Romance, Drama, True Story
            </p>
          </div>

          <button
            onClick={onEpisodes}
            className="w-full mt-3 py-3 bg-white/10 hover:bg-white/20 rounded font-semibold transition-colors"
          >
            View All Episodes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}