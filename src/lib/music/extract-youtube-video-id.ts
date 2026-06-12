export function extractYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("music.youtube.com")
    ) {
      return parsed.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}
