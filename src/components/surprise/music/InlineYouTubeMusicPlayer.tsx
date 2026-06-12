"use client";

import { Heart, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import musicCoverPhoto from "../../../../public/media/eu-meu-amor/photo-08.png";
import type { SurpriseMusic } from "@/features/surprises/surprise.types";
import { extractYouTubeVideoId } from "@/lib/music/extract-youtube-video-id";

type YouTubePlayerStateChangeEvent = {
  data: number;
};

type YouTubePlayerReadyEvent = {
  target: YouTubePlayer;
};

type YouTubePlayer = {
  destroy: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  pauseVideo: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
};

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      width: string;
      height: string;
      playerVars: Record<string, string | number>;
      events: {
        onReady: (event: YouTubePlayerReadyEvent) => void;
        onStateChange: (event: YouTubePlayerStateChangeEvent) => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: {
    ENDED: number;
    PAUSED: number;
    PLAYING: number;
  };
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeIframeApi() {
  if (window.YT?.Player) {
    return Promise.resolve();
  }

  youtubeApiPromise ??= new Promise<void>((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

function formatTime(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return "0:00";
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function isUsablePlayer(player: YouTubePlayer | null): player is YouTubePlayer {
  return Boolean(
    player &&
      typeof player.getCurrentTime === "function" &&
      typeof player.getDuration === "function" &&
      typeof player.pauseVideo === "function" &&
      typeof player.playVideo === "function" &&
      typeof player.seekTo === "function",
  );
}

export function InlineYouTubeMusicPlayer({ music }: { music: SurpriseMusic }) {
  const videoId = extractYouTubeVideoId(music.url);
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!videoId || !hostRef.current) {
      return;
    }

    let isDisposed = false;
    let interval: number | undefined;

    loadYouTubeIframeApi().then(() => {
      if (isDisposed || !window.YT || !hostRef.current) {
        return;
      }

      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId,
        width: "112",
        height: "112",
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          modestbranding: 1,
          origin: window.location.origin,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            setIsReady(true);
            setDuration(event.target.getDuration());
          },
          onStateChange: (event) => {
            if (event.data === window.YT?.PlayerState.PLAYING) {
              setIsPlaying(true);
            }

            if (
              event.data === window.YT?.PlayerState.PAUSED ||
              event.data === window.YT?.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });

      interval = window.setInterval(() => {
        const player = playerRef.current;

        if (!isUsablePlayer(player)) {
          return;
        }

        setCurrentTime(player.getCurrentTime());
        setDuration(player.getDuration());
      }, 500);
    });

    return () => {
      isDisposed = true;

      if (interval) {
        window.clearInterval(interval);
      }

      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [videoId]);

  function togglePlayback() {
    const player = playerRef.current;

    if (!isUsablePlayer(player)) {
      return;
    }

    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  }

  function skip(seconds: number) {
    const player = playerRef.current;

    if (!isUsablePlayer(player)) {
      return;
    }

    const nextTime = Math.max(0, Math.min(player.getCurrentTime() + seconds, duration));
    player.seekTo(nextTime, true);
    setCurrentTime(nextTime);
  }

  const progress = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;
  const canControl = Boolean(videoId && isReady);

  return (
    <div className="music-player-shell">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-forest">
        <Image
          src={musicCoverPhoto}
          alt=""
          className={`h-full w-full object-cover transition ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
          sizes="112px"
        />
        {videoId ? (
          <div
            ref={hostRef}
            className={`absolute inset-0 transition ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isPlaying}
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-coffee">
              {music.name ?? "Nossa música"}
            </h3>
            <p className="mt-1 text-sm text-earth">
              {music.artist ?? "A nossa trilha sonora"}
            </p>
          </div>
          <Heart className="h-5 w-5 shrink-0 fill-love text-love" />
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          disabled={!canControl}
          className="mt-6 block h-1.5 w-full rounded-full bg-earth/15 disabled:cursor-not-allowed"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          <span
            className="block h-full rounded-full bg-love transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </button>

        <div className="mt-3 flex items-center justify-between text-xs text-earth">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-6 text-coffee">
            <button
              type="button"
              onClick={() => skip(-10)}
              disabled={!canControl}
              className="disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Voltar 10 segundos"
            >
              <SkipBack className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={togglePlayback}
              disabled={!canControl}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-warm-white transition hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-55"
              aria-label={isPlaying ? "Pausar música" : "Tocar música"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              )}
            </button>
            <button
              type="button"
              onClick={() => skip(10)}
              disabled={!canControl}
              className="disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Avançar 10 segundos"
            >
              <SkipForward className="h-4 w-4" />
            </button>
          </div>
          <span>{formatTime(duration)}</span>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          disabled={!canControl}
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
          className="mt-6 inline-flex min-h-[42px] items-center justify-center rounded-full bg-love px-5 text-xs font-bold text-warm-white shadow-[0_14px_34px_rgba(178,58,58,0.2)] transition hover:bg-rose disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPlaying ? "Pausar" : "Ouvir agora"}
        </button>
      </div>
    </div>
  );
}
