import type { SurpriseContent } from "@/features/surprises/surprise.types";
import { Container } from "../ui/Container";

export function LoveLetterSection({
  letter,
}: {
  letter: SurpriseContent["letter"];
}) {
  const stanzas = letter.message.split("\n\n");

  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-forest py-20 text-warm-white md:py-24"
    >
      <div
        className="absolute left-[24%] top-0 hidden h-full w-[260px] opacity-45 md:block"
        aria-hidden
      >
        <svg viewBox="0 0 260 520" className="h-full w-full" fill="none">
          <path
            d="M150 0C126 84 177 136 123 214C75 283 122 358 69 432C49 459 35 487 27 520"
            stroke="#E8D3B0"
            strokeOpacity="0.35"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M121 215C91 220 60 236 33 264M69 432C103 420 132 399 154 368"
            stroke="#E8D3B0"
            strokeOpacity="0.25"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="serif text-4xl font-medium leading-tight md:text-5xl">
              {letter.title}
            </h2>
            <p className="mt-5 max-w-[310px] text-sm leading-7 text-warm-white/75">
              Escrevi com o coração, acho que você já tá farta das minhas
              breguices, mas eu não consigo evitar, é maior que eu KKKKK.
            </p>
            <a
              href="#music"
              className="mt-8 inline-flex min-h-12 items-center border border-sand/45 px-6 text-sm font-semibold text-sand transition hover:bg-sand/10"
            >
              Ler minha carta <span className="ml-4" aria-hidden>❧</span>
            </a>
          </div>

          <article className="letter-paper relative mx-auto w-full max-w-[760px] px-8 py-10 text-coffee shadow-[0_28px_70px_rgba(0,0,0,0.22)] md:px-16 md:py-14">
            <p className="serif text-4xl leading-none text-love/45">“</p>
            <div className="mt-4 max-w-[560px] space-y-6">
              {stanzas.map((stanza) => (
                <p
                  key={stanza}
                  className="whitespace-pre-line text-sm leading-8 text-coffee md:text-base"
                >
                  {stanza}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold text-earth">
              {letter.signature}
            </p>
            <div
              className="absolute bottom-7 right-8 hidden text-6xl text-love/45 md:block"
              aria-hidden
            >
              🌹
            </div>
            <div
              className="absolute bottom-7 right-7 h-14 w-14 rounded-full bg-love/85 shadow-[inset_0_0_0_6px_rgba(255,253,248,0.15),0_8px_20px_rgba(91,58,41,0.25)]"
              aria-hidden
            />
          </article>
        </div>
      </Container>
    </section>
  );
}

