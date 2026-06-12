import { buildYouTubeEmbedUrl } from "@/lib/music/build-youtube-embed-url";
import { extractYouTubeVideoId } from "@/lib/music/extract-youtube-video-id";

export function YouTubeMusicPlayer({ url, title }: { url: string; title: string }) {
  const videoId = extractYouTubeVideoId(url);

  if (!videoId) {
    return null;
  }

  return (
    <iframe
      className="mt-6 aspect-video w-full rounded-[24px] border-0"
      src={buildYouTubeEmbedUrl(videoId)}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
