import type { SurpriseMusic } from "@/features/surprises/surprise.types";

export function ExternalMusicLink({ music }: { music: SurpriseMusic }) {
  return (
    <a
      href={music.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-love px-5 text-xs font-bold text-warm-white shadow-[0_14px_34px_rgba(178,58,58,0.2)] transition hover:bg-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-love"
    >
      Ouvir agora
    </a>
  );
}
