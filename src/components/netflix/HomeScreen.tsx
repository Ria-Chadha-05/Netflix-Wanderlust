import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Play, Info, Search, Bell, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Story } from "@/lib/movieData";
import { NetflixLogo } from "./NetflixLogo";
import { usePhotos } from "@/hooks/usePhotos";

export function HomeScreen({
  story,
  onPlay,
  onInfo,
  onEpisodes,
  onSwitchProfile,
  avatar,
}: {
  story: Story;
  onPlay: (episodeIdx?: number) => void;
  onInfo: () => void;
  onEpisodes: () => void;
  onSwitchProfile: () => void;
  avatar: string;
}) {
  const STORY = story;
  const photos = usePhotos(story.photoFolder);
  const [gallery, setGallery] = useState<{ images: string[]; index: number; title: string } | null>(null);

  return (
    <motion.div
      className="min-h-screen bg-black text-white pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-30 px-4 py-3 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent">
        <NetflixLogo className="text-2xl" />
        <div className="flex items-center gap-4 text-white">
          <Search className="w-5 h-5" />
          <Bell className="w-5 h-5" />
          <button onClick={onSwitchProfile} className="w-7 h-7 rounded overflow-hidden">
            <img src={avatar} alt="profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[88vh] w-full">
        <img
          src={STORY.featured.backdrop}
          alt={STORY.featured.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        <div className="relative z-10 flex flex-col justify-end h-full px-5 pb-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-[#E50914] font-bold tracking-widest text-xs mb-2">
              <span className="text-lg">N</span>
              <span>{STORY.featured.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black leading-none mb-3">
              {STORY.featured.title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 mb-5 max-w-md">
              {STORY.featured.description}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => onPlay()}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-semibold py-2.5 rounded hover:bg-white/85 transition-colors active:scale-95"
              >
                <Play className="w-5 h-5 fill-black" />
                Play
              </button>
              <button
                onClick={onInfo}
                className="flex-1 flex items-center justify-center gap-2 bg-neutral-500/60 text-white font-semibold py-2.5 rounded backdrop-blur hover:bg-neutral-500/80 transition-colors active:scale-95"
              >
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Episodes row — horizontal scroll */}
      <div className="mt-8">
        <button
          onClick={onEpisodes}
          className="px-5 mb-3 text-lg sm:text-xl font-semibold text-white flex items-center gap-2 hover:text-neutral-300 transition-colors"
        >
          Episodes
        </button>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-5 snap-x snap-mandatory">
          {STORY.episodes.map((e, i) => (
            <motion.button
              key={i}
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onPlay(i)}
              className="snap-start flex-shrink-0 w-64 h-36 rounded-md overflow-hidden bg-neutral-900 relative cursor-pointer text-left"
            >
              <img src={e.thumb} alt={e.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                <p className="text-xs text-white font-medium line-clamp-1">E{e.num}: {e.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Popular in Memories — auto-discovered photo grid */}
      {photos.length > 0 && (
        <div className="mt-10 px-5">
          <p className="text-lg sm:text-xl font-semibold text-white mb-1">Popular in Memories</p>
          <p className="text-xs text-neutral-500 mb-4">{photos.length} memories</p>
          <div className="columns-2 sm:columns-3 gap-2 space-y-2">
            {photos.map((src, i) => (
              <motion.button
                key={src}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setGallery({ images: photos, index: i, title: "Popular in Memories" })}
                className="break-inside-avoid w-full rounded-md overflow-hidden block bg-neutral-900"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Recently Watched */}
      {STORY.recent && STORY.recent.length > 0 && (
        <div className="mt-10 px-5">
          <p className="text-lg sm:text-xl font-semibold text-white mb-4">Recently Watched</p>
          <div className="columns-2 sm:columns-3 gap-2 space-y-2">
            {STORY.recent.map((src, i) => (
              <motion.button
                key={i}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setGallery({ images: STORY.recent!, index: i, title: "Recently Watched" })}
                className="break-inside-avoid w-full rounded-md overflow-hidden block bg-neutral-900"
              >
                <img src={src} alt="" className="w-full h-auto object-cover" loading="lazy" />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* My List */}
      {STORY.myList && STORY.myList.length > 0 && (
        <div className="mt-10 px-5">
          <p className="text-lg sm:text-xl font-semibold text-white mb-4">My List</p>
          <div className="columns-2 sm:columns-3 gap-2 space-y-2">
            {STORY.myList.map((src, i) => (
              <motion.button
                key={i}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setGallery({ images: STORY.myList!, index: i, title: "My List" })}
                className="break-inside-avoid w-full rounded-md overflow-hidden block bg-neutral-900"
              >
                <img src={src} alt="" className="w-full h-auto object-cover" loading="lazy" />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery lightbox */}
      <AnimatePresence>
        {gallery && (
          <GalleryModal
            images={gallery.images}
            startIndex={gallery.index}
            title={gallery.title}
            onClose={() => setGallery(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function GalleryModal({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-between p-4">
        <p className="text-white font-semibold">{title}</p>
        <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="relative flex-1 flex items-center justify-center px-2">
        <button
          onClick={prev}
          className="absolute left-2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt=""
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
          />
        </AnimatePresence>
        <button
          onClick={next}
          className="absolute right-2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={
              "flex-shrink-0 w-16 h-24 rounded overflow-hidden border-2 transition-colors " +
              (i === idx ? "border-[#E50914]" : "border-transparent opacity-60")
            }
          >
            <img src={src} className="w-full h-full object-cover" alt="" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
