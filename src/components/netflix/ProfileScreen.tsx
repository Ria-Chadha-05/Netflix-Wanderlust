import { motion } from "framer-motion";
import { PROFILES } from "@/lib/movieData";

export function ProfileScreen({ onSelect }: { onSelect: (i: number) => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-white text-3xl sm:text-5xl font-light mb-10 sm:mb-16 tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Who's Watching?
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 max-w-2xl">
        {PROFILES.map((p, i) => (
          <motion.button
            key={p.name}
            onClick={() => onSelect(i)}
            className="group flex flex-col items-center gap-3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-md overflow-hidden ring-0 group-hover:ring-4 ring-white transition-all">
              <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-neutral-400 group-hover:text-white text-sm sm:text-base transition-colors">
              {p.name}
            </span>
          </motion.button>
        ))}
      </div>

      <motion.button
        className="mt-12 px-6 py-2 border border-neutral-500 text-neutral-400 tracking-widest text-sm hover:text-white hover:border-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        MANAGE PROFILES
      </motion.button>
    </motion.div>
  );
}