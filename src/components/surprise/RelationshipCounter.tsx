"use client";

import { useEffect, useState } from "react";
import type { SurpriseContent } from "@/features/surprises/surprise.types";
import {
  calculateTimeTogether,
  type TimeTogether,
} from "@/lib/date/calculate-time-together";
import { Container } from "../ui/Container";

type Props = {
  startDate: string;
  counter: SurpriseContent["counter"];
};

export function RelationshipCounter({ startDate, counter }: Props) {
  const [time, setTime] = useState<TimeTogether>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setTime(calculateTimeTogether(startDate));
    }, 0);
    const interval = window.setInterval(() => {
      setTime(calculateTimeTogether(startDate));
    }, 1000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [startDate]);

  return (
    <section className="relative bg-paper py-14 md:py-20">
      <Container className="text-center">
        <div className="garden-counter-frame relative mx-auto max-w-6xl px-6 py-14 md:px-14 md:py-16">
          <RootOrnament className="absolute -top-8 left-1/2 hidden w-[420px] -translate-x-1/2 md:block" />
          <RootOrnament className="absolute -bottom-10 left-1/2 hidden w-[520px] -translate-x-1/2 rotate-180 md:block" />

          <h2 className="serif text-3xl font-medium text-coffee md:text-4xl">
            {counter.title}
          </h2>
          <div className="mx-auto mt-3 flex max-w-24 items-center justify-center gap-2 text-leaf">
            <span className="h-px flex-1 bg-leaf/35" />
            <span className="text-lg">❧</span>
            <span className="h-px flex-1 bg-leaf/35" />
          </div>
          <p className="sr-only">{counter.description}</p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            <CounterCard icon="🌿" label="dias juntos" value={time.days} />
            <CounterCard icon="🌹" label="horas de nós" value={time.hours} />
            <CounterCard icon="🍃" label="minutos de carinho" value={time.minutes} />
            <CounterCard icon="💗" label="segundos de amor" value={time.seconds} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CounterCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: number;
}) {
  return (
    <div className="min-w-0">
      <span className="block text-2xl" aria-hidden>
        {icon}
      </span>
      <strong className="serif mt-2 block text-4xl font-medium text-coffee md:text-5xl">
        {value.toLocaleString("pt-BR")}
      </strong>
      <span className="mt-2 block text-xs text-earth">{label}</span>
    </div>
  );
}

function RootOrnament({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 78" fill="none" aria-hidden>
      <path
        d="M8 42C79 33 121 49 180 37C236 25 277 27 333 39C396 53 450 41 512 34"
        stroke="#5B3A29"
        strokeOpacity="0.42"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M258 38C250 54 235 63 219 72M263 38C273 53 290 61 309 70M174 38C163 50 148 56 130 60M336 40C350 49 367 55 386 58"
        stroke="#5B3A29"
        strokeOpacity="0.3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M130 60C141 48 155 47 166 55C155 67 141 69 130 60Z"
        fill="#2F6B4F"
        fillOpacity="0.34"
      />
      <path
        d="M386 58C373 46 373 32 382 22C397 34 399 48 386 58Z"
        fill="#B23A3A"
        fillOpacity="0.32"
      />
    </svg>
  );
}
