import type { SurpriseMusic } from "@/features/surprises/surprise.types";
import { buildSpotifyEmbedUrl } from "@/lib/music/build-spotify-embed-url";
import { extractSpotifyResource } from "@/lib/music/extract-spotify-resource";

export function SpotifyPlayer({ music }: { music: SurpriseMusic }) {
  const resource = extractSpotifyResource(music);

  if (!resource) {
    return null;
  }

  return (
    <iframe
      className="mt-6 h-[152px] w-full rounded-[24px] border-0"
      src={buildSpotifyEmbedUrl(resource.type, resource.id)}
      title={music.name ?? "Spotify player"}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
