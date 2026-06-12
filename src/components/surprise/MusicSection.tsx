import type { SurpriseMusic } from "@/features/surprises/surprise.types";
import { Container } from "../ui/Container";
import { InlineYouTubeMusicPlayer } from "./music/InlineYouTubeMusicPlayer";

export function MusicSection({ music }: { music: SurpriseMusic }) {
  return (
    <section id="music" className="relative bg-paper py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[310px_1fr] md:items-center">
          <div>
            {music.badge ? (
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-love">
                {music.badge}
              </p>
            ) : null}
            <h2 className="serif mt-4 max-w-xs text-4xl font-medium leading-tight text-coffee md:text-5xl">
              {music.title}
            </h2>
            {music.description ? (
              <p className="mt-5 max-w-xs text-sm leading-7 text-earth">
                {music.description}
              </p>
            ) : null}
          </div>

          <InlineYouTubeMusicPlayer music={music} />
        </div>
      </Container>
    </section>
  );
}

