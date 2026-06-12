import { Heart, Pause, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";
import musicCoverPhoto from "../../../public/media/eu-meu-amor/photo-08.png";
import type { SurpriseMusic } from "@/features/surprises/surprise.types";
import { Container } from "../ui/Container";
import { ExternalMusicLink } from "./music/ExternalMusicLink";

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

          <div className="music-player-shell">
            <Image
              src={musicCoverPhoto}
              alt=""
              className="h-28 w-28 shrink-0 object-cover"
              sizes="112px"
            />
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
              <div className="mt-6 h-1.5 rounded-full bg-earth/15">
                <div className="h-full w-[42%] rounded-full bg-love" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-earth">
                <span>1:32</span>
                <div className="flex items-center gap-6 text-coffee">
                  <SkipBack className="h-4 w-4" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-warm-white">
                    <Pause className="h-4 w-4 fill-current" />
                  </span>
                  <SkipForward className="h-4 w-4" />
                </div>
                <span>4:18</span>
              </div>

              <div className="mt-6">
                <ExternalMusicLink music={music} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
