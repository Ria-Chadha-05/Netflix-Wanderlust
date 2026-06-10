import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import type { Story } from "@/lib/movieData";

export function PlayerScreen({
  story,
  episodeIdx,
  onBack,
  onEnd,
  onNext,
}: {
  story: Story;
  episodeIdx: number;
  onBack: () => void;
  onEnd: () => void;
  onNext: () => void;
}) {
  const STORY = story;
  const ep = STORY.episodes[episodeIdx];
  const isVideo = ep.media.type === "video";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [muted, setMuted] = useState(false);
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const [duration, setDuration] = useState(totalSecFromString(ep.duration));

  // Image slideshow: fake progress ticker
  useEffect(() => {
    if (isVideo) return;
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 100 / (duration * 10); // duration in seconds, tick 100ms
        if (next >= 100) {
          clearInterval(id);
          setTimeout(onEnd, 600);
          return 100;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(id);
  }, [playing, onEnd, isVideo, duration]);

  // Video sync
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [playing]);

  useEffect(() => {
    const t = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(t);
  }, [showControls]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => setShowControls((s) => !s)}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={ep.media.src}
          poster={ep.media.poster || ep.thumb}
          autoPlay
          muted={muted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-black"
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration) {
              setDuration(v.duration);
              setProgress((v.currentTime / v.duration) * 100);
            }
          }}
          onEnded={() => setTimeout(onEnd, 400)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || duration)}
        />
      ) : (
        <img
          src={ep.media.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />
      )}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Always-visible back bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-0 left-0 right-0 z-30 p-4 flex items-center gap-3 bg-gradient-to-b from-black/80 to-transparent"
        onClick={stop}
      >
        <button
          type="button"
          onClick={(e) => {
            stop(e);
            onBack();
          }}
          onPointerDown={stop}
          className="p-3 -m-3 touch-manipulation"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex-1">
          <p className="text-xs text-neutral-300">E{ep.num} — {STORY.featured.title}</p>
          <p className="text-sm font-semibold text-white">{ep.title}</p>
        </div>
      </motion.div>

      {showControls && (
        <>
          {/* Center controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 flex items-center justify-center gap-10"
          >
            <button onClick={(e) => { e.stopPropagation(); const v = videoRef.current; if (v) v.currentTime = Math.max(0, v.currentTime - 10); }}>
              <SkipBack className="w-9 h-9 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPlaying((p) => !p);
              }}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
            >
              {playing ? (
                <Pause className="w-8 h-8 text-white fill-white" />
              ) : (
                <Play className="w-8 h-8 text-white fill-white" />
              )}
            </button>
            <button onClick={(e) => { e.stopPropagation(); onEnd(); }}>
              <SkipForward className="w-9 h-9 text-white" />
            </button>
          </motion.div>

          {/* Bottom progress */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent"
            onClick={stop}
          >
            <div className="flex items-center gap-2 text-xs text-white mb-2">
              <span>{fmtSec((progress / 100) * duration)}</span>
              <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E50914]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span>-{fmtSec(duration - (progress / 100) * duration)}</span>
            </div>
            <div className="flex items-center justify-between text-white text-sm">
              <button onClick={(e) => { e.stopPropagation(); setMuted((m) => !m); }}>
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="font-semibold">
                Next Episode ›
              </button>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

function totalSecFromString(dur: string) {
  const m = parseInt(dur);
  return (isNaN(m) ? 1 : m) * 60;
}
function fmtSec(t: number) {
  if (!isFinite(t) || t < 0) t = 0;
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}