import type { SurpriseMusic } from "@/features/surprises/surprise.types";

const validSpotifyTypes = new Set([
  "track",
  "album",
  "playlist",
  "episode",
  "show",
  "artist",
]);

export function extractSpotifyResource(music: SurpriseMusic) {
  if (music.spotifyType && music.resourceId) {
    return { type: music.spotifyType, id: music.resourceId };
  }

  try {
    const parsed = new URL(music.url);
    const [, type, id] = parsed.pathname.split("/");

    if (!validSpotifyTypes.has(type) || !id) {
      return null;
    }

    return {
      type: type as NonNullable<SurpriseMusic["spotifyType"]>,
      id,
    };
  } catch {
    return null;
  }
}
