import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 text-center text-coffee">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-leaf">
          Jardim de Nós
        </p>
        <h1 className="serif mt-4 text-4xl font-bold">Surpresa não encontrada</h1>
        <p className="mt-4 text-earth">
          Esse jardim pode ter sido movido ou ainda não está ativo.
        </p>
        <Link
          href="/s/eu-e-meu-amor"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-love px-6 text-sm font-semibold text-warm-white transition hover:bg-rose"
        >
          Abrir exemplo local
        </Link>
      </div>
    </main>
  );
}
