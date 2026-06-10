import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LoadingScreen } from "@/components/netflix/LoadingScreen";
import { ProfileScreen } from "@/components/netflix/ProfileScreen";
import { HomeScreen } from "@/components/netflix/HomeScreen";
import { InfoModal } from "@/components/netflix/InfoModal";
import { EpisodesScreen } from "@/components/netflix/EpisodesScreen";
import { PlayerScreen } from "@/components/netflix/PlayerScreen";
import { CreditsScreen } from "@/components/netflix/CreditsScreen";
import { PROFILES } from "@/lib/movieData";

export const Route = createFileRoute("/")({
  component: Index,
});

type Scene = "loading" | "profiles" | "home" | "episodes" | "player" | "credits";

function Index() {
  const [scene, setScene] = useState<Scene>("loading");
  const [showInfo, setShowInfo] = useState(false);
  const [episodeIdx, setEpisodeIdx] = useState(0);
  const [profileIdx, setProfileIdx] = useState(0);
  const [returnScene, setReturnScene] = useState<"home" | "episodes">("home");
  const profile = PROFILES[profileIdx];
  const story = profile.story;

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {scene === "loading" && (
          <LoadingScreen key="loading" onDone={() => setScene("profiles")} />
        )}
        {scene === "profiles" && (
          <ProfileScreen
            key="profiles"
            onSelect={(i) => {
              setProfileIdx(i);
              setScene("loading");
              setTimeout(() => setScene("home"), 2400);
            }}
          />
        )}
        {scene === "home" && (
          <HomeScreen
            key="home"
            story={story}
            avatar={profile.avatar}
            onSwitchProfile={() => setScene("profiles")}
            onPlay={(idx = 0) => {
              setReturnScene("home");
              setEpisodeIdx(idx);
              setScene("player");
            }}
            onInfo={() => setShowInfo(true)}
            onEpisodes={() => setScene("episodes")}
          />
        )}
        {scene === "episodes" && (
          <EpisodesScreen
            key="episodes"
            story={story}
            onBack={() => setScene("home")}
            onPlay={(i) => {
              setReturnScene("episodes");
              setEpisodeIdx(i);
              setScene("player");
            }}
          />
        )}
        {scene === "player" && (
          <PlayerScreen
            key="player"
            story={story}
            episodeIdx={episodeIdx}
            onBack={() => setScene(returnScene)}
            onEnd={() => {
              if (episodeIdx < story.episodes.length - 1) {
                setEpisodeIdx((i) => i + 1);
              } else {
                setScene("credits");
              }
            }}
            onNext={() => {
              if (episodeIdx < story.episodes.length - 1) {
                setEpisodeIdx((i) => i + 1);
              } else {
                setScene("credits");
              }
            }}
          />
        )}
        {scene === "credits" && (
          <CreditsScreen
            key="credits"
            story={story}
            onRestart={() => {
              setScene("profiles");
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showInfo && scene === "home" && (
          <InfoModal
            story={story}
            onClose={() => setShowInfo(false)}
            onPlay={() => {
              setShowInfo(false);
              setReturnScene("home");
              setEpisodeIdx(0);
              setScene("player");
            }}
            onEpisodes={() => {
              setShowInfo(false);
              setScene("episodes");
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
