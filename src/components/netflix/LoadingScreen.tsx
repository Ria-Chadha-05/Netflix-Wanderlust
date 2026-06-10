import { motion } from "framer-motion";
import { useEffect } from "react";
import { NetflixBigN } from "./NetflixLogo";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-40 h-40 sm:w-56 sm:h-56"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.05, 1], opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="nflxGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E50914" />
            <stop offset="50%" stopColor="#B0060F" />
            <stop offset="100%" stopColor="#831010" />
          </linearGradient>
        </defs>
        <motion.path
          d="M30 10 L30 90 L42 90 L42 45 L58 90 L70 90 L70 10 L58 10 L58 55 L42 10 Z"
          fill="url(#nflxGlow)"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 20px rgba(229,9,20,0.6))" }}
        />
      </motion.svg>

      {/* "ta-dum" sound bar pulse */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1 bg-[#E50914]"
            animate={{ height: [4, 24, 4] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}