import type { SurpriseMusic } from "@/features/surprises/surprise.types";
import { LinkButton } from "../../ui/Button";

export function ExternalMusicLink({ music }: { music: SurpriseMusic }) {
  return (
    <LinkButton
      href={music.url}
      target="_blank"
      rel="noreferrer"
      variant="primary"
      className="min-h-[42px] px-5 text-xs"
    >
      Ouvir agora
    </LinkButton>
  );
}
