"use client";

import type { Surprise } from "@/features/surprises/surprise.types";
import { FinalMessageSection } from "./FinalMessageSection";
import { LoveLetterSection } from "./LoveLetterSection";
import { MusicSection } from "./MusicSection";
import { NatureSpell } from "./NatureSpell";
import { PhotoGallery } from "./PhotoGallery";
import { RelationshipCounter } from "./RelationshipCounter";
import { SurpriseFooter } from "./SurpriseFooter";
import { SurpriseHero } from "./SurpriseHero";
import { TimelineSection } from "./TimelineSection";

export function SurpriseLandingPage({ surprise }: { surprise: Surprise }) {
  const { content } = surprise;

  return (
    <main className="garden-shell relative min-h-screen overflow-hidden text-coffee">
      <NatureSpell />
      <SurpriseHero hero={content.hero} coupleName={content.coupleName} />

      {content.settings.showCounter ? (
        <RelationshipCounter
          counter={content.counter}
          startDate={content.relationshipStartDate}
        />
      ) : null}

      <LoveLetterSection letter={content.letter} />

      {content.settings.showGallery ? (
        <PhotoGallery gallery={content.gallery} />
      ) : null}

      {content.settings.showMusic ? (
        <MusicSection music={content.music} />
      ) : null}

      {content.settings.showTimeline ? (
        <TimelineSection timeline={content.timeline} />
      ) : null}

      {content.settings.showFinalMessage ? (
        <FinalMessageSection finalMessage={content.finalMessage} />
      ) : null}

      <SurpriseFooter />
    </main>
  );
}
