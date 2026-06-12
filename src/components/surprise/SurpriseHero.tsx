"use client";

import { Music2 } from "lucide-react";
import type { SurpriseContent } from "@/features/surprises/surprise.types";

type Props = {
  hero: SurpriseContent["hero"];
  coupleName: string;
};

const navItems = [
  { label: "Nossa História", target: "timeline" },
  { label: "Momentos", target: "gallery" },
  { label: "Carta", target: "letter" },
  { label: "Linha do Tempo", target: "timeline" },
  { label: "Para Sempre", target: "forever" },
];

export function SurpriseHero({ hero, coupleName }: Props) {
  function scrollTo(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="relative isolate min-h-[760px] overflow-hidden text-warm-white md:min-h-[820px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(6,21,14,0.96) 0%, rgba(6,21,14,0.84) 29%, rgba(6,21,14,0.34) 57%, rgba(6,21,14,0.12) 100%), url('/media/eu-meu-amor/photo-08.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,13,0.08),rgba(7,18,13,0.28)_76%,#fff4e6_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,#fff4e6)]" />
      <div className="hero-rose hero-rose-left" aria-hidden />
      <div className="hero-rose hero-rose-right" aria-hidden />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7">
        <button
          type="button"
          onClick={() => scrollTo("top")}
          className="flex items-center gap-2 text-sm font-semibold text-warm-white/90"
        >
          <span className="text-lg">🌹</span>
          Jardim de Nós
        </button>
        <nav className="hidden items-center gap-7 text-xs font-semibold text-warm-white/82 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollTo(item.target)}
              className="transition hover:text-sand"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("music")}
            className="rounded-full border border-warm-white/20 p-2 text-sand transition hover:border-sand"
            aria-label="Ir para música"
          >
            <Music2 className="h-4 w-4" />
          </button>
        </nav>
      </header>

      <div
        id="top"
        className="relative z-10 mx-auto flex min-h-[630px] w-full max-w-7xl items-center px-6 pb-24 pt-8"
      >
        <div className="max-w-[590px]">
          <h1 className="serif text-[4.5rem] font-bold leading-[0.84] tracking-normal text-warm-white sm:text-[6.25rem] md:text-[7.7rem]">
            Jardim
            <span className="block">
              de <span className="text-[#eaa0a0]">Nós</span>
            </span>
          </h1>
          <p className="mt-9 max-w-[360px] text-xl leading-8 text-warm-white/88">
            {hero.subtitle}
          </p>
          <p className="mt-8 text-base font-bold text-warm-white">
            Feliz Dia dos Namorados <span aria-hidden>🌹</span>
          </p>
          <p className="serif mt-8 text-2xl font-semibold text-sand">
            {coupleName}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollTo("letter")}
              className="inline-flex min-h-12 items-center justify-center border border-sand/55 bg-sand/10 px-6 text-sm font-semibold text-warm-white transition hover:bg-sand/18"
            >
              {hero.primaryActionLabel}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("gallery")}
              className="inline-flex min-h-12 items-center justify-center border border-warm-white/18 bg-warm-white/8 px-6 text-sm font-semibold text-warm-white transition hover:bg-warm-white/14"
            >
              {hero.secondaryActionLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

