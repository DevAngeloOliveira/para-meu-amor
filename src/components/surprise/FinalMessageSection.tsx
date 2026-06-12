import type { SurpriseContent } from "@/features/surprises/surprise.types";
import { Container } from "../ui/Container";

export function FinalMessageSection({
  finalMessage,
}: {
  finalMessage: SurpriseContent["finalMessage"];
}) {
  return (
    <section
      id="forever"
      className="relative overflow-hidden py-20 text-center text-warm-white md:min-h-[577px] md:py-[104px]"
      style={{
        background:
          "radial-gradient(circle at 30% 0%, rgba(47,107,79,0.42), transparent 28rem), radial-gradient(circle at 78% 48%, rgba(178,58,58,0.36), transparent 24rem), linear-gradient(100deg, #123823 0%, #1f170f 70%, #28140e 100%)",
      }}
    >
      <div
        className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-warm-white/10"
        aria-hidden
      />
      <Container>
        <div className="mx-auto mb-8 h-28 w-28 text-7xl" aria-hidden>
          🌹
        </div>
        <span className="inline-flex min-h-[28px] items-center rounded-full border border-warm-white/10 bg-warm-white/10 px-3 text-[10px] font-semibold text-warm-white/75 shadow-none">
          {finalMessage.badge}
        </span>
        <h2 className="serif mt-7 text-4xl font-semibold md:text-6xl">
          {finalMessage.title}
        </h2>
        <p className="serif mx-auto mt-8 max-w-6xl text-3xl font-medium leading-tight text-warm-white/88 md:text-5xl">
          {finalMessage.message}
        </p>
        <p className="mt-9 font-[cursive] text-3xl text-[#eaa0a0]">
          Feliz Dia dos Namorados
        </p>
      </Container>
    </section>
  );
}
